import * as THREE from 'three';
import { perfil, zonas } from './data.js';
import { skinPorId } from './skins.js';
import { iniciarCassino } from './cassino.js';
import { iniciarArcade } from './arcade.js';
import { montarPainel } from './painel.js';
import { iniciarMusicaAmbiente } from './musica.js';
import { criarJasmim, criarMazzy, soltarCoracoes, lerCarinhos, guardarCarinhos } from './carinhos.js';
import { criarFutebol } from './futebol.js';

// ---------- constantes ----------
const R = 5; // raio do planeta
const K = 6.5 / R; // os raios em rad foram pensados para R=6,5; K corrige para o tamanho atual
const VEL = 0.7; // rad/s caminhando (3,5 unidades/s)
const CIMA = new THREE.Vector3(0, 1, 0); // onde o personagem pisa (topo do planeta)

// onde cada estação fica no planeta: [distância angular do ponto de partida (rad), direção em graus: 0 = leste, 90 = norte (fundo da tela)]
// bem espalhadas: quatro num anel perto da partida e três no anel de trás, todas a mais de 1,3 rad umas das outras
const POSICOES = [[0.95, 30], [1.1, 120], [1.1, 210], [1.1, 300], [2.15, 75], [2.15, 195], [2.15, 315]];
function dirPolar(pol, graus) {
  const az = (graus * Math.PI) / 180;
  return new THREE.Vector3(Math.sin(pol) * Math.cos(az), Math.cos(pol), -Math.sin(pol) * Math.sin(az));
}
const posicaoZona = (i) => dirPolar(...(POSICOES[i] ?? [1.2 + (i % 3) * 0.5, i * 137.5])); // zonas extras: espalha em espiral
const dirsZonas = zonas.map((_, i) => posicaoZona(i));
// dois cantinhos de carinho perto do ponto de partida (em terra firme): a flor de jasmim e a gatinha Mazzy
const dirsSitios = { jasmim: dirPolar(0.4, 180), mazzy: dirPolar(0.5, 295) };
const pertoDeSitio = (dir, folga) => Object.values(dirsSitios).some((d) => dir.angleTo(d) < folga);
// estações pequenas: o tamanho vem da zona (z.escala) ou é este; o personagem não atravessa a plataforma e o painel abre um pouco antes
const ESCALA_ESTACAO = 0.6;
const escalaZona = (z) => z.escala ?? ESCALA_ESTACAO;
const raioBloqueio = zonas.map((z) => (1.85 * escalaZona(z)) / R + 0.03); // rad que o personagem não consegue atravessar
const alcanceZona = raioBloqueio.map((r) => r + 0.22); // rad (do personagem até a estação) para abrir o painel

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
const DISPOSITIVO_MOVEL = window.matchMedia?.('(pointer: coarse)').matches && Math.min(window.innerWidth, window.innerHeight) < 900;
const POUCA_MEMORIA = Number(navigator.deviceMemory || 8) <= 4;
const MODO_GRAFICO_LEVE = DISPOSITIVO_MOVEL || POUCA_MEMORIA;
const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance', failIfMajorPerformanceCaveat: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, MODO_GRAFICO_LEVE ? 1 : 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0b1026);
const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 200);

scene.add(new THREE.HemisphereLight(0xbcd0ff, 0x241c4d, 1.0));
const sol = new THREE.DirectionalLight(0xfff0d4, 1.9);
sol.position.set(7, R + 9, 9);
sol.target.position.set(0, 2, 0);
sol.castShadow = true;
sol.shadow.mapSize.set(MODO_GRAFICO_LEVE ? 1024 : 2048, MODO_GRAFICO_LEVE ? 1024 : 2048);
Object.assign(sol.shadow.camera, { left: -8, right: 8, top: 8, bottom: -8, near: 1, far: 50 });
sol.shadow.bias = -0.0004;
scene.add(sol, sol.target);

