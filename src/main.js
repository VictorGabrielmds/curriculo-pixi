import * as THREE from 'three';
import { perfil, zonas } from './data.js';

// ---------- constantes ----------
const R = 5; // raio do planeta
const K = 6.5 / R; // os raios em rad foram pensados para R=6,5; K corrige para o tamanho atual
const VEL = 0.7; // rad/s caminhando (3,5 unidades/s)
const ALCANCE = 0.42 * K; // rad (do personagem até a estação) para abrir o painel
const RAIO_ESTACAO = 0.27 * K; // rad que o personagem não consegue atravessar
const CIMA = new THREE.Vector3(0, 1, 0); // onde o personagem pisa (topo do planeta)

// onde cada estação fica no planeta: [leste-oeste, norte-sul] em radianos; norte = para o fundo da tela
const POSICOES = [[0.8, 0.0], [1.8, 0.7], [-0.5, 0.9], [-1.45, 0.45], [-1.0, -0.6]];
function posicaoZona(i) {
  const [lon, lat] = POSICOES[i] ?? [i * 2.4, (((i * 0.37) % 1) - 0.5) * 1.6]; // zonas extras: espalha em espiral
  return new THREE.Vector3(Math.sin(lon) * Math.cos(lat), Math.cos(lon) * Math.cos(lat), -Math.sin(lat));
}
const dirsZonas = zonas.map((_, i) => posicaoZona(i));

const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
const damp = (a, b, k, dt) => lerp(a, b, 1 - Math.exp(-k * dt)); // suavização independente do fps

function semente(a) {
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ruído de valor 3D (suficiente para continentes)
function hash(x, y, z) {
  const s = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453;
  return s - Math.floor(s);
}
function ruido(x, y, z) {
  const ix = Math.floor(x), iy = Math.floor(y), iz = Math.floor(z);
  const fx = x - ix, fy = y - iy, fz = z - iz;
  const u = (t) => t * t * (3 - 2 * t);
  const ux = u(fx), uy = u(fy), uz = u(fz);
  let r = 0;
  for (let dx = 0; dx < 2; dx++) for (let dy = 0; dy < 2; dy++) for (let dz = 0; dz < 2; dz++) {
    const w = (dx ? ux : 1 - ux) * (dy ? uy : 1 - uy) * (dz ? uz : 1 - uz);
    r += w * hash(ix + dx, iy + dy, iz + dz);
  }
  return r;
}
const COS_BONUS = Math.cos(0.5);
function altura(p) {
  // p: ponto na esfera unitária; o ponto de partida e as estações ficam sempre em terra firme
  const n = ruido(p.x * 2.2 + 5, p.y * 2.2 + 5, p.z * 2.2 + 5) * 0.68
    + ruido(p.x * 4.3 + 9, p.y * 4.3 + 9, p.z * 4.3 + 9) * 0.26
    + ruido(p.x * 8.1, p.y * 8.1, p.z * 8.1) * 0.06;
  let bonus = 0;
  if (p.y > COS_BONUS) bonus = 1 - Math.acos(Math.min(1, p.y)) / 0.5;
  for (const d of dirsZonas) {
    const c = p.dot(d);
    if (c > COS_BONUS) bonus = Math.max(bonus, 1 - Math.acos(Math.min(1, c)) / 0.5);
  }
  return n + 0.6 * bonus;
}
const NIVEL_MAR = 0.5; // menor = mais terra

// ---------- cena ----------
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0b1026);
const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 200);

scene.add(new THREE.HemisphereLight(0xbcd0ff, 0x241c4d, 1.15));
const sol = new THREE.DirectionalLight(0xfff0d4, 2.6);
sol.position.set(7, R + 9, 9);
sol.target.position.set(0, 2, 0);
sol.castShadow = true;
sol.shadow.mapSize.set(2048, 2048);
Object.assign(sol.shadow.camera, { left: -8, right: 8, top: 8, bottom: -8, near: 1, far: 50 });
sol.shadow.bias = -0.0004;
scene.add(sol, sol.target);

