// Fundo do espaço do jogo de nave (tudo em pixel art, gerado em código): estrelas que piscam em várias camadas
// de profundidade (parallax), nebulosas, planetas e estrelas cadentes. O universo é infinito: cada "célula"
// do espaço tem conteúdo sorteado por um hash, então dá para voar para qualquer lado.
import { novoSprite } from './pixelArt.js';

// número pseudo-aleatório estável para uma célula (a, b) e um "assunto" c
function hash(a, b, c = 0) {
  let x = (Math.imul(a | 0, 374761393) ^ Math.imul(b | 0, 668265263) ^ Math.imul(c | 0, 1274126177)) | 0;
  x = Math.imul(x ^ (x >>> 13), 1103515245);
  x ^= x >>> 16;
  return (x >>> 0) / 4294967296;
}
const suave = (t) => t * t * (3 - 2 * t);
function ruido(x, y, s = 0) {
  const ix = Math.floor(x), iy = Math.floor(y), fx = suave(x - ix), fy = suave(y - iy);
  const a = hash(ix, iy, s), b = hash(ix + 1, iy, s), c = hash(ix, iy + 1, s), d = hash(ix + 1, iy + 1, s);
  return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
}
const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5].map((v) => (v + 0.5) / 16);

// ---------- planetas ----------
// pal: 4 tons do escuro ao claro; palB: segundo conjunto (faixas, continentes)
const TIPOS_PLANETA = [
  { r: 17, pal: ['#5a2d1a', '#9a4f26', '#d4803a', '#f2b36b'], palB: ['#6b3a22', '#b86a30', '#e39a52', '#f7cf94'], bandas: 5 }, // gigante gasoso laranja
  { r: 13, pal: ['#1f3b66', '#3b6cb0', '#6fa8e8', '#bfe3ff'], nuvens: true }, // gelado
  { r: 11, pal: ['#4a1a1a', '#8a2f26', '#c4553a', '#e8845f'], crateras: 6 }, // deserto vermelho
  { r: 15, pal: ['#12306a', '#1d56b8', '#2f7fdc', '#56c2ee'], palB: ['#1d5a34', '#2f9055', '#4cb760', '#79c96a'], terra: true }, // tipo Terra
  { r: 14, pal: ['#2a1450', '#5a2f9a', '#8a5ad0', '#c9a8ff'], palB: ['#341a60', '#6a3fb0', '#9a70e0', '#dcc4ff'], bandas: 3, anel: '#e8d8ff' }, // roxo com anel
  { r: 12, pal: ['#1a0f14', '#3a1f26', '#5a2f35', '#7a4048'], lava: true }, // vulcânico
  { r: 7, pal: ['#3a3f4a', '#6a7280', '#9aa3b2', '#cfd6e0'], crateras: 4 }, // lua cinza
  { r: 22, pal: ['#6a5a2a', '#a8923f', '#d8c060', '#f5e8a0'], palB: ['#7a6a32', '#b8a04a', '#e6cf6e', '#fff4b8'], bandas: 7, anel: '#fff1b0' }, // gigante amarelo com anel
];

