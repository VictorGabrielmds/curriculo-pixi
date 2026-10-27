// Plinko de brincadeira: a bolinha desce quicando pelos pinos e cai num compartimento com prêmio (fichas virtuais ou skins).
// O destino é sorteado antes (cada pino é uma "moeda" de 50%), e a animação só segue o caminho já escolhido:
// assim a regra é justa e dá para garantir uma skin depois de algumas tentativas sem ganhar nenhuma.

const LINHAS = 6; // fileiras de pinos = decisões esquerda/direita
const SLOTS = LINHAS + 1;
const DX = 14, LARG = 112, ALT = 104; // medidas do tabuleiro em "pixels de arte" (a tela amplia 2x)
const Y0 = 18, DY = 13; // altura da 1ª fileira de pinos e distância entre fileiras
const PASSO_MS = 230; // tempo de cada quique
const GIROS_ATE_GARANTIA = 8; // soltadas sem skin até a próxima ser garantida

// premios por compartimento, da esquerda para a direita
const PREMIOS = [
  { tipo: 'skin', tier: 'lendaria', rot: 'L' },
  { tipo: 'skin', tier: 'rara', rot: 'R' },
  { tipo: 'fichas', fichas: 12 },
  { tipo: 'fichas', fichas: 4 },
  { tipo: 'fichas', fichas: 12 },
  { tipo: 'skin', tier: 'comum', rot: 'C' },
  { tipo: 'skin', tier: 'epica', rot: 'E' },
];
// fichas de consolação quando o jogador já tem todas as skins daquela raridade
const BONUS_TIER = { comum: 30, rara: 60, epica: 120, lendaria: 250 };

