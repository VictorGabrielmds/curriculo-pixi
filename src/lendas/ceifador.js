// CEIFADOR, o Rei Esqueleto: um fantasma de capuz com a foice nas mãos e chamas verdes em volta do crânio. Solta almas que perseguem
// a nave, ergue muralhas de ossos com uma brecha para passar, lança a foice como um bumerangue e chama a legião dos mortos.
import { TAU, normAng, dirPara, aleatorio, poli, disco, elip, traco, rodear } from './base.js';

const COR = { manto: '#2b1740', dobra: '#4a2a6e', osso: '#efe6c8', fogo: '#7dff9a', fogo2: '#d6ffe0', lamina: '#cfe3ff', cabo: '#6a4a2e' };
const foice = (x, ang, tam, c) => { // lâmina em meia-lua, centrada no cabo
  x.save(); x.rotate(ang); x.scale(tam, tam);
  poli(x, [[0, -2], [14, -16], [-4, -22], [-22, -10], [-6, -12], [8, -8]], c);
  traco(x, [[14, -16], [-4, -22], [-22, -10]], 1.2, '#ffffff');
  x.restore();
};

export const ceifador = {
  id: 'ceifador', nome: 'CEIFADOR', titulo: 'O REI ESQUELETO', cor: '#7dff9a', raio: 15, hpMult: 1.5, vitorias: 3, tela: [190, 190], gira: false,
  desc: 'Almas que perseguem, muralhas de ossos com uma brecha e uma foice que sempre volta.',
  criar(c) { Object.assign(c, { brilho: 0, foice: null }); },

  desenhar(x, c, t) {
    const bob = Math.sin(t * 2) * 2.5, enf = c.enfurecido, br = c.brilho || 0, cor = enf ? { ...COR, fogo: '#ff7a3a', fogo2: '#ffe0b0', manto: '#3a1030' } : COR;
    x.save(); x.translate(0, bob);
    for (let k = 0; k < 9; k++) { // chamas em volta do capuz
      const a = (k * TAU) / 9 + t * 0.4, px = Math.cos(a) * 18, py = -22 + Math.sin(a) * 19, h = 8 + Math.sin(t * 9 + k * 2.1) * 3 + br * 4;
      poli(x, [[px - 3.4, py], [px, py - h], [px + 3.4, py]], cor.fogo); poli(x, [[px - 1.6, py], [px, py - h * 0.6], [px + 1.6, py]], cor.fogo2);
    }
    // manto com a barra rasgada
    const base = [];
    for (let i = 0; i <= 8; i++) base.push([24 - i * 6, 36 + (i % 2 ? 8 : 0) + Math.sin(t * 3 + i) * 2.2]);
    poli(x, [[-13, -8], [13, -8], ...base], cor.manto);
    traco(x, [[-4, -2], [-13, 32]], 2, cor.dobra); traco(x, [[5, -2], [11, 33]], 2, cor.dobra); traco(x, [[0, 4], [0, 34]], 1.4, '#1a0d28');
    // mangas e mãos de osso
    poli(x, [[-12, -4], [-28, 10], [-21, 20], [-7, 6]], cor.manto); poli(x, [[12, -4], [27, 8], [20, 18], [7, 5]], cor.manto);
    // foice (cabo e lâmina), a menos que esteja no ar
    const sway = Math.sin(t * 1.5) * 0.06;
    if (!c.foice || c.foice.estado === 'carga') {
      x.save(); x.rotate(sway);
      traco(x, [[-30, 38], [26, -36]], 3.4, '#2a1a0c'); traco(x, [[-30, 38], [26, -36]], 1.8, cor.cabo);
      x.save(); x.translate(26, -36); foice(x, 0.15, 1, cor.lamina); x.restore();
      x.restore();
    }
    disco(x, -22, 14, 3.2, cor.osso); disco(x, 14, -2.5, 3.2, cor.osso);
    // capuz e crânio
    elip(x, 0, -22, 16.5, 18.5, cor.manto); elip(x, 0, -21, 11.5, 13.5, '#07030f');
    elip(x, 0, -20.5, 8.8, 9.8, cor.osso); elip(x, -2.5, -23, 4, 3, '#ffffff');
    for (const l of [-1, 1]) { disco(x, l * 3.7, -21.5, 3, '#06020c'); disco(x, l * 3.7, -21.5, 1.6 + br * 0.9, cor.fogo); disco(x, l * 3.7, -21.5, 0.7, cor.fogo2); }
    poli(x, [[0, -17.5], [-1.5, -14], [1.5, -14]], '#06020c');
    elip(x, 0, -12.5, 5.6, 3.2, cor.osso); for (const dx of [-3, -1, 1, 3]) traco(x, [[dx, -14], [dx, -11.2]], 0.9, '#06020c');
    x.restore();
  },

  efeitos(g, c, t, ctx) {
    const S = ctx.S, x = Math.round(c.x), y = Math.round(c.y), brilho = g.createRadialGradient(x, y, 6, x, y, 58);
    const rgb = c.enfurecido ? '255, 122, 58' : '125, 255, 154';
    brilho.addColorStop(0, `rgba(${rgb}, ${0.18 + (c.brilho || 0) * 0.16})`); brilho.addColorStop(1, `rgba(${rgb}, 0)`);
    g.fillStyle = brilho; g.fillRect(x - 58, y - 58, 116, 116);
    const a = c.acao, pisca = Math.floor(S.ta * 12) % 2 === 0;
    if (a?.nome === 'paredeOssos' && a.t < 0.8) { // linha onde a muralha vai surgir, com a brecha em destaque
      const p = a.dir + Math.PI / 2, cx = c.x + Math.cos(a.dir) * 38, cy = c.y + Math.sin(a.dir) * 38;
      g.strokeStyle = pisca ? '#efe6c8' : '#7dff9a'; g.lineWidth = 1; g.setLineDash([3, 3]);
      g.beginPath(); g.moveTo(cx - Math.cos(p) * 76, cy - Math.sin(p) * 76); g.lineTo(cx + Math.cos(p) * 76, cy + Math.sin(p) * 76); g.stroke(); g.setLineDash([]);
      g.strokeStyle = '#ffffff'; g.lineWidth = 2; g.beginPath(); g.moveTo(cx + Math.cos(p) * a.gap * 9, cy + Math.sin(p) * a.gap * 9); g.lineTo(cx + Math.cos(p) * (a.gap + 1) * 9, cy + Math.sin(p) * (a.gap + 1) * 9); g.stroke();
    }
    const f = c.foice;
    if (f) {
      if (f.estado === 'carga') { g.strokeStyle = pisca ? '#7dff9a' : '#ffffff'; g.lineWidth = 2; g.setLineDash([4, 4]); g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(f.dir) * 150, y + Math.sin(f.dir) * 150); g.stroke(); g.setLineDash([]); }
      else {
        g.save(); g.translate(Math.round(f.x), Math.round(f.y)); g.rotate(f.ang);
        g.fillStyle = 'rgba(125, 255, 154, 0.35)'; g.beginPath(); g.arc(0, 0, 15, 0, TAU); g.fill();
        g.fillStyle = '#cfe3ff'; g.strokeStyle = '#ffffff'; g.lineWidth = 1; g.beginPath(); g.moveTo(0, -2); g.lineTo(14, -16); g.lineTo(-4, -22); g.lineTo(-22, -10); g.lineTo(-6, -12); g.lineTo(8, -8); g.closePath(); g.fill(); g.stroke();
        g.restore();
      }
    }
  },

  mover(c, dt, ctx, entrando) {
    c.brilho = Math.max(0, (c.brilho || 0) - dt * 1.5);
    if (c.parado) return;
    rodear(c, dt, ctx, { ideal: 86, vel: 27 + (c.enfurecido ? 8 : 0), tang: 0.5, entrando });
  },
  passivo(c, dt, ctx) { // a foice voa sozinha: vai, gira e volta
    const f = c.foice; if (!f) return;
    const S = ctx.S; f.t += dt; f.ang += 15 * dt;
    if (f.estado === 'carga') { f.x = c.x; f.y = c.y; if (f.t >= 0.55) { f.estado = 'ida'; f.t = 0; ctx.bip(300, 0.15, 'sawtooth', 0.05); } return; }
    if (f.estado === 'ida') { f.x += Math.cos(f.dir) * 150 * dt; f.y += Math.sin(f.dir) * 150 * dt; if (f.t >= 0.95) { f.estado = 'volta'; f.t = 0; } }
    else { const a = Math.atan2(c.y - f.y, c.x - f.x); f.x += Math.cos(a) * 190 * dt; f.y += Math.sin(a) * 190 * dt; if (Math.hypot(c.x - f.x, c.y - f.y) < 12) { c.foice = null; return; } }
    if (Math.hypot(S.nx - f.x, S.ny - f.y) < 13) ctx.ferir(2);
    if (Math.random() < 0.5) ctx.particulas(f.x, f.y, 1, ['#7dff9a', '#ffffff'], 30);
  },
  enfurecer(c) { c.brilho = 1; },

  ataques: {
    almas: {
      peso: 3, dur: 2.3, descanso: 1.1,
      iniciar(c, ctx) { c.parado = true; ctx.texto(c.x, c.y - 48, 'ALMAS!', '#9dffb0'); ctx.bip(220, 0.4, 'sine', 0.05); },
      tick(c, dt, ctx, a) {
        c.brilho = 1;
        const n = c.enfurecido ? 6 : 4;
        for (let k = 0; k < n; k++) if (a.t >= 0.5 + k * 0.22 && !a['s' + k]) {
          a['s' + k] = true; const ang = -Math.PI / 2 + (k - (n - 1) / 2) * 0.55;
          ctx.tiro(c.x + Math.cos(ang) * 16, c.y - 18 + Math.sin(ang) * 12, ang, 40, { cor: '#9dffb0', r: 3, vida: 5.5, forma: 'cranio', giro: 1.5 });
          ctx.bip(520 + k * 60, 0.08, 'triangle', 0.04);
        }
      },
    },
    paredeOssos: {
      peso: 3, dur: 2.5, descanso: 1.1,
      iniciar(c, ctx, a) { c.parado = true; a.gap = Math.floor(aleatorio(-5, 4)); a.gap2 = Math.floor(aleatorio(-5, 4)); ctx.texto(c.x, c.y - 48, 'MURALHA DE OSSOS', '#efe6c8'); ctx.bip(120, 0.4, 'square', 0.05); },
      tick(c, dt, ctx, a) {
        const muralha = (gap, dir) => {
          const p = dir + Math.PI / 2, cx = c.x + Math.cos(dir) * 38, cy = c.y + Math.sin(dir) * 38;
          for (let i = -8; i <= 8; i++) { if (i === gap || i === gap + 1) continue; ctx.tiro(cx + Math.cos(p) * i * 9, cy + Math.sin(p) * i * 9, dir, 58, { cor: '#efe6c8', r: 2.4, vida: 5, forma: 'osso' }); }
          ctx.tremor(0.15); ctx.bip(110, 0.2, 'sawtooth', 0.05);
        };
        if (a.t >= 0.8 && !a.m1) { a.m1 = true; muralha(a.gap, a.dir); }
        if (c.enfurecido && a.t >= 1.5 && !a.m2) { a.m2 = true; muralha(a.gap2, dirPara(c, ctx.S)); }
      },
    },
    foice: {
      peso: 2, dur: 3.1, descanso: 1.2,
      permite: (c) => !c.foice,
      iniciar(c, ctx) { c.parado = true; c.foice = { x: c.x, y: c.y, ang: 0, estado: 'carga', t: 0, dir: dirPara(c, ctx.S) }; ctx.texto(c.x, c.y - 48, 'FOICE!', '#cfe3ff'); },
      fim(c) { c.foice = null; },
    },
    legiao: {
      peso: 2, dur: 1.3, descanso: 1.4,
      permite: (c, ctx) => ctx.S.inimigos.filter((m) => m.tipo === 'fantasma').length < 7,
      iniciar(c, ctx) {
        c.parado = true; c.brilho = 1; ctx.texto(c.x, c.y - 48, 'LEGIÃO!', '#9dffb0'); ctx.bip(180, 0.5, 'sawtooth', 0.05);
        for (let i = 0; i < 3; i++) { const a = (i * TAU) / 3 + Math.random(); ctx.invocar('fantasma', c.x + Math.cos(a) * 30, c.y + Math.sin(a) * 30); }
        ctx.particulas(c.x, c.y, 18, ['#7dff9a', '#ffffff', '#2b1740'], 80);
      },
    },
  },
};
