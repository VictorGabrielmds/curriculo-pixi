// Bancada de montagem da nave: escolha o chassi, clique num encaixe da nave e instale a peça que quiser. Como montar um PC
// ou um carro: o reator tem de dar conta do consumo, o arrefecimento do calor e o peso muda a velocidade. Peças que você
// ainda não fabricou podem ser testadas em prévia (sem gastar moedas); fabricar custa ◆ moedas espaciais, uma vez só.
import './garagem.css';
import {
  CHASSIS, TIPOS, AJUSTES, PINTURAS, pecaPorId, chassiPorId, pecasDoTipo, normalizarProjeto, diagnosticarProjeto, calcularEfeitosNave,
  descreverPeca, descreverChassi, resumoEfeitos, nomeProjetoNave, encaixesDoProjeto, itemPorId, chefesFaltando,
} from './naveModular.js';
import { gerarNave, desenharBancada, iconePeca, iconeChassi, TAM_NAVE } from './naveDesenho.js';

const ESCALA = 11;
const STATUS = {
  estavel: ['ok', '● SISTEMA ESTÁVEL'], subtensao: ['ruim', '▲ SUBTENSÃO'], superaquecimento: ['ruim', '▲ SUPERAQUECIMENTO'], critico: ['ruim', '▲ SUBTENSÃO E SUPERAQUECIMENTO'],
};

