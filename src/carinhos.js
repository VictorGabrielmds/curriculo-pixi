// Dois cantinhos de carinho no planeta: a Jasmim (uma florzinha de jasmim) e a Mazzy (a gatinha). Chegue perto e faça carinho:
// sobem corações, a flor dá um pulinho, a gatinha fecha os olhos e mia. Os carinhos ficam contados no navegador.
import * as THREE from 'three';
import './carinhos.css';

const CHAVE = 'curriculo-carinhos-v1';
export function lerCarinhos() {
  try {
    const j = JSON.parse(localStorage.getItem(CHAVE));
    return { jasmim: j?.jasmim | 0, mazzy: j?.mazzy | 0 };
  } catch { return { jasmim: 0, mazzy: 0 }; }
}
export function guardarCarinhos(c) { try { localStorage.setItem(CHAVE, JSON.stringify(c)); } catch { /* sem armazenamento */ } }

// ---------- corações em pixel art, em HTML por cima da cena ----------
const CORACAO = ['.XX.XX.', 'XXXXXXX', 'XXXXXXX', '.XXXXX.', '..XXX..', '...X...'];
let urlCoracao = null;
function imagemCoracao() {
  const c = document.createElement('canvas');
  c.width = 9; c.height = 8;
  const x = c.getContext('2d');
  const preencher = (dx, dy, cor) => {
    x.fillStyle = cor;
    CORACAO.forEach((linha, j) => [...linha].forEach((ch, i) => { if (ch === 'X') x.fillRect(i + dx, j + dy, 1, 1); }));
  };
  for (const [dx, dy] of [[0, 1], [2, 1], [1, 0], [1, 2]]) preencher(dx, dy, '#3a1030'); // contorno
  preencher(1, 1, '#ff4f87');
  x.fillStyle = '#ffd0e0'; x.fillRect(2, 2, 2, 1); x.fillRect(2, 3, 1, 1); // brilho
  return c.toDataURL();
}
// cruz de malta em pixel art (vermelha, com os braços abrindo para pontas retas, como a do Vasco): sai quando você faz um gol
let urlCruz = null;
function imagemCruz() {
  const T = 17, c = document.createElement('canvas');
  c.width = c.height = T;
  const x = c.getContext('2d');
  const meia = [1, 1, 1, 1, 2, 2, 3, 3]; // meia-largura do braço a cada distância do centro: fino no meio, abre para fora e termina reto
  const braco = (t, l) => t <= 7 && l <= meia[t];
  for (let v = -7; v <= 7; v++) for (let u = -7; u <= 7; u++) {
    if (!(braco(Math.abs(v), Math.abs(u)) || braco(Math.abs(u), Math.abs(v)))) continue;
    x.fillStyle = u + v > 4 ? '#b01820' : u + v < -4 ? '#ff5a5f' : '#e3262d';
    x.fillRect(8 + u, 8 + v, 1, 1);
  }
  const d = x.getImageData(0, 0, T, T).data;
  const cheio = (i, j) => i >= 0 && j >= 0 && i < T && j < T && d[(j * T + i) * 4 + 3] > 0;
  x.fillStyle = '#3a0d12';
  for (let j = 0; j < T; j++) for (let i = 0; i < T; i++) if (!cheio(i, j) && (cheio(i + 1, j) || cheio(i - 1, j) || cheio(i, j + 1) || cheio(i, j - 1))) x.fillRect(i, j, 1, 1);
  return c.toDataURL();
}
function soltar(url, largura, altura, escalas, px, py, n) { // n figurinhas que sobem e somem, como os corações da Mazzy
  for (let k = 0; k < n; k++) {
    const e = document.createElement('i'), s = escalas[Math.floor(Math.random() * escalas.length)];
    e.className = 'coracao';
    e.style.cssText = `background-image:url(${url});width:${largura * s}px;height:${altura * s}px;left:${Math.round(px + (Math.random() - 0.5) * 30)}px;top:${Math.round(py)}px;animation-delay:${(k * 0.09).toFixed(2)}s;`;
    e.style.setProperty('--dx', `${Math.round((Math.random() - 0.5) * 80)}px`);
    e.style.setProperty('--sobe', `${70 + Math.round(Math.random() * 60)}px`);
    e.addEventListener('animationend', () => e.remove());
    document.body.append(e);
  }
}
export function soltarCoracoes(px, py, n = 5) { urlCoracao ??= imagemCoracao(); soltar(urlCoracao, 9, 8, [2, 2, 3], px, py, n); }
export function soltarCruzes(px, py, n = 6) { urlCruz ??= imagemCruz(); soltar(urlCruz, 17, 17, [2, 3, 3], px, py, n); }

