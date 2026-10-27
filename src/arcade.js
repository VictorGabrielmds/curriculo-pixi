// Jogo de nave estilo arcade: a nave fica parada no meio e atira sozinha; monstrinhos chegam pelas laterais da tela.
// Cada monstrinho dá XP; ao subir de nível você escolhe uma melhoria (cadência, dano, projétil extra...).
// No fim da partida rende algumas fichas virtuais para o cassino.
import './arcade.css';
import { novoSprite, silhuetaBranca } from './pixelArt.js';
import { criarFundo } from './arcadeFundo.js';

const L = 320, A = 180; // resolução lógica da tela (ampliada sem suavização)
const CX = L / 2, CY = A / 2;
const RAIO_NAVE = 6;
const CHAVE = 'curriculo-arcade-v1';
const FICHAS_MAXIMAS = 30;

const TIPOS = {
  slime: { hp: 1, vel: 20, raio: 5, xp: 1, dano: 1 },
  morcego: { hp: 1, vel: 40, raio: 4, xp: 2, dano: 1 },
  ogro: { hp: 6, vel: 13, raio: 7, xp: 6, dano: 2 },
  fantasma: { hp: 2, vel: 46, raio: 5, xp: 3, dano: 1 },
};

// melhorias: "max" é quantas vezes cada uma pode ser escolhida
const MELHORIAS = [
  { id: 'cadencia', nome: 'Cadência', desc: '+25% de velocidade de tiro', max: 8, aplicar: (s) => { s.cadencia *= 1.25; } },
  { id: 'dano', nome: 'Dano', desc: '+1 de dano por tiro', max: 10, aplicar: (s) => { s.dano += 1; } },
  { id: 'projetil', nome: 'Projétil extra', desc: '+1 projétil por disparo', max: 5, aplicar: (s) => { s.projeteis += 1; } },
  { id: 'perfurar', nome: 'Perfuração', desc: 'Os tiros atravessam +1 monstro', max: 4, aplicar: (s) => { s.perfura += 1; } },
  { id: 'velTiro', nome: 'Tiro veloz', desc: '+30% de velocidade do projétil', max: 5, aplicar: (s) => { s.velTiro *= 1.3; } },
  { id: 'ima', nome: 'Ímã de cristais', desc: 'Atrai os cristais de XP de mais longe', max: 5, aplicar: (s) => { s.raioIma *= 1.5; } },
  { id: 'motor', nome: 'Propulsores', desc: '+20% de velocidade da nave', max: 5, aplicar: (s) => { s.velNave *= 1.2; } },
  { id: 'reparo', nome: 'Reparo', desc: '+1 vida máxima e cura 2', max: 5, aplicar: (s) => { s.maxHp += 1; s.hp = Math.min(s.maxHp, s.hp + 2); } },
];

