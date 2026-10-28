// FÊNIX, a Eterna: asas de penas em chamas, cauda que ondula e um bico dourado. Chove penas, mergulha deixando fogo no chão,
// rodeia a nave atirando para dentro e solta um incêndio em anéis. Quando morre, vira um ovo de fogo e RENASCE mais forte.
import { TAU, normAng, dirPara, aleatorio, poli, disco, elip, traco, rodear } from './base.js';

const PENAS = ['#ff3b2a', '#ff6a2a', '#ff9a2a', '#ffc23a', '#ffe65a'];

export const fenix = {
  id: 'fenix', nome: 'FÊNIX', titulo: 'A ETERNA', cor: '#ffb02e', raio: 17, hpMult: 1.6, vitorias: 5, tela: [200, 200], gira: true,
  desc: 'Chove penas em chamas, mergulha como um cometa e, quando cai, renasce das cinzas.',
  estadoRetrato: { asa: 0.4 }, angRetrato: -0.5,
  criar(c) { Object.assign(c, { ang: Math.PI, asa: 0, renasceu: false, ovo: false }); },

  desenhar(x, c, t) {
    if (c.ovo) { // ovo de fogo, rachando antes de renascer
      const u = c.renasceT ? Math.max(0, 1 - (c.renasceT - c.tl) / 3.4) : 0.5;
      elip(x, 0, 0, 12 + Math.sin(t * 20) * u, 15 + Math.sin(t * 20) * u, '#ff7a2a'); elip(x, -2, -3, 8, 10, '#ffc23a'); elip(x, -3, -6, 3.5, 4.5, '#fff2b0');
      for (let k = 0; k < Math.round(1 + u * 5); k++) { const a = k * 1.9 + 0.5; traco(x, [[Math.cos(a) * 3, Math.sin(a) * 4], [Math.cos(a) * 11, Math.sin(a) * 14]], 1.4, '#3a0a00'); }
      for (let k = 0; k < 8; k++) { const a = (k * TAU) / 8 + t * 2; poli(x, [[Math.cos(a) * 17 - 2, Math.sin(a) * 19], [Math.cos(a) * 24, Math.sin(a) * 27], [Math.cos(a) * 17 + 2, Math.sin(a) * 19]], '#ffe65a'); }
      return;
    }
    const f = c.asa || 0, dourada = c.renasceu, esc = dourada ? 1.12 : 1;
    x.save(); x.scale(esc, esc);
    const bate = Math.sin(f) * 0.55, pal = dourada ? ['#ffb02e', '#ffc23a', '#ffe65a', '#fff2a8', '#ffffff'] : PENAS;
    // cauda: cinco penas longas que ondulam
    for (let j = 0; j < 5; j++) {
      const sy = (j - 2) * 6.5, ond = Math.sin(t * 3 + j * 0.8) * 5 * (0.4 + j * 0.15), len = 46 + (j === 2 ? 14 : 0) + Math.abs(j - 2) * -4;
      poli(x, [[-8, sy * 0.4], [-8 - len * 0.5, sy * 0.8 + ond * 0.5 - 3.2], [-8 - len, sy * 1.2 + ond], [-8 - len * 0.5, sy * 0.8 + ond * 0.5 + 3.2]], pal[(j + 1) % 5]);
      poli(x, [[-8, sy * 0.4], [-8 - len * 0.5, sy * 0.8 + ond * 0.5], [-8 - len * 0.85, sy * 1.15 + ond]], pal[(j + 3) % 5]);
    }
    // asas: um leque de penas de cada lado
    for (const l of [-1, 1]) for (let i = 0; i < 9; i++) {
      const a = -0.5 + i * 0.27 + (1 - Math.cos(f)) * 0.22 + bate * 0.35, len = 56 - i * 2.8 + Math.abs(bate) * 6;
      const bx = 3 - i * 0.6, by = 3 * l, tx = bx - Math.sin(a) * len, ty = by + l * Math.cos(a) * len, dx = tx - bx, dy = ty - by, ln = Math.hypot(dx, dy) || 1, nx = (-dy / ln) * 4.6, ny = (dx / ln) * 4.6;
      poli(x, [[bx, by], [bx + dx * 0.55 + nx, by + dy * 0.55 + ny], [tx, ty], [bx + dx * 0.55 - nx, by + dy * 0.55 - ny]], pal[Math.min(4, Math.floor(i / 2))]);
      traco(x, [[bx, by], [tx, ty]], 1.1, pal[Math.min(4, Math.floor(i / 2) + 1)]);
    }
    // corpo, pescoço, cabeça, crista e bico
    elip(x, 0, 0, 14, 8.2, '#ff6a2a'); elip(x, 2, -1.6, 9, 4.2, '#ffc23a'); elip(x, 12, 0, 6.5, 5.6, '#ff8a2a');
    for (let k = 0; k < 3; k++) { const a = (k - 1) * 0.35; poli(x, [[9, 0], [-4 + (k - 1) * 0, -8 + a * 10 - 2], [-9, (k - 1) * 7 + Math.sin(t * 6 + k) * 2]], pal[3 - k % 2]); }
    poli(x, [[16, -2.6], [25, 0], [16, 2.6]], '#ffe65a'); poli(x, [[16, -0.6], [22, 0], [16, 0.6]], '#c9780a');
    for (const l of [-1, 1]) { disco(x, 13, 3.1 * l, 1.6, '#fff2b0'); disco(x, 13.5, 3.1 * l, 0.8, '#3a0a00'); }
    x.restore();
  },

  efeitos(g, c, t, ctx) {
    const S = ctx.S, x = Math.round(c.x), y = Math.round(c.y), raioBrilho = c.ovo ? 60 : 80;
    const brilho = g.createRadialGradient(x, y, 6, x, y, raioBrilho);
    brilho.addColorStop(0, `rgba(255, 170, 40, ${c.ovo ? 0.5 : 0.28})`); brilho.addColorStop(1, 'rgba(255, 120, 20, 0)');
    g.fillStyle = brilho; g.fillRect(x - raioBrilho, y - raioBrilho, raioBrilho * 2, raioBrilho * 2);
    if (Math.random() < 0.5) ctx.particulas(c.x, c.y, 1, ['#ffb02e', '#ff6a2a', '#ffe65a'], 36);
    const a = c.acao, pisca = Math.floor(S.ta * 12) % 2 === 0;
    if (a?.nome === 'mergulho' && a.t < 0.7) {
      g.strokeStyle = pisca ? '#ff3b4a' : '#ffb3ba'; g.lineWidth = 3; g.setLineDash([5, 4]);
      g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a.dir) * 240, y + Math.sin(a.dir) * 240); g.stroke(); g.setLineDash([]);
    }
  },

  mover(c, dt, ctx, entrando) {
    const S = ctx.S, alvo = dirPara(c, S);
    if (c.travaAng != null) c.ang = c.travaAng; else if (c.acao?.nome === 'ciranda') { /* o ângulo segue a órbita */ } else c.ang += normAng(alvo - c.ang) * Math.min(1, dt * 3);
    c.asa += dt * (c.ovo ? 0 : (c.acao?.nome === 'mergulho' ? 3 : 6.5));
    if (c.parado || c.ovo) return;
    rodear(c, dt, ctx, { ideal: 84, vel: 42 * (c.enfurecido ? 1.2 : 1), tang: 0.9, entrando });
  },
  passivo(c, dt, ctx) { // o ovo racha e a fênix renasce
    if (!c.ovo || !c.renasceT) return;
    if (Math.random() < 0.6) ctx.particulas(c.x, c.y, 1, ['#ffe65a', '#ff6a2a'], 50);
    if (c.tl >= c.renasceT) {
      c.ovo = false; c.parado = false; c.sumido = 0; c.hp = Math.round(c.hpMax * 0.7); c.enfurecido = true; c.raio += 3; c.cd = 1.0; c.renasceT = 0;
      ctx.texto(c.x, c.y - 36, 'RENASCEU!', '#ffe65a'); ctx.flash(0.4); ctx.tremor(0.7); ctx.onda(c.x, c.y, 110, '#ffb02e', 200); ctx.bip(440, 0.3, 'triangle', 0.06); ctx.bip(660, 0.3, 'triangle', 0.06, 0.15); ctx.bip(880, 0.5, 'triangle', 0.06, 0.3);
      for (let i = 0; i < 36; i++) ctx.tiro(c.x, c.y, (i * TAU) / 36, 82, { cor: '#ffb02e', r: 2, vida: 4, forma: 'fogo' });
    }
  },
  aoMorrer(c, ctx) { // a primeira morte vira um ovo
    if (c.renasceu) return false;
    c.renasceu = true; c.ovo = true; c.hp = 1; c.sumido = 3.6; c.renasceT = c.tl + 3.4; c.acao = null; c.parado = true; c.travaAng = null;
    ctx.texto(c.x, c.y - 34, 'NÃO É O FIM...', '#ffe65a'); ctx.flash(0.35); ctx.tremor(0.6); ctx.onda(c.x, c.y, 90, '#ffb02e', 190);
    ctx.particulas(c.x, c.y, 40, ['#ffb02e', '#ff3b2a', '#ffe65a', '#ffffff'], 130); ctx.bip(300, 0.5, 'sawtooth', 0.06); ctx.bip(150, 0.7, 'sawtooth', 0.06, 0.2);
    for (let i = 0; i < 30; i++) ctx.tiro(c.x, c.y, (i * TAU) / 30, 70, { cor: '#ff8a2a', r: 2, vida: 4, forma: 'fogo' });
    return true;
  },

  ataques: {
    penas: {
      peso: 3, dur: 2.2, descanso: 1.0,
      iniciar(c, ctx) { c.parado = true; ctx.texto(c.x, c.y - 36, 'PENAS EM CHAMAS', '#ffb02e'); ctx.bip(500, 0.15, 'triangle', 0.05); },
      tick(c, dt, ctx, a) {
        for (const q of [0.5, 0.9, 1.3]) if (a.t >= q && !a['p' + q]) {
          a['p' + q] = true; const alvo = dirPara(c, ctx.S), n = c.enfurecido ? 13 : 9, alt = Math.round(q * 10) % 2 ? 0.1 : 0;
          for (let i = 0; i < n; i++) ctx.tiro(c.x, c.y, alvo + (i - (n - 1) / 2) * 0.17 + alt, 88, { cor: i % 2 ? '#ffb02e' : '#ff6a2a', r: 1.9, vida: 3.5, forma: 'pena' });
          ctx.bip(380, 0.1, 'sawtooth', 0.04);
        }
      },
    },
    mergulho: {
      peso: 3, dur: 1.6, descanso: 1.0,
      iniciar(c, ctx, a) { c.parado = true; a.dir = dirPara(c, ctx.S); c.travaAng = a.dir; ctx.bip(900, 0.25, 'triangle', 0.05); },
      tick(c, dt, ctx, a) {
        c.travaAng = a.dir;
        if (a.t < 0.7) return;
        c.x += Math.cos(a.dir) * 270 * dt; c.y += Math.sin(a.dir) * 270 * dt;
        a.acc -= dt; if (a.acc <= 0) { a.acc = 0.11; ctx.campo(c.x - Math.cos(a.dir) * 16, c.y - Math.sin(a.dir) * 16, 9, 0.1, 1.7); }
        ctx.particulas(c.x, c.y, 2, ['#ffb02e', '#ffe65a', '#ff3b2a'], 40);
      },
      fim(c) { c.travaAng = null; },
    },
    ciranda: {
      peso: 3, dur: 2.6, descanso: 1.1,
      iniciar(c, ctx, a) { c.parado = true; a.ang = Math.atan2(c.y - ctx.S.ny, c.x - ctx.S.nx); a.sentido = Math.random() < 0.5 ? -1 : 1; ctx.texto(c.x, c.y - 36, 'CIRANDA DE FOGO', '#ff6a2a'); },
      tick(c, dt, ctx, a) { // órbita em volta da nave atirando para dentro
        a.ang += a.sentido * 1.35 * dt; const S = ctx.S, raio = 78;
        c.x += (S.nx + Math.cos(a.ang) * raio - c.x) * Math.min(1, dt * 5); c.y += (S.ny + Math.sin(a.ang) * raio - c.y) * Math.min(1, dt * 5);
        c.ang = a.ang + (a.sentido > 0 ? Math.PI / 2 : -Math.PI / 2);
        a.acc -= dt; if (a.acc <= 0 && a.t > 0.4) { a.acc = c.enfurecido ? 0.14 : 0.2; ctx.tiro(c.x, c.y, Math.atan2(S.ny - c.y, S.nx - c.x) + aleatorio(-0.12, 0.12), 80, { cor: '#ff8a2a', r: 2, vida: 3, forma: 'fogo' }); }
      },
    },
    incendio: {
      peso: 2, dur: 2.0, fase2: true, descanso: 1.0,
      iniciar(c, ctx) {
        c.parado = true; ctx.texto(c.x, c.y - 36, 'INCÊNDIO!', '#ff3b2a'); ctx.bip(160, 0.4, 'sawtooth', 0.06);
        const S = ctx.S; for (let i = 0; i < 5; i++) { const a = Math.random() * TAU, d = aleatorio(20, 70); ctx.campo(S.nx + Math.cos(a) * d, S.ny + Math.sin(a) * d, 13, 1.1 + i * 0.12, 2.2); }
      },
      tick(c, dt, ctx, a) {
        for (const q of [0.5, 1.0]) if (a.t >= q && !a['r' + q]) {
          a['r' + q] = true; ctx.onda(c.x, c.y, 50, '#ffb02e', 150); const folga = Math.random() * TAU;
          for (let i = 0; i < 30; i++) { const an = (i * TAU) / 30; if (Math.abs(normAng(an - folga)) > 0.4) ctx.tiro(c.x, c.y, an, 64, { cor: '#ff8a2a', r: 2, vida: 4.5, forma: 'fogo' }); }
        }
      },
    },
  },
};