// ---------- Jasmim: uma ramo de jasmim com flores brancas de cinco pétalas ----------
// mat: fábrica de materiais do main.js (cor, extras)
export function criarJasmim(mat) {
  const raiz = new THREE.Group(); // pés no chão, y = 0
  const balanco = new THREE.Group(); raiz.add(balanco);
  const verde = mat(0x2f9e5c), verdeEscuro = mat(0x237a45);
  const branco = new THREE.MeshStandardMaterial({ color: 0xfffff2, emissive: 0x6a6a55, emissiveIntensity: 0.5, roughness: 0.7, flatShading: true, side: THREE.DoubleSide });
  const miolo = mat(0xffcf3a, { emissive: 0x8a6400, emissiveIntensity: 0.7 });
  const botao = new THREE.MeshStandardMaterial({ color: 0xffe0ec, emissive: 0x7a5060, emissiveIntensity: 0.4, roughness: 0.7, flatShading: true });
  const petala = new THREE.SphereGeometry(1, 6, 4), folha = new THREE.SphereGeometry(1, 6, 4), cilindro = new THREE.CylinderGeometry(1, 1, 1, 5);

  const haste = (x0, z0, x1, y1, z1, raio) => { // cilindro fino de (x0,0,z0) até (x1,y1,z1)
    const a = new THREE.Vector3(x0, 0, z0), b = new THREE.Vector3(x1, y1, z1), d = b.clone().sub(a);
    const m = new THREE.Mesh(cilindro, verdeEscuro);
    m.scale.set(raio, d.length(), raio);
    m.position.copy(a).addScaledVector(d, 0.5);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
    balanco.add(m);
  };
  const par = (x, y, z, ang, tam) => { // um par de folhas abertas em V
    for (const lado of [-1, 1]) {
      const f = new THREE.Mesh(folha, verde);
      f.scale.set(0.13 * tam, 0.025 * tam, 0.065 * tam);
      f.position.set(x + Math.cos(ang) * 0.1 * tam * lado, y, z + Math.sin(ang) * 0.1 * tam * lado);
      f.rotation.set(0, -ang, lado * 0.35);
      balanco.add(f);
    }
  };
  const flor = (x, y, z, tam) => { // flor virada para cima e para a frente (para a câmera ver)
    const g = new THREE.Group();
    g.position.set(x, y, z);
    g.rotation.x = 0.95;
    for (let k = 0; k < 5; k++) {
      const a = (k / 5) * Math.PI * 2;
      const p = new THREE.Mesh(petala, branco);
      p.scale.set(0.075 * tam, 0.022 * tam, 0.15 * tam);
      p.position.set(Math.sin(a) * 0.1 * tam, 0, Math.cos(a) * 0.1 * tam);
      p.rotation.y = a;
      g.add(p);
    }
    const c = new THREE.Mesh(petala, miolo);
    c.scale.setScalar(0.045 * tam); c.position.y = 0.025 * tam;
    g.add(c);
    balanco.add(g);
    return g;
  };
  const broto = (x, y, z) => { const b = new THREE.Mesh(petala, botao); b.scale.set(0.04, 0.065, 0.04); b.position.set(x, y, z); balanco.add(b); };

  // caule principal e dois laterais
  haste(0, 0, 0.02, 0.62, 0.03, 0.022);
  haste(0, 0, -0.2, 0.34, 0.02, 0.016);
  haste(0, 0, 0.21, 0.4, -0.01, 0.016);
  par(0.01, 0.2, 0.01, 0, 1.05); par(0.01, 0.38, 0.02, Math.PI / 2, 0.9); par(-0.1, 0.19, 0.02, 0.3, 0.8); par(0.1, 0.23, 0, -0.3, 0.8);
  const grande = flor(0.02, 0.66, 0.05, 1.25);
  const f2 = flor(-0.21, 0.38, 0.06, 0.95), f3 = flor(0.22, 0.44, 0.04, 0.9);
  broto(-0.08, 0.5, 0.0); broto(0.1, 0.58, -0.02); broto(0.0, 0.8, -0.02);
  raiz.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });

  const cabeca = new THREE.Object3D(); cabeca.position.set(0, 0.85, 0.05); raiz.add(cabeca); // de onde saem os corações
  const topo = new THREE.Object3D(); topo.position.set(0, 1.05, 0); raiz.add(topo); // onde o nome fica ancorado
  let pulo = 0;
  return {
    raiz, cabeca, topo,
    carinho() { pulo = 1; },
    atualizar(t, dt) {
      pulo = Math.max(0, pulo - dt * 2.2);
      const k = Math.sin(pulo * Math.PI); // 0 → 1 → 0 em 0,45 s
      balanco.rotation.z = Math.sin(t * 1.3) * 0.045 + Math.sin(pulo * 18) * 0.12 * pulo;
      balanco.rotation.x = Math.sin(t * 0.9 + 1) * 0.03;
      balanco.scale.setScalar(1 + k * 0.22);
      grande.rotation.y = Math.sin(t * 0.8) * 0.15;
      f2.rotation.y = Math.sin(t * 0.7 + 2) * 0.2; f3.rotation.y = Math.sin(t * 0.75 + 4) * 0.2;
    },
  };
}