// ---------- sprites (desenhados em código) ----------
function criarSprites() {
  const nave = novoSprite(16, 16);
  nave.retangulo(1, 7, 3, 2, '#ff7a59'); nave.retangulo(12, 7, 3, 2, '#ff7a59'); nave.retangulo(7, 1, 2, 3, '#ff7a59'); nave.retangulo(7, 12, 2, 3, '#ff7a59');
  nave.disco(8, 8, 5, '#4aa8ff'); nave.disco(8, 8, 3, '#8bd3ff'); nave.disco(8, 8, 1, '#ffffff');
  nave.contorno('#0b1026');

  const slime = [0, 1].map((f) => {
    const s = novoSprite(14, 12);
    s.elipse(7, f ? 7.5 : 7, f ? 6.5 : 6, f ? 3.6 : 4.3, '#5be37a');
    s.elipse(7, f ? 8.6 : 8.4, f ? 5.6 : 5, 2, '#3fb85b');
    s.retangulo(4, f ? 5 : 4, 2, 2, '#ffffff'); s.retangulo(8, f ? 5 : 4, 2, 2, '#ffffff');
    s.pixel(5, f ? 6 : 5, '#1b1020'); s.pixel(9, f ? 6 : 5, '#1b1020');
    return s.contorno('#0b1026').c;
  });
  const morcego = [0, 1].map((f) => {
    const s = novoSprite(18, 14);
    const asa = f ? [[8, 7], [1, 12], [4, 6]] : [[8, 6], [1, 2], [4, 8]];
    s.poligono(asa, '#7c3fd6');
    s.poligono(asa.map(([x, y]) => [17 - x, y]), '#7c3fd6');
    s.disco(8, 7, 3, '#a56bff');
    s.pixel(7, 6, '#ff3b4a'); s.pixel(10, 6, '#ff3b4a');
    s.pixel(6, 3, '#a56bff'); s.pixel(11, 3, '#a56bff');
    return s.contorno('#0b1026').c;
  });
  const ogro = [0, 1].map((f) => {
    const s = novoSprite(20, 18);
    s.disco(10, 10 + f, 7, '#e0483a');
    s.disco(10, 11 + f, 5, '#c23326');
    s.poligono([[3, 5 + f], [5, 0 + f], [7, 5 + f]], '#cfd6df'); s.poligono([[13, 5 + f], [15, 0 + f], [17, 5 + f]], '#cfd6df');
    s.retangulo(5, 8 + f, 4, 2, '#ffe14a'); s.retangulo(11, 8 + f, 4, 2, '#ffe14a');
    s.pixel(8, 9 + f, '#1b1020'); s.pixel(11, 9 + f, '#1b1020');
    s.retangulo(7, 13 + f, 6, 2, '#1b1020'); s.pixel(8, 13 + f, '#ffffff'); s.pixel(11, 13 + f, '#ffffff');
    return s.contorno('#0b1026').c;
  });
  const fantasma = [0, 1].map((f) => {
    const s = novoSprite(14, 15);
    s.disco(7, 6, 5, '#c9d8ff');
    s.retangulo(2, 6, 11, 7, '#c9d8ff');
    for (let x = 2; x < 13; x += 2) if (((x - 2) / 2 + f) % 2 === 0) s.retangulo(x, 13, 2, 1, '#c9d8ff'); // barra ondulada
    s.retangulo(4, 4, 2, 3, '#1b1020'); s.retangulo(8, 4, 2, 3, '#1b1020');
    s.retangulo(6, 9, 3, 2, '#1b1020');
    return s.contorno('#0b1026').c;
  });
  const cristal = (corA, corB, brilho) => {
    const s = novoSprite(7, 9);
    s.poligono([[3.5, 0.5], [6.5, 3.5], [3.5, 8.5], [0.5, 3.5]], corA);
    s.poligono([[3.5, 0.5], [6.5, 3.5], [3.5, 4.5]], corB);
    s.pixel(2, 3, brilho); s.pixel(2, 2, brilho);
    return s.contorno('#0b1026').c;
  };
  const cristais = {
    1: cristal('#38c8ff', '#8be6ff', '#ffffff'),
    2: cristal('#3fd96a', '#9bffb4', '#ffffff'),
    3: cristal('#a56bff', '#d1b0ff', '#ffffff'),
    6: cristal('#ffc83d', '#fff0a0', '#ffffff'),
  };
  const brancos = {
    slime: slime.map(silhuetaBranca), morcego: morcego.map(silhuetaBranca), ogro: ogro.map(silhuetaBranca), fantasma: fantasma.map(silhuetaBranca),
  };
  return { nave, quadros: { slime, morcego, ogro, fantasma }, brancos, cristais, naveBranca: silhuetaBranca(nave.c) };
}