// materiais que as skins do mundo recolorem
const materialEstrelas = new THREE.PointsMaterial({ color: 0xffffff, size: 0.42, sizeAttenuation: true, fog: false });
const materialNuvens = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, flatShading: true, transparent: true, opacity: 0.95 });
const copasArvores = [], copas2Arvores = []; // {m, v}: material e variação da copa
const uniformsTerreno = {
  uMarRaso: { value: new THREE.Color(0x56c2ee) }, uMarMedio: { value: new THREE.Color(0x2f7fdc) }, uMarFundo: { value: new THREE.Color(0x1d56b8) }, uEspuma: { value: new THREE.Color(0xd4f1fc) },
  uAreia: { value: new THREE.Color(0xf3dda3) }, uGrama0: { value: new THREE.Color(0x6fcf6a) }, uGrama1: { value: new THREE.Color(0x4cb760) }, uGrama2: { value: new THREE.Color(0x2f9055) },
};

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
  scene.add(new THREE.Points(g, materialEstrelas));
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
  // Textura de 8 bits: funciona com filtragem linear em todo WebGL2 móvel.
  // HalfFloat + LinearFilter depende de extensões que não existem em vários celulares.
  const dados = new Uint8Array(3 * M * 2 * M * 4);
  const FACES = [(u, v) => [1, v, -u], (u, v) => [-1, v, u], (u, v) => [u, 1, -v], (u, v) => [u, -1, v], (u, v) => [u, v, 1], (u, v) => [-u, v, -1]];
  const p = new THREE.Vector3();
  const um = 255;
  for (let f = 0; f < 6; f++) {
    const cx = (f % 3) * M, cy = Math.floor(f / 3) * M;
    for (let j = 0; j < M; j++) {
      const v = ((j + 0.5 - P) / N) * 2 - 1;
      for (let i = 0; i < M; i++) {
        const u = ((i + 0.5 - P) / N) * 2 - 1;
        const [x, y, z] = FACES[f](u, v);
        p.set(x, y, z).normalize();
        const idx = ((cy + j) * 3 * M + cx + i) * 4;
        dados[idx] = Math.round(clamp(altura(p), 0, 1) * 255);
        dados[idx + 3] = um;
      }
    }
  }
  const tex = new THREE.DataTexture(dados, 3 * M, 2 * M, THREE.RGBAFormat, THREE.UnsignedByteType);
  tex.minFilter = tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;

  const material = new THREE.MeshStandardMaterial({ roughness: 0.9 });
  material.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, { uAltura: { value: tex }, uN: { value: N }, uP: { value: P }, uM: { value: M }, uNivel: { value: NIVEL_MAR } }, uniformsTerreno);
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
          float w = 2e-4; // borda dura: pixel art
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
          return col * (0.97 + 0.06 * fino);
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
      if (dirsZonas.some((d, k) => dir.angleTo(d) < raioBloqueio[k] + 0.2)) continue; // e o entorno das estações
      if (pertoDeSitio(dir, 0.2)) continue; // e dos cantinhos da Jasmim e da Mazzy
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
    const variacao = rnd() > 0.5 ? 0 : 1;
    const copa = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1.2, 7), mat(variacao === 0 ? 0x2f9e5c : 0x258a4e));
    copasArvores.push({ m: copa.material, v: variacao });
    copa.position.y = 1.1;
    const copa2 = new THREE.Mesh(new THREE.ConeGeometry(0.38, 0.9, 7), mat(0x34b068));
    copas2Arvores.push(copa2.material);
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
  const m = materialNuvens;
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
  const c = new THREE.Color(cor);
  const claro = mat(cor, { emissive: cor, emissiveIntensity: 0.1 });
  const medio = mat(c.clone().multiplyScalar(0.78));
  const escuro = mat(c.clone().multiplyScalar(0.5));
  const pedra = mat(0x9aa0b4), pedraEscura = mat(0x5a6078), madeira = mat(0x9a6a3c), madeiraEscura = mat(0x5a3a22);
  const branco = mat(0xf1f3fb), metal = mat(0xc9cdd8), preto = mat(0x1b1d2e), vermelho = mat(0xe0364a), amarelo = mat(0xffc83d);
  const luz = new THREE.MeshStandardMaterial({ color: 0xfff6c8, emissive: 0xffe9a0, emissiveIntensity: 1.2 });
  const add = (geo, m, x = 0, y = 0, z = 0) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); g.add(o); return o; };
  const caixa = (w, h, d, m, x, y, z) => add(new THREE.BoxGeometry(w, h, d), m, x, y, z);
  const cil = (r1, r2, h, m, x, y, z, seg = 12) => add(new THREE.CylinderGeometry(r1, r2, h, seg), m, x, y, z);
  const esfera = (r, m, x, y, z) => add(new THREE.SphereGeometry(r, 10, 8), m, x, y, z);
  switch (tipo) {
    case 'casa': { // chalé de duas águas, com chaminé, porta com degraus, janelas com venezianas e um pequeno jardim
      caixa(2.5, 0.22, 2.0, pedra, 0, 0.11, 0); // fundação de pedra
      caixa(2.2, 1.25, 1.7, claro, 0, 0.84, 0); // paredes
      for (const s of [-1, 1]) { const t = caixa(2.5, 0.12, 1.15, escuro, 0, 1.78, s * 0.5); t.rotation.x = s * 0.62; } // telhado
      caixa(2.56, 0.14, 0.16, mat(c.clone().multiplyScalar(0.35)), 0, 2.13, 0); // cumeeira
      const tri = new THREE.Shape(); tri.moveTo(-0.85, 0); tri.lineTo(0.85, 0); tri.lineTo(0, 0.62); tri.closePath();
      for (const s of [-1, 1]) { const e = add(new THREE.ExtrudeGeometry(tri, { depth: 0.06, bevelEnabled: false }), claro, s * 1.1 - 0.03, 1.46, 0); e.rotation.y = Math.PI / 2; } // empenas
      caixa(0.3, 0.8, 0.3, pedraEscura, 0.65, 2.0, -0.28); caixa(0.4, 0.08, 0.4, pedra, 0.65, 2.42, -0.28); // chaminé
      caixa(0.62, 1.0, 0.04, branco, 0, 0.72, 0.86); caixa(0.5, 0.9, 0.06, madeiraEscura, 0, 0.67, 0.88); esfera(0.04, metal, 0.16, 0.65, 0.93); // porta
      caixa(0.9, 0.12, 0.4, pedra, 0, 0.1, 1.2); // degrau
      for (const x of [-0.72, 0.72]) { // janelas da frente
        caixa(0.55, 0.55, 0.05, branco, x, 0.98, 0.86); caixa(0.42, 0.42, 0.06, luz, x, 0.98, 0.88);
        caixa(0.04, 0.42, 0.07, branco, x, 0.98, 0.89); caixa(0.42, 0.04, 0.07, branco, x, 0.98, 0.89);
        for (const s of [-1, 1]) caixa(0.14, 0.5, 0.04, medio, x + s * 0.38, 0.98, 0.88); // venezianas
      }
      for (const s of [-1, 1]) { caixa(0.05, 0.5, 0.5, branco, s * 1.11, 0.95, 0.1); caixa(0.06, 0.38, 0.38, luz, s * 1.12, 0.95, 0.1); } // janelas laterais
      esfera(0.07, luz, 0.5, 1.2, 0.92); // lampião da varanda
      cil(0.04, 0.04, 0.5, madeira, 1.55, 0.45, 1.1, 6); caixa(0.32, 0.22, 0.22, vermelho, 1.55, 0.8, 1.1); // caixa de correio
      caixa(0.7, 0.12, 0.22, madeiraEscura, -0.85, 0.28, 1.2); // canteiro
      [[-1.1, vermelho], [-0.9, amarelo], [-0.7, mat(0xff8ad0)], [-0.55, vermelho]].forEach(([x, m]) => esfera(0.07, m, x, 0.4, 1.2));
      break;
    }
    case 'predio': { // torre de escritórios com térreo, coroamento recuado, janelas em grade, toldo e caixa-d'água no teto
      caixa(2.4, 0.2, 2.2, pedraEscura, 0, 0.1, 0); // calçada
      caixa(2.0, 0.7, 1.8, escuro, 0, 0.55, 0); // térreo
      caixa(1.7, 2.6, 1.5, claro, 0, 2.15, 0); // torre
      caixa(1.2, 0.5, 1.05, medio, 0, 3.7, 0); // coroamento recuado
      for (let r = 0; r < 5; r++) for (let col = 0; col < 3; col++) caixa(0.34, 0.36, 0.05, (r * 2 + col) % 5 === 0 ? escuro : luz, -0.5 + col * 0.5, 1.2 + r * 0.5, 0.77);
      for (let r = 0; r < 5; r++) for (const s of [-1, 1]) for (let col = 0; col < 2; col++) caixa(0.05, 0.36, 0.34, (r + col) % 3 === 0 ? escuro : luz, s * 0.86, 1.2 + r * 0.5, -0.3 + col * 0.6);
      for (const y of [1.0, 3.45]) caixa(1.78, 0.07, 1.58, escuro, 0, y, 0); // faixas
      caixa(0.7, 0.55, 0.05, luz, 0, 0.45, 0.93); caixa(0.04, 0.55, 0.06, escuro, 0, 0.45, 0.94); // porta de vidro
      caixa(1.2, 0.08, 0.55, vermelho, 0, 0.86, 1.12); for (const s of [-1, 1]) cil(0.03, 0.03, 0.62, metal, s * 0.55, 0.55, 1.36, 6); // toldo
      caixa(0.9, 0.14, 0.05, luz, 0, 3.7, 0.54); // letreiro
      cil(0.22, 0.22, 0.5, madeira, 0.3, 4.2, 0.1); add(new THREE.ConeGeometry(0.26, 0.2, 10), madeiraEscura, 0.3, 4.55, 0.1); // caixa-d'água
      caixa(0.3, 0.2, 0.3, pedra, -0.3, 4.05, 0.25); // ar-condicionado
      cil(0.025, 0.025, 0.9, metal, -0.3, 4.4, -0.2, 6); esfera(0.07, mat(0xff3b4a, { emissive: 0xff3b4a, emissiveIntensity: 0.9 }), -0.3, 4.88, -0.2); // antena
      break;
    }
    case 'foguete': { // plataforma de lançamento com torre de serviço, tanque e o foguete com janelinha e aletas
      caixa(2.4, 0.16, 2.4, pedraEscura, 0, 0.08, 0); // plataforma
      for (let i = 0; i < 9; i++) caixa(0.26, 0.05, 0.12, i % 2 ? preto : amarelo, -1.04 + i * 0.26, 0.18, 1.12); // faixas de alerta
      cil(0.5, 0.56, 2.3, branco, 0, 1.9, 0, 16); add(new THREE.ConeGeometry(0.5, 1.0, 16), claro, 0, 3.55, 0);
      cil(0.52, 0.52, 0.16, vermelho, 0, 2.95, 0, 16); cil(0.58, 0.58, 0.1, escuro, 0, 0.8, 0, 16); // faixa e anel da base
      add(new THREE.TorusGeometry(0.21, 0.045, 8, 18), metal, 0, 2.4, 0.5); esfera(0.18, mat(0x4aa8ff, { emissive: 0x2c78d0, emissiveIntensity: 0.7 }), 0, 2.4, 0.5); // janelinha
      for (let i = 0; i < 3; i++) {
        const f = caixa(0.08, 0.9, 0.7, claro, 0, 1, 0);
        const piv = new THREE.Group(); piv.rotation.y = (i / 3) * Math.PI * 2 + 0.5; f.position.set(0.62, 1, 0); f.parent.remove(f); piv.add(f); g.add(piv);
      }
      add(new THREE.ConeGeometry(0.34, 0.8, 10), mat(0xffb02e, { emissive: 0xff7a1a, emissiveIntensity: 1 }), 0, 0.5, 0).rotation.x = Math.PI; // chama
      for (const z of [-0.35, 0.35]) caixa(0.1, 3.5, 0.1, metal, 1.1, 1.9, z); // torre de serviço
      for (const y of [0.7, 1.5, 2.3, 3.1]) caixa(0.08, 0.08, 0.7, metal, 1.1, y, 0);
      caixa(0.75, 0.1, 0.12, metal, 0.75, 2.6, 0); esfera(0.07, luz, 1.1, 3.7, 0); // braço e luz da torre
      add(new THREE.CylinderGeometry(0.22, 0.22, 0.9, 12), branco, -1.0, 0.4, 0.7).rotation.z = Math.PI / 2; // tanque de combustível
      for (const x of [-1.3, -0.7]) caixa(0.08, 0.2, 0.3, metal, x, 0.25, 0.7);
      break;
    }
    case 'estrela': { // monumento: pedestal em degraus, coluna e uma estrela girando com satélites
      cil(1.15, 1.3, 0.2, pedra, 0, 0.1, 0, 20); cil(0.8, 0.95, 0.22, pedraEscura, 0, 0.31, 0, 20); // degraus
      cil(0.16, 0.22, 1.5, metal, 0, 1.15, 0); cil(0.3, 0.3, 0.1, metal, 0, 1.95, 0); // coluna e capitel
      const gira = new THREE.Group(); gira.name = 'gira'; gira.position.y = 2.85; g.add(gira);
      const estrelaM = new THREE.Mesh(new THREE.ExtrudeGeometry(estrelaForma(0.95), { depth: 0.3, bevelEnabled: true, bevelSize: 0.07, bevelThickness: 0.07, bevelSegments: 1 }), mat(cor, { emissive: cor, emissiveIntensity: 0.55 }));
      estrelaM.position.z = -0.15; gira.add(estrelaM);
      const aro = new THREE.Mesh(new THREE.TorusGeometry(1.25, 0.03, 8, 40), mat(cor, { emissive: cor, emissiveIntensity: 0.6 })); aro.rotation.x = Math.PI / 2; gira.add(aro);
      [0, 2.1, 4.2].forEach((a, k) => { const s = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), mat([0xff5d8f, 0x58d6ff, 0xffe14a][k], { emissive: [0xff5d8f, 0x58d6ff, 0xffe14a][k], emissiveIntensity: 0.7 })); s.position.set(Math.cos(a) * 1.25, 0, Math.sin(a) * 1.25); gira.add(s); });
      break;
    }
    case 'cassino': { // máquina caça-níquel: corpo cromado, letreiro com lâmpadas, rolos, botões, bandeja e alavanca
      const prata = mat(0xcfd6df, { emissive: 0x3a4250, emissiveIntensity: 0.25 });
      const rolo = (cx, cr) => caixa(0.36, 0.5, 0.06, mat(cr, { emissive: cr, emissiveIntensity: 0.7 }), cx, 2.05, 0.66);
      cil(1.3, 1.4, 0.16, pedraEscura, 0, 0.08, 0, 20); // pedestal
      caixa(2.2, 0.3, 1.6, escuro, 0, 0.3, 0); // base
      caixa(1.8, 2.7, 1.3, prata, 0, 1.8, 0); // corpo cromado
      caixa(2.0, 0.55, 1.4, escuro, 0, 3.35, 0); caixa(1.6, 0.3, 0.08, luz, 0, 3.35, 0.72); // letreiro
      for (let i = 0; i < 9; i++) esfera(0.06, i % 2 ? luz : vermelho, -0.96 + i * 0.24, 3.66, 0.68); // lâmpadas do letreiro
      caixa(1.45, 0.75, 0.1, mat(0x15152b), 0, 2.2, 0.62); // janela dos rolos
      rolo(-0.46, 0xff3b4a); rolo(0, 0xffe14a); rolo(0.46, 0x58d6ff);
      for (const [x, cr] of [[-0.45, 0xff3b4a], [0, 0x58d68a], [0.45, 0x58a8ff]]) cil(0.1, 0.1, 0.08, mat(cr, { emissive: cr, emissiveIntensity: 0.5 }), x, 1.55, 0.68, 10).rotation.x = Math.PI / 2; // botões
      caixa(0.5, 0.06, 0.04, preto, 0, 1.3, 0.66); // fenda das fichas
      caixa(1.2, 0.28, 0.45, escuro, 0, 0.95, 0.8); // bandeja de fichas
      cil(0.06, 0.06, 1.1, metal, 1.12, 2.1, 0, 8); esfera(0.2, mat(0xff3b4a, { emissive: 0xff3b4a, emissiveIntensity: 0.5 }), 1.12, 2.75, 0); // alavanca
      break;
    }
    case 'nave': { // nave pousada, com pernas, aletas, cabine de vidro e antena
      const casco = mat(0x4aa8ff, { emissive: 0x1d56b8, emissiveIntensity: 0.4 });
      const vidro = mat(0x8bd3ff, { emissive: 0x4aa8ff, emissiveIntensity: 0.6 });
      const aleta = mat(0xff7a59, { emissive: 0x8a3a20, emissiveIntensity: 0.3 });
      add(new THREE.SphereGeometry(0.95, 16, 12), casco, 0, 1.85, 0).scale.set(1, 0.85, 1); // casco redondo, como no sprite
      add(new THREE.TorusGeometry(0.92, 0.05, 8, 28), metal, 0, 1.85, 0).rotation.x = Math.PI / 2; // anel do casco
      add(new THREE.SphereGeometry(0.58, 14, 10), vidro, 0, 2.15, 0.35); // cabine
      add(new THREE.SphereGeometry(0.2, 8, 8), mat(0xffffff, { emissive: 0xffffff, emissiveIntensity: 0.9 }), 0.1, 2.35, 0.8); // brilho no vidro
      for (let k = 0; k < 4; k++) { // quatro aletas laranjas
        const ang = (k * Math.PI) / 2;
        const f = add(new THREE.BoxGeometry(0.55, 0.14, 0.95), aleta, Math.cos(ang) * 1.05, 1.7, Math.sin(ang) * 1.05);
        f.rotation.y = -ang;
      }
      for (let k = 0; k < 3; k++) { // pernas de pouso
        const ang = (k * Math.PI * 2) / 3 + 0.4;
        const p = add(new THREE.CylinderGeometry(0.05, 0.07, 1, 8), metal, Math.cos(ang) * 0.62, 0.62, Math.sin(ang) * 0.62);
        p.rotation.z = Math.cos(ang) * 0.3; p.rotation.x = -Math.sin(ang) * 0.3;
        add(new THREE.CylinderGeometry(0.16, 0.16, 0.05, 8), metal, Math.cos(ang) * 0.78, 0.12, Math.sin(ang) * 0.78);
      }
      add(new THREE.ConeGeometry(0.3, 0.55, 10), mat(0xffd23f, { emissive: 0xff7a3a, emissiveIntensity: 1 }), 0, 1.05, 0).rotation.x = Math.PI; // chama do motor
      cil(0.03, 0.03, 0.6, metal, 0, 2.95, 0, 6); // antena
      esfera(0.1, mat(0xff3b4a, { emissive: 0xff3b4a, emissiveIntensity: 0.8 }), 0, 3.28, 0);
      break;
    }
    case 'carta': { // caixa de correio grande de rua: poste, corpo com tampa arredondada, bandeirinha, envelope e poste de luz
      cil(0.26, 0.32, 0.4, pedra, 0, 0.2, 0, 10); // base de pedra
      cil(0.12, 0.15, 1.0, metal, 0, 0.9, 0, 8); // poste
      caixa(1.7, 0.9, 0.9, claro, 0, 1.85, 0);
      const tampa = add(new THREE.CylinderGeometry(0.45, 0.45, 1.7, 16, 1, false, 0, Math.PI), mat(cor, { emissive: cor, emissiveIntensity: 0.1, side: THREE.DoubleSide }), 0, 2.3, 0); tampa.rotation.z = Math.PI / 2; // tampa arredondada
      caixa(1.0, 0.07, 0.05, preto, 0, 2.02, 0.46); // fenda das cartas
      caixa(1.5, 0.5, 0.04, medio, 0, 1.62, 0.46); caixa(0.4, 0.26, 0.03, branco, -0.42, 1.62, 0.49); esfera(0.05, vermelho, -0.42, 1.62, 0.52); // porta e envelope
      cil(0.025, 0.025, 0.7, metal, 0.9, 2.0, 0, 6); caixa(0.32, 0.22, 0.04, vermelho, 1.05, 2.28, 0); // bandeirinha
      cil(0.035, 0.045, 1.9, metal, -1.2, 0.95, 0.5, 6); esfera(0.1, luz, -1.2, 1.95, 0.5); caixa(0.3, 0.04, 0.04, metal, -1.08, 1.9, 0.5); // poste de luz
      break;
    }
  }
  return g;
}