// ---------- Mazzy: gatinha cinza e branca, de olhos amarelo-esverdeados, em pixel art ----------
const PALETA = { G: '#8a8f9e', D: '#5b6070', W: '#f4f4f6', S: '#cdd0da', P: '#f29bb0', Y: '#d8d24c', B: '#1a1a22', E: '#ffffff', K: '#2a2a36' };
const LARGURA = 32, ALTURA = 24, DX = 3, DY = 1;
// metade esquerda do desenho (12 colunas); a outra metade é o espelho. O contorno escuro é automático.
const METADE = [
  '..GG........', '..GGG.......', '..GPGG......', '..GPGGGGGGGG', '.GGGGGGGGGGG', '.GGGGGGGGDGG',
  '.GGGGGDGGGDD', '.GGEYYGGGGWW', '.GGYBYGGGWWW', '.GGYBYGGWWWW', '.GGGGGGWWWWP', '.GGGGGWWWWSW',
  '..GGGGWWWWWW', '...GGGGGWWWW', '...GGDGGWWWW', '..GGGGGDGWWW', '..GGDGGGGWWW', '..GGGGGDGGWW',
  '..GGGGGGGGWW', '..GGWWWWWWWS', '..GWWWWWWWSS', '..WWWWWWWSSS',
];
const CAUDA = {
  cima: [[25, 20], [26, 20], [27, 19], [28, 18], [28, 17], [28, 16], [27, 15], [27, 14]],
  baixo: [[25, 21], [26, 21], [27, 21], [28, 20], [29, 19], [29, 18]],
};
function desenharMazzy({ cauda, olhos }) {
  const grade = METADE.map((l) => [...l, ...[...l].reverse()]); // 24 colunas
  const set = (r, c, ch) => { grade[r][c] = ch; grade[r][23 - c] = ch; };
  if (olhos === 'piscando') { for (let c = 3; c <= 5; c++) { set(7, c, 'G'); set(8, c, 'K'); set(9, c, 'G'); } }
  if (olhos === 'feliz') { // olhinhos fechados de felicidade (^ ^) e bochechas rosadas
    for (let c = 3; c <= 5; c++) { set(7, c, 'G'); set(8, c, 'G'); set(9, c, 'G'); }
    set(8, 3, 'K'); set(7, 4, 'K'); set(8, 5, 'K'); set(9, 2, 'P'); set(9, 7, 'P');
  }
  const cv = document.createElement('canvas');
  cv.width = LARGURA; cv.height = ALTURA;
  const x = cv.getContext('2d');
  grade.forEach((linha, r) => linha.forEach((ch, c) => { if (ch !== '.') { x.fillStyle = PALETA[ch]; x.fillRect(c + DX, r + DY, 1, 1); } }));
  CAUDA[cauda].forEach(([px, py], i) => { x.fillStyle = i % 3 === 2 ? PALETA.D : PALETA.G; x.fillRect(px - 1, py, 2, 1); });
  // contorno: todo pixel vazio encostado em um pixel preenchido vira escuro
  const d = x.getImageData(0, 0, LARGURA, ALTURA).data;
  const cheio = (i, j) => i >= 0 && j >= 0 && i < LARGURA && j < ALTURA && d[(j * LARGURA + i) * 4 + 3] > 0;
  x.fillStyle = PALETA.K;
  for (let j = 0; j < ALTURA; j++) for (let i = 0; i < LARGURA; i++) {
    if (!cheio(i, j) && (cheio(i + 1, j) || cheio(i - 1, j) || cheio(i, j + 1) || cheio(i, j - 1))) x.fillRect(i, j, 1, 1);
  }
  return cv;
}
export { desenharMazzy }; // exportado só para conferir o desenho no navegador