function gerarPlaneta(cfg, semente) {
  const r = cfg.r;
  const rxAnel = cfg.anel ? Math.ceil(r * 1.6) : r;
  const W = rxAnel * 2 + 2, H = r * 2 + 2;
  const s = novoSprite(W, H);
  const cx = W / 2, cy = H / 2;
  const anel = (frente) => {
    if (!cfg.anel) return;
    for (let ang = 0; ang < Math.PI * 2; ang += 0.012) {
      const sen = Math.sin(ang);
      if ((sen >= 0) !== frente) continue;
      for (let rx = r * 1.25; rx <= r * 1.6; rx += 0.6) s.pixel(Math.round(cx + Math.cos(ang) * rx), Math.round(cy + sen * rx * 0.28), rx > r * 1.5 ? '#9a86c0' : cfg.anel);
    }
  };
  anel(false); // parte de trás do anel (atrás do planeta)
  // crateras sorteadas
  const crateras = Array.from({ length: cfg.crateras || 0 }, (_, i) => ({ x: (hash(i, semente, 1) - 0.5) * 1.3, y: (hash(i, semente, 2) - 0.5) * 1.3, r: 0.12 + hash(i, semente, 3) * 0.15 }));
  for (let j = 0; j < H; j++) {
    for (let i = 0; i < W; i++) {
      const nx = (i + 0.5 - cx) / r, ny = (j + 0.5 - cy) / r, d2 = nx * nx + ny * ny;
      if (d2 > 1) continue;
      const nz = Math.sqrt(1 - d2);
      const luz = nx * -0.5 + ny * -0.55 + nz * 0.67; // luz vinda do canto superior esquerdo
      const tom = luz + (BAYER[(j % 4) * 4 + (i % 4)] - 0.5) * 0.24;
      let idx = tom < 0.1 ? 0 : tom < 0.4 ? 1 : tom < 0.68 ? 2 : 3;
      let pal = cfg.pal;
      if (cfg.bandas) { const f = Math.sin(ny * cfg.bandas * Math.PI + ruido(nx * 1.6 + semente, ny * 3, 5) * 2.2); if (f > 0.15) pal = cfg.palB; }
      if (cfg.terra && ruido(nx * 2.4 + semente, ny * 2.4, 7) > 0.52) pal = cfg.palB;
      let cor;
      if (cfg.nuvens && ruido(nx * 3 + semente, ny * 3, 9) > 0.62) cor = ['#9db8e0', '#c9dcf5', '#e8f2ff', '#ffffff'][idx];
      if (crateras.some((c) => (nx - c.x) ** 2 + (ny - c.y) ** 2 < c.r * c.r)) idx = Math.max(0, idx - 1);
      if (cfg.lava && Math.abs(ruido(nx * 3.2 + semente, ny * 3.2, 11) - 0.5) < 0.035) cor = idx >= 2 ? '#ff8a3a' : '#c4401f';
      s.pixel(i, j, cor || pal[idx]);
    }
  }
  anel(true); // parte da frente do anel (na frente do planeta)
  return s.contorno('#0b1026').c;
}

// ---------- camadas ----------
const CAMADAS_ESTRELAS = [
  { f: 0.1, cel: 80, n: 3, cores: ['#2a3566', '#3a4a8a'], pisca: false },
  { f: 0.25, cel: 96, n: 3, cores: ['#4a5aa0', '#6a7ac0', '#9aa8e0'], pisca: true },
  { f: 0.5, cel: 110, n: 2, cores: ['#9aa8e0', '#c9d3ff', '#ffffff', '#ffe9a8', '#ffb8c8'], pisca: true, grande: 0.12 },
  { f: 0.9, cel: 150, n: 1, cores: ['#26305a'], pisca: false }, // "poeira" perto: reforça a sensação de velocidade
];
const CAMADAS_PLANETAS = [
  { f: 0.18, cel: 190, prob: 0.6, alfa: 0.8, escalaMax: 1, semente: 31 },
  { f: 0.42, cel: 330, prob: 0.5, alfa: 1, escalaMax: 2, semente: 57 },
];
// planetas fixos perto do ponto de partida, para a primeira tela já ter paisagem
const PLANETAS_FIXOS = [
  { camada: 1, x: 165, y: 12, tipo: 4, escala: 1 },
  { camada: 0, x: -78, y: 70, tipo: 0, escala: 1 },
];