// altura (nas unidades do modelo) onde o rótulo da estação fica ancorado
const ALTURA_ROTULO = { casa: 3.5, predio: 5.0, foguete: 4.9, estrela: 4.7, cassino: 4.4, nave: 3.9, carta: 3.5 };
const luzPoste = new THREE.MeshStandardMaterial({ color: 0xfff6c8, emissive: 0xffe9a0, emissiveIntensity: 1.3 });
const estacoes = zonas.map((z, i) => {
  const raiz = new THREE.Group();
  const baseG = new THREE.Group();
  const prato = new THREE.Mesh(new THREE.CylinderGeometry(1.85, 1.95, 0.12, 28), mat(0x3b4058)); prato.position.y = 0.04;
  const piso = new THREE.Mesh(new THREE.CylinderGeometry(1.55, 1.65, 0.14, 28), mat(new THREE.Color(z.cor).multiplyScalar(0.45))); piso.position.y = 0.1;
  baseG.add(prato, piso);
  for (let k = 0; k < 6; k++) { // postes de luz em volta da plataforma
    const ang = (k / 6) * Math.PI * 2 + 0.5, px = Math.cos(ang) * 1.74, pz = Math.sin(ang) * 1.74;
    const poste = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.045, 0.55, 6), mat(0xc9cdd8)); poste.position.set(px, 0.38, pz);
    const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 6), luzPoste); lamp.position.set(px, 0.7, pz);
    baseG.add(poste, lamp);
  }
  const anel = new THREE.Mesh(
    new THREE.TorusGeometry(2.08, 0.07, 8, 48),
    new THREE.MeshBasicMaterial({ color: z.cor, transparent: true, opacity: 0 }),
  );
  anel.rotation.x = Math.PI / 2;
  anel.position.y = 0.1;
  const icone = modelo(z.icone, z.cor);
  icone.position.y = 0.17;
  const topo = new THREE.Object3D(); // ponto acima da estação onde o rótulo HTML fica ancorado
  topo.position.y = ALTURA_ROTULO[z.icone] ?? 4.5;
  raiz.add(baseG, anel, icone, topo);
  sombrear(raiz);
  baseG.traverse((o) => { if (o.isMesh) o.castShadow = false; });
  raiz.scale.setScalar(escalaZona(z));
  fincar(raiz, dirsZonas[i], 0);
  const gira = icone.getObjectByName('gira');
  return { raiz, anel, icone, topo, gira, giraY: gira ? gira.position.y : 0 };
});

