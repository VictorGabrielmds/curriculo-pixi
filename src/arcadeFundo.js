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
const CORES_NEBULOSA = ['58, 31, 122', '122, 31, 90', '31, 90, 122', '31, 122, 74'];

export function criarFundo(W, H) {
  const planetas = TIPOS_PLANETA.map((cfg, i) => gerarPlaneta(cfg, i * 13 + 3));
  let meteoros = [];
  let espera = 2;

  function passo(dt) {
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

  function desenhar(g, camX, camY, t) {
    g.fillStyle = '#0b1026';
    g.fillRect(0, 0, W, H);

    // nebulosas (bem longe): círculos concêntricos de baixa opacidade formam degraus de brilho
    celulas(camX, camY, 0.06, 400, 160, (cx, cy, ox, oy) => {
      if (hash(cx, cy, 90) > 0.55) return;
      const raio = 70 + hash(cx, cy, 91) * 70, cor = CORES_NEBULOSA[Math.floor(hash(cx, cy, 92) * CORES_NEBULOSA.length)];
      const px = ox + hash(cx, cy, 93) * 400, py = oy + hash(cx, cy, 94) * 400;
      for (let k = 0; k < 5; k++) { g.fillStyle = `rgba(${cor}, 0.06)`; g.beginPath(); g.arc(Math.round(px), Math.round(py), raio * (1 - k * 0.18), 0, Math.PI * 2); g.fill(); }
    });

    // planetas das duas camadas (a mais longe é mais escura e se move menos)
    CAMADAS_PLANETAS.forEach((c, ci) => {
      g.globalAlpha = c.alfa;
      celulas(camX, camY, c.f, c.cel, 130, (cx, cy, ox, oy) => {
        if (hash(cx, cy, c.semente) > c.prob) return;
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