// ---------- objetos famosos do céu (desenhados por pixel, com meios-tons) ----------
const fbm = (x, y, s) => (ruido(x, y, s) * 0.5 + ruido(x * 2, y * 2, s + 1) * 0.25 + ruido(x * 4, y * 4, s + 2) * 0.125 + ruido(x * 8, y * 8, s + 3) * 0.0625) / 0.9375;
// cria uma imagem pintando cada pixel com fn(i, j, nx, ny) -> [r, g, b, a] ou null (nx, ny vão de -1 a 1)
function pintar(W, H, fn) {
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const x = c.getContext('2d'), img = x.createImageData(W, H), d = img.data;
  for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) {
    const p = fn(i, j, ((i + 0.5) / W) * 2 - 1, ((j + 0.5) / H) * 2 - 1);
    if (!p) continue;
    // as bordas da imagem se dissolvem em meio-tom: nunca aparece um corte reto no meio do céu
    const borda = Math.min(i, W - 1 - i, j, H - 1 - j) / (0.2 * Math.min(W, H));
    if (borda < 1 && borda < BAYER[(j % 4) * 4 + (i % 4)]) continue;
    const k = (j * W + i) * 4; d[k] = p[0]; d[k + 1] = p[1]; d[k + 2] = p[2]; d[k + 3] = p[3];
  }
  x.putImageData(img, 0, 0);
  return c;
}
// quantiza uma densidade (0 a 1) em n degraus, com meio-tom (tramado de Bayer) entre eles
const nivel = (d, i, j, n) => Math.max(0, Math.min(n, Math.floor(d * n + (BAYER[(j % 4) * 4 + (i % 4)] - 0.5) * 0.9 + 0.5)));
const rampa = (cores, alfas, lv) => [...cores[lv - 1], alfas[lv - 1]];
function brilho(c, fx, fy, tam, cor = '#ffffff') { // estrela com cruz de luz
  const x = c.getContext('2d'), px = Math.round(fx * c.width), py = Math.round(fy * c.height);
  x.fillStyle = cor;
  x.globalAlpha = 0.5; x.fillRect(px - tam, py, tam * 2 + 1, 1); x.fillRect(px, py - tam, 1, tam * 2 + 1);
  x.globalAlpha = 1; x.fillRect(px - 1, py - 1, 2, 2); x.fillStyle = '#ffffff'; x.fillRect(px, py, 1, 1);
}
function poeira(c, n, semente, cores = ['#ffffff', '#c9d8ff', '#ffe9c0']) { // estrelinhas espalhadas
  const x = c.getContext('2d');
  for (let k = 0; k < n; k++) { x.fillStyle = cores[k % cores.length]; x.fillRect(Math.floor(hash(k, semente, 1) * c.width), Math.floor(hash(k, semente, 2) * c.height), 1, 1); }
}
function dentro(pts, x, y) { // ponto dentro de um polígono
  let r = false;
  for (let a = 0, b = pts.length - 1; a < pts.length; b = a++) {
    const [xa, ya] = pts[a], [xb, yb] = pts[b];
    if ((ya > y) !== (yb > y) && x < ((xb - xa) * (y - ya)) / (yb - ya) + xa) r = !r;
  }
  return r;
}