// ---------- Jasmim e Mazzy ----------
const jasmim = criarJasmim(mat), mazzy = criarMazzy();
fincar(jasmim.raiz, dirsSitios.jasmim, 0.4);
fincar(mazzy.raiz, dirsSitios.mazzy, 0);
obstaculos.push({ d: dirsSitios.jasmim, r: 0.035 * K }, { d: dirsSitios.mazzy, r: 0.055 * K });

// ---------- personagem (sprite 2D, 4 direções) ----------
// quadros em public/avatar/<animação>-<direção>-<n>.png (84x182, pés na linha y=168)
const FRAMES = { parado: 4, andar: 5, correr: 5, pular: 5 };
const DIRECOES = ['direita', 'esquerda', 'norte', 'sul']; // norte = de costas (fundo da tela), sul = de frente
const CICLO_PARADO = [0, 1, 2, 3, 2, 1]; // parado de frente: ida e volta
const FRAME_W = 84, FRAME_H = 182, FRAME_PES_Y = 168;
const carregador = new THREE.TextureLoader();
const quadros = {};
for (const [anim, n] of Object.entries(FRAMES)) {
  quadros[anim] = {};
  for (const dir of DIRECOES) {
    quadros[anim][dir] = Array.from({ length: n }, (_, i) => {
      const tex = carregador.load(`${import.meta.env.BASE_URL}avatar/${anim}-${dir}-${i}.png`);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.magFilter = tex.minFilter = THREE.NearestFilter; // pixel art: sem suavizar
      tex.generateMipmaps = false;
      // alphaTest: pixels transparentes não gravam profundidade (senão o contorno desenha o retângulo do sprite)
      return new THREE.SpriteMaterial({ map: tex, transparent: true, toneMapped: false, alphaTest: 0.5 });
    });
  }
}
let ALTURA_BONECO = 3.6; // recalculado em ajustar(): 1 pixel do desenho = 1 pixel da tela interna
let LARGURA_BONECO = ALTURA_BONECO * (FRAME_W / FRAME_H);
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
const fichasHudEl = $('#fichas-hud b');
zonas.forEach((z) => {
  const i = document.createElement('i');
  i.style.setProperty('--c', '#' + z.cor.toString(16).padStart(6, '0'));
  pontosEl.appendChild(i);
});
const painel = $('#painel');
const acaoBtn = $('#acao');
let painelAtivo = -2;
let estacaoAtiva = -1;