const ESCALA_PIXEL = 1; // cada pixel do desenho vale 1 pixel da tela interna, como o avatar: a gatinha é bem pequena
export function criarMazzy() {
  const texturas = {};
  const material = (chave, opcoes) => {
    if (!texturas[chave]) {
      const tex = new THREE.CanvasTexture(desenharMazzy(opcoes));
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.magFilter = tex.minFilter = THREE.NearestFilter;
      tex.generateMipmaps = false;
      texturas[chave] = new THREE.SpriteMaterial({ map: tex, transparent: true, toneMapped: false, alphaTest: 0.5 });
    }
    return texturas[chave];
  };
  const raiz = new THREE.Group();
  const sprite = new THREE.Sprite(material('cima-abertos', { cauda: 'cima', olhos: 'abertos' }));
  sprite.center.set(0.5, DY / ALTURA); // as patinhas tocam o chão
  sprite.position.y = 0.02;
  // sombrinha no chão
  const c = document.createElement('canvas'); c.width = c.height = 32;
  const x = c.getContext('2d'), g = x.createRadialGradient(16, 16, 1, 16, 16, 15);
  g.addColorStop(0, 'rgba(0,0,0,0.8)'); g.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = g; x.fillRect(0, 0, 32, 32);
  const sombra = new THREE.Mesh(new THREE.PlaneGeometry(0.75, 0.5), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), transparent: true, opacity: 0.5, depthWrite: false }));
  sombra.rotation.x = -Math.PI / 2; sombra.position.y = 0.03;
  const cabeca = new THREE.Object3D(); cabeca.position.y = 0.55;
  const topo = new THREE.Object3D(); topo.position.y = 0.8;
  raiz.add(sombra, sprite, cabeca, topo);
  let feliz = 0, pulo = 0;
  return {
    raiz, cabeca, topo,
    carinho() { feliz = 1.6; pulo = 1; },
    // ppu: unidades do mundo por pixel da tela interna (o main.js recalcula quando a janela muda de tamanho)
    atualizar(t, dt, ppu) {
      feliz = Math.max(0, feliz - dt); pulo = Math.max(0, pulo - dt * 2.5);
      const cauda = Math.floor(t * (feliz > 0 ? 4 : 1.6)) % 2 ? 'cima' : 'baixo';
      let olhos = 'abertos';
      if (feliz > 0) olhos = 'feliz'; else if ((t + 1.3) % 4.1 < 0.13) olhos = 'piscando';
      sprite.material = material(`${cauda}-${olhos}`, { cauda, olhos });
      const respira = 1 + Math.sin(t * 2.2) * 0.012;
      sprite.scale.set(LARGURA * ppu * ESCALA_PIXEL, ALTURA * ppu * ESCALA_PIXEL * respira, 1);
      sprite.position.y = 0.02 + Math.abs(Math.sin(pulo * Math.PI)) * 0.12 * pulo;
    },
  };
}