// el: criador de elementos do arcade; obterDados: devolve os dados salvos (projeto, pecasLiberadas, moedas); aoMudar: salva e atualiza a nave
export function criarGaragem({ el, obterDados, tema, bip, aoMudar }) {
  let selecionado = 0, previa = null, testeAte = 0, efeito = null, dica = '';
  const raiz = el('div', 'gar');
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = TAM_NAVE * ESCALA; canvas.className = 'gar-canvas';
  const ctx = canvas.getContext('2d');
  const dados = () => obterDados();
  const liberado = (id) => dados().pecasLiberadas.includes(id);
  const faltamChefes = (item) => chefesFaltando(item, dados().chefesDerrotados); // chefões que ainda faltam derrotar para poder fabricar
  const textoExige = (item) => `DERROTE ${item.exige} CHEFÕES (${Math.min(item.exige, dados().chefesDerrotados | 0)}/${item.exige})`;
  let spriteVisual = null, chaveSprite = '';

  // o projeto que a bancada mostra: o instalado ou, se houver prévia, ele com a peça (ou o chassi) em teste
  function projetoVisual() {
    const base = normalizarProjeto(dados().projeto);
    if (!previa) return base;
    if (previa.chassi) return normalizarProjeto({ ...base, chassi: previa.chassi });
    const pecas = [...base.pecas]; pecas[previa.slot] = previa.peca;
    return normalizarProjeto({ ...base, pecas });
  }
  function atualizarSprite(projeto) {
    const chave = JSON.stringify(projeto);
    if (chave === chaveSprite) return;
    chaveSprite = chave;
    spriteVisual = gerarNave({ casco: 0, motor: 0, nucleo: 0, armas: 0, ima: 0 }, tema, projeto).c;
  }

  const emitir = (projeto) => { dados().projeto = normalizarProjeto(projeto); aoMudar(); };
  function comprar(id, custo) { // fabrica uma peça pela primeira vez
    if (liberado(id)) return true;
    if (faltamChefes(itemPorId(id)) > 0 || dados().moedas < custo) return false;
    dados().moedas -= custo; dados().pecasLiberadas.push(id);
    return true;
  }
  const somInstalar = () => { bip(520, 0.06, 'square', 0.045); bip(880, 0.1, 'triangle', 0.05, 0.07); bip(1320, 0.16, 'sine', 0.045, 0.15); };
  function instalarPeca(slot, id) {
    const peca = pecaPorId(id);
    if (!comprar(id, peca.custo)) return;
    const p = normalizarProjeto(dados().projeto); p.pecas[slot] = id;
    previa = null; efeito = { slot, t0: performance.now() / 1000 };
    somInstalar(); emitir(p); render();
  }
  function remover(slot) {
    const p = normalizarProjeto(dados().projeto); p.pecas[slot] = null;
    previa = null; efeito = { slot, t0: performance.now() / 1000 };
    bip(300, 0.06, 'square', 0.04); bip(200, 0.1, 'square', 0.04, 0.06);
    emitir(p); render();
  }
  function instalarChassi(id) {
    const c = chassiPorId(id);
    if (!comprar(id, c.custo)) return;
    previa = null; selecionado = 0; efeito = { slot: -1, t0: performance.now() / 1000 };
    somInstalar(); emitir({ ...normalizarProjeto(dados().projeto), chassi: id }); render();
  }
  function ajustar(chave, passo) {
    const p = normalizarProjeto(dados().projeto); p[chave] = passo;
    if (chave === 'pintura') { bip(700 + passo * 90, 0.05, 'triangle', 0.045); bip(1000 + passo * 60, 0.07, 'sine', 0.04, 0.05); }
    else { bip(400 + passo * 140, 0.05, 'square', 0.04); bip(200 + passo * 70, 0.04, 'sawtooth', 0.03, 0.03); }
    emitir(p); render();
  }
  function testar() {
    testeAte = performance.now() / 1000 + 2.6;
    const p = normalizarProjeto(dados().projeto);
    const motores = encaixesDoProjeto(p).filter((e) => e.tipo === 'motor' && e.peca).length;
    for (let k = 0; k < 10; k++) bip(70 + k * 9 + motores * 12, 0.28, 'sawtooth', 0.025, k * 0.24);
    encaixesDoProjeto(p).filter((e) => e.tipo === 'arma' && e.peca).forEach((e, n) => {
      const f = { canhao: 520, duplo: 600, rail: 900, dispersor: 700, bobina: 1100, gatling: 480, lanca: 780, singular: 300 }[e.peca.id] || 600;
      const rapido = e.peca.id === 'gatling', onda = ['rail', 'singular'].includes(e.peca.id) ? 'sawtooth' : 'square';
      for (let k = 0; k < (rapido ? 18 : 7); k++) bip(f - k * 8, 0.05, onda, 0.03, 0.2 + k * (rapido ? 0.12 : 0.3) + n * 0.1);
    });
    dica = 'TESTE NA BANCADA: ligando motores, reator e armas.';
    render();
  }

  // ---------- partes da interface ----------
  function medidor(nome, valor, limite, texto, escala = 1.6, marcador = true) {
    const razao = limite > 0 ? valor / limite : 9;
    const cls = razao > 1 ? 'ruim' : razao > 0.85 ? 'aviso' : 'ok';
    const m = el('div', 'gar-medidor');
    const barra = el('div', `gar-barra ${cls}`);
    const enche = el('i'); enche.style.width = `${Math.min(100, (razao / escala) * 100)}%`;
    barra.append(enche); if (marcador) { const lim = el('b'); lim.style.left = `${100 / escala}%`; barra.append(lim); }
    m.append(el('span', 'gar-nome', nome), barra, el('span', `gar-valor ${cls}`, texto));
    return m;
  }

  function cabecalho(projeto, d, e) {
    const topo = el('div', 'gar-topo');
    const nome = el('div', 'gar-nome-projeto'); nome.append(el('small', null, previa ? 'PRÉVIA (NADA FOI INSTALADO)' : 'PROJETO ATUAL'), el('b', null, nomeProjetoNave(projeto)));
    const chips = el('div', 'gar-chips');
    const itens = resumoEfeitos(e);
    if (!itens.length) chips.append(el('span', 'gar-chip', 'CONFIGURAÇÃO EQUILIBRADA'));
    for (const it of itens) { const c = el('span', `gar-chip ${it.bom ? 'bom' : 'ruim'}`); c.append(el('em', null, it.nome), document.createTextNode(` ${it.valor}`)); chips.append(c); }
    topo.append(nome, chips);
    return topo;
  }

  function painelEncaixes(projeto) {
    const banca = el('div', 'gar-banca');
    banca.append(canvas);
    for (const e of encaixesDoProjeto(projeto)) {
      const t = TIPOS[e.tipo];
      const b = el('button', `gar-slot${e.i === selecionado ? ' sel' : ''}${e.peca ? '' : ' vazio'}${previa && previa.slot === e.i ? ' previa' : ''}`);
      b.style.left = `${((e.x + 0.5) / TAM_NAVE) * 100}%`; b.style.top = `${((e.y + 0.5) / TAM_NAVE) * 100}%`;
      b.style.setProperty('--c', t.cor);
      b.title = `${t.nome}: ${e.peca ? e.peca.nome : 'vazio'}`;
      b.append(el('span', 'gar-slot-tipo', e.peca ? '' : t.nome));
      b.onclick = () => { selecionado = e.i; previa = null; render(); };
      banca.append(b);
    }
    return banca;
  }

  function seletor(chave, valor) {
    const a = AJUSTES[chave], bloco = el('div', 'gar-ajuste');
    const knob = el('button', 'gar-knob'); knob.title = 'Girar o seletor';
    const agulha = el('i'); agulha.style.transform = `rotate(${-135 + valor * 90}deg)`; knob.append(agulha);
    knob.onclick = () => ajustar(chave, (valor + 1) % 4);
    const texto = el('div', 'gar-ajuste-texto'); texto.append(el('b', null, a.curto), el('small', null, a.dica));
    const passos = el('div', 'gar-passos');
    a.passos.forEach((p, k) => { const b = el('button', `gar-passo${k === valor ? ' on' : ''}${k === 3 ? ' max' : ''}`, p.nome); b.onclick = () => ajustar(chave, k); passos.append(b); });
    bloco.append(knob, texto, passos);
    return bloco;
  }

  function pintura(valor) {
    const bloco = el('div', 'gar-pintura');
    bloco.append(el('b', null, 'PINTURA'));
    const cores = el('div', 'gar-cores');
    PINTURAS.forEach((p, k) => {
      const b = el('button', `gar-cor${k === valor ? ' on' : ''}`); b.title = p.nome; b.style.background = `linear-gradient(135deg, ${p.mostra[0]} 55%, ${p.mostra[1]} 55%)`;
      b.onclick = () => ajustar('pintura', k);
      cores.append(b);
    });
    bloco.append(cores, el('small', null, PINTURAS[valor].nome));
    return bloco;
  }

  function cartaoChassi(c, projeto) {
    const atual = normalizarProjeto(dados().projeto).chassi === c.id, emPrevia = previa?.chassi === c.id;
    const card = el('article', `gar-chassi${atual ? ' instalado' : ''}${emPrevia ? ' em-previa' : ''}`);
    const ic = iconeChassi(c.id, tema); ic.className = 'gar-icone-chassi';
    const lib = liberado(c.id);
    const trancado = !lib && faltamChefes(c) > 0;
    card.append(ic, el('b', null, c.nome), el('small', null, lib ? (atual ? 'INSTALADO' : 'NA BANCADA') : trancado ? `🔒 ${c.exige} CHEFÕES` : `PROJETO ◆${c.custo}`));
    if (trancado) card.classList.add('trancada');
    card.title = `${c.resumo}\n${descreverChassi(c)}\nEncaixes: ${c.encaixes.map((e) => TIPOS[e.tipo].nome).join(', ')}`;
    card.onclick = () => { previa = atual ? null : { chassi: c.id }; selecionado = Math.min(selecionado, chassiPorId(c.id).encaixes.length - 1); render(); };
    return card;
  }

  function cartaoPeca(peca, encaixe) {
    const projeto = normalizarProjeto(dados().projeto);
    const instalada = projeto.pecas[encaixe.i] === peca.id, emPrevia = previa?.peca === peca.id && previa.slot === encaixe.i, lib = liberado(peca.id);
    const card = el('article', `gar-peca${instalada ? ' instalado' : ''}${emPrevia ? ' em-previa' : ''}${lib ? '' : ' bloqueada'}${efeito && efeito.slot === encaixe.i && instalada ? ' novo' : ''}`);
    const ic = iconePeca(peca, tema); ic.className = 'gar-icone';
    const cab = el('div', 'gar-peca-cab'); cab.append(ic);
    const nomes = el('div'); nomes.append(el('b', null, peca.nome), el('small', null, peca.resumo)); cab.append(nomes);
    const stats = el('div', 'gar-stats');
    stats.append(el('span', 'm', `${peca.massa} kg`));
    if (peca.potencia) stats.append(el('span', 'p', `+${peca.potencia} W`));
    if (peca.consumo) stats.append(el('span', 'w', `-${peca.consumo} W`));
    if (peca.calor) stats.append(el('span', 'c', `+${peca.calor} °C`));
    if (peca.dissipacao) stats.append(el('span', 'f', `-${peca.dissipacao} °C`));
    card.append(cab, el('p', 'gar-efeito', descreverPeca(peca)), stats);
    const botao = el('button', 'arc-btn pequeno');
    if (instalada) { botao.textContent = 'INSTALADA'; botao.disabled = true; }
    else if (lib) { botao.textContent = 'INSTALAR'; botao.onclick = (ev) => { ev.stopPropagation(); instalarPeca(encaixe.i, peca.id); }; }
    else if (faltamChefes(peca) > 0) { // do topo da bancada: antes das moedas, pede experiência
      card.classList.add('trancada'); card.append(el('p', 'gar-req', `🔒 ${textoExige(peca)} · ◆${peca.custo}`));
      botao.textContent = `BLOQUEADA · ◆${peca.custo}`; botao.disabled = true; botao.title = `Faltam ${faltamChefes(peca)} chefões derrotados`;
    }
    else { const falta = peca.custo - dados().moedas; botao.textContent = falta > 0 ? `FABRICAR ◆${peca.custo}` : `FABRICAR E INSTALAR ◆${peca.custo}`; botao.disabled = falta > 0; botao.title = falta > 0 ? `Faltam ${falta} moedas espaciais` : ''; botao.onclick = (ev) => { ev.stopPropagation(); instalarPeca(encaixe.i, peca.id); }; }
    card.append(botao);
    card.onclick = () => { previa = instalada ? null : { slot: encaixe.i, peca: peca.id }; render(); };
    return card;
  }

  function render() {
    const projeto = projetoVisual(), instalado = normalizarProjeto(dados().projeto);
    atualizarSprite(projeto);
    const e = calcularEfeitosNave(projeto), d = e.diagnostico;
    const encaixes = encaixesDoProjeto(instalado);
    selecionado = Math.max(0, Math.min(selecionado, encaixes.length - 1));
    const enc = encaixes[selecionado];

    const esq = el('div', 'gar-esq');
    esq.append(painelEncaixes(projeto));
    const med = el('div', 'gar-medidores');
    med.append(
      medidor('POTÊNCIA', d.consumo, d.producao, `${Math.round(d.consumo)} / ${Math.round(d.producao)} W`),
      medidor('CALOR', d.calor, d.dissipacao, `${Math.round(d.calor)} / ${Math.round(d.dissipacao)} °C`),
      medidor('MASSA', d.massa, d.massaRef, `${d.massa} kg · VEL ×${d.fatorMassa.toFixed(2)}`, 1.8),
    );
    const [clsStatus, txtStatus] = STATUS[d.status];
    const status = el('div', `gar-status ${clsStatus}`, txtStatus);
    med.append(status);
    for (const a of d.alertas) med.append(el('p', `gar-alerta ${a.tipo}`, a.texto));
    esq.append(med, seletor('clock', projeto.clock), seletor('tensao', projeto.tensao), pintura(projeto.pintura));
    const teste = el('button', 'arc-btn gar-teste', 'TESTE NA BANCADA ▶'); teste.onclick = testar;
    esq.append(teste);

    const dir = el('div', 'gar-dir');
    const chassis = el('div', 'gar-chassis');
    for (const c of CHASSIS) chassis.append(cartaoChassi(c, projeto));
    dir.append(el('h4', 'gar-titulo', 'CHASSI · BASE DA NAVE'), chassis);
    if (previa?.chassi) {
      const c = chassiPorId(previa.chassi), lib = liberado(c.id), falta = c.custo - dados().moedas;
      const faixa = el('div', 'gar-faixa'); faixa.append(el('span', null, `${c.nome}: ${c.resumo} ${descreverChassi(c)}`));
      const trancado = !lib && faltamChefes(c) > 0;
      if (trancado) faixa.append(el('span', 'gar-req', `🔒 ${textoExige(c)}`));
      const b = el('button', 'arc-btn pequeno', lib ? 'TROCAR DE CHASSI' : trancado ? `BLOQUEADO · ◆${c.custo}` : `FABRICAR ◆${c.custo}`); b.disabled = !lib && (falta > 0 || trancado); b.onclick = () => instalarChassi(c.id);
      faixa.append(b); dir.append(faixa);
    }
    const tipo = TIPOS[enc.tipo];
    const mesmoTipo = encaixes.filter((x) => x.tipo === enc.tipo);
    dir.append(el('h4', 'gar-titulo', `ENCAIXE ${tipo.nome}${mesmoTipo.length > 1 ? ` ${mesmoTipo.findIndex((x) => x.i === enc.i) + 1}/${mesmoTipo.length}` : ''} · ESCOLHA A PEÇA`));
    const lista = el('div', 'gar-pecas');
    for (const p of pecasDoTipo(enc.tipo)) lista.append(cartaoPeca(p, enc));
    dir.append(lista);
    const obrigatorio = ['arma', 'motor', 'reator'].includes(enc.tipo) && mesmoTipo.filter((x) => x.peca).length <= 1;
    if (enc.peca) { const rem = el('button', 'arc-btn sec pequeno', obrigatorio ? 'ESTE ENCAIXE É OBRIGATÓRIO' : 'RETIRAR PEÇA DESTE ENCAIXE'); rem.disabled = obrigatorio; rem.onclick = () => remover(enc.i); dir.append(rem); }
    if (dica) dir.append(el('p', 'gar-dica', dica));

    raiz.replaceChildren(cabecalho(projeto, d, e), el('div', 'gar-corpo', null));
    raiz.querySelector('.gar-corpo').append(esq, dir);
  }

  render();

  return {
    raiz, render,
    // chamada a cada quadro enquanto a oficina estiver aberta
    animar(t) {
      const projeto = projetoVisual(), d = diagnosticarProjeto(projeto);
      atualizarSprite(projeto);
      const teste = performance.now() / 1000 < testeAte ? 1 : 0;
      desenharBancada(ctx, spriteVisual, projeto, t, { escala: ESCALA, tema, selecionado, previa: previa && previa.slot !== undefined ? previa.slot : -1, teste, calor: Math.max(0, d.razaoCalor - 1) });
      if (efeito && t - efeito.t0 < 0.9) { // peça instalada: anel de luz sobre o encaixe
        const u = (t - efeito.t0) / 0.9, e = efeito.slot >= 0 ? encaixesDoProjeto(projeto)[efeito.slot] : { x: 12, y: 12 };
        if (e) { ctx.globalAlpha = 1 - u; ctx.strokeStyle = '#7dff9a'; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc((e.x + 0.5) * ESCALA, (e.y + 0.5) * ESCALA, 12 + u * 60, 0, Math.PI * 2); ctx.stroke(); ctx.globalAlpha = 1; }
      }
    },
    ao_abrir() { previa = null; dica = ''; render(); },
  };
}