// estações já visitadas ficam guardadas no navegador; o painel mostra o progresso e sugere a próxima
const CHAVE_VISITADAS = 'curriculo-visitadas-v1';
const visitadas = new Set();
try { for (const id of JSON.parse(localStorage.getItem(CHAVE_VISITADAS)) || []) if (zonas.some((z) => z.id === id)) visitadas.add(id); } catch { /* sem armazenamento */ }
const SETAS = ['↑', '↗', '→', '↘', '↓', '↙', '←', '↖']; // 0 = norte (parte de cima da tela)
function proximaEstacao(atual) { // a estação ainda não visitada mais perto da atual, e a direção (a partir do personagem) para chegar nela
  let melhor = -1, menorAng = Infinity;
  zonas.forEach((z, k) => {
    if (k === atual || visitadas.has(z.id)) return;
    const a = dirsZonas[atual].angleTo(dirsZonas[k]);
    if (a < menorAng) { menorAng = a; melhor = k; }
  });
  if (melhor < 0) return null;
  const v = new THREE.Vector3().copy(dirsZonas[melhor]).applyQuaternion(q);
  const ang = Math.atan2(v.x, -v.z), dist = Math.acos(clamp(v.y, -1, 1));
  return { id: zonas[melhor].id, seta: SETAS[((Math.round(ang / (Math.PI / 4)) % 8) + 8) % 8], seg: Math.max(1, Math.round(dist / VEL)) };
}
function marcarPontos(ativa) {
  [...pontosEl.children].forEach((d, k) => { d.classList.toggle('on', k === ativa); d.classList.toggle('vis', visitadas.has(zonas[k].id)); });
}
marcarPontos(-1);
function mostrarPainel(i) {
  if (i === painelAtivo) return;
  painelAtivo = i;
  if (i < 0) { painel.classList.remove('on'); } else {
    const z = zonas[i];
    if (!visitadas.has(z.id)) { visitadas.add(z.id); try { localStorage.setItem(CHAVE_VISITADAS, JSON.stringify([...visitadas])); } catch { /* sem armazenamento */ } }
    painel.style.setProperty('--c', '#' + z.cor.toString(16).padStart(6, '0'));
    painel.querySelector('h2').textContent = z.titulo;
    $('#texto').replaceChildren(...montarPainel(z, { zonas, visitadas, proxima: proximaEstacao(i) }));
    painel.scrollTop = 0;
    acaoBtn.hidden = !z.jogo;
    painel.classList.add('on');
  }
  marcarPontos(i);
}

// ---------- entrada ----------
const teclas = new Set();
window.addEventListener('keydown', (e) => {
  if (cassino.estaAberto() || arcade.estaAberto()) return; // com um jogo aberto, as teclas são dele
  if ((e.code === 'KeyE' || e.code === 'Enter') && estacaoAtiva >= 0 && zonas[estacaoAtiva].jogo) {
    teclas.clear();
    abrirJogo(zonas[estacaoAtiva].jogo);
    return;
  }
  if ((e.code === 'KeyE' || e.code === 'Enter') && alvoCarinho) { fazerCarinho(alvoCarinho); return; }
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

// ---------- câmera e pós-processamento (visual pixel art) ----------
// A cena é desenhada numa tela interna de ~640 px de altura (sem suavização) e ampliada sem filtro. O avatar foi
// desenhado em ~182 px de altura, então com esta altura interna cada pixel dele vira exatamente 1 pixel do mundo.
const ALTURA_INTERNA = MODO_GRAFICO_LEVE ? 420 : 640;
const DIST_CAMERA = 19;
// UnsignedByte é aceito por praticamente todo WebGL2 móvel. HalfFloat pode criar um framebuffer
// incompleto em celulares e deixar somente os textos HTML visíveis sobre uma tela preta.
const alvoRender = new THREE.WebGLRenderTarget(2, 2, { minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter, type: THREE.UnsignedByteType, samples: 0 });
alvoRender.depthTexture = new THREE.DepthTexture(2, 2);
const telaCena = new THREE.Scene();
const telaCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
const telaMaterial = new THREE.ShaderMaterial({
  uniforms: {
    tCor: { value: alvoRender.texture }, tProf: { value: alvoRender.depthTexture },
    uPixel: { value: new THREE.Vector2(1, 1) }, uBorda: { value: new URLSearchParams(location.search).get('borda') === '0' ? 0 : 1 }, uNear: { value: camera.near }, uFar: { value: camera.far },
  },
  vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
  fragmentShader: `
    uniform sampler2D tCor, tProf; uniform vec2 uPixel; uniform float uNear, uFar, uBorda;
    varying vec2 vUv;
    #include <packing>
    float profund(vec2 uv) { return -perspectiveDepthToViewZ(texture2D(tProf, uv).x, uNear, uFar); }
    float bayer4(vec2 p) {
      int x = int(mod(p.x, 4.0)), y = int(mod(p.y, 4.0));
      float m[16] = float[16](0.0, 8.0, 2.0, 10.0, 12.0, 4.0, 14.0, 6.0, 3.0, 11.0, 1.0, 9.0, 15.0, 7.0, 13.0, 5.0);
      return (m[x + 4 * y] + 0.5) / 16.0;
    }
    void main() {
      vec2 px = floor(vUv / uPixel);
      vec2 uv = (px + 0.5) * uPixel;
      vec4 cor = texture2D(tCor, uv);
      // contorno: pixel de objeto que tem um vizinho muito mais longe (céu ou outro objeto atrás) vira linha escura.
      // Só desenha em pixels de objeto, nunca no céu, para não sujar o fundo.
      float z = profund(uv);
      float borda = 0.0;
      vec2 viz[4] = vec2[4](vec2(uPixel.x, 0.0), vec2(-uPixel.x, 0.0), vec2(0.0, uPixel.y), vec2(0.0, -uPixel.y));
      if (z < 0.98 * uFar) {
        for (int i = 0; i < 4; i++) { if (profund(uv + viz[i]) - z > 0.035 * z) borda = 1.0; }
      }
      gl_FragColor = vec4(cor.rgb, 1.0);
      #include <colorspace_fragment>
      // paleta limitada com dithering ordenado leve
      float niveis = 14.0;
      vec3 q = floor(gl_FragColor.rgb * niveis + 0.5 + (bayer4(px) - 0.5) * 0.55) / niveis;
      gl_FragColor.rgb = mix(q, vec3(0.03, 0.04, 0.10), borda * uBorda);
    }`,
  depthTest: false, depthWrite: false,
});
telaCena.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), telaMaterial));

