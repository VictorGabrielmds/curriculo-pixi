// Jogo de nave estilo arcade: a nave fica parada no meio e atira sozinha; monstrinhos chegam pelas laterais da tela.
// Cada monstrinho dá XP; ao subir de nível você escolhe uma melhoria (cadência, dano, projétil extra...).
// No fim da partida rende algumas fichas virtuais para o cassino.
import './arcade.css';
import { novoSprite, silhuetaBranca } from './pixelArt.js';

const L = 320, A = 180; // resolução lógica da tela (ampliada sem suavização)
const CX = L / 2, CY = A / 2;
const RAIO_NAVE = 6;
const CHAVE = 'curriculo-arcade-v1';
const FICHAS_MAXIMAS = 30;

const TIPOS = {
  slime: { hp: 1, vel: 20, raio: 5, xp: 1, dano: 1 },
  morcego: { hp: 1, vel: 40, raio: 4, xp: 2, dano: 1 },
  ogro: { hp: 6, vel: 13, raio: 7, xp: 6, dano: 2 },
};

// melhorias: "max" é quantas vezes cada uma pode ser escolhida
const MELHORIAS = [
  { id: 'cadencia', nome: 'Cadência', desc: '+25% de velocidade de tiro', max: 8, aplicar: (s) => { s.cadencia *= 1.25; } },
  { id: 'dano', nome: 'Dano', desc: '+1 de dano por tiro', max: 10, aplicar: (s) => { s.dano += 1; } },
  { id: 'projetil', nome: 'Projétil extra', desc: '+1 projétil por disparo', max: 5, aplicar: (s) => { s.projeteis += 1; } },
  { id: 'perfurar', nome: 'Perfuração', desc: 'Os tiros atravessam +1 monstro', max: 4, aplicar: (s) => { s.perfura += 1; } },
  { id: 'velTiro', nome: 'Tiro veloz', desc: '+30% de velocidade do projétil', max: 5, aplicar: (s) => { s.velTiro *= 1.3; } },
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
  const brancos = {
    slime: slime.map(silhuetaBranca), morcego: morcego.map(silhuetaBranca), ogro: ogro.map(silhuetaBranca),
  };
  return { nave, quadros: { slime, morcego, ogro }, brancos, naveBranca: silhuetaBranca(nave.c) };
}