export function iniciarArcade({ adicionarFichas, bip }) {
  const el = (tag, cls, texto) => { const e = document.createElement(tag); if (cls) e.className = cls; if (texto != null) e.textContent = texto; return e; };
  const sprites = criarSprites();
  const fundo = criarFundo(L, A); // estrelas, nebulosas, planetas e estrelas cadentes
  let recorde = { tempo: 0, kills: 0 };
  try { const j = JSON.parse(localStorage.getItem(CHAVE)); if (j) recorde = { tempo: j.tempo | 0, kills: j.kills | 0 }; } catch { /* sem armazenamento */ }

  // ---------- interface ----------
  const raiz = el('div'); raiz.id = 'arcade';
  const caixa = el('div', 'arc-caixa');
  const topo = el('div', 'arc-topo');
  const titulo = el('h2', null, 'NAVE ARCADE');
  const hud = el('div', 'arc-hud');
  const vidasEl = el('span', 'arc-vidas');
  const nivelEl = el('span', 'arc-nivel');
  const xpBox = el('span', 'arc-xp'); const xpBarra = el('i'); xpBox.append(xpBarra);
  const killsEl = el('span');
  const ondaEl = el('span', 'arc-onda');
  const tempoEl = el('span');
  hud.append(vidasEl, nivelEl, xpBox, killsEl, ondaEl, tempoEl);
  const fechar = el('button', 'arc-x', 'X'); fechar.title = 'Sair (Esc)';
  topo.append(titulo, hud, fechar);

  const tela = el('div', 'arc-tela');
  const cv = document.createElement('canvas'); cv.width = L; cv.height = A;
  const g = cv.getContext('2d');
  g.imageSmoothingEnabled = false;

  const avisoOnda = el('div', 'arc-aviso', '!! ONDA DE MONSTROS !!'); avisoOnda.hidden = true;
  const sobre = el('div', 'arc-sobre'); // camada de textos/menus por cima da tela
  const painelInicio = el('div', 'arc-painel');
  painelInicio.append(el('h3', null, 'NAVE ARCADE'),
    el('p', null, 'A nave atira sozinha. Mova-a com as SETAS (ou WASD, ou arraste o dedo) e explore o espaço, que não tem limites, enfrentando os monstrinhos que chegam pelos lados. Cada um solta um CRISTAL de XP: só sobe de nível quem pegar o cristal com a nave! Se ele estiver fora da tela, um brilho na borda mostra onde está.'),
    el('p', null, 'Cuidado com as ONDAS DE MONSTROS: de tempos em tempos vem um monte de uma vez!'),
    el('p', 'dica', 'Cadência · Dano · Projétil extra · Perfuração · Tiro veloz · Propulsores · Ímã · Reparo'));
  const btnComecar = el('button', 'arc-btn', 'COMEÇAR [ESPAÇO]');
  painelInicio.append(btnComecar);

  const painelEscolha = el('div', 'arc-painel'); painelEscolha.hidden = true;
  const painelPausa = el('div', 'arc-painel'); painelPausa.hidden = true;
  const btnContinuar = el('button', 'arc-btn', 'CONTINUAR [ESC]');
  const btnSairPausa = el('button', 'arc-btn sec', 'SAIR');
  painelPausa.append(el('h3', null, 'PAUSADO'), btnContinuar, btnSairPausa);
  const painelFim = el('div', 'arc-painel'); painelFim.hidden = true;

  sobre.append(painelInicio, painelEscolha, painelPausa, painelFim);
  tela.append(cv, avisoOnda, sobre);
  caixa.append(topo, tela, el('p', 'arc-nota', 'de brincadeira: as fichas ganhas são virtuais, sem dinheiro de verdade'));
  raiz.append(caixa);
  document.body.append(raiz);

  // ---------- estado do jogo ----------
  let aberto = false, modo = 'inicio', raf = 0, ultimo = 0;
  let S = null;
  const teclas = new Set(); // setas/WASD pressionadas
  const ponteiro = { ativo: false, x: CX, y: CY }; // dedo/mouse arrastando: a nave vai até lá
  const TECLAS_MOVER = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'KeyA', 'KeyD', 'KeyW', 'KeyS'];

  function novoJogo() {
    S = {
      t: 0, nx: CX, ny: CY, cx: CX, cy: CY, velNave: 75, cristais: [], raioIma: 26, raioPegar: 8, onda: 0, proxOnda: 25, fila: 0, filaTaxa: 0, filaAcc: 0, aviso: 0, hp: 6, maxHp: 6, nivel: 1, xp: 0, xpProx: 5, kills: 0,
      dano: 1, cadencia: 2, projeteis: 1, perfura: 0, velTiro: 160,
      inimigos: [], tiros: [], parts: [], spawnAcc: 0, recarga: 0.3, invul: 0, mira: 0, tremor: 0, niveis: {},
    };
  }

  function spawn(daOnda = false) {
    const t = S.t;
    let tipo = 'slime';
    if (t > 15 && Math.random() < Math.min(0.45, (t - 15) / 80)) tipo = 'morcego';
    if (t > 40 && Math.random() < Math.min(0.4, (t - 40) / 120)) tipo = 'ogro';
    if (t > 60 && Math.random() < Math.min(0.3, (t - 60) / 200)) tipo = 'fantasma';
    if (daOnda) { // na onda vêm mais monstros fracos e alguns fortes, conforme o número da onda
      const r = Math.random();
      tipo = r < 0.6 ? 'slime' : r < 0.85 ? 'morcego' : r < 0.85 + Math.min(0.1, S.onda * 0.02) ? 'ogro' : (S.onda >= 2 ? 'fantasma' : 'slime');
    }
    const base = TIPOS[tipo];
    const lado = Math.random() < 0.5 ? -1 : 1;
    const hp = Math.ceil(base.hp * (1 + t / 35)); // a vida dos monstros cresce com o tempo
    const esquerda = S.cx - L / 2, topo = S.cy - A / 2; // borda da tela no mundo
    const vel = base.vel * (0.9 + Math.random() * 0.3) * (1 + Math.min(1, t / 240)); // com o tempo ficam mais velozes
    S.inimigos.push({ tipo, x: lado < 0 ? esquerda - 12 : esquerda + L + 12, y: topo + 12 + Math.random() * (A - 24), hp, vel, fase: Math.random() * 6, piscar: 0 });
  }

  function particulas(x, y, n, cores, vel = 50) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, v = (0.3 + Math.random()) * vel;
      S.parts.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, vida: 0.3 + Math.random() * 0.3, cor: cores[i % cores.length] });
    }
  }

  function iniciarOnda() {
    S.onda += 1;
    S.fila = Math.min(80, 14 + S.onda * 9); // quantos monstros vêm nesta onda
    S.filaTaxa = S.fila / 2.4; // despejados em ~2,4 s
    S.filaAcc = 0;
    S.aviso = 2.6;
    S.tremor = 0.3;
    S.proxOnda = S.t + Math.max(20, 32 - S.onda * 1.5);
    bip(140, 0.3, 'sawtooth', 0.05); bip(110, 0.4, 'sawtooth', 0.05, 0.25);
  }

  function atirar(alvo) {
    const a = Math.atan2(alvo.y - S.ny, alvo.x - S.nx);
    S.mira = a;
    const n = S.projeteis, passo = 0.16;
    for (let i = 0; i < n; i++) {
      const ang = a + (i - (n - 1) / 2) * passo;
      S.tiros.push({ x: S.nx + Math.cos(ang) * 7, y: S.ny + Math.sin(ang) * 7, vx: Math.cos(ang) * S.velTiro, vy: Math.sin(ang) * S.velTiro, dano: S.dano, perf: S.perfura, acertou: new Set() });
    }
    bip(520 + Math.random() * 60, 0.04, 'square', 0.012);
  }

  function soltarCristal(x, y, v) {
    const ang = Math.random() * Math.PI * 2, vel = 16 + Math.random() * 22;
    const novo = { x, y, v, vx: Math.cos(ang) * vel, vy: Math.sin(ang) * vel, fase: Math.random() * 6 };
    S.cristais.push(novo);
    if (S.cristais.length > 220) novo.v += S.cristais.shift().v; // muitos na tela: o mais antigo se funde neste (sem perder XP)
  }

  function matar(m) {
    const tp = TIPOS[m.tipo];
    S.kills += 1;
    soltarCristal(m.x, m.y, tp.xp); // o XP só vem ao pegar o cristal
    particulas(m.x, m.y, 8, ['#ffe14a', '#ffffff', '#ff7a59'], 60);
    bip(200 + tp.xp * 40, 0.05, 'triangle', 0.03);
    S.inimigos.splice(S.inimigos.indexOf(m), 1);
  }

  function atualizar(dt) {
    S.t += dt;
    S.invul = Math.max(0, S.invul - dt);
    S.tremor = Math.max(0, S.tremor - dt);

    // movimento da nave: setas/WASD (ou arrastar o dedo/mouse)
    let mx = (teclas.has('ArrowRight') || teclas.has('KeyD') ? 1 : 0) - (teclas.has('ArrowLeft') || teclas.has('KeyA') ? 1 : 0);
    let my = (teclas.has('ArrowDown') || teclas.has('KeyS') ? 1 : 0) - (teclas.has('ArrowUp') || teclas.has('KeyW') ? 1 : 0);
    if (!mx && !my && ponteiro.ativo) {
      const dx = ponteiro.x - (S.nx - S.cx + L / 2), dy = ponteiro.y - (S.ny - S.cy + A / 2), d = Math.hypot(dx, dy); // o ponteiro está em coordenadas da tela
      if (d > 3) { mx = dx / d; my = dy / d; }
    }
    const tam = Math.hypot(mx, my);
    if (tam > 0) {
      S.nx += (mx / tam) * S.velNave * dt; // o espaço não tem limites
      S.ny += (my / tam) * S.velNave * dt;
    }
    const seg = Math.min(1, dt * 5); // a câmera acompanha a nave suavemente
    S.cx += (S.nx - S.cx) * seg; S.cy += (S.ny - S.cy) * seg;

    S.spawnAcc += dt * (0.6 + Math.min(14, S.t * 0.035)); // e chegam cada vez mais rápido
    while (S.spawnAcc >= 1) { S.spawnAcc -= 1; spawn(); }

    // onda de monstros: de tempos em tempos vem um monte de uma vez
    if (S.t >= S.proxOnda) iniciarOnda();
    if (S.fila > 0) {
      S.filaAcc += dt * S.filaTaxa;
      while (S.filaAcc >= 1 && S.fila > 0) { S.filaAcc -= 1; S.fila -= 1; spawn(true); }
    }
    S.aviso = Math.max(0, S.aviso - dt);

    // monstros vão em direção à nave
    for (const m of S.inimigos) {
      const dx = S.nx - m.x, dy = S.ny - m.y, d = Math.hypot(dx, dy) || 1;
      let vx = (dx / d) * m.vel, vy = (dy / d) * m.vel;
      if (m.tipo === 'morcego') { const ondula = Math.sin(S.t * 5 + m.fase) * 28; vx += (-dy / d) * ondula; vy += (dx / d) * ondula; }
      m.x += vx * dt; m.y += vy * dt;
      m.piscar = Math.max(0, m.piscar - dt);
    }
    if (S.inimigos.length) S.inimigos = S.inimigos.filter((m) => Math.hypot(m.x - S.nx, m.y - S.ny) < 520); // quem ficou muito para trás some

    // tiro automático no monstro mais próximo
    S.recarga -= dt;
    if (S.recarga <= 0) {
      let alvo = null, menor = Infinity;
      for (const m of S.inimigos) { const d = Math.hypot(m.x - S.nx, m.y - S.ny); if (d < menor && Math.abs(m.x - S.cx) < L / 2 + 4 && Math.abs(m.y - S.cy) < A / 2 + 4) { menor = d; alvo = m; } } // só mira em quem está na tela
      if (alvo) { atirar(alvo); S.recarga = 1 / S.cadencia; } else S.recarga = 0.05;
    }

    // projéteis
    for (let i = S.tiros.length - 1; i >= 0; i--) {
      const b = S.tiros[i];
      b.x += b.vx * dt; b.y += b.vy * dt;
      if (Math.hypot(b.x - S.nx, b.y - S.ny) > 260) { S.tiros.splice(i, 1); continue; }
      for (const m of [...S.inimigos]) { // cópia: matar() remove da lista
        if (b.acertou.has(m)) continue;
        if (Math.hypot(b.x - m.x, b.y - m.y) < TIPOS[m.tipo].raio + 2) {
          b.acertou.add(m);
          m.hp -= b.dano; m.piscar = 0.08;
          particulas(b.x, b.y, 2, ['#ffe14a', '#ffffff'], 40);
          if (m.hp <= 0) matar(m);
          if (b.perf > 0) b.perf -= 1; else { S.tiros.splice(i, 1); break; }
        }
      }
    }

    // contato com a nave
    for (const m of [...S.inimigos]) {
      const tp = TIPOS[m.tipo];
      if (Math.hypot(m.x - S.nx, m.y - S.ny) < tp.raio + RAIO_NAVE) {
        particulas(m.x, m.y, 10, ['#ff3b4a', '#ffb3ba', '#ffffff'], 70);
        S.inimigos.splice(S.inimigos.indexOf(m), 1);
        if (S.invul <= 0) {
          S.hp -= tp.dano; S.invul = 0.7; S.tremor = 0.2;
          bip(110, 0.18, 'sawtooth', 0.05);
        }
      }
    }

    // cristais de XP: o impulso da morte some rápido; perto da nave eles são atraídos; ao tocar, viram XP
    for (let i = S.cristais.length - 1; i >= 0; i--) {
      const c = S.cristais[i];
      c.x += c.vx * dt; c.y += c.vy * dt;
      const freio = Math.pow(0.05, dt); c.vx *= freio; c.vy *= freio;
      const dx = S.nx - c.x, dy = S.ny - c.y, d = Math.hypot(dx, dy) || 1;
      if (d < S.raioIma) {
        const puxa = 70 + (S.raioIma - d) * 4;
        c.x += (dx / d) * puxa * dt; c.y += (dy / d) * puxa * dt;
      }
      if (d < RAIO_NAVE + S.raioPegar) {
        S.xp += c.v;
        S.cristais.splice(i, 1);
        particulas(c.x, c.y, 4, ['#8be6ff', '#ffffff'], 35);
        bip(740 + Math.min(c.v, 6) * 60, 0.05, 'square', 0.03);
      }
    }

    // partículas e estrelas
    for (let i = S.parts.length - 1; i >= 0; i--) {
      const p = S.parts[i];
      p.x += p.vx * dt; p.y += p.vy * dt; p.vida -= dt;
      if (p.vida <= 0) S.parts.splice(i, 1);
    }

    if (S.hp <= 0) { fimDeJogo(); return; }
    if (S.xp >= S.xpProx) subirNivel();
  }

  // ---------- melhorias ----------
  let opcoes = [];
  function subirNivel() {
    S.xp -= S.xpProx;
    S.nivel += 1;
    S.xpProx = Math.round(S.xpProx * 1.35 + 3);
    const disponiveis = MELHORIAS.filter((m) => (S.niveis[m.id] | 0) < m.max);
    opcoes = disponiveis.sort(() => Math.random() - 0.5).slice(0, 3);
    if (!opcoes.length) return; // tudo no máximo
    modo = 'escolha';
    bip(784, 0.1, 'square', 0.05); bip(988, 0.1, 'square', 0.05, 0.1); bip(1319, 0.16, 'square', 0.05, 0.2);
    painelEscolha.replaceChildren(el('h3', null, `NÍVEL ${S.nivel}!`), el('p', null, 'Escolha uma melhoria:'));
    const lista = el('div', 'arc-cartas');
    opcoes.forEach((m, i) => {
      const b = el('button', 'arc-carta');
      b.append(el('small', null, `[${i + 1}]`), el('b', null, m.nome), el('span', null, m.desc), el('em', null, `nv ${(S.niveis[m.id] | 0)} → ${(S.niveis[m.id] | 0) + 1} (máx ${m.max})`));
      b.onclick = () => escolher(i);
      lista.append(b);
    });
    painelEscolha.append(lista);
    painelEscolha.hidden = false;
  }
  function escolher(i) {
    if (modo !== 'escolha' || !opcoes[i]) return;
    const m = opcoes[i];
    m.aplicar(S);
    S.niveis[m.id] = (S.niveis[m.id] | 0) + 1;
    painelEscolha.hidden = true;
    modo = 'jogando';
    ultimo = performance.now();
    bip(660, 0.08, 'triangle', 0.05);
  }

  // ---------- fim ----------
  function fimDeJogo() {
    modo = 'fim';
    const fichas = Math.min(FICHAS_MAXIMAS, Math.floor(S.kills / 5) + S.nivel);
    const tempo = Math.floor(S.t);
    const novoRecorde = tempo > recorde.tempo || S.kills > recorde.kills;
    if (novoRecorde) { recorde = { tempo: Math.max(recorde.tempo, tempo), kills: Math.max(recorde.kills, S.kills) }; try { localStorage.setItem(CHAVE, JSON.stringify(recorde)); } catch { /* ignora */ } }
    adicionarFichas(fichas);
    bip(220, 0.25, 'sawtooth', 0.05); bip(165, 0.35, 'sawtooth', 0.05, 0.25);
    painelFim.replaceChildren(
      el('h3', null, 'FIM DE JOGO'),
      el('p', null, `Tempo: ${fmt(tempo)} · Monstros: ${S.kills} · Nível: ${S.nivel}`),
      el('p', 'ganhou', `+${fichas} FICHAS`),
      el('p', 'dica', `Recorde: ${fmt(recorde.tempo)} · ${recorde.kills} monstros${novoRecorde ? ' · NOVO RECORDE!' : ''}`),
    );
    const de = el('button', 'arc-btn', 'JOGAR DE NOVO [ESPAÇO]'); de.onclick = comecar;
    const sair = el('button', 'arc-btn sec', 'SAIR'); sair.onclick = fecharJanela;
    painelFim.append(de, sair);
    painelFim.hidden = false;
  }
  const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  // ---------- desenho ----------
  function desenhar() {
    const t = performance.now() / 1000;
    const camX = S ? S.cx : CX, camY = S ? S.cy : CY;
    g.save();
    fundo.desenhar(g, camX, camY, t); // espaço: estrelas, nebulosas, planetas (com parallax)
    if (!S) { g.restore(); return; }
    const ox = Math.round(camX - L / 2), oy = Math.round(camY - A / 2); // canto superior esquerdo da tela, no mundo
    const visivel = (x, y, m = 16) => x > ox - m && x < ox + L + m && y > oy - m && y < oy + A + m;

    g.save();
    if (S.tremor > 0) g.translate(Math.round((Math.random() - 0.5) * 4), Math.round((Math.random() - 0.5) * 4));
    g.translate(-ox, -oy);
    // anéis de radar em volta da nave
    g.strokeStyle = 'rgba(74, 168, 255, 0.12)'; g.lineWidth = 1;
    for (const r of [30, 62]) { g.beginPath(); g.arc(Math.round(S.nx), Math.round(S.ny), r, 0, Math.PI * 2); g.stroke(); }

    // cristais de XP (balançam de leve para chamar atenção)
    for (const c of S.cristais) {
      if (!visivel(c.x, c.y)) continue;
      g.drawImage(spriteCristal(c.v), Math.round(c.x - 3.5), Math.round(c.y - 4.5 + Math.sin(S.t * 4 + c.fase)));
    }
    // monstros
    for (const m of S.inimigos) {
      if (!visivel(m.x, m.y, 24)) continue;
      const f = Math.floor(S.t * 6 + m.fase) % 2;
      const spr = m.piscar > 0 ? sprites.brancos[m.tipo][f] : sprites.quadros[m.tipo][f];
      if (m.tipo === 'fantasma') g.globalAlpha = 0.85;
      g.drawImage(spr, Math.round(m.x - spr.width / 2), Math.round(m.y - spr.height / 2));
      g.globalAlpha = 1;
    }
    // tiros
    for (const b of S.tiros) { g.fillStyle = '#ffe14a'; g.fillRect(Math.round(b.x) - 1, Math.round(b.y) - 1, 3, 3); g.fillStyle = '#ffffff'; g.fillRect(Math.round(b.x), Math.round(b.y), 1, 1); }
    // nave: casco + cano que aponta para o alvo (em 16 direções, para ficar em pixel certinho)
    const piscando = S.invul > 0 && Math.floor(S.t * 14) % 2 === 0;
    const passo = Math.PI / 8, ang = Math.round(S.mira / passo) * passo;
    g.fillStyle = '#ffd23f';
    const nx = Math.round(S.nx), ny = Math.round(S.ny);
    for (let k = 4; k <= 9; k++) g.fillRect(Math.round(nx + Math.cos(ang) * k) - 1, Math.round(ny + Math.sin(ang) * k) - 1, 2, 2);
    g.drawImage(piscando ? sprites.naveBranca : sprites.nave.c, nx - 8, ny - 8);
    // partículas
    for (const p of S.parts) { if (visivel(p.x, p.y, 4)) { g.fillStyle = p.cor; g.fillRect(Math.round(p.x), Math.round(p.y), 2, 2); } }
    g.restore();

    // indicadores na borda da tela para os cristais que estão fora de vista (os mais próximos)
    const fora = S.cristais.filter((c) => !visivel(c.x, c.y, 2))
      .map((c) => ({ c, d: Math.hypot(c.x - S.nx, c.y - S.ny) })).filter((o) => o.d < 620).sort((p, q) => p.d - q.d).slice(0, 6);
    g.globalAlpha = 0.55 + 0.35 * Math.sin(t * 6);
    for (const { c } of fora) {
      const dx = c.x - (ox + L / 2), dy = c.y - (oy + A / 2);
      const k = Math.min((L / 2 - 10) / (Math.abs(dx) || 1e-6), (A / 2 - 10) / (Math.abs(dy) || 1e-6));
      g.drawImage(spriteCristal(c.v), Math.round(L / 2 + dx * k - 3.5), Math.round(A / 2 + dy * k - 4.5));
    }
    g.globalAlpha = 1;
    g.restore();
  }
  const spriteCristal = (v) => (v >= 6 ? sprites.cristais[6] : v >= 3 ? sprites.cristais[3] : v >= 2 ? sprites.cristais[2] : sprites.cristais[1]);

  let hudCache = '';
  function atualizarHud() {
    if (!S) return;
    const faltam = Math.ceil(S.proxOnda - S.t);
    const chave = `${S.hp}/${S.maxHp}|${S.nivel}|${Math.floor(S.xp)}|${S.xpProx}|${S.kills}|${Math.floor(S.t)}|${S.onda}|${faltam <= 5 ? faltam : 99}|${S.aviso > 0}`;
    if (chave === hudCache) return;
    hudCache = chave;
    vidasEl.replaceChildren(...Array.from({ length: S.maxHp }, (_, i) => el('i', i < S.hp ? 'cheia' : 'vazia')));
    nivelEl.textContent = `NV ${S.nivel}`;
    xpBarra.style.width = `${Math.min(100, (S.xp / S.xpProx) * 100)}%`;
    killsEl.textContent = `☠ ${S.kills}`;
    ondaEl.textContent = faltam <= 5 && modo === 'jogando' ? `ONDA EM ${faltam}` : S.onda > 0 ? `ONDA ${S.onda}` : '';
    ondaEl.classList.toggle('alerta', faltam <= 5);
    avisoOnda.hidden = !(S.aviso > 0);
    tempoEl.textContent = fmt(Math.floor(S.t));
  }

  function quadro(agora) {
    if (!aberto) return;
    const dt = Math.min((agora - ultimo) / 1000, 0.05);
    ultimo = agora;
    if (modo === 'jogando') atualizar(dt);
    fundo.passo(dt); // estrelas cadentes
    desenhar();
    atualizarHud();
    raf = requestAnimationFrame(quadro);
  }

  // ---------- controle ----------
  function comecar() {
    teclas.clear(); ponteiro.ativo = false;
    novoJogo();
    hudCache = '';
    painelInicio.hidden = true; painelFim.hidden = true; painelEscolha.hidden = true; painelPausa.hidden = true;
    modo = 'jogando';
    ultimo = performance.now();
    bip(523, 0.08, 'square', 0.05); bip(784, 0.12, 'square', 0.05, 0.08);
  }
  function pausar(ligar) {
    if (ligar && modo === 'jogando') { modo = 'pausa'; teclas.clear(); ponteiro.ativo = false; painelPausa.hidden = false; }
    else if (!ligar && modo === 'pausa') { modo = 'jogando'; painelPausa.hidden = true; ultimo = performance.now(); }
  }
  function abrir() {
    if (aberto) return;
    aberto = true;
    raiz.classList.add('aberto');
    S = null; modo = 'inicio'; hudCache = '';
    novoJogo(); S.t = 0;
    painelInicio.hidden = false; painelFim.hidden = true; painelEscolha.hidden = true; painelPausa.hidden = true;
    vidasEl.replaceChildren(); nivelEl.textContent = ''; killsEl.textContent = ''; tempoEl.textContent = ''; xpBarra.style.width = '0';
    ultimo = performance.now();
    raf = requestAnimationFrame(quadro);
    btnComecar.focus();
  }
  function fecharJanela() {
    if (!aberto) return;
    aberto = false;
    teclas.clear(); ponteiro.ativo = false;
    raiz.classList.remove('aberto');
    cancelAnimationFrame(raf);
  }

  btnComecar.onclick = comecar;
  btnContinuar.onclick = () => pausar(false);
  btnSairPausa.onclick = fecharJanela;
  fechar.onclick = fecharJanela;
  raiz.addEventListener('pointerdown', (e) => { if (e.target === raiz && modo !== 'jogando' && modo !== 'escolha') fecharJanela(); });
  window.addEventListener('visibilitychange', () => { if (document.hidden) pausar(true); });
  const lerPonteiro = (e) => {
    const r = cv.getBoundingClientRect();
    ponteiro.x = ((e.clientX - r.left) / r.width) * L;
    ponteiro.y = ((e.clientY - r.top) / r.height) * A;
  };
  cv.addEventListener('pointerdown', (e) => { if (modo !== 'jogando') return; ponteiro.ativo = true; lerPonteiro(e); cv.setPointerCapture?.(e.pointerId); });
  cv.addEventListener('pointermove', (e) => { if (ponteiro.ativo) lerPonteiro(e); });
  for (const ev of ['pointerup', 'pointercancel']) cv.addEventListener(ev, () => { ponteiro.ativo = false; });
  window.addEventListener('keyup', (e) => teclas.delete(e.code));
  window.addEventListener('blur', () => teclas.clear());
  window.addEventListener('keydown', (e) => {
    if (!aberto) return;
    if (TECLAS_MOVER.includes(e.code)) { e.preventDefault(); if (modo === 'jogando') teclas.add(e.code); return; }
    if (e.code === 'Escape') {
      e.preventDefault();
      if (modo === 'jogando') pausar(true); else if (modo === 'pausa') pausar(false); else if (modo === 'inicio' || modo === 'fim') fecharJanela();
    } else if (e.code === 'Space' || e.code === 'Enter') {
      if (modo === 'inicio' || modo === 'fim') { e.preventDefault(); comecar(); }
    } else if (['Digit1', 'Digit2', 'Digit3', 'Numpad1', 'Numpad2', 'Numpad3'].includes(e.code)) {
      e.preventDefault(); escolher(Number(e.code.slice(-1)) - 1);
    }
  }, true);

  // gancho só do modo dev: avança a simulação sem depender do relógio do navegador (usado nos testes)
  if (import.meta.env.DEV) {
    window.__arcadeTeste = {
      mirar(x, y) { ponteiro.ativo = x != null; if (x != null) { ponteiro.x = x - (S.cx - L / 2); ponteiro.y = y - (S.cy - A / 2); } }, // x, y no mundo
      cristais: () => S.cristais.map((c) => ({ x: Math.round(c.x), y: Math.round(c.y), v: c.v })),
      avancar(seg, auto = true) {
        for (let t = 0; t < seg; t += 0.05) {
          if (modo === 'escolha' && auto) escolher(0);
          if (modo === 'jogando') atualizar(0.05);
        }
        desenhar(); atualizarHud();
        return { cx: S && Math.round(S.cx), cy: S && Math.round(S.cy), cristais: S && S.cristais.length, xp: S && S.xp, xpProx: S && S.xpProx, modo, nx: S && Math.round(S.nx), ny: S && Math.round(S.ny), onda: S && S.onda, fila: S && S.fila, t: S && S.t, hp: S && S.hp, nivel: S && S.nivel, kills: S && S.kills, inimigos: S && S.inimigos.length, tiros: S && S.tiros.length, projeteis: S && S.projeteis, dano: S && S.dano, cadencia: S && S.cadencia };
      },
    };
  }

  return { abrir, fechar: fecharJanela, estaAberto: () => aberto };
}