// céu: estrelas e lua
{
  const rnd = semente(3);
  const pos = [];
  for (let i = 0; i < 900; i++) {
    const v = new THREE.Vector3(rnd() - 0.5, rnd() - 0.5, rnd() - 0.5).normalize().multiplyScalar(90);
    pos.push(v.x, v.y, v.z);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  scene.add(new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffffff, size: 0.55, sizeAttenuation: true, fog: false })));
  const lua = new THREE.Mesh(
    new THREE.SphereGeometry(4, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0xfff1c9, fog: false }),
  );
  lua.position.set(24, 16, -62);
  scene.add(lua);
}

// ---------- planeta ----------
const planeta = new THREE.Group();
scene.add(planeta);

{
  // a altura do terreno vai para uma textura (cubo desdobrado em 6 faces) e o shader a lê por pixel:
  // o litoral fica nítido em qualquer zoom, sem depender da quantidade de triângulos
  const N = 320, P = 2, M = N + 2 * P; // N texels por face + borda de P para não aparecer emenda
  const dados = new Uint16Array(3 * M * 2 * M * 4);
  const FACES = [(u, v) => [1, v, -u], (u, v) => [-1, v, u], (u, v) => [u, 1, -v], (u, v) => [u, -1, v], (u, v) => [u, v, 1], (u, v) => [-u, v, -1]];
  const p = new THREE.Vector3();
  const um = THREE.DataUtils.toHalfFloat(1);
  for (let f = 0; f < 6; f++) {
    const cx = (f % 3) * M, cy = Math.floor(f / 3) * M;
    for (let j = 0; j < M; j++) {
      const v = ((j + 0.5 - P) / N) * 2 - 1;
      for (let i = 0; i < M; i++) {
        const u = ((i + 0.5 - P) / N) * 2 - 1;
        const [x, y, z] = FACES[f](u, v);
        p.set(x, y, z).normalize();
        const idx = ((cy + j) * 3 * M + cx + i) * 4;
        dados[idx] = THREE.DataUtils.toHalfFloat(altura(p));
        dados[idx + 3] = um;
      }
    }
  }
  const tex = new THREE.DataTexture(dados, 3 * M, 2 * M, THREE.RGBAFormat, THREE.HalfFloatType);
  tex.minFilter = tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;

  const material = new THREE.MeshStandardMaterial({ roughness: 0.9 });
  material.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, {
      uAltura: { value: tex }, uN: { value: N }, uP: { value: P }, uM: { value: M }, uNivel: { value: NIVEL_MAR },
      uMarRaso: { value: new THREE.Color(0x56c2ee) }, uMarMedio: { value: new THREE.Color(0x2f7fdc) }, uMarFundo: { value: new THREE.Color(0x1d56b8) }, uEspuma: { value: new THREE.Color(0xd4f1fc) },
      uAreia: { value: new THREE.Color(0xf3dda3) }, uGrama0: { value: new THREE.Color(0x6fcf6a) }, uGrama1: { value: new THREE.Color(0x4cb760) }, uGrama2: { value: new THREE.Color(0x2f9055) },
    });
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vObj;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvObj = position;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec3 vObj;
        uniform sampler2D uAltura; uniform float uN, uP, uM, uNivel;
        uniform vec3 uMarRaso, uMarMedio, uMarFundo, uEspuma, uAreia, uGrama0, uGrama1, uGrama2;
        float hash31(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
        float vnoise(vec3 x) {
          vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(mix(hash31(i), hash31(i + vec3(1, 0, 0)), f.x), mix(hash31(i + vec3(0, 1, 0)), hash31(i + vec3(1, 1, 0)), f.x), f.y),
                     mix(mix(hash31(i + vec3(0, 0, 1)), hash31(i + vec3(1, 0, 1)), f.x), mix(hash31(i + vec3(0, 1, 1)), hash31(i + vec3(1, 1, 1)), f.x), f.y), f.z);
        }
        float alturaTex(vec3 d) {
          vec3 a = abs(d); float m, u, v, face;
          if (a.x >= a.y && a.x >= a.z) { m = a.x; if (d.x > 0.0) { face = 0.0; u = -d.z; v = d.y; } else { face = 1.0; u = d.z; v = d.y; } }
          else if (a.y >= a.z) { m = a.y; if (d.y > 0.0) { face = 2.0; u = d.x; v = -d.z; } else { face = 3.0; u = d.x; v = d.z; } }
          else { m = a.z; if (d.z > 0.0) { face = 4.0; u = d.x; v = d.y; } else { face = 5.0; u = -d.x; v = d.y; } }
          vec2 px = (vec2(u, v) / m * 0.5 + 0.5) * uN + uP;
          vec2 cel = vec2(mod(face, 3.0), floor(face / 3.0));
          return texture2D(uAltura, (cel * uM + px) / vec2(3.0 * uM, 2.0 * uM)).r;
        }
        // degrau com borda de 1 pixel (sem serrilhado)
        float degrau(float x, float w) { return smoothstep(-w, w, x); }
        vec3 corTerreno(vec3 d) {
          // detalhe fino do litoral calculado por pixel: a costa fica recortada em qualquer zoom
          float h = alturaTex(d) + (vnoise(d * 26.0) - 0.5) * 0.04 + (vnoise(d * 60.0) - 0.5) * 0.016;
          float c = h - uNivel;
          float w = fwidth(h) * 0.9 + 1e-5;
          // água em faixas (fundo, médio, raso) e espuma na beira
          vec3 agua = mix(uMarFundo, uMarMedio, degrau(c + 0.2, w));
          agua = mix(agua, uMarRaso, degrau(c + 0.07, w));
          agua = mix(agua, uEspuma, degrau(c + 0.014, w * 0.6));
          // terra: areia, grama em duas tonalidades (manchas) e mata mais escura nas partes altas
          float mancha = degrau(vnoise(d * 11.0) + 0.4 * vnoise(d * 29.0) - 0.7, w * 6.0);
          vec3 grama = mix(uGrama0, uGrama1, mancha);
          grama = mix(grama, uGrama2, degrau(c - 0.5, w * 2.0));
          vec3 terra = mix(uAreia, grama, degrau(c - 0.03, w));
          vec3 col = mix(agua, terra, degrau(c, w));
          float fino = vnoise(d * 120.0);
          return col * (0.95 + 0.1 * fino);
        }`)
      .replace('#include <color_fragment>', '#include <color_fragment>\ndiffuseColor.rgb = corTerreno(normalize(vObj));');
  };
  const m = new THREE.Mesh(new THREE.SphereGeometry(R, 128, 96), material);
  m.receiveShadow = true;
  planeta.add(m);

  // atmosfera (brilho azul por fora)
  const atm = new THREE.Mesh(
    new THREE.SphereGeometry(R * 1.06, 48, 48),
    new THREE.MeshBasicMaterial({ color: 0x6aa8ff, transparent: true, opacity: 0.1, side: THREE.BackSide, depthWrite: false }),
  );
  scene.add(atm);
}

// coloca um filho "em pé" sobre a superfície, na direção dir (unitária)
function fincar(obj, dir, giro = 0) {
  const piv = new THREE.Group();
  piv.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
  obj.position.y = R;
  obj.rotation.y = giro;
  piv.add(obj);
  planeta.add(piv);
  return piv;
}
const mat = (cor, extra = {}) => new THREE.MeshStandardMaterial({ color: cor, roughness: 0.8, flatShading: true, ...extra });
function sombrear(g) {
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return g;
}

// obstáculos que o personagem não atravessa (direção no referencial do planeta + raio em rad)
const obstaculos = [];

// árvores, pedras e nuvens
{
  const rnd = semente(77);
  const dir = new THREE.Vector3();
  const sorteio = () => {
    for (let t = 0; t < 40; t++) {
      dir.set(rnd() - 0.5, rnd() - 0.5, rnd() - 0.5).normalize();
      if (dir.angleTo(CIMA) < 0.3 * K) continue; // deixa livre a área de partida
      if (dirsZonas.some((d) => dir.angleTo(d) < 0.38 * K)) continue; // e o entorno das estações
      if (altura(dir) < NIVEL_MAR + 0.05) continue; // só em terra
      return dir.clone();
    }
    return null;
  };
  for (let i = 0; i < 55; i++) {
    const d = sorteio();
    if (!d) continue;
    const t = new THREE.Group();
    const s = 0.5 + rnd() * 0.45;
    const tronco = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.14, 0.6, 6), mat(0x7a4a2b));
    tronco.position.y = 0.3;
    const copa = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1.2, 7), mat(rnd() > 0.5 ? 0x2f9e5c : 0x258a4e));
    copa.position.y = 1.1;
    const copa2 = new THREE.Mesh(new THREE.ConeGeometry(0.38, 0.9, 7), mat(0x34b068));
    copa2.position.y = 1.7;
    t.add(tronco, copa, copa2);
    t.scale.setScalar(s);
    fincar(sombrear(t), d, rnd() * 6);
    obstaculos.push({ d, r: (0.05 * s + 0.02) * K });
  }
  for (let i = 0; i < 28; i++) {
    const d = sorteio();
    if (!d) continue;
    const p = new THREE.Mesh(new THREE.DodecahedronGeometry(0.22 + rnd() * 0.25, 0), mat(0x8d93a8));
    p.position.y = 0.1;
    const g = new THREE.Group();
    g.add(p);
    fincar(sombrear(g), d, rnd() * 6);
    obstaculos.push({ d, r: 0.045 * K, baixo: true });
  }
}

// nuvens ficam no céu (não giram com o planeta), só atrás dele, balançando devagar
const nuvens = new THREE.Group();
scene.add(nuvens);
{
  const rnd = semente(5);
  const m = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, flatShading: true, transparent: true, opacity: 0.95 });
  for (let i = 0; i < 10; i++) {
    const d = new THREE.Vector3(rnd() - 0.5, rnd() - 0.5, rnd() - 0.5).normalize();
    d.z = -Math.abs(d.z) - 0.6; // só atrás do planeta, para não tapar o personagem
    d.y = Math.abs(d.y);
    d.x = (d.x < 0 ? -1 : 1) * (0.55 + Math.abs(d.x)); // só nas laterais, longe do personagem
    d.normalize();
    const n = new THREE.Group();
    for (let k = 0; k < 4; k++) {
      const b = new THREE.Mesh(new THREE.IcosahedronGeometry(0.45 + rnd() * 0.4, 1), m);
      b.position.set((k - 1.5) * 0.6, rnd() * 0.25, (rnd() - 0.5) * 0.5);
      n.add(b);
    }
    n.position.y = R + 4 + rnd() * 2.5;
    const piv = new THREE.Group();
    piv.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d);
    piv.add(n);
    nuvens.add(piv);
    sombrear(n);
  }
}

// ---------- estações ----------
function rotulo(texto) {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 128;
  const x = c.getContext('2d');
  x.font = '800 54px system-ui, sans-serif';
  x.textAlign = 'center'; x.textBaseline = 'middle';
  x.lineJoin = 'round'; x.lineWidth = 10; x.strokeStyle = 'rgba(8,10,30,.85)';
  x.strokeText(texto, 256, 64);
  x.fillStyle = '#fff';
  x.fillText(texto, 256, 64);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false })); // com teste de profundidade: o planeta esconde os rótulos do outro lado
  s.scale.set(3.2, 0.8, 1);
  s.renderOrder = 10;
  return s;
}

function estrelaForma(raio) {
  const sh = new THREE.Shape();
  for (let i = 0; i < 10; i++) {
    const a = (Math.PI / 5) * i + Math.PI / 2;
    const r = i % 2 === 0 ? raio : raio * 0.45;
    sh[i === 0 ? 'moveTo' : 'lineTo'](Math.cos(a) * r, Math.sin(a) * r);
  }
  return sh;
}

function modelo(tipo, cor) {
  const g = new THREE.Group();
  const claro = mat(cor, { emissive: cor, emissiveIntensity: 0.12 });
  const escuro = mat(new THREE.Color(cor).multiplyScalar(0.55));
  const luz = new THREE.MeshStandardMaterial({ color: 0xfff6c8, emissive: 0xffe9a0, emissiveIntensity: 1.2 });
  const add = (geo, m, x = 0, y = 0, z = 0) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); g.add(o); return o; };
  switch (tipo) {
    case 'casa':
      add(new THREE.BoxGeometry(2, 1.4, 1.7), claro, 0, 0.7);
      add(new THREE.ConeGeometry(1.75, 1, 4), escuro, 0, 1.9).rotation.y = Math.PI / 4;
      add(new THREE.BoxGeometry(0.45, 0.8, 0.1), escuro, 0, 0.4, 0.86);
      add(new THREE.BoxGeometry(0.4, 0.4, 0.1), luz, -0.65, 0.85, 0.86);
      add(new THREE.BoxGeometry(0.4, 0.4, 0.1), luz, 0.65, 0.85, 0.86);
      add(new THREE.BoxGeometry(0.3, 0.7, 0.3), escuro, 0.6, 2.2, -0.2);
      break;
    case 'predio':
      add(new THREE.BoxGeometry(1.7, 3.4, 1.7), claro, 0, 1.7);
      add(new THREE.BoxGeometry(1.9, 0.2, 1.9), escuro, 0, 3.45);
      for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) {
        add(new THREE.BoxGeometry(0.28, 0.4, 0.06), (r + c) % 3 ? luz : escuro, -0.5 + c * 0.5, 0.9 + r * 0.7, 0.86);
      }
      add(new THREE.BoxGeometry(0.5, 0.7, 0.1), escuro, 0, 0.35, 0.86);
      break;
    case 'foguete':
      add(new THREE.CylinderGeometry(0.55, 0.62, 2.4, 14), mat(0xf3f4fb), 0, 1.9);
      add(new THREE.ConeGeometry(0.55, 1, 14), claro, 0, 3.6);
      add(new THREE.SphereGeometry(0.28, 12, 12), mat(0x4aa8ff, { emissive: 0x2c78d0, emissiveIntensity: 0.6 }), 0, 2.4, 0.5);
      for (let i = 0; i < 3; i++) {
        const f = add(new THREE.BoxGeometry(0.08, 0.9, 0.7), claro, 0, 1, 0);
        const piv = new THREE.Group();
        piv.rotation.y = (i / 3) * Math.PI * 2;
        f.position.set(0.62, 1, 0);
        f.parent.remove(f); piv.add(f); g.add(piv);
      }
      add(new THREE.ConeGeometry(0.35, 0.9, 10), mat(0xffb02e, { emissive: 0xff7a1a, emissiveIntensity: 1 }), 0, 0.45).rotation.x = Math.PI;
      break;
    case 'estrela': {
      add(new THREE.CylinderGeometry(0.08, 0.12, 2, 8), escuro, 0, 1);
      const e = add(new THREE.ExtrudeGeometry(estrelaForma(1.1), { depth: 0.35, bevelEnabled: true, bevelSize: 0.08, bevelThickness: 0.08, bevelSegments: 1 }), mat(cor, { emissive: cor, emissiveIntensity: 0.55 }), 0, 3.1, -0.17);
      e.name = 'gira';
      break;
    }
    case 'carta':
      add(new THREE.CylinderGeometry(0.1, 0.14, 1.1, 8), escuro, 0, 0.55);
      add(new THREE.BoxGeometry(2.2, 1.4, 0.35), claro, 0, 1.75);
      {
        const sh = new THREE.Shape();
        sh.moveTo(-1.1, 0.7); sh.lineTo(1.1, 0.7); sh.lineTo(0, -0.1); sh.closePath();
        const tampa = new THREE.Mesh(new THREE.ExtrudeGeometry(sh, { depth: 0.06, bevelEnabled: false }), escuro);
        tampa.position.set(0, 1.75, 0.18);
        g.add(tampa);
      }
      add(new THREE.SphereGeometry(0.17, 12, 12), mat(0xff3b5c, { emissive: 0xff3b5c, emissiveIntensity: 0.5 }), 0, 1.7, 0.3);
      break;
  }
  return g;
}

const estacoes = zonas.map((z, i) => {
  const raiz = new THREE.Group();
  const base = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.75, 0.14, 24), mat(new THREE.Color(z.cor).multiplyScalar(0.5)));
  base.position.y = 0.04;
  const anel = new THREE.Mesh(
    new THREE.TorusGeometry(1.95, 0.07, 8, 48),
    new THREE.MeshBasicMaterial({ color: z.cor, transparent: true, opacity: 0 }),
  );
  anel.rotation.x = Math.PI / 2;
  anel.position.y = 0.1;
  const icone = modelo(z.icone, z.cor);
  icone.position.y = 0.1;
  const rot = rotulo(z.id.toUpperCase());
  rot.position.y = 4.8;
  raiz.add(base, anel, icone, rot);
  sombrear(raiz);
  base.castShadow = false;
  raiz.scale.setScalar(0.8);
  fincar(raiz, dirsZonas[i], 0);
  return { raiz, anel, icone, rot, gira: icone.getObjectByName('gira') };
});

// ---------- personagem (sprite 2D, 4 direções) ----------
// quadros em public/avatar/<animação>-<direção>-<n>.png (84x182, pés na linha y=168)
const FRAMES = { parado: 4, andar: 5, correr: 5, pular: 5 };
const DIRECOES = ['direita', 'esquerda', 'norte', 'sul']; // norte = de costas (fundo da tela), sul = de frente
const FRAME_W = 84, FRAME_H = 182, FRAME_PES_Y = 168;
const carregador = new THREE.TextureLoader();
const quadros = {};
for (const [anim, n] of Object.entries(FRAMES)) {
  quadros[anim] = {};
  for (const dir of DIRECOES) {
    quadros[anim][dir] = Array.from({ length: n }, (_, i) => {
      const tex = carregador.load(`${import.meta.env.BASE_URL}avatar/${anim}-${dir}-${i}.png`);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 8;
      return new THREE.SpriteMaterial({ map: tex, transparent: true, toneMapped: false });
    });
  }
}
const ALTURA_BONECO = 3.6;
const LARGURA_BONECO = ALTURA_BONECO * (FRAME_W / FRAME_H);
const boneco = new THREE.Sprite(quadros.parado.sul[0]);
boneco.center.set(0.5, (FRAME_H - FRAME_PES_Y) / FRAME_H); // pés na base do sprite
boneco.scale.set(LARGURA_BONECO, ALTURA_BONECO, 1);
boneco.position.y = R;
scene.add(boneco);

// sombra macia sob os pés
const sombraBoneco = (() => {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const x = c.getContext('2d');
  const g = x.createRadialGradient(32, 32, 2, 32, 32, 30);
  g.addColorStop(0, 'rgba(0,0,0,0.85)');
  g.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = g;
  x.fillRect(0, 0, 64, 64);
  const m = new THREE.Mesh(
    new THREE.PlaneGeometry(1.7, 1.7),
    new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), transparent: true, opacity: 0.55, depthWrite: false }),
  );
  m.rotation.x = -Math.PI / 2;
  m.position.y = R + 0.04;
  scene.add(m);
  return m;
})();

// ---------- interface (DOM) ----------
const $ = (s) => document.querySelector(s);
$('#nome').textContent = `${perfil.nome} · ${perfil.titulo}`;
const pontosEl = $('#pontos');
zonas.forEach((z) => {
  const i = document.createElement('i');
  i.style.setProperty('--c', '#' + z.cor.toString(16).padStart(6, '0'));
  pontosEl.appendChild(i);
});
const painel = $('#painel');
let painelAtivo = -2;
function mostrarPainel(i) {
  if (i === painelAtivo) return;
  painelAtivo = i;
  if (i < 0) { painel.classList.remove('on'); } else {
    const z = zonas[i];
    painel.style.setProperty('--c', '#' + z.cor.toString(16).padStart(6, '0'));
    painel.querySelector('h2').textContent = z.titulo;
    const t = $('#texto');
    t.replaceChildren(...z.linhas.map((l) => Object.assign(document.createElement('p'), { textContent: l })));
    painel.classList.add('on');
  }
  [...pontosEl.children].forEach((d, k) => d.classList.toggle('on', k === i));
}

// ---------- entrada ----------
const teclas = new Set();
window.addEventListener('keydown', (e) => {
  teclas.add(e.code);
  if (e.code === 'Space' || e.code.startsWith('Arrow')) e.preventDefault();
});
window.addEventListener('keyup', (e) => teclas.delete(e.code));
window.addEventListener('blur', () => teclas.clear());

// arrastar o dedo anda (joystick virtual); toque rápido pula
const toque = { x: 0, y: 0, pulo: false };
const ponteiros = new Map();
function atualizarToque() {
  toque.x = 0; toque.y = 0;
  const p = ponteiros.values().next().value;
  if (!p) return;
  const dx = p.x - p.ox, dy = p.y - p.oy, len = Math.hypot(dx, dy);
  if (len > 14) {
    const k = Math.min(len, 70) / 70 / len;
    toque.x = dx * k;
    toque.y = -dy * k;
  }
}
const cv = renderer.domElement;
cv.addEventListener('pointerdown', (e) => {
  ponteiros.set(e.pointerId, { ox: e.clientX, oy: e.clientY, x: e.clientX, y: e.clientY, t0: performance.now() });
  atualizarToque();
});
cv.addEventListener('pointermove', (e) => {
  const p = ponteiros.get(e.pointerId);
  if (p) { p.x = e.clientX; p.y = e.clientY; atualizarToque(); }
});
for (const ev of ['pointerup', 'pointercancel', 'pointerleave']) {
  cv.addEventListener(ev, (e) => {
    const p = ponteiros.get(e.pointerId);
    if (p && ev === 'pointerup' && performance.now() - p.t0 < 220 && Math.hypot(p.x - p.ox, p.y - p.oy) < 14) {
      toque.pulo = true;
      setTimeout(() => { toque.pulo = false; }, 120);
    }
    ponteiros.delete(e.pointerId);
    atualizarToque();
  });
}

// ---------- câmera ----------
function ajustar() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setSize(w, h);
  camera.aspect = w / h;
  // em tela estreita afasta a câmera para o planeta continuar inteiro
  camera.userData.afasta = 1 / clamp(camera.aspect / 1.1, 0.5, 1);
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', ajustar);
ajustar();

// ---------- estado ----------
// o personagem fica parado no topo do planeta; quem se mexe é o planeta (orientação q)
const q = planeta.quaternion;
// ?zona=2 abre direto na estação 2 (link para compartilhar uma parte do currículo)
const zonaParam = new URLSearchParams(location.search).get('zona');
if (zonaParam !== null) {
  const i = clamp(Math.round(Number(zonaParam)) || 0, 0, zonas.length - 1);
  q.setFromUnitVectors(dirsZonas[i], new THREE.Vector3(0.25, 1, -0.2).normalize());
}
const TEMPO_PULO = (2 * 7.2) / 20; // duração do pulo em segundos (impulso 7,2 e gravidade 20)
let vLeste = 0, vNorte = 0, alturaPulo = 0, vPulo = 0, noChao = true;
let passo = 0, andou = false, tempo = 0, olhando = 'sul', tempoNoAr = 0;
const eixo = new THREE.Vector3(), dq = new THREE.Quaternion(), w = new THREE.Vector3();
const volta = (a) => Math.atan2(Math.sin(a), Math.cos(a));
const angulo = (d) => Math.acos(clamp(w.copy(d).applyQuaternion(q).y, -1, 1)); // distância (rad) de d até o personagem

// empurra o planeta para o personagem não atravessar o obstáculo
function empurrar(d, r) {
  w.copy(d).applyQuaternion(q);
  if (w.y < 0.8) return;
  const a = Math.acos(Math.min(1, w.y));
  if (a >= r) return;
  eixo.crossVectors(CIMA, w);
  if (eixo.lengthSq() < 1e-10) eixo.set(0, 0, 1);
  eixo.normalize();
  dq.setFromAxisAngle(eixo, r - a);
  q.premultiply(dq);
}

const relogio = new THREE.Clock();
renderer.setAnimationLoop(() => {
  const dt = Math.min(relogio.getDelta(), 0.05);
  tempo += dt;

  // entrada: ← → leste-oeste, ↑ ↓ norte-sul
  const k = (a, b) => (teclas.has(a) || teclas.has(b) ? 1 : 0);
  let ix = k('ArrowRight', 'KeyD') - k('ArrowLeft', 'KeyA') || toque.x;
  let iy = k('ArrowUp', 'KeyW') - k('ArrowDown', 'KeyS') || toque.y;
  const tam = Math.hypot(ix, iy);
  if (tam > 1) { ix /= tam; iy /= tam; }
  const correndo = teclas.has('ShiftLeft') || teclas.has('ShiftRight');
  if (correndo) { ix *= 1.7; iy *= 1.7; }
  vLeste = damp(vLeste, ix, 9, dt);
  vNorte = damp(vNorte, iy, 9, dt);
  const vel = Math.hypot(vLeste, vNorte);
  if (vel > 0.003) {
    // andar para a direita = girar o planeta em Z; andar para o fundo da tela = girar em X
    eixo.set(vNorte, 0, vLeste).normalize();
    dq.setFromAxisAngle(eixo, vel * VEL * dt);
    q.premultiply(dq);
    andou = true;
  }
  for (const d of dirsZonas) empurrar(d, RAIO_ESTACAO);
  for (const o of obstaculos) if (!(o.baixo && alturaPulo > 0.5)) empurrar(o.d, o.r);
  q.normalize();
  if (andou) $('#dica').classList.add('some');

  // pulo
  const querPular = teclas.has('Space') || toque.pulo;
  if (querPular && noChao) { vPulo = 7.2; noChao = false; tempoNoAr = 0; }
  if (!noChao) {
    vPulo -= 20 * dt;
    tempoNoAr += dt;
    alturaPulo += vPulo * dt;
    if (alturaPulo <= 0) { alturaPulo = 0; vPulo = 0; noChao = true; }
  }

  // quadro do sprite: direção predominante (de frente, de costas ou de lado) + animação do momento
  const mov = Math.min(1.7, vel);
  if (vel > 0.08) {
    const horizontal = Math.abs(vLeste) > Math.abs(vNorte) * 1.1, vertical = Math.abs(vNorte) > Math.abs(vLeste) * 1.1;
    if (horizontal) olhando = vLeste > 0 ? 'direita' : 'esquerda';
    else if (vertical) olhando = vNorte > 0 ? 'norte' : 'sul';
  }
  passo += mov * dt * 9;
  let quadro;
  if (!noChao) {
    const p = Math.min(0.999, tempoNoAr / TEMPO_PULO);
    quadro = quadros.pular[olhando][Math.floor(p * FRAMES.pular)];
  } else if (vel > 1.2) {
    quadro = quadros.correr[olhando][Math.floor(passo) % FRAMES.correr];
  } else if (vel > 0.08) {
    quadro = quadros.andar[olhando][Math.floor(passo) % FRAMES.andar];
  } else {
    // os quadros de "parado" do desenho não estão alinhados entre si (o corpo pula de lugar), então fica um quadro só
    // e a respiração vem de um leve esticar do sprite
    quadro = quadros.parado[olhando][0];
  }
  boneco.material = quadro;
  const respira = noChao && vel <= 0.08 ? Math.sin(tempo * 2.4) * 0.012 : 0;
  boneco.scale.set(LARGURA_BONECO * (1 - respira * 0.5), ALTURA_BONECO * (1 + respira), 1);
  boneco.position.y = R + alturaPulo;
  const sobe = Math.min(alturaPulo, 1.5);
  sombraBoneco.scale.setScalar(1 - sobe * 0.2);
  sombraBoneco.material.opacity = 0.55 - sobe * 0.2;

  // câmera: afastada, vendo o planeta inteiro de cima e de frente
  const af = camera.userData.afasta;
  const dist = 19 * af;
  const el = 0.42; // câmera quase de frente, um pouco de cima: o personagem fica "em pé" no topo do planeta
  const alvoY = 1.5;
  camera.position.set(0, alvoY + Math.sin(el) * dist, Math.cos(el) * dist);
  camera.lookAt(0, alvoY, 0);
  nuvens.rotation.y = Math.sin(tempo * 0.1) * 0.4;

  // estações
  let ativa = -1, menor = ALCANCE;
  dirsZonas.forEach((d, i) => {
    const a = angulo(d);
    if (a < menor) { menor = a; ativa = i; }
  });
  estacoes.forEach((e, i) => {
    const on = i === ativa;
    e.anel.material.opacity = damp(e.anel.material.opacity, on ? 0.55 + Math.sin(tempo * 4) * 0.25 : 0, 8, dt);
    e.icone.position.y = 0.1 + Math.sin(tempo * 1.6 + i) * (on ? 0.12 : 0.04);
    if (e.gira) e.gira.rotation.y += dt * (on ? 2.4 : 0.8);
    e.rot.material.opacity = damp(e.rot.material.opacity, on ? 0 : 0.85, 8, dt);
  });
  mostrarPainel(ativa);

  renderer.render(scene, camera);
});