const OBJETOS = {
  // Nebulosa de Órion: gás rosa e azul com o núcleo brilhante e as quatro estrelas do Trapézio
  orion() {
    const c = pintar(150, 112, (i, j, nx0, ny0) => {
      const nx = nx0 * 1.18 + (fbm(nx0 * 2 + 1, ny0 * 2, 41) - 0.5) * 0.7, ny = ny0 * 1.18 + (fbm(nx0 * 2, ny0 * 2 + 3, 42) - 0.5) * 0.7; // forma menor que a imagem, para não encostar na borda
      const corpo = Math.max(0, 1 - Math.hypot(nx * 0.95, (ny + 0.05) * 1.25));
      const asa1 = Math.max(0, 1 - Math.hypot((nx + 0.5) * 1.3, (ny - 0.25) * 2.4));
      const asa2 = Math.max(0, 1 - Math.hypot((nx - 0.55) * 1.3, (ny + 0.15) * 2.6)) * 0.8;
      const g = fbm(nx * 2.8 + 4, ny * 2.8 + 1, 40);
      const nucleo = Math.max(0, 1 - Math.hypot(nx * 1.1 + 0.05, ny * 1.3 - 0.05) * 3);
      const lv = nivel(Math.min(1, (corpo * 0.9 + asa1 + asa2) * (0.3 + g * 1.2) + nucleo), i, j, 5);
      return lv ? rampa([[60, 50, 170], [140, 50, 180], [230, 80, 150], [255, 150, 185], [255, 238, 232]], [64, 100, 140, 190, 255], lv) : null;
    });
    poeira(c, 40, 5);
    for (const [fx, fy] of [[0.47, 0.47], [0.53, 0.5], [0.5, 0.43], [0.56, 0.45]]) brilho(c, fx, fy, 1);
    brilho(c, 0.2, 0.2, 3, '#bcd0ff'); brilho(c, 0.82, 0.78, 2, '#ffd9c0');
    return c;
  },
  // Pilares da Criação: colunas de poeira com o topo aceso e neblina laranja e verde-água
  pilares() {
    const colunas = [{ cx: -0.5, w: 0.19, top: -0.15 }, { cx: 0.02, w: 0.16, top: -0.78 }, { cx: 0.52, w: 0.17, top: 0.05 }];
    const c = pintar(130, 124, (i, j, nx, ny) => {
      for (let k = 0; k < colunas.length; k++) {
        const col = colunas[k], wob = (fbm(ny * 2.5 + k * 7, 3.3, 50) - 0.5) * 0.26, larg = col.w * (0.7 + 0.45 * (ny + 1) / 2), topo = col.top + (fbm(nx * 6 + k, 1.1, 60) - 0.5) * 0.16;
        if (ny > topo && Math.abs(nx - col.cx - wob) < larg) {
          const e = (col.cx + wob + larg - nx) / (2 * larg), tex = fbm(nx * 9, ny * 9, 70);
          const cor = e < 0.14 + tex * 0.12 ? [235, 160, 70] : e < 0.32 + tex * 0.12 ? [160, 85, 50] : [58 + tex * 30, 30 + tex * 16, 26 + tex * 10];
          return [cor[0], cor[1], cor[2], 255];
        }
        const dt = Math.hypot(nx - col.cx, ny - topo);
        if (dt < 0.16 && ny < topo) { const lv = nivel(((0.16 - dt) / 0.16) * 0.9, i, j, 3); if (lv) return rampa([[90, 200, 210], [170, 235, 230], [255, 250, 235]], [90, 150, 220], lv); }
      }
      const g = fbm(nx * 2.4 + 9, ny * 2.4, 80), d = (0.15 + g * 0.85) * Math.max(0, 1 - Math.hypot(nx * 0.95, ny * 0.85));
      const lv = nivel(d, i, j, 3);
      return lv ? rampa(g > 0.5 ? [[200, 110, 50], [230, 140, 60], [255, 190, 100]] : [[40, 120, 125], [60, 160, 160], [110, 210, 200]], [70, 110, 150], lv) : null;
    });
    poeira(c, 25, 9); brilho(c, 0.49, 0.13, 2, '#bff6ff'); brilho(c, 0.24, 0.4, 1, '#ffe0b0'); brilho(c, 0.76, 0.52, 1, '#ffe0b0');
    return c;
  },
  // Nebulosa do Caranguejo: filamentos alaranjados em volta de um coração azul com o pulsar no centro
  caranguejo() {
    const ca = Math.cos(0.5), sa = Math.sin(0.5);
    const c = pintar(110, 104, (i, j, nx, ny) => {
      const x = nx * ca + ny * sa, y = -nx * sa + ny * ca, e = Math.hypot(x / 0.92, y / 0.74);
      if (e > 1 || (e > 0.78 && ruido(x * 9, y * 9, 93) < (e - 0.78) * 4.5)) return null;
      const r1 = 1 - Math.abs(ruido(x * 8 + 3, y * 8, 90) - 0.5) * 2, r2 = 1 - Math.abs(ruido(x * 14, y * 14 + 5, 91) - 0.5) * 2;
      if (r1 > 0.85 && e > 0.3) return [255, 130, 55, 240];
      if (r2 > 0.92 && e > 0.2) return [120, 200, 255, 220];
      const lv = nivel((1 - e) * 0.7 * (0.4 + fbm(x * 3, y * 3, 92)), i, j, 3);
      return lv ? rampa([[50, 90, 200], [70, 130, 255], [130, 180, 255]], [50, 80, 120], lv) : null;
    });
    brilho(c, 0.5, 0.5, 3, '#cfe6ff');
    return c;
  },
  // Cabeça de Cavalo: nuvem escura contra o brilho vermelho do gás
  cavalo() {
    const poli = [[62, 112], [60, 80], [58, 64], [52, 54], [44, 50], [34, 52], [26, 60], [20, 66], [14, 64], [12, 56], [18, 46], [26, 38], [34, 24], [40, 14], [44, 6], [46, 18], [50, 24], [58, 22], [62, 18], [66, 26], [72, 42], [78, 60], [80, 80], [84, 112]];
    const c = pintar(112, 112, (i, j, nx, ny) => {
      if (dentro(poli, i + 0.5, j + 0.5)) return [10, 5, 18, 255];
      const g = fbm(nx * 2.5, ny * 2.5, 100), d = Math.max(0, 1 - Math.hypot(nx * 0.9, ny * 0.8)) * (0.35 + g * 1.1);
      const lv = nivel(d, i, j, 4);
      return lv ? rampa([[120, 20, 60], [190, 40, 80], [240, 90, 110], [255, 170, 170]], [70, 110, 160, 220], lv) : null;
    });
    poeira(c, 30, 13); brilho(c, 0.3, 0.2, 2, '#ffd0d8');
    return c;
  },
  // Galáxia de Andrômeda: espiral inclinada com braços, faixa de poeira e uma companheira
  andromeda() {
    const ca = Math.cos(-0.45), sa = Math.sin(-0.45);
    return pintar(160, 84, (i, j, nx, ny) => {
      const x = nx * ca + ny * sa, y = (-nx * sa + ny * ca) / 0.3, r = Math.hypot(x, y), th = Math.atan2(y, x);
      const braco = 0.5 + 0.5 * Math.sin(2 * th - r * 10), disco = Math.max(0, 1 - r) * (0.25 + 0.75 * braco) * (0.5 + fbm(x * 4, y * 4, 110));
      const poeira = Math.abs(r - 0.55) < 0.06 ? 0.5 * ruido(x * 9, y * 9, 111) : 0;
      let d = Math.min(1, Math.exp(-r * 6) * 1.2 + disco * 0.9 - poeira * 0.8);
      d = Math.max(d, Math.exp(-Math.hypot((nx - 0.62) * 7, (ny - 0.55) * 10) * 1.5) * 0.9);
      const lv = nivel(d, i, j, 5);
      return lv ? rampa([[70, 90, 200], [110, 140, 240], [170, 185, 255], [235, 220, 210], [255, 245, 210]], [60, 100, 150, 210, 255], lv) : null;
    });
  },
  // Galáxia do Sombrero: bojo claro e fina faixa de poeira escura no meio do disco
  sombrero() {
    return pintar(140, 64, (i, j, nx, ny) => {
      if (Math.abs(ny) < 0.07 && Math.abs(nx) < 0.92) return [70, 40, 28, Math.round(235 * (0.6 + 0.4 * ruido(nx * 20, ny * 20, 115)))];
      const bulbo = Math.max(0, 1 - Math.hypot(nx / 0.55, ny / 0.75)), disco = Math.abs(ny) < 0.2 * (1 - Math.abs(nx) * 0.35) && Math.abs(nx) < 1 ? (1 - Math.abs(nx)) * 0.8 : 0;
      const halo = Math.max(0, 1 - Math.hypot(nx / 0.9, ny / 0.9)) * 0.3;
      const lv = nivel(bulbo * 1.1 + disco + halo, i, j, 5);
      return lv ? rampa([[120, 90, 70], [190, 150, 100], [235, 200, 140], [255, 230, 175], [255, 248, 215]], [60, 100, 160, 220, 255], lv) : null;
    });
  },
  // Plêiades: estrelas azuis cercadas por uma nebulosa de reflexão
  pleiades() {
    const est = [[0.28, 0.3, 5], [0.45, 0.22, 4], [0.62, 0.34, 6], [0.5, 0.5, 5], [0.36, 0.62, 3], [0.7, 0.62, 4], [0.58, 0.78, 3], [0.22, 0.72, 2]];
    const c = pintar(110, 100, (i, j, nx, ny) => {
      let d = 0;
      for (const [fx, fy, t] of est) d += Math.exp((-Math.hypot((i / 110 - fx) * 1.1, j / 100 - fy) / 0.14) * (7 - t * 0.4));
      const lv = nivel(Math.min(1, d * (0.4 + fbm(nx * 3, ny * 3, 125))), i, j, 4);
      return lv ? rampa([[40, 80, 200], [70, 130, 255], [130, 180, 255], [200, 225, 255]], [60, 100, 150, 200], lv) : null;
    });
    for (const [fx, fy, t] of est) brilho(c, fx, fy, t, '#cfe0ff');
    return c;
  },
  // Nebulosa da Hélice ("olho de Deus"): anel de gás com o centro ciano e a borda vermelha
  helice() {
    const c = pintar(100, 100, (i, j, nx, ny) => {
      const r = Math.hypot(nx, ny);
      if (r > 0.98) return null;
      const ang = Math.atan2(ny, nx), g = 0.5 + 0.8 * fbm(Math.cos(ang) * 2 + 3, Math.sin(ang) * 2 + 3, 120) + 0.4 * fbm(nx * 6, ny * 6, 121);
      const ring = Math.exp(-(((r - 0.62) / 0.13) ** 2)), halo = r < 0.6 ? 0.28 * (1 - r) : 0, fora = r > 0.7 ? 0.4 * Math.exp(-(((r - 0.8) / 0.13) ** 2)) : 0;
      const lv = nivel(Math.min(1, (ring + halo + fora) * g), i, j, 4);
      if (!lv) return null;
      const cor = r < 0.55 ? [60, 230, 235] : r < 0.66 ? [190, 235, 120] : r < 0.75 ? [255, 170, 60] : [255, 70, 50];
      return [...cor, [60, 110, 170, 230][lv - 1]];
    });
    brilho(c, 0.5, 0.5, 2, '#ffffff');
    return c;
  },
  // Quasar: núcleo brilhante com jatos de luz e disco de gás
  quasar() {
    const ux = Math.cos(-0.9), uy = Math.sin(-0.9);
    const c = pintar(150, 100, (i, j, nx, ny) => {
      const along = nx * ux + ny * uy, perp = -nx * uy + ny * ux, r = Math.hypot(nx, ny);
      const jato = Math.exp(-((perp / 0.035) ** 2)) * Math.max(0, 1 - Math.abs(along) * 0.95) * (0.5 + 0.5 * fbm(along * 6, 0.5, 130));
      const disco = Math.exp(-((ny / 0.07) ** 2)) * Math.exp(-((nx / 0.45) ** 2)) * 0.8, halo = Math.exp(-Math.hypot(nx, ny * 1.2) * 3.2) * 0.55;
      const nucleo = Math.exp(-r * 9);
      const lv = nivel(Math.min(1, nucleo + jato + disco + halo), i, j, 5);
      return lv ? rampa([[90, 50, 190], [110, 120, 240], [100, 200, 255], [200, 240, 255], [255, 255, 255]], [60, 100, 150, 210, 255], lv) : null;
    });
    brilho(c, 0.5, 0.5, 4, '#cfeaff');
    return c;
  },
};
const cacheObjetos = {};
const objeto = (id) => (cacheObjetos[id] ??= OBJETOS[id]());
export const objetosDoCeu = () => Object.keys(OBJETOS).map((id) => ({ id, spr: objeto(id) })); // (usado nos testes)