function ajustar() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setSize(w, h);
  camera.aspect = w / h;
  // em tela estreita afasta a câmera para o planeta continuar inteiro
  camera.userData.afasta = 1 / clamp(camera.aspect / 1.1, 0.5, 1);
  camera.updateProjectionMatrix();
  // tela interna: no máximo ALTURA_INTERNA de altura, mesma proporção da janela
  const hi = Math.min(ALTURA_INTERNA, h), wi = Math.max(2, Math.round(hi * camera.aspect));
  alvoRender.setSize(wi, hi);
  telaMaterial.uniforms.uPixel.value.set(1 / wi, 1 / hi);
  // 1 pixel do desenho do avatar = 1 pixel da tela interna
  const unidadesPorPixel = (2 * DIST_CAMERA * camera.userData.afasta * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))) / hi;
  ALTURA_BONECO = FRAME_H * unidadesPorPixel;
  LARGURA_BONECO = FRAME_W * unidadesPorPixel;
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

// rótulos das estações: texto HTML projetado na tela (some quando a estação está do outro lado do planeta)
const rotulosEl = document.createElement('div');
rotulosEl.id = 'rotulos';
document.body.append(rotulosEl);
const rotulosDom = zonas.map((z) => {
  const e = document.createElement('div');
  e.className = 'rotulo';
  e.textContent = z.id;
  rotulosEl.append(e);
  return e;
});
const camDir = new THREE.Vector3(), pontoRotulo = new THREE.Vector3();
function atualizarRotulos(ativa) {
  camDir.copy(camera.position).normalize();
  zonas.forEach((_, i) => {
    const e = rotulosDom[i];
    w.copy(dirsZonas[i]).applyQuaternion(q);
    if (i === ativa || w.dot(camDir) < 0.2) { e.style.opacity = '0'; return; }
    estacoes[i].topo.getWorldPosition(pontoRotulo).project(camera);
    e.style.transform = `translate(${Math.round((pontoRotulo.x * 0.5 + 0.5) * window.innerWidth)}px, ${Math.round((-pontoRotulo.y * 0.5 + 0.5) * window.innerHeight)}px) translate(-50%, -100%)`;
    e.style.opacity = '1';
  });
}

// ---------- carinho na Jasmim e na Mazzy: chegue perto, aperte E (ou toque no botão) e saem corações ----------
const ALCANCE_CARINHO = 0.2; // rad
const carinhos = lerCarinhos();
const nota = (f, d, tipo = 'triangle', v = 0.05, atraso = 0) => cassino.bip(f, d, tipo, v, atraso);
const sitios = [
  { id: 'jasmim', nome: 'jasmim', frase: 'dar carinho na Jasmim', d: dirsSitios.jasmim, modelo: jasmim, livre: 0, // sininho
    som: () => { nota(1047, 0.12, 'sine'); nota(1319, 0.12, 'sine', 0.05, 0.09); nota(1568, 0.28, 'sine', 0.05, 0.18); } },
  { id: 'mazzy', nome: 'mazzy', frase: 'fazer carinho na Mazzy', d: dirsSitios.mazzy, modelo: mazzy, livre: 0, // miau
    som: () => { nota(680, 0.09); nota(930, 0.1, 'triangle', 0.05, 0.07); nota(620, 0.2, 'triangle', 0.045, 0.15); } },
];
const carinhoBtn = document.createElement('button');
carinhoBtn.id = 'carinho'; carinhoBtn.hidden = true;
document.body.append(carinhoBtn);
const rotulosSitio = sitios.map(() => { const e = document.createElement('div'); e.className = 'rotulo pet'; rotulosEl.append(e); return e; });
const fraseJasmim = document.createElement('div'); // dedicatória discreta no céu, embaixo do planeta
fraseJasmim.className = 'rotulo frase';
fraseJasmim.textContent = '♥ a flor mais bela do meu mundo todo';
const pontoFrase = new THREE.Vector3(0, -(R + 2.7), 0); // fora do planeta, logo abaixo dele (o céu não gira)
let brilhoFrase = 0;
rotulosEl.append(fraseJasmim);
let alvoCarinho = null, textoCarinho = '';
const pontoSitio = new THREE.Vector3();
function fazerCarinho(s) {
  if (tempo < s.livre) return;
  s.livre = tempo + 0.5;
  s.modelo.carinho();
  carinhos[s.id] += 1;
  guardarCarinhos(carinhos);
  s.modelo.cabeca.getWorldPosition(pontoSitio).project(camera);
  soltarCoracoes((pontoSitio.x * 0.5 + 0.5) * window.innerWidth, (-pontoSitio.y * 0.5 + 0.5) * window.innerHeight, 5);
  s.som();
}
carinhoBtn.addEventListener('click', () => { if (alvoCarinho) fazerCarinho(alvoCarinho); carinhoBtn.blur(); });
function atualizarSitios(dt, pausado) {
  let melhor = null, menor = Infinity;
  for (const s of sitios) {
    const a = angulo(s.d);
    if (a < ALCANCE_CARINHO && a < menor) { menor = a; melhor = s; }
  }
  alvoCarinho = pausado ? null : melhor;
  const texto = alvoCarinho ? `♥ ${alvoCarinho.frase} [E]` : '';
  if (texto !== textoCarinho) { textoCarinho = texto; carinhoBtn.textContent = texto.toUpperCase(); carinhoBtn.hidden = !texto; }
  const ppu = ALTURA_BONECO / FRAME_H; // unidades do mundo por pixel da tela interna
  jasmim.atualizar(tempo, dt);
  mazzy.atualizar(tempo, dt, ppu);
  sitios.forEach((s, i) => { // nome (e quantos carinhos já ganhou) em cima de cada um
    const e = rotulosSitio[i];
    w.copy(s.d).applyQuaternion(q);
    if (s === alvoCarinho || w.dot(camDir) < 0.2) { e.style.opacity = '0'; return; } // perto, o botão já diz quem é
    s.modelo.topo.getWorldPosition(pontoSitio).project(camera);
    e.textContent = carinhos[s.id] ? `${s.nome} ♥ ${carinhos[s.id]}` : s.nome;
    e.style.transform = `translate(${Math.round((pontoSitio.x * 0.5 + 0.5) * window.innerWidth)}px, ${Math.round((-pontoSitio.y * 0.5 + 0.5) * window.innerHeight)}px) translate(-50%, -100%)`;
    e.style.opacity = '1';
  });
  // a dedicatória só aparece quando você está perto da Jasmim: surge devagar embaixo do planeta e some ao se afastar
  const perto = clamp((0.42 - angulo(dirsSitios.jasmim)) / 0.22, 0, 1);
  brilhoFrase = damp(brilhoFrase, 0.8 * perto, 3, dt);
  pontoSitio.copy(pontoFrase).project(camera);
  fraseJasmim.style.transform = `translate(${Math.round((pontoSitio.x * 0.5 + 0.5) * window.innerWidth)}px, ${Math.round((-pontoSitio.y * 0.5 + 0.5) * window.innerHeight)}px) translate(-50%, -50%)`;
  fraseJasmim.style.opacity = brilhoFrase.toFixed(2);
}

