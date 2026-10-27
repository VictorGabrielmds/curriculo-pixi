// Obstáculos fixos do mapa do jogo de nave (o mundo é infinito: cada "célula" tem um conteúdo sorteado por hash, sempre igual):
//  - planetas e luas: corpos sólidos, ninguém atravessa (a nave e os monstros contornam);
//  - cadeias de rochas: muralhas curvas de pedras, sólidas, com uma ou duas brechas para passar;
//  - campos de detritos: nuvens de poeira e cascalho que deixam lento quem estiver dentro (a nave e os monstros).
// Fica sempre livre a região de partida.
import { planetasSprites } from './arcadeFundo.js';

const CEL = 520;
const hash = (a, b, c = 0) => {
  let x = (Math.imul(a | 0, 374761393) ^ Math.imul(b | 0, 668265263) ^ Math.imul(c | 0, 1274126177)) | 0;
  x = Math.imul(x ^ (x >>> 13), 1103515245);
  x ^= x >>> 16;
  return (x >>> 0) / 4294967296;
};

export function criarObstaculos({ inicioX, inicioY, rochasSpr }) {
  const cache = new Map();
  // pedras das muralhas ficam mais escuras e arroxeadas, para não parecerem as rochas quebráveis dos itens
  const escuras = rochasSpr.map((r) => {
    const src = r.quadros[0], c = document.createElement('canvas'); c.width = src.width; c.height = src.height;
    const x = c.getContext('2d'); x.drawImage(src, 0, 0); x.globalCompositeOperation = 'source-atop'; x.fillStyle = 'rgba(70, 40, 110, 0.55)'; x.fillRect(0, 0, c.width, c.height);
    return c;
  });
  const longeDoInicio = (x, y, folga = 0) => Math.hypot(x - inicioX, y - inicioY) > 300 + folga;

  function gerar(cx, cy) {
    const c = { circ: [], zonas: [], planetas: [], rochas: [] };
    const h = (i) => hash(cx, cy, 300 + i);
    const ox = cx * CEL, oy = cy * CEL;
    if (h(1) >= 0.5) return c;
    const t = h(2);
    if (t < 0.22) { // planeta ou lua
      const sprs = planetasSprites(), tipo = Math.floor(h(3) * sprs.length), spr = sprs[tipo];
      const rBase = (spr.height - 2) / 2, esc = rBase >= 13 ? 2 : 3;
      const x = ox + 90 + h(4) * (CEL - 180), y = oy + 90 + h(5) * (CEL - 180);
      if (longeDoInicio(x, y, 70)) { const r = rBase * esc * 0.92; c.planetas.push({ x, y, spr, esc }); c.circ.push({ x, y, r }); }
    } else if (t < 0.62) { // cadeia de rochas
      const a = h(5) * Math.PI * 2, len = 150 + h(6) * 130, arco = (h(7) - 0.5) * 70;
      const x0 = ox + 120 + h(8) * (CEL - 240), y0 = oy + 120 + h(9) * (CEL - 240);
      const brecha1 = (0.2 + 0.6 * h(10)) * len, brecha2 = h(11) < 0.5 ? ((brecha1 / len + 0.4) % 1) * len : -999;
      const n = Math.floor(len / 13);
      for (let i = 0; i <= n; i++) {
        const u = i / n, d = u * len;
        if (Math.abs(d - brecha1) < 24 || Math.abs(d - brecha2) < 24) continue; // brechas de ~48 px: a nave passa
        const s = Math.sin(u * Math.PI) * arco;
        const x = x0 + Math.cos(a) * d - Math.sin(a) * s, y = y0 + Math.sin(a) * d + Math.cos(a) * s;
        if (!longeDoInicio(x, y, 10)) continue;
        const tam = hash(cx * 31 + i, cy, 330) < 0.6 ? 0 : 1, r = [8, 10][tam];
        c.rochas.push({ x, y, tam }); c.circ.push({ x, y, r: r * 0.85 });
      }
    } else { // campo de detritos (lento)
      const r = 70 + h(11) * 50, x = ox + r + h(12) * (CEL - 2 * r), y = oy + r + h(13) * (CEL - 2 * r);
      if (longeDoInicio(x, y, r)) {
        const pedrinhas = Array.from({ length: 34 }, (_, k) => { const an = hash(cx, cy, 400 + k) * Math.PI * 2, di = Math.sqrt(hash(cx, cy, 440 + k)) * r * 0.95; return { dx: Math.cos(an) * di, dy: Math.sin(an) * di, tam: 1 + Math.floor(hash(cx, cy, 480 + k) * 3), cor: hash(cx, cy, 520 + k) < 0.5 ? '#9a8a7a' : '#6a5a50', fase: hash(cx, cy, 560 + k) * 6.28 }; });
        c.zonas.push({ x, y, r, pedrinhas });
      }
    }
    return c;
  }
  const celula = (cx, cy) => { const k = cx + ',' + cy; let c = cache.get(k); if (!c) { c = gerar(cx, cy); cache.set(k, c); } return c; };
  function vizinhas(x, y, fn) {
    const cx = Math.floor(x / CEL), cy = Math.floor(y / CEL);
    for (let j = -1; j <= 1; j++) for (let i = -1; i <= 1; i++) fn(celula(cx + i, cy + j));
  }

  // fator de velocidade em (x, y): 1 = livre; menor que 1 = dentro de um campo de detritos
  function fatorLento(x, y) {
    let f = 1;
    vizinhas(x, y, (c) => { for (const z of c.zonas) if (Math.hypot(x - z.x, y - z.y) < z.r) f = Math.min(f, 0.5); });
    return f;
  }

  // empurra o objeto (com x, y) para fora dos corpos sólidos. Com alvo, ele desliza em volta do obstáculo rumo ao alvo (para monstros não ficarem presos).
  function empurrar(o, raio, alvo = null, passo = 0) {
    let tocou = false;
    vizinhas(o.x, o.y, (c) => {
      for (const s of c.circ) {
        const dx = o.x - s.x, dy = o.y - s.y, min = s.r + raio;
        if (Math.abs(dx) > min || Math.abs(dy) > min) continue;
        const d = Math.hypot(dx, dy) || 0.001;
        if (d >= min) continue;
        const nx = dx / d, ny = dy / d;
        o.x = s.x + nx * min; o.y = s.y + ny * min; tocou = true;
        if (alvo && passo > 0) {
          const tx = -ny, ty = nx, lado = Math.sign((alvo.x - o.x) * tx + (alvo.y - o.y) * ty) || ((o.fase || 0) > 3 ? 1 : -1);
          o.x += tx * lado * passo; o.y += ty * lado * passo;
        }
      }
    });
    return tocou;
  }

  // desenha o que está na tela (g já está transladado para as coordenadas do mundo)
  function desenhar(g, ox, oy, L, A, t) {
    const c0 = Math.floor((ox - 200) / CEL), c1 = Math.floor((ox + L + 200) / CEL), r0 = Math.floor((oy - 200) / CEL), r1 = Math.floor((oy + A + 200) / CEL);
    const dentro = (x, y, m) => x > ox - m && x < ox + L + m && y > oy - m && y < oy + A + m;
    for (let j = r0 - 1; j <= r1 + 1; j++) for (let i = c0 - 1; i <= c1 + 1; i++) {
      const c = celula(i, j);
      for (const z of c.zonas) { // campo de detritos: névoa de poeira, borda tracejada e cascalho
        if (!dentro(z.x, z.y, z.r + 10)) continue;
        for (let k = 0; k < 4; k++) { g.fillStyle = 'rgba(150, 115, 80, 0.07)'; g.beginPath(); g.arc(Math.round(z.x), Math.round(z.y), z.r * (1 - k * 0.2), 0, Math.PI * 2); g.fill(); }
        g.save(); g.strokeStyle = 'rgba(200, 160, 110, 0.4)'; g.lineWidth = 1; g.setLineDash([3, 5]); g.beginPath(); g.arc(Math.round(z.x), Math.round(z.y), z.r, 0, Math.PI * 2); g.stroke(); g.restore();
        for (const p of z.pedrinhas) { g.fillStyle = p.cor; g.fillRect(Math.round(z.x + p.dx + Math.sin(t * 0.6 + p.fase) * 2), Math.round(z.y + p.dy + Math.cos(t * 0.5 + p.fase) * 2), p.tam, p.tam); }
      }
      for (const p of c.planetas) {
        if (!dentro(p.x, p.y, p.spr.width * p.esc)) continue;
        g.drawImage(p.spr, Math.round(p.x - (p.spr.width * p.esc) / 2), Math.round(p.y - (p.spr.height * p.esc) / 2), p.spr.width * p.esc, p.spr.height * p.esc);
        g.save(); g.strokeStyle = 'rgba(255, 236, 190, 0.3)'; g.lineWidth = 1; g.beginPath(); g.arc(Math.round(p.x), Math.round(p.y), ((p.spr.height - 2) / 2) * p.esc + 4, 0, Math.PI * 2); g.stroke(); g.restore(); // anel que marca o corpo sólido
      }
      for (const r of c.rochas) {
        if (!dentro(r.x, r.y, 20)) continue;
        const spr = escuras[r.tam];
        g.drawImage(spr, Math.round(r.x - spr.width / 2), Math.round(r.y - spr.height / 2));
      }
    }
  }

  return { fatorLento, empurrar, desenhar, celula };
}