// ---------- regiões do universo: uma por fase ----------
export const REGIOES = [
  { nome: 'NEBULOSA DE ÓRION', base: '#120a24', tom: '200, 60, 140', nebulosas: ['150, 40, 120', '60, 70, 170', '190, 70, 110'], objetos: ['orion', 'pleiades'], planetas: 0.6 },
  { nome: 'PILARES DA CRIAÇÃO', base: '#0b1519', tom: '220, 130, 50', nebulosas: ['40, 120, 120', '190, 110, 50', '60, 100, 60'], objetos: ['pilares'], planetas: 0.5 },
  { nome: 'NEBULOSA DO CARANGUEJO', base: '#0a1020', tom: '255, 120, 60', nebulosas: ['70, 110, 200', '200, 90, 50'], objetos: ['caranguejo'], planetas: 0.7 },
  { nome: 'CABEÇA DE CAVALO', base: '#14060f', tom: '200, 40, 70', nebulosas: ['170, 30, 70', '110, 30, 100'], objetos: ['cavalo'], planetas: 0.5 },
  { nome: 'GALÁXIA DE ANDRÔMEDA', base: '#090a1c', tom: '120, 140, 255', nebulosas: ['60, 60, 160', '100, 50, 150'], objetos: ['andromeda', 'sombrero'], planetas: 0.8 },
  { nome: 'NEBULOSA DA HÉLICE', base: '#07151a', tom: '60, 220, 230', nebulosas: ['30, 130, 140', '170, 60, 50'], objetos: ['helice'], planetas: 0.6 },
  { nome: 'GALÁXIA DO SOMBRERO', base: '#100d14', tom: '255, 200, 140', nebulosas: ['150, 100, 60', '80, 60, 120'], objetos: ['sombrero', 'andromeda'], planetas: 0.8 },
  { nome: 'QUASAR', base: '#080a18', tom: '140, 200, 255', nebulosas: ['40, 60, 180', '120, 40, 160'], objetos: ['quasar', 'pleiades'], planetas: 0.5 },
];