export function iniciarArcade({ adicionarFichas, bip }) {
  const el = (tag, cls, texto) => { const e = document.createElement(tag); if (cls) e.className = cls; if (texto != null) e.textContent = texto; return e; };
  const sprites = criarSprites();
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
  const tempoEl = el('span');
  hud.append(vidasEl, nivelEl, xpBox, killsEl, tempoEl);
  const fechar = el('button', 'arc-x', 'X'); fechar.title = 'Sair (Esc)';
  topo.append(titulo, hud, fechar);

  const tela = el('div', 'arc-tela');
  const cv = document.createElement('canvas'); cv.width = L; cv.height = A;
  const g = cv.getContext('2d');
  g.imageSmoothingEnabled = false;

  const sobre = el('div', 'arc-sobre'); // camada de textos/menus por cima da tela
  const painelInicio = el('div', 'arc-painel');
  painelInicio.append(el('h3', null, 'NAVE ARCADE'),
    el('p', null, 'A nave atira sozinha. Monstrinhos chegam pelos lados: derrote-os para ganhar XP e escolher melhorias.'),
    el('p', 'dica', 'Cadência · Dano · Projétil extra · Perfuração · Tiro veloz · Reparo'));
  const btnComecar = el('button', 'arc-btn', 'COMEÇAR [ESPAÇO]');
  painelInicio.append(btnComecar);

  const painelEscolha = el('div', 'arc-painel'); painelEscolha.hidden = true;
  const painelPausa = el('div', 'arc-painel'); painelPausa.hidden = true;
  const btnContinuar = el('button', 'arc-btn', 'CONTINUAR [ESC]');
  const btnSairPausa = el('button', 'arc-btn sec', 'SAIR');
  painelPausa.append(el('h3', null, 'PAUSADO'), btnContinuar, btnSairPausa);
  const painelFim = el('div', 'arc-painel'); painelFim.hidden = true;

  sobre.append(painelInicio, painelEscolha, painelPausa, painelFim);
  tela.append(cv, sobre);
  caixa.append(topo, tela, el('p', 'arc-nota', 'de brincadeira: as fichas ganhas são virtuais, sem dinheiro de verdade'));
  raiz.append(caixa);
  document.body.append(raiz);

  // ---------- estado do jogo ----------
  let aberto = false, modo = 'inicio', raf = 0, ultimo = 0;
  let S = null;
  let estrelas = [];

  function novoJogo() {
    estrelas = Array.from({ length: 60 }, (_, i) => ({ x: Math.random() * L, y: Math.random() * A, v: 3 + (i % 3) * 5, c: i % 3 }));
    S = {
      t: 0, hp: 6, maxHp: 6, nivel: 1, xp: 0, xpProx: 5, kills: 0,
      dano: 1, cadencia: 2, projeteis: 1, perfura: 0, velTiro: 160,
      inimigos: [], tiros: [], parts: [], spawnAcc: 0, recarga: 0.3, invul: 0, mira: 0, tremor: 0, niveis: {},
    };
  }

  function spawn() {
    const t = S.t;
    let tipo = 'slime';
    if (t > 15 && Math.random() < Math.min(0.45, (t - 15) / 80)) tipo = 'morcego';
    if (t > 40 && Math.random() < Math.min(0.4, (t - 40) / 120)) tipo = 'ogro';
    const base = TIPOS[tipo];
    const lado = Math.random() < 0.5 ? -1 : 1;
    const hp = Math.ceil(base.hp * (1 + t / 35)); // a vida dos monstros cresce com o tempo
    S.inimigos.push({ tipo, x: lado < 0 ? -10 : L + 10, y: 12 + Math.random() * (A - 24), hp, vel: base.vel * (0.9 + Math.random() * 0.3), fase: Math.random() * 6, piscar: 0 });
  }

  function particulas(x, y, n, cores, vel = 50) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, v = (0.3 + Math.random()) * vel;
      S.parts.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, vida: 0.3 + Math.random() * 0.3, cor: cores[i % cores.length] });
    }
  }

  function atirar(alvo) {
    const a = Math.atan2(alvo.y - CY, alvo.x - CX);
    S.mira = a;
    const n = S.projeteis, passo = 0.16;
    for (let i = 0; i < n; i++) {
      const ang = a + (i - (n - 1) / 2) * passo;
      S.tiros.push({ x: CX + Math.cos(ang) * 7, y: CY + Math.sin(ang) * 7, vx: Math.cos(ang) * S.velTiro, vy: Math.sin(ang) * S.velTiro, dano: S.dano, perf: S.perfura, acertou: new Set() });
    }
    bip(520 + Math.random() * 60, 0.04, 'square', 0.012);
  }

  function matar(m) {
    const tp = TIPOS[m.tipo];
    S.kills += 1;
    S.xp += tp.xp;
    particulas(m.x, m.y, 8, ['#ffe14a', '#ffffff', '#ff7a59'], 60);
    bip(200 + tp.xp * 40, 0.05, 'triangle', 0.03);
    S.inimigos.splice(S.inimigos.indexOf(m), 1);
  }

  function atualizar(dt) {
    S.t += dt;
    S.invul = Math.max(0, S.invul - dt);
    S.tremor = Math.max(0, S.tremor - dt);

    S.spawnAcc += dt * (0.6 + Math.min(14, S.t * 0.035)); // e chegam cada vez mais rápido
    while (S.spawnAcc >= 1) { S.spawnAcc -= 1; spawn(); }

    // monstros vão em direção à nave
    for (const m of S.inimigos) {
      const dx = CX - m.x, dy = CY - m.y, d = Math.hypot(dx, dy) || 1;
      let vx = (dx / d) * m.vel, vy = (dy / d) * m.vel;
      if (m.tipo === 'morcego') { const ondula = Math.sin(S.t * 5 + m.fase) * 28; vx += (-dy / d) * ondula; vy += (dx / d) * ondula; }
      m.x += vx * dt; m.y += vy * dt;
      m.piscar = Math.max(0, m.piscar - dt);
    }

    // tiro automático no monstro mais próximo
    S.recarga -= dt;
    if (S.recarga <= 0) {
      let alvo = null, menor = Infinity;
      for (const m of S.inimigos) { const d = Math.hypot(m.x - CX, m.y - CY); if (d < menor && m.x > -2 && m.x < L + 2) { menor = d; alvo = m; } }
      if (alvo) { atirar(alvo); S.recarga = 1 / S.cadencia; } else S.recarga = 0.05;
    }

    // projéteis
    for (let i = S.tiros.length - 1; i >= 0; i--) {
      const b = S.tiros[i];
      b.x += b.vx * dt; b.y += b.vy * dt;
      if (b.x < -6 || b.x > L + 6 || b.y < -6 || b.y > A + 6) { S.tiros.splice(i, 1); continue; }
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
      if (Math.hypot(m.x - CX, m.y - CY) < tp.raio + RAIO_NAVE) {
        particulas(m.x, m.y, 10, ['#ff3b4a', '#ffb3ba', '#ffffff'], 70);
        S.inimigos.splice(S.inimigos.indexOf(m), 1);
        if (S.invul <= 0) {
          S.hp -= tp.dano; S.invul = 0.7; S.tremor = 0.2;
          bip(110, 0.18, 'sawtooth', 0.05);
        }
      }
    }

    // partículas e estrelas
    for (let i = S.parts.length - 1; i >= 0; i--) {
      const p = S.parts[i];
      p.x += p.vx * dt; p.y += p.vy * dt; p.vida -= dt;
      if (p.vida <= 0) S.parts.splice(i, 1);
    }
    for (const e of estrelas) { e.y += e.v * dt; if (e.y > A) { e.y = 0; e.x = Math.random() * L; } }

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
    g.save();
    g.fillStyle = '#0b1026'; g.fillRect(0, 0, L, A);
    if (S && S.tremor > 0) g.translate(Math.round((Math.random() - 0.5) * 4), Math.round((Math.random() - 0.5) * 4));
    // estrelas e anéis de radar
    for (const e of estrelas) { g.fillStyle = ['#3a4a8a', '#6a7ac0', '#c9d3ff'][e.c]; g.fillRect(Math.round(e.x), Math.round(e.y), 1, 1); }
    g.strokeStyle = 'rgba(74, 168, 255, 0.12)'; g.lineWidth = 1;
    for (const r of [30, 62]) { g.beginPath(); g.arc(CX, CY, r, 0, Math.PI * 2); g.stroke(); }
    if (!S) { g.restore(); return; }

    // monstros
    for (const m of S.inimigos) {
      const f = Math.floor(S.t * 6 + m.fase) % 2;
      const spr = m.piscar > 0 ? sprites.brancos[m.tipo][f] : sprites.quadros[m.tipo][f];
      g.drawImage(spr, Math.round(m.x - spr.width / 2), Math.round(m.y - spr.height / 2));
    }
    // tiros
    for (const b of S.tiros) { g.fillStyle = '#ffe14a'; g.fillRect(Math.round(b.x) - 1, Math.round(b.y) - 1, 3, 3); g.fillStyle = '#ffffff'; g.fillRect(Math.round(b.x), Math.round(b.y), 1, 1); }
    // nave: casco + cano que aponta para o alvo (em 16 direções, para ficar em pixel certinho)
    const piscando = S.invul > 0 && Math.floor(S.t * 14) % 2 === 0;
    const passo = Math.PI / 8, ang = Math.round(S.mira / passo) * passo;
    g.fillStyle = '#ffd23f';
    for (let k = 4; k <= 9; k++) g.fillRect(Math.round(CX + Math.cos(ang) * k) - 1, Math.round(CY + Math.sin(ang) * k) - 1, 2, 2);
    g.drawImage(piscando ? sprites.naveBranca : sprites.nave.c, CX - 8, CY - 8);
    // partículas
    for (const p of S.parts) { g.fillStyle = p.cor; g.fillRect(Math.round(p.x), Math.round(p.y), 2, 2); }
    g.restore();
  }

  let hudCache = '';
  function atualizarHud() {
    if (!S) return;
    const chave = `${S.hp}/${S.maxHp}|${S.nivel}|${Math.floor(S.xp)}|${S.xpProx}|${S.kills}|${Math.floor(S.t)}`;
    if (chave === hudCache) return;
    hudCache = chave;
    vidasEl.replaceChildren(...Array.from({ length: S.maxHp }, (_, i) => el('i', i < S.hp ? 'cheia' : 'vazia')));
    nivelEl.textContent = `NV ${S.nivel}`;
    xpBarra.style.width = `${Math.min(100, (S.xp / S.xpProx) * 100)}%`;
    killsEl.textContent = `☠ ${S.kills}`;
    tempoEl.textContent = fmt(Math.floor(S.t));
  }

  function quadro(agora) {
    if (!aberto) return;
    const dt = Math.min((agora - ultimo) / 1000, 0.05);
    ultimo = agora;
    if (modo === 'jogando') atualizar(dt);
    desenhar();
    atualizarHud();
    raf = requestAnimationFrame(quadro);
  }

  // ---------- controle ----------
  function comecar() {
    novoJogo();
    hudCache = '';
    painelInicio.hidden = true; painelFim.hidden = true; painelEscolha.hidden = true; painelPausa.hidden = true;
    modo = 'jogando';
    ultimo = performance.now();
    bip(523, 0.08, 'square', 0.05); bip(784, 0.12, 'square', 0.05, 0.08);
  }
  function pausar(ligar) {
    if (ligar && modo === 'jogando') { modo = 'pausa'; painelPausa.hidden = false; }
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
    raiz.classList.remove('aberto');
    cancelAnimationFrame(raf);
  }

  btnComecar.onclick = comecar;
  btnContinuar.onclick = () => pausar(false);
  btnSairPausa.onclick = fecharJanela;
  fechar.onclick = fecharJanela;
  raiz.addEventListener('pointerdown', (e) => { if (e.target === raiz && modo !== 'jogando' && modo !== 'escolha') fecharJanela(); });
  window.addEventListener('visibilitychange', () => { if (document.hidden) pausar(true); });
  window.addEventListener('keydown', (e) => {
    if (!aberto) return;
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
      avancar(seg, auto = true) {
        for (let t = 0; t < seg; t += 0.05) {
          if (modo === 'escolha' && auto) escolher(0);
          if (modo === 'jogando') atualizar(0.05);
        }
        desenhar(); atualizarHud();
        return { modo, t: S && S.t, hp: S && S.hp, nivel: S && S.nivel, kills: S && S.kills, inimigos: S && S.inimigos.length, tiros: S && S.tiros.length, projeteis: S && S.projeteis, dano: S && S.dano, cadencia: S && S.cadencia };
      },
    };
  }

  return { abrir, fechar: fecharJanela, estaAberto: () => aberto };
}