// skins do cassino: trocam as cores do planeta, das árvores e do céu
const CORES_TERRENO = { marRaso: 'uMarRaso', marMedio: 'uMarMedio', marFundo: 'uMarFundo', espuma: 'uEspuma', areia: 'uAreia', grama0: 'uGrama0', grama1: 'uGrama1', grama2: 'uGrama2' };
function aplicarSkins(equipadas) {
  const pl = skinPorId(equipadas.planeta)?.cores;
  if (pl) for (const [chave, uniforme] of Object.entries(CORES_TERRENO)) uniformsTerreno[uniforme].value.set(pl[chave]);
  const ar = skinPorId(equipadas.arvores)?.cores;
  if (ar) {
    for (const { m, v } of copasArvores) m.color.set(ar.copa[v % ar.copa.length]);
    for (const m of copas2Arvores) m.color.set(ar.copa2);
  }
  const ce = skinPorId(equipadas.ceu)?.cores;
  if (ce) {
    scene.background.set(ce.fundo);
    materialEstrelas.color.set(ce.estrelas);
    materialNuvens.color.set(ce.nuvens);
  }
}
const cassino = iniciarCassino({ aoMudarSkins: aplicarSkins, aoMudarFichas: (n) => { fichasHudEl.textContent = String(n); } });
const arcade = iniciarArcade({ bip: (...a) => cassino.bip(...a), somAtivo: () => cassino.somAtivo() });
const futebol = criarFutebol({ planeta, fincar, R, q, altura, NIVEL_MAR, dirsZonas, raioBloqueio, obstaculos, dirsSitios, camera, rotulosEl, camDir, bip: (...a) => cassino.bip(...a) });
if (import.meta.env.DEV) window.__futebol = { ...futebol, aFrente: (rad, graus) => dirPolar(rad, graus).applyQuaternion(q.clone().invert()), mundo: (d) => d.clone().applyQuaternion(q) }; // só no servidor de desenvolvimento
const musica = iniciarMusicaAmbiente({ somAtivo: () => cassino.somAtivo() });
const somBtn = $('#som');
let somMostrado = null;
somBtn.addEventListener('click', () => { cassino.alternarSom(); somBtn.blur(); });
function abrirJogo(jogo) { if (jogo === 'arcade') arcade.abrir(); else cassino.abrir(jogo); }
acaoBtn.addEventListener('click', () => { if (estacaoAtiva >= 0 && zonas[estacaoAtiva].jogo) { teclas.clear(); abrirJogo(zonas[estacaoAtiva].jogo); } });