export function criarFundo(W, H) {
  const planetas = TIPOS_PLANETA.map((cfg, i) => gerarPlaneta(cfg, i * 13 + 3));
  const buf = document.createElement('canvas'); buf.width = W; buf.height = H;
  const gb = buf.getContext('2d'); gb.imageSmoothingEnabled = false;
  let meteoros = [];
  let espera = 2;
  let regAtual = -1, regAnt = -1, fade = 1;

  function passo(dt) {
    if (fade < 1) fade = Math.min(1, fade + dt / 1.8);
    espera -= dt;
    if (espera <= 0) {
      espera = 2.5 + Math.random() * 4;
      const a = 0.35 + Math.random() * 0.3, v = 190 + Math.random() * 90;
      meteoros.push({ x: Math.random() * W * 0.8, y: -4, vx: Math.cos(a) * v, vy: Math.sin(a) * v, vida: 0, max: 1.4 });
    }
    for (const m of meteoros) { m.x += m.vx * dt; m.y += m.vy * dt; m.vida += dt; }
    meteoros = meteoros.filter((m) => m.vida < m.max && m.x < W + 20 && m.y < H + 20);
  }

  // percorre as células de uma camada que aparecem na tela (posição no espaço da camada = posição real * f)
  function celulas(camX, camY, f, cel, margem, fn) {
    const lx = camX * f, ly = camY * f;
    const c0 = Math.floor((lx - W / 2 - margem) / cel), c1 = Math.floor((lx + W / 2 + margem) / cel);
    const r0 = Math.floor((ly - H / 2 - margem) / cel), r1 = Math.floor((ly + H / 2 + margem) / cel);
    for (let cy = r0; cy <= r1; cy++) for (let cx = c0; cx <= c1; cx++) fn(cx, cy, cx * cel - lx + W / 2, cy * cel - ly + H / 2);
  }

  // uma região inteira do universo: cor do céu, nebulosas, objetos famosos, planetas e estrelas
  function cena(g, camX, camY, t, ri) {
    const R = REGIOES[ri % REGIOES.length], reg = ri % REGIOES.length;
    g.fillStyle = R.base;
    g.fillRect(0, 0, W, H);

    // nebulosas (bem longe): círculos concêntricos de baixa opacidade formam degraus de brilho
    celulas(camX, camY, 0.06, 400, 160, (cx, cy, ox, oy) => {
      if (hash(cx, cy, 90 + reg) > 0.7) return;
      const raio = 70 + hash(cx, cy, 91) * 80, cor = R.nebulosas[Math.floor(hash(cx, cy, 92) * R.nebulosas.length)];
      const px = ox + hash(cx, cy, 93) * 400, py = oy + hash(cx, cy, 94) * 400;
      for (let k = 0; k < 5; k++) { g.fillStyle = `rgba(${cor}, 0.07)`; g.beginPath(); g.arc(Math.round(px), Math.round(py), Math.max(0, raio * (1 - k * 0.18)), 0, Math.PI * 2); g.fill(); }
    });

    // objetos famosos (galáxias e nebulosas), bem ao fundo e se movendo devagar
    celulas(camX, camY, 0.1, 360, 170, (cx, cy, ox, oy) => {
      if (hash(cx, cy, 200 + reg * 3) > 0.8) return;
      const spr = objeto(R.objetos[Math.floor(hash(cx, cy, 201) * R.objetos.length)]);
      const px = ox + (0.1 + hash(cx, cy, 202) * 0.6) * 360, py = oy + (0.1 + hash(cx, cy, 203) * 0.6) * 360;
      g.globalAlpha = 0.92;
      g.drawImage(spr, Math.round(px - spr.width / 2), Math.round(py - spr.height / 2));
      g.globalAlpha = 1;
    });
    g.fillStyle = `rgba(${R.tom}, 0.05)`; g.fillRect(0, 0, W, H); // tom geral da região

    // planetas das duas camadas (a mais longe é mais escura e se move menos)
    CAMADAS_PLANETAS.forEach((c, ci) => {
      g.globalAlpha = c.alfa;
      celulas(camX, camY, c.f, c.cel, 130, (cx, cy, ox, oy) => {
        if (hash(cx, cy, c.semente) > c.prob * (R.planetas ?? 1)) return;
        const tipo = Math.floor(hash(cx, cy, c.semente + 1) * planetas.length);
        const escala = c.escalaMax > 1 && TIPOS_PLANETA[tipo].r <= 15 && hash(cx, cy, c.semente + 2) < 0.4 ? 2 : 1;
        const spr = planetas[tipo];
        const px = ox + (0.15 + hash(cx, cy, c.semente + 3) * 0.7) * c.cel, py = oy + (0.15 + hash(cx, cy, c.semente + 4) * 0.7) * c.cel;
        g.drawImage(spr, Math.round(px - (spr.width * escala) / 2), Math.round(py - (spr.height * escala) / 2), spr.width * escala, spr.height * escala);
      });
      for (const p of PLANETAS_FIXOS) {
        if (p.camada !== ci) continue;
        const spr = planetas[p.tipo];
        const sx = p.x - camX * c.f + W / 2, sy = p.y - camY * c.f + H / 2;
        g.drawImage(spr, Math.round(sx - (spr.width * p.escala) / 2), Math.round(sy - (spr.height * p.escala) / 2), spr.width * p.escala, spr.height * p.escala);
      }
      g.globalAlpha = 1;
    });

    // estrelas em camadas; as que piscam alternam entre brilhante e apagada
    for (const c of CAMADAS_ESTRELAS) {
      celulas(camX, camY, c.f, c.cel, 4, (cx, cy, ox, oy) => {
        for (let i = 0; i < c.n; i++) {
          const x = Math.round(ox + hash(cx, cy, i * 7 + 1) * c.cel), y = Math.round(oy + hash(cx, cy, i * 7 + 2) * c.cel);
          if (x < -2 || x > W + 2 || y < -2 || y > H + 2) continue;
          const cor = c.cores[Math.floor(hash(cx, cy, i * 7 + 3) * c.cores.length)];
          const fase = hash(cx, cy, i * 7 + 4) * 6.28, vel = 1 + hash(cx, cy, i * 7 + 5) * 2.2;
          const acesa = !c.pisca || Math.sin(t * vel + fase) > -0.35;
          if (!acesa) continue;
          g.fillStyle = cor;
          g.fillRect(x, y, 1, 1);
          if (c.grande && hash(cx, cy, i * 7 + 6) < c.grande) { g.fillRect(x - 1, y, 3, 1); g.fillRect(x, y - 1, 1, 3); } // estrela maior em cruz
        }
      });
    }
  }

  // ri: índice da região (muda a cada fase); na troca, a nova região surge aos poucos por cima da anterior
  function desenhar(g, camX, camY, t, ri = 0) {
    if (ri !== regAtual) { regAnt = regAtual; regAtual = ri; fade = regAnt < 0 ? 1 : 0; }
    if (fade < 1 && regAnt >= 0) {
      cena(g, camX, camY, t, regAnt);
      cena(gb, camX, camY, t, regAtual);
      g.globalAlpha = fade; g.drawImage(buf, 0, 0); g.globalAlpha = 1;
    } else cena(g, camX, camY, t, regAtual);

    // estrelas cadentes
    for (const m of meteoros) {
      const sumindo = 1 - m.vida / m.max;
      for (let k = 0; k < 12; k++) {
        const px = Math.round(m.x - m.vx * k * 0.011), py = Math.round(m.y - m.vy * k * 0.011);
        g.globalAlpha = Math.max(0, sumindo * (1 - k / 12));
        g.fillStyle = k < 2 ? '#ffffff' : '#8bd3ff';
        g.fillRect(px, py, k < 2 ? 2 : 1, k < 2 ? 2 : 1);
      }
      g.globalAlpha = 1;
    }
  }

  return { desenhar, passo };
}
