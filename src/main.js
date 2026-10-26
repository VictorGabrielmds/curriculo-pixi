import * as THREE from 'three';
import { perfil, zonas } from './data.js';

// ---------- constantes ----------
const R = 6.5; // raio do planeta
const VEL = 0.55; // rad/s caminhando (≈ 3,5 unidades/s)
const ALCANCE = 0.42; // rad (do personagem até a estação) para abrir o painel
const RAIO_ESTACAO = 0.27; // rad que o personagem não consegue atravessar
const CIMA = new THREE.Vector3(0, 1, 0); // onde o personagem pisa (topo do planeta)

// onde cada estação fica no planeta: [leste-oeste, norte-sul] em radianos; norte = para o fundo da tela
const POSICOES = [[0.8, 0.0], [1.8, 0.7], [-0.1, 0.95], [-1.45, 0.45], [-1.0, -0.6]];
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
function altura(p) {
  // p: ponto na esfera unitária; o ponto de partida e as estações ficam sempre em terra firme
  const n = ruido(p.x * 2.4 + 5, p.y * 2.4 + 5, p.z * 2.4 + 5) * 0.6
    + ruido(p.x * 5 + 9, p.y * 5 + 9, p.z * 5 + 9) * 0.28
    + ruido(p.x * 11, p.y * 11, p.z * 11) * 0.12;
  let bonus = Math.max(0, 1 - p.angleTo(CIMA) / 0.5);
  for (const d of dirsZonas) bonus = Math.max(bonus, 1 - p.angleTo(d) / 0.5);
  return n + 0.6 * Math.max(0, bonus);
}
const NIVEL_MAR = 0.56;

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
Object.assign(sol.shadow.camera, { left: -10, right: 10, top: 10, bottom: -10, near: 1, far: 50 });
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
  const geo = new THREE.IcosahedronGeometry(R, 14).toNonIndexed();
  const pos = geo.attributes.position;
  const cores = new Float32Array(pos.count * 3);
  const rnd = semente(21);
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3(), cen = new THREE.Vector3();
  const cor = new THREE.Color();
  for (let f = 0; f < pos.count; f += 3) {
    a.fromBufferAttribute(pos, f); b.fromBufferAttribute(pos, f + 1); c.fromBufferAttribute(pos, f + 2);
    cen.copy(a).add(b).add(c).normalize();
    const h = altura(cen);
    const v = (rnd() - 0.5) * 0.06;
    if (h < NIVEL_MAR - 0.12) cor.setHex(0x1b4fb8);
    else if (h < NIVEL_MAR - 0.04) cor.setHex(0x2a73d6);
    else if (h < NIVEL_MAR) cor.setHex(0x44a8e8);
    else if (h < NIVEL_MAR + 0.035) cor.setHex(0xf0d79a);
    else if (h < 0.82) cor.setHex(rnd() > 0.5 ? 0x3fae5a : 0x39a052);
    else if (h < 0.93) cor.setHex(0x2d8a4b);
    else cor.setHex(0xe8eef7);
    cor.offsetHSL(0, 0, v);
    for (let k = 0; k < 3; k++) cores.set([cor.r, cor.g, cor.b], (f + k) * 3);
  }
  geo.setAttribute('color', new THREE.BufferAttribute(cores, 3));
  const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.95 }));
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
      if (dir.angleTo(CIMA) < 0.3) continue; // deixa livre a área de partida
      if (dirsZonas.some((d) => dir.angleTo(d) < 0.38)) continue; // e o entorno das estações
      if (altura(dir) < NIVEL_MAR + 0.05) continue; // só em terra
      return dir.clone();
    }
    return null;
  };
  for (let i = 0; i < 90; i++) {
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
    obstaculos.push({ d, r: 0.05 * s + 0.02 });
  }
  for (let i = 0; i < 45; i++) {
    const d = sorteio();
    if (!d) continue;
    const p = new THREE.Mesh(new THREE.DodecahedronGeometry(0.22 + rnd() * 0.25, 0), mat(0x8d93a8));
    p.position.y = 0.1;
    const g = new THREE.Group();
    g.add(p);
    fincar(sombrear(g), d, rnd() * 6);
    obstaculos.push({ d, r: 0.045, baixo: true });
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
    d.normalize();
    const n = new THREE.Group();
    for (let k = 0; k < 4; k++) {
      const b = new THREE.Mesh(new THREE.IcosahedronGeometry(0.45 + rnd() * 0.4, 1), m);
      b.position.set((k - 1.5) * 0.6, rnd() * 0.25, (rnd() - 0.5) * 0.5);
      n.add(b);
    }
    n.position.y = R + 5 + rnd() * 2;
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

// ---------- personagem ----------
const boneco = new THREE.Group();
const pernaE = new THREE.Group(), pernaD = new THREE.Group(), bracoE = new THREE.Group(), bracoD = new THREE.Group();
const corpo = new THREE.Group();
{
  const pele = mat(0xf5c9a0), camisa = mat(0x7c5cff), calca = mat(0x1f2350), cabelo = mat(0x2b1d3a), amarelo = mat(0xffd23f);
  const cap = (r, h, m) => new THREE.Mesh(new THREE.CapsuleGeometry(r, h, 4, 10), m);

  for (const [p, z] of [[pernaE, -0.2], [pernaD, 0.2]]) {
    const m = cap(0.17, 0.55, calca); m.position.y = -0.47;
    const sapato = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.17, 0.3), mat(0xf4f4ff)); sapato.position.set(0.1, -0.9, 0);
    p.add(m, sapato); p.position.set(0, 0.95, z);
  }
  for (const [p, z] of [[bracoE, -0.5], [bracoD, 0.5]]) {
    const m = cap(0.13, 0.5, camisa); m.position.y = -0.38;
    const mao = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 10), pele); mao.position.y = -0.8;
    p.add(m, mao); p.position.set(0, 1.78, z);
  }
  const tronco = cap(0.38, 0.5, camisa); tronco.position.y = 1.45;
  const mochila = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.75, 0.55), amarelo); mochila.position.set(-0.42, 1.5, 0);
  const cabeca = new THREE.Mesh(new THREE.SphereGeometry(0.5, 20, 16), pele); cabeca.position.y = 2.4;
  const cab = new THREE.Mesh(new THREE.SphereGeometry(0.53, 20, 10, 0, Math.PI * 2, 0, Math.PI * 0.55), cabelo);
  cab.position.set(-0.05, 2.43, 0); cab.rotation.z = 0.25;
  const olhoMat = new THREE.MeshStandardMaterial({ color: 0x151833, roughness: 0.4 });
  const olhoE = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 8), olhoMat); olhoE.position.set(0.47, 2.43, -0.17);
  const olhoD = olhoE.clone(); olhoD.position.z = 0.17;
  const boca = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.022, 6, 12, Math.PI), mat(0x8a3b3b)); boca.position.set(0.485, 2.25, 0); boca.rotation.set(0, Math.PI / 2, Math.PI);
  corpo.add(pernaE, pernaD, bracoE, bracoD, tronco, mochila, cabeca, cab, olhoE, olhoD, boca);
  boneco.add(corpo);
  boneco.scale.setScalar(0.7);
  sombrear(boneco);
  boneco.position.y = R;
  scene.add(boneco);
}

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
let vLeste = 0, vNorte = 0, alturaPulo = 0, vPulo = 0, noChao = true;
let yaw = -Math.PI / 2, passo = 0, andou = false, tempo = 0;
const eixo = new THREE.Vector3(), dq = new THREE.Quaternion(), w = new THREE.Vector3();
const angulo = (d) => Math.acos(clamp(w.copy(d).applyQuaternion(q).y, -1, 1)); // distância (rad) de d até o personagem
const volta = (a) => Math.atan2(Math.sin(a), Math.cos(a));

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
  if (querPular && noChao) { vPulo = 7.2; noChao = false; }
  if (!noChao) {
    vPulo -= 20 * dt;
    alturaPulo += vPulo * dt;
    if (alturaPulo <= 0) { alturaPulo = 0; vPulo = 0; noChao = true; }
  }
  boneco.position.y = R + alturaPulo;

  // pose e caminhada
  const mov = Math.min(1, vel);
  passo += mov * dt * 9;
  const bal = noChao ? Math.sin(passo) * mov : 0.7;
  pernaE.rotation.z = bal * 0.85;
  pernaD.rotation.z = -bal * 0.85;
  bracoE.rotation.z = -bal * 0.7 + (noChao ? 0 : -1.2);
  bracoD.rotation.z = bal * 0.7 + (noChao ? 0 : -1.2);
  corpo.position.y = noChao ? Math.abs(Math.sin(passo)) * 0.1 * mov + Math.sin(tempo * 2) * 0.012 * (1 - mov) : 0;
  // olha para onde anda (de lado fica meio virado para a câmera); parado, olha para a câmera
  let yawAlvo = -Math.PI / 2;
  if (vel > 0.08) {
    const fx = vLeste / vel;
    let fz = -vNorte / vel;
    fz += 0.5 * (1 - Math.abs(fz));
    yawAlvo = Math.atan2(-fz, fx);
  }
  yaw += volta(yawAlvo - yaw) * (1 - Math.exp(-10 * dt));
  boneco.rotation.y = yaw;

  // câmera: afastada, vendo o planeta inteiro de cima e de frente
  const af = camera.userData.afasta;
  const dist = 24 * af;
  const el = 0.9; // câmera bem de cima: o personagem fica no meio do disco do planeta
  const alvoY = 2.6;
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
