// ARAUTO, o Olho do Vazio: um olho que flutua, pisca no espaço e vira a sua cabeça do avesso. Inverte os controles da nave,
// gira um raio de gravidade, manda olhos menores atirarem e puxa tudo para um vazio. Ao enfurecer, teleporta sem parar.
import { TAU, normAng, dirPara, aleatorio, poli, disco, elip, traco, rodear } from './base.js';

export const arauto = {
  id: 'arauto', nome: 'ARAUTO', titulo: 'O OLHO DO VAZIO', cor: '#b58cff', raio: 16, hpMult: 1.4, vitorias: 6, tela: [180, 180], gira: false,
  desc: 'Ele olha de volta. Inverte seus controles, gira um raio de gravidade e chama olhos que atiram.',
  criar(c) { Object.assign(c, { olhar: 0, abertura: 0.85, orb: 0, dilat: 0, tpT: 5 }); },

  desenhar(x, c, t) {
    const enf = c.enfurecido, ab = c.abertura ?? 0.85, ol = c.olhar || 0, pupila = 3.2 + (c.dilat || 0) * 3;
    const cor = enf ? { iris1: '#ff3b6a', iris2: '#ffb02e', aura: '#ff7aa0' } : { iris1: '#6a3dff', iris2: '#c9a4ff', aura: '#b58cff' };
    // tentáculos finos atrás
    for (let k = 0; k < 7; k++) {
      const b = (k * TAU) / 7 + t * 0.2, pts = [];
      for (let s = 0; s < 12; s++) { const d = 30 + s * 4.2, o = Math.sin(t * 2.5 - s * 0.6 + k) * (1.5 + s * 0.4); pts.push([Math.cos(b) * d - Math.sin(b) * o, Math.sin(b) * d + Math.cos(b) * o]); }
      traco(x, pts, 3.6, '#2a1344'); traco(x, pts, 1.6, '#6a3dff');
    }
    // olhos menores em órbita
    for (let k = 0; k < 4; k++) {
      const a = (c.orb || 0) + (k * TAU) / 4, ox = Math.cos(a) * 55, oy = Math.sin(a) * 55;
      traco(x, [[Math.cos(a) * 33, Math.sin(a) * 33], [ox, oy]], 2, '#6a3dff');
      disco(x, ox, oy, 7.5, '#e8e4ff'); disco(x, ox + Math.cos(ol) * 2, oy + Math.sin(ol) * 2, 4.2, cor.iris1); disco(x, ox + Math.cos(ol) * 2.6, oy + Math.sin(ol) * 2.6, 2, '#12062a');
    }
    // o olho grande: pálpebras em forma de amêndoa
    const w = 38, h = 30 * ab;
    x.save();
    x.beginPath(); x.moveTo(-w, 0); x.quadraticCurveTo(0, -h * 1.9, w, 0); x.quadraticCurveTo(0, h * 1.9, -w, 0); x.closePath();
    x.fillStyle = '#e8e4ff'; x.fill(); x.clip();
    for (const [ang, comp] of [[-0.5, 26], [0.3, 28], [2.7, 24], [3.5, 26], [-2.5, 22]]) traco(x, [[Math.cos(ang) * 38, Math.sin(ang) * 6], [Math.cos(ang) * 38 - Math.cos(ang) * comp, Math.sin(ang) * 6 - Math.sin(ang) * comp * 0.5]], 1.2, '#d8506a');
    const ix = Math.cos(ol) * 9, iy = Math.sin(ol) * 5 * ab;
    disco(x, ix, iy, 18, cor.iris1); disco(x, ix, iy, 13.5, cor.iris2); disco(x, ix, iy, 9, cor.iris1);
    for (let k = 0; k < 10; k++) { const a = (k * TAU) / 10 + t * 0.3; traco(x, [[ix + Math.cos(a) * 9, iy + Math.sin(a) * 9], [ix + Math.cos(a) * 17, iy + Math.sin(a) * 17]], 1, cor.iris2); }
    elip(x, ix, iy, pupila, 12.5, '#0a0316'); disco(x, ix - 5, iy - 6, 2.4, '#ffffff');
    x.restore();
    x.beginPath(); x.moveTo(-w, 0); x.quadraticCurveTo(0, -h * 1.9, w, 0); x.quadraticCurveTo(0, h * 1.9, -w, 0); x.closePath();
    x.strokeStyle = '#2a1344'; x.lineWidth = 3.2; x.stroke();
    poli(x, [[-w - 3, 0], [-w + 6, -4], [-w + 6, 4]], '#2a1344'); poli(x, [[w + 3, 0], [w - 6, -4], [w - 6, 4]], '#2a1344');
  },

  efeitos(g, c, t, ctx) {
    const S = ctx.S, x = Math.round(c.x), y = Math.round(c.y), brilho = g.createRadialGradient(x, y, 8, x, y, 78);
    brilho.addColorStop(0, `rgba(181, 140, 255, ${c.enfurecido ? 0.34 : 0.22})`); brilho.addColorStop(1, 'rgba(181, 140, 255, 0)');
    g.fillStyle = brilho; g.fillRect(x - 78, y - 78, 156, 156);
    g.strokeStyle = 'rgba(200, 170, 255, 0.45)'; g.lineWidth = 1; g.setLineDash([6, 8]); g.lineDashOffset = -S.ta * 14; g.beginPath(); g.arc(x, y, 72, 0, TAU); g.stroke(); g.setLineDash([]);
    if (c.acao?.nome === 'vazio' && c.acao.t > 0.4 && c.acao.t < 2.6) {
      g.strokeStyle = 'rgba(181, 140, 255, 0.7)';
      for (let k = 0; k < 3; k++) { const r = 100 - (((S.ta * 60) + k * 33) % 100); g.beginPath(); g.arc(x, y, r, 0, TAU); g.stroke(); }
    }
    if (c.acao?.nome === 'loucura' && c.acao.t < 1.0) { g.strokeStyle = Math.floor(S.ta * 14) % 2 ? '#ff7ab8' : '#b58cff'; g.lineWidth = 2; g.beginPath(); g.arc(x, y, 20 + c.acao.t * 110, 0, TAU); g.stroke(); }
  },

  mover(c, dt, ctx, entrando) {
    const S = ctx.S, alvo = dirPara(c, S);
    c.olhar += normAng(alvo - c.olhar) * Math.min(1, dt * 5);
    c.orb += dt * (c.acao?.nome === 'olhos' ? 2.2 : 0.8);
    c.dilat = Math.max(0, (c.dilat || 0) - dt * 2);
    c.abertura += ((c.alvoAb ?? 0.85) - c.abertura) * Math.min(1, dt * 8);
    if (!c.acao) c.alvoAb = 0.85;
    // flutua mantendo distância; some e reaparece em outro lugar de tempos em tempos
    const d = Math.hypot(S.nx - c.x, (S.ny - c.y) / 0.62), ideal = 82;
    const v = entrando ? 90 : 20;
    if (!c.parado) { c.x += Math.cos(alvo) * limit((d - ideal) / 30) * v * dt + Math.cos(alvo + Math.PI / 2) * Math.sin(c.tl * 0.7) * 14 * dt; c.y += Math.sin(alvo) * limit((d - ideal) / 30) * v * dt + Math.sin(alvo + Math.PI / 2) * Math.sin(c.tl * 0.7) * 14 * dt; }
    if (!entrando && !c.acao) {
      c.tpT -= dt;
      if (c.tpT <= 0) {
        c.tpT = c.enfurecido ? aleatorio(3.2, 4.4) : aleatorio(6, 8);
        ctx.onda(c.x, c.y, 34, '#b58cff', 140); ctx.particulas(c.x, c.y, 16, ['#b58cff', '#ffffff', '#2a1344'], 80);
        const a = Math.random() * TAU; c.x = S.nx + Math.cos(a) * 88; c.y = S.ny + Math.sin(a) * 88; c.sumido = 0.35;
        ctx.onda(c.x, c.y, 34, '#ff7ab8', 140); ctx.bip(900, 0.08, 'sine', 0.05); ctx.bip(1300, 0.1, 'sine', 0.05, 0.06);
      }
    }
  },
  enfurecer(c) { c.dilat = 2; c.tpT = 1.5; },

  ataques: {
    loucura: {
      peso: 3, dur: 2.4, descanso: 1.3,
      iniciar(c, ctx) { c.parado = true; ctx.texto(c.x, c.y - 30, 'OLHE PARA MIM...', '#ff7ab8'); ctx.bip(500, 0.6, 'sine', 0.05); },
      tick(c, dt, ctx, a) {
        c.alvoAb = 1.25; c.dilat = 1.5;
        if (a.t >= 1.0 && !a.ligou) { a.ligou = true; ctx.invertido(c.enfurecido ? 4 : 3.2); ctx.flash(0.2); ctx.tremor(0.3); ctx.texto(ctx.S.nx, ctx.S.ny - 16, 'CONTROLES INVERTIDOS!', '#ff7ab8'); ctx.bip(160, 0.5, 'sawtooth', 0.06); }
        if (a.t >= 1.2 && a.t < 2.2) { a.acc -= dt; if (a.acc <= 0) { a.acc = 0.32; ctx.tiro(c.x, c.y, dirPara(c, ctx.S) + aleatorio(-0.2, 0.2), 48, { cor: '#ff7ab8', r: 2, vida: 5, forma: 'bola' }); } }
      },
    },
    raio: {
      peso: 3, dur: 3.3, descanso: 1.3,
      iniciar(c, ctx) {
        c.parado = true; const a0 = dirPara(c, ctx.S), giro = c.enfurecido ? 1.0 : 0.75;
        ctx.raio({ x: c.x, y: c.y, ang: a0, aviso: 1.0, vida: 2.1, tick: 0, ligou: false, giro, dano: 1, dono: c });
        if (c.enfurecido) ctx.raio({ x: c.x, y: c.y, ang: a0 + Math.PI, aviso: 1.0, vida: 2.1, tick: 0, ligou: false, giro, dano: 1, dono: c });
        ctx.texto(c.x, c.y - 30, 'RAIO DE GRAVIDADE', '#b58cff');
      },
      tick(c) { c.alvoAb = 1.1; c.dilat = 1.2; },
    },
    olhos: {
      peso: 3, dur: 3.2, descanso: 1.2,
      iniciar(c, ctx) { c.parado = true; ctx.texto(c.x, c.y - 30, 'OLHOS!', '#ff7ab8'); },
      tick(c, dt, ctx, a) {
        a.acc -= dt;
        if (a.acc <= 0 && a.t > 0.5) {
          a.acc = c.enfurecido ? 0.22 : 0.34; a.k = ((a.k ?? -1) + 1) % 4;
          const ang = c.orb + (a.k * TAU) / 4, ox = c.x + Math.cos(ang) * 55, oy = c.y + Math.sin(ang) * 55;
          ctx.tiro(ox, oy, Math.atan2(ctx.S.ny - oy, ctx.S.nx - ox), 78, { cor: '#ff7ab8', r: 2.2, vida: 4.5, forma: 'bola' }); ctx.bip(700, 0.04, 'square', 0.03);
        }
      },
    },
    vazio: {
      peso: 2, dur: 3.2, descanso: 1.2,
      iniciar(c, ctx) { c.parado = true; ctx.texto(c.x, c.y - 30, 'VAZIO!', '#b58cff'); ctx.bip(60, 0.9, 'sine', 0.06); },
      tick(c, dt, ctx, a) {
        c.dilat = 2;
        if (a.t > 0.5 && a.t < 2.6) {
          ctx.puxar(c.x, c.y, c.enfurecido ? 46 : 34, dt);
          for (const q of [0.7, 1.3, 1.9]) if (a.t >= q && !a['r' + q]) {
            a['r' + q] = true; const folga = Math.random() * TAU;
            for (let i = 0; i < 16; i++) { const an = (i * TAU) / 16; if (Math.abs(normAng(an - folga)) > 0.45) ctx.tiro(c.x, c.y, an, 40, { cor: '#b58cff', r: 2, vida: 5, forma: 'bola' }); }
          }
        }
      },
    },
  },
};
function limit(v) { return Math.max(-1, Math.min(1, v)); }