// ---------- fichas espalhadas pelo planeta: é só andar por cima para pegar; valem fichas do cassino ----------
const NUM_MOEDAS = 4, VALOR_MOEDA = 5, RAIO_COLETA = 0.2 * K;
const matMoeda = new THREE.MeshStandardMaterial({ color: 0xd6293e, emissive: 0x8a1020, emissiveIntensity: 0.6, roughness: 0.45, flatShading: true }); // ficha vermelha de cassino
const matMoedaMiolo = new THREE.MeshStandardMaterial({ color: 0xf4efe0, emissive: 0x6a6658, emissiveIntensity: 0.4, roughness: 0.6, flatShading: true });
const moedas = [];
const pontoMundo = new THREE.Vector3();
function posicionarMoeda(moeda) {
  const dir = new THREE.Vector3();
  for (let tentativa = 0; tentativa < 80; tentativa++) {
    dir.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
    if (altura(dir) < NIVEL_MAR + 0.06) continue; // só em terra
    if (pontoMundo.copy(dir).applyQuaternion(q).angleTo(CIMA) < 0.45 * K) continue; // não nasce em cima do personagem
    if (dirsZonas.some((z, k) => dir.angleTo(z) < raioBloqueio[k] + 0.2) || pertoDeSitio(dir, 0.25)) continue; // longe das estações e dos cantinhos de carinho
    if (obstaculos.some((o) => dir.angleTo(o.d) < o.r + 0.09 * K)) continue; // e de árvores e pedras
    if (moedas.some((o) => o !== moeda && o.ativa && o.d.angleTo(dir) < 0.25)) continue;
    moeda.d.copy(dir);
    moeda.raiz.quaternion.setFromUnitVectors(CIMA, dir);
    moeda.raiz.visible = true;
    moeda.ativa = true;
    return;
  }
  moeda.ativa = false; // não achou lugar: tenta de novo daqui a pouco
  moeda.volta = tempo + 2;
}
for (let i = 0; i < NUM_MOEDAS; i++) {
  const raiz = new THREE.Group(), giro = new THREE.Group();
  const disco = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.08, 12), matMoeda);
  const miolo = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.1, 12), matMoedaMiolo);
  disco.rotation.z = miolo.rotation.z = Math.PI / 2; // moeda "em pé", girando
  giro.add(disco, miolo);
  for (let k = 0; k < 8; k++) { // marcas brancas na borda, como numa ficha de verdade
    const an = (k * Math.PI) / 4, marca = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.14, 0.1), matMoedaMiolo);
    marca.position.set(0, Math.sin(an) * 0.3, Math.cos(an) * 0.3); marca.rotation.x = an; giro.add(marca);
  }
  giro.position.y = R + 0.7;
  raiz.add(giro);
  sombrear(raiz);
  planeta.add(raiz);
  const moeda = { d: new THREE.Vector3(), raiz, giro, ativa: false, volta: 0, fase: i * 1.3 };
  moedas.push(moeda);
  posicionarMoeda(moeda);
}
const pontoPopup = new THREE.Vector3();
function popup(texto) {
  boneco.getWorldPosition(pontoPopup);
  pontoPopup.project(camera);
  const e = document.createElement('div');
  e.className = 'popup';
  e.textContent = texto;
  e.style.left = Math.round((pontoPopup.x * 0.5 + 0.5) * window.innerWidth) + 'px';
  e.style.top = Math.round((-pontoPopup.y * 0.5 + 0.5) * window.innerHeight - 70) + 'px';
  document.body.append(e);
  setTimeout(() => e.remove(), 1000);
}
function atualizarMoedas(dt) {
  for (const moeda of moedas) {
    if (!moeda.ativa) { if (tempo >= moeda.volta) posicionarMoeda(moeda); continue; }
    moeda.giro.rotation.y += dt * 3.2;
    moeda.giro.position.y = R + 0.7 + Math.sin(tempo * 3 + moeda.fase) * 0.08;
    if (angulo(moeda.d) < RAIO_COLETA) {
      moeda.ativa = false;
      moeda.raiz.visible = false;
      moeda.volta = tempo + 25 + Math.random() * 25; // reaparece em outro lugar, bem depois
      cassino.adicionarFichas(VALOR_MOEDA);
      popup('+' + VALOR_MOEDA);
      cassino.bip(988, 0.07, 'square', 0.07); // plim de moeda: duas notas, a segunda mais longa e aguda
      cassino.bip(1319, 0.22, 'square', 0.07, 0.08);
      cassino.bip(1976, 0.3, 'triangle', 0.05, 0.08);
    }
  }
}

let ultimoQuadro = performance.now();
renderer.setAnimationLoop(() => {
  const agoraMs = performance.now();
  const dt = Math.min((agoraMs - ultimoQuadro) / 1000, 0.05);
  ultimoQuadro = agoraMs;
  tempo += dt;

  // entrada: ← → leste-oeste, ↑ ↓ norte-sul
  const k = (a, b) => (teclas.has(a) || teclas.has(b) ? 1 : 0);
  const pausado = cassino.estaAberto() || arcade.estaAberto();
  let ix = pausado ? 0 : k('ArrowRight', 'KeyD') - k('ArrowLeft', 'KeyA') || toque.x;
  let iy = pausado ? 0 : k('ArrowUp', 'KeyW') - k('ArrowDown', 'KeyS') || toque.y;
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
  dirsZonas.forEach((d, k) => empurrar(d, raioBloqueio[k]));
  for (const o of obstaculos) if (!(o.baixo && alturaPulo > 0.5)) empurrar(o.d, o.r);
  q.normalize();
  if (andou) $('#dica').classList.add('some');

  // pulo
  const querPular = !pausado && (teclas.has('Space') || toque.pulo);
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
    // de frente há 4 quadros bem alinhados (ida e volta); nas outras direções os quadros do desenho não se alinham
    // (o corpo "pula"), então fica um quadro só e a respiração vem de um leve esticar do sprite
    quadro = olhando === 'sul' ? quadros.parado.sul[CICLO_PARADO[Math.floor(tempo * 4) % CICLO_PARADO.length]] : quadros.parado[olhando][0];
  }
  boneco.material = quadro;
  const respira = noChao && vel <= 0.08 && olhando !== 'sul' ? Math.sin(tempo * 2.4) * 0.012 : 0;
  boneco.scale.set(LARGURA_BONECO * (1 - respira * 0.5), ALTURA_BONECO * (1 + respira), 1);
  boneco.position.y = R + alturaPulo;
  const sobe = Math.min(alturaPulo, 1.5);
  sombraBoneco.scale.setScalar(1 - sobe * 0.2);
  sombraBoneco.material.opacity = 0.55 - sobe * 0.2;

  // câmera: afastada, vendo o planeta inteiro de cima e de frente
  const af = camera.userData.afasta;
  const dist = DIST_CAMERA * af;
  const el = 0.42; // câmera quase de frente, um pouco de cima: o personagem fica "em pé" no topo do planeta
  const alvoY = 1.5;
  camera.position.set(0, alvoY + Math.sin(el) * dist, Math.cos(el) * dist);
  camera.lookAt(0, alvoY, 0);
  nuvens.rotation.y = Math.sin(tempo * 0.1) * 0.4;

  // estações
  let ativa = -1, menor = Infinity;
  dirsZonas.forEach((d, i) => {
    const a = angulo(d);
    if (a < alcanceZona[i] && a < menor) { menor = a; ativa = i; }
  });
  estacoes.forEach((e, i) => {
    const on = i === ativa;
    e.anel.material.opacity = damp(e.anel.material.opacity, on ? 0.55 + Math.sin(tempo * 4) * 0.25 : 0, 8, dt);
    if (e.gira) { // só o monumento da estrela gira e flutua; as construções ficam firmes no chão
      e.gira.rotation.y += dt * (on ? 2.4 : 0.8);
      e.gira.position.y = e.giraY + Math.sin(tempo * 1.6 + i) * (on ? 0.12 : 0.06);
    }
  });
  estacaoAtiva = ativa;
  mostrarPainel(ativa);
  atualizarRotulos(ativa);
  atualizarMoedas(dt);
  atualizarSitios(dt, pausado);
  futebol.atualizar(dt, { vLeste, vNorte, VEL, pulando: alturaPulo > 0.4, pausado });
  musica.atualizar(dt, pausado);
  if (cassino.somAtivo() !== somMostrado) { somMostrado = cassino.somAtivo(); somBtn.classList.toggle('mudo', !somMostrado); }

  if (MODO_GRAFICO_LEVE) {
    // No celular a cena vai direto para a tela: evita depth texture e pós-processamento incompatíveis.
    renderer.setRenderTarget(null);
    renderer.render(scene, camera);
  } else {
    renderer.setRenderTarget(alvoRender);
    renderer.render(scene, camera);
    renderer.setRenderTarget(null);
    renderer.render(telaCena, telaCamera);
  }
});
