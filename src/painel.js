// Monta o conteúdo do painel de cada estação a partir dos "blocos" de data.js: parágrafos, números, etiquetas de tecnologias,
// cartões recolhíveis (só um aberto por vez), botões de contato com links (e "copiar") e um rodapé esperto, que mostra
// quantas estações você já visitou e qual é a próxima, com a direção para ir.
import { links } from './data.js';

const el = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; };

const URLS = {
  mailto: () => `mailto:${links.email}`, tel: () => `tel:${links.telefoneTel}`,
  github: () => links.github, linkedin: () => links.linkedin, portfolio: () => links.portfolio, repo: () => links.repo,
};
const resolver = (u) => (URLS[u] ? URLS[u]() : u);
const COPIAVEIS = { email: () => links.email, telefone: () => links.telefone };

function abrirFora(a) { // links externos abrem em outra aba; o foco sai do link para não atrapalhar as teclas do jogo
  if (!/^(mailto|tel):/.test(a.href)) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
  a.addEventListener('click', () => setTimeout(() => a.blur(), 0));
  return a;
}
function etiquetas(itens) { const w = el('div', 'etiquetas'); for (const t of itens) w.append(el('span', 'etq', t)); return w; }
function botaoLink(l) {
  const a = el('a', 'btn'); a.href = resolver(l.url); abrirFora(a);
  a.append(el('span', 'ic', l.icone || '↗'), el('span', 'tx', l.rotulo));
  return a;
}
function botaoCopiar(chave) {
  const b = el('button', 'copiar', 'COPIAR'); b.type = 'button'; b.title = 'Copiar para a área de transferência';
  b.addEventListener('click', async () => {
    const valor = COPIAVEIS[chave]();
    let ok = false;
    try { await navigator.clipboard.writeText(valor); ok = true; } catch { /* sem permissão: tenta o jeito antigo */ }
    if (!ok) { // plano B: seleciona um campo escondido e usa o comando de copiar do navegador
      const t = document.createElement('textarea'); t.value = valor; t.style.cssText = 'position:fixed;left:-999px;top:0;opacity:0'; document.body.append(t); t.select();
      try { ok = document.execCommand('copy'); } catch { ok = false; }
      t.remove();
    }
    b.textContent = ok ? 'COPIADO!' : 'COPIE À MÃO';
    b.blur(); setTimeout(() => { b.textContent = 'COPIAR'; }, 1700);
  });
  return b;
}

const fmtTempo = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
function lerJogo(chave) { try { return JSON.parse(localStorage.getItem(chave)); } catch { return null; } }
function estatisticas(fonte) { // números que o próprio visitante conquistou nos minijogos (ficam no navegador dele)
  const w = el('div', 'numeros jogo');
  const n = (v, r) => { const c = el('div', 'num'); c.append(el('b', null, String(v)), el('span', null, r)); w.append(c); };
  if (fonte === 'cassino') {
    const d = lerJogo('curriculo-cassino-v1');
    if (!d) return el('p', 'dica', 'Você ainda não girou nenhuma vez: comece pelas fichas de cortesia!');
    n(d.fichas | 0, 'fichas'); n((d.skins || []).length, 'skins ganhas'); n(d.giros | 0, 'giros dados');
  } else {
    const d = lerJogo('curriculo-arcade-v1');
    if (!d || !(d.tempo || d.kills)) return el('p', 'dica', 'Nenhum recorde ainda: seja o primeiro a deixar a sua marca!');
    n(fmtTempo(d.tempo | 0), 'melhor tempo'); n(d.kills | 0, 'monstros'); n(d.onda | 0, 'onda mais alta'); n(`◆ ${d.moedas | 0}`, 'moedas espaciais');
  }
  return w;
}

function cartao(b) {
  const d = el('details', 'cartao' + (b.atual ? ' atual' : ''));
  if (b.aberto) d.open = true;
  const s = el('summary');
  const tit = el('span', 'tit'); tit.append(el('b', null, b.titulo)); if (b.local) tit.append(el('i', null, b.local));
  s.append(tit, el('span', 'per', b.periodo + (b.atual ? ' · ATUAL' : '')));
  const corpo = el('div', 'corpo');
  if (b.texto) corpo.append(el('p', null, b.texto));
  if (b.tags) corpo.append(etiquetas(b.tags));
  if (b.links) { const w = el('div', 'links'); for (const l of b.links) w.append(botaoLink(l)); corpo.append(w); }
  d.append(s, corpo);
  return d;
}

const BLOCOS = {
  destaque: (b) => el('p', 'destaque', b.texto),
  texto: (b) => el('p', null, b.texto),
  dica: (b) => el('p', 'dica', b.texto),
  numeros: (b) => { const w = el('div', 'numeros'); for (const x of b.itens) { const c = el('div', 'num'); c.append(el('b', null, x.v), el('span', null, x.r)); w.append(c); } return w; },
  etiquetas: (b) => etiquetas(b.itens),
  grupo: (b) => { const w = el('div', 'grupo'); w.append(el('h3', null, b.titulo), etiquetas(b.itens)); return w; },
  cartao,
  estatisticas: (b) => estatisticas(b.fonte),
  links: (b) => {
    const w = el('div', 'contatos');
    for (const l of b.itens) {
      const linha = el('div', 'contato'), a = el('a', 'ln'); a.href = resolver(l.url); abrirFora(a);
      const tx = el('span', 'tx'); tx.append(el('small', null, l.rotulo), el('b', null, l.valor));
      a.append(el('span', 'ic', l.icone || '↗'), tx);
      linha.append(a); if (l.copiar) linha.append(botaoCopiar(l.copiar));
      w.append(linha);
    }
    return w;
  },
};

// ctx: { zonas, visitadas: Set de ids, proxima: { id, seta, seg } | null }
function rodape(zona, ctx) {
  const r = el('div', 'rodape');
  const prog = el('span', 'prog');
  const pts = el('span', 'pts');
  for (const z of ctx.zonas) pts.append(el('i', ctx.visitadas.has(z.id) ? 'vis' : ''));
  prog.append(pts, el('span', null, `${ctx.visitadas.size}/${ctx.zonas.length} visitadas`));
  r.append(prog);
  if (ctx.proxima) r.append(el('span', 'prox', `PRÓXIMA: ${ctx.proxima.id.toUpperCase()} ${ctx.proxima.seta} ~${ctx.proxima.seg} s`));
  else if (ctx.visitadas.size >= ctx.zonas.length) {
    const a = el('a', 'prox fim', 'VISITOU TUDO! MANDE UM OI ✉'); a.href = resolver('mailto'); abrirFora(a); r.append(a);
  }
  return r;
}

export function montarPainel(zona, ctx) {
  const nos = [];
  for (const b of zona.blocos ?? (zona.linhas || []).map((texto) => ({ tipo: 'texto', texto }))) nos.push((BLOCOS[b.tipo] ?? BLOCOS.texto)(b));
  const cartoes = nos.filter((n) => n.tagName === 'DETAILS'); // só um cartão aberto por vez: o painel não cresce demais
  for (const d of cartoes) d.addEventListener('toggle', () => { if (d.open) for (const o of cartoes) if (o !== d) o.open = false; });
  nos.push(rodape(zona, ctx));
  return nos;
}