export function criarPlinko(ctx) {
  const { estado, salvar, bip, el, CUSTO, FICHAS_GRATIS, RARIDADES, CATEGORIAS, ORDEM_TIERS } = ctx;

  // ---------- gabinete ----------
  const raiz = el('div', 'cas-maq azul'); raiz.hidden = true;
  const fechar = el('button', 'cas-x', 'X'); fechar.title = 'Fechar (Esc)'; fechar.onclick = () => ctx.fechar();
  const letreiro = el('div', 'cas-letreiro');
  const lampadas = el('div', 'lampadas');
  for (let i = 0; i < 9; i++) lampadas.append(el('i', 'lampada'));
  letreiro.append(lampadas, el('h2', null, 'PLINKO'));

  const janela = el('div', 'pl-janela');
  const tela = document.createElement('canvas');
  tela.className = 'pl-tabuleiro'; tela.width = LARG; tela.height = ALT;
  janela.append(tela);
  const slotsEl = el('div', 'pl-slots');
  const celulas = PREMIOS.map((p) => {
    const c = el('div', 'pl-slot');
    if (p.tipo === 'skin') { c.textContent = p.rot; c.style.setProperty('--c', RARIDADES[p.tier].cor); c.style.color = '#0b1026'; c.title = `Skin ${RARIDADES[p.tier].nome.toLowerCase()}`; }
    else { c.textContent = String(p.fichas); c.style.setProperty('--c', '#2f7d3a'); }
    slotsEl.append(c);
    return c;
  });

  const lcd = el('div', 'cas-lcd');
  const mensagem = el('div', 'cas-msg', 'APERTE SOLTAR!');
  const fichasLinha = el('div', 'cas-fichas');
  const fichasTxt = el('b');
  fichasLinha.append(el('i', 'moeda'), fichasTxt, el('span', null, 'FICHAS'));
  lcd.append(mensagem, fichasLinha);
  const premioBox = el('div', 'cas-premio'); premioBox.hidden = true;

  const controles = el('div', 'cas-controles');
  const btnColecao = el('button', 'cas-mini', 'SKINS');
  const btnSom = el('button', 'cas-mini');
  const btnSoltar = el('button', 'cas-girar', 'SOLTAR'); btnSoltar.title = `Soltar a bolinha (-${CUSTO} fichas) · Espaço`;
  const btnGratis = el('button', 'cas-mini largo', `+${FICHAS_GRATIS} FICHAS`); btnGratis.hidden = true;
  controles.append(btnColecao, btnSom, btnSoltar, btnGratis);
  const legenda = el('p', 'cas-nota', 'L lendária · E épica · R rara · C comum — a cada 9 soltadas sem skin, a próxima é garantida');
  const nota = el('p', 'cas-nota', 'de brincadeira: fichas virtuais, sem dinheiro de verdade');
  raiz.append(fechar, letreiro, janela, slotsEl, lcd, premioBox, controles, legenda, nota);

  // ---------- desenho do tabuleiro ----------
  const ctx2d = tela.getContext('2d');
  const xPeg = (k, j) => LARG / 2 + (j - k / 2) * DX;
  const yPeg = (k) => Y0 + k * DY;
  let bola = null; // { caminho, inicio, acertos: Map(linha → hora do último toque) }
  const toques = new Map(); // "k,j" → hora do toque (para o pino piscar)

  function caminhoWaypoints(caminho) {
    const pts = [{ x: LARG / 2, y: 3 }];
    let j = 0;
    for (let k = 0; k < LINHAS; k++) {
      pts.push({ x: xPeg(k, j), y: yPeg(k) - 4, peg: [k, j] });
      j += caminho[k] ? 1 : 0;
    }
    pts.push({ x: LARG / 2 + (j - LINHAS / 2) * DX, y: ALT - 6 });
    return pts;
  }

  function posicaoBola(pts, tMs) {
    const i = Math.min(pts.length - 2, Math.floor(tMs / PASSO_MS));
    const u = Math.min(1, (tMs - i * PASSO_MS) / PASSO_MS);
    const a = pts[i], b = pts[i + 1];
    const x = a.x + (b.x - a.x) * u;
    const y = a.y + (b.y - a.y) * (u * u) - (i >= 1 ? 5 * Math.sin(Math.PI * u) : 0); // quica no pino e cai
    return { x, y, segmento: i };
  }

  function desenhar(agora, pos) {
    ctx2d.clearRect(0, 0, LARG, ALT);
    for (let k = 0; k < LINHAS; k++) {
      for (let j = 0; j <= k; j++) {
        const x = Math.round(xPeg(k, j)), y = Math.round(yPeg(k));
        const t = toques.get(`${k},${j}`);
        const aceso = t !== undefined && agora - t < 180;
        ctx2d.fillStyle = '#070a1a'; ctx2d.fillRect(x - 3, y - 3, 6, 6);
        ctx2d.fillStyle = aceso ? '#ffe14a' : '#dfe6ff'; ctx2d.fillRect(x - 2, y - 2, 4, 4);
      }
    }
    if (pos) {
      const x = Math.round(pos.x), y = Math.round(pos.y);
      ctx2d.fillStyle = '#070a1a';
      for (let j = -4; j <= 4; j++) for (let i = -4; i <= 4; i++) if (i * i + j * j <= 15) ctx2d.fillRect(x + i, y + j, 1, 1);
      ctx2d.fillStyle = '#ffe14a';
      for (let j = -3; j <= 3; j++) for (let i = -3; i <= 3; i++) if (i * i + j * j <= 8) ctx2d.fillRect(x + i, y + j, 1, 1);
      ctx2d.fillStyle = '#fff7a8'; ctx2d.fillRect(x - 2, y - 2, 2, 2);
    }
  }

  // ---------- jogo ----------
  let ocupado = false;

  function mostrarMensagem(txt, cls = '') { mensagem.textContent = txt; mensagem.className = 'cas-msg ' + cls; }

  function atualizar() {
    fichasTxt.textContent = String(estado.fichas);
    const semFicha = estado.fichas < CUSTO;
    btnSoltar.disabled = ocupado || semFicha;
    btnGratis.hidden = !semFicha || ocupado;
    btnSom.textContent = estado.som ? 'SOM ON' : 'SOM OFF';
  }

  const embaralhar = (arr) => { for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; };
  const caminhoPara = (slot) => embaralhar([...Array(slot).fill(true), ...Array(LINHAS - slot).fill(false)]);

  // compartimento de skin da menor raridade que ainda tem skin para ganhar (usado na garantia)
  function slotGarantido() {
    for (const tier of ORDEM_TIERS) {
      if (ctx.bloqueadasDoTier(tier).length) return PREMIOS.findIndex((p) => p.tipo === 'skin' && p.tier === tier);
    }
    return -1;
  }

  function soltar() {
    if (ocupado || estado.fichas < CUSTO) return;
    estado.fichas -= CUSTO;
    ocupado = true;
    premioBox.hidden = true;
    celulas.forEach((c) => c.classList.remove('acertou'));
    let caminho = Array.from({ length: LINHAS }, () => Math.random() < 0.5);
    if ((estado.semSkinPlinko | 0) >= GIROS_ATE_GARANTIA) {
      const g = slotGarantido();
      if (g >= 0) caminho = caminhoPara(g);
    }
    const slot = caminho.filter(Boolean).length;
    salvar();
    atualizar();
    mostrarMensagem('CAINDO...');
    const pts = caminhoWaypoints(caminho);
    const total = PASSO_MS * (pts.length - 1);
    const inicio = performance.now();
    let ultimoSeg = -1;
    const quadro = (agora) => {
      const t = Math.min(total, agora - inicio);
      const pos = posicaoBola(pts, t);
      if (pos.segmento !== ultimoSeg) {
        ultimoSeg = pos.segmento;
        const alvo = pts[pos.segmento];
        if (alvo && alvo.peg) { toques.set(`${alvo.peg[0]},${alvo.peg[1]}`, agora); bip(300 + alvo.peg[0] * 40 + Math.random() * 30, 0.05, 'square', 0.025); }
      }
      desenhar(agora, pos);
      if (t < total) requestAnimationFrame(quadro); else terminar(slot);
    };
    requestAnimationFrame(quadro);
  }

  function terminar(slot) {
    ocupado = false;
    desenhar(performance.now(), null);
    celulas[slot].classList.add('acertou');
    const p = PREMIOS[slot];
    let skin = null;
    if (p.tipo === 'fichas') {
      estado.fichas += p.fichas;
      estado.semSkinPlinko = (estado.semSkinPlinko | 0) + 1;
      mostrarMensagem(`+${p.fichas} FICHAS`, p.fichas >= 12 ? 'par' : '');
      bip(p.fichas >= 12 ? 660 : 440, 0.12);
    } else {
      skin = ctx.sortearSkin(p.tier);
      if (skin) {
        estado.skins.push(skin.id);
        estado.semSkinPlinko = 0;
        mostrarMensagem('SKIN GANHA!', 'ganhou');
      } else {
        estado.fichas += BONUS_TIER[p.tier];
        estado.semSkinPlinko = (estado.semSkinPlinko | 0) + 1;
        mostrarMensagem(`SKINS ${RARIDADES[p.tier].nome.toUpperCase()}S COMPLETAS! +${BONUS_TIER[p.tier]}`, 'par');
      }
    }
    salvar();
    if (skin) {
      premioBox.replaceChildren();
      premioBox.style.setProperty('--r', RARIDADES[skin.raridade].cor);
      const cat = CATEGORIAS.find((c) => c.id === skin.cat).nome;
      premioBox.append(el('b', null, 'NOVA SKIN!'), el('span', null, `${cat}: ${skin.nome} (${RARIDADES[skin.raridade].nome})`));
      const b = el('button', 'cas-mini', 'EQUIPAR');
      b.onclick = () => { ctx.equipar(skin); b.disabled = true; b.textContent = 'OK'; };
      premioBox.append(b);
      premioBox.hidden = false;
      [784, 988, 1175, 1568].forEach((f, k) => bip(f, 0.18, 'triangle', 0.06, 0.2 + k * 0.12));
    }
    ctx.onMudou();
  }

  btnSoltar.onclick = soltar;
  btnColecao.onclick = () => ctx.abrirColecao();
  btnSom.onclick = () => ctx.alternarSom();
  btnGratis.onclick = () => { ctx.darFichasGratis(); mostrarMensagem('FICHAS DE CORTESIA!'); };

  desenhar(performance.now(), null);
  return { raiz, soltar, atualizar, ocupado: () => ocupado, foco: () => btnSoltar.focus() };
}
