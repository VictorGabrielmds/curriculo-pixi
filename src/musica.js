// Música de fundo do planeta (feita no BeepBox): toca em loop enquanto você anda, some devagar quando um jogo abre
// e respeita o botão de som. O navegador só deixa tocar depois do primeiro toque ou tecla, então espera por ele.
const VOLUME = 0.32;
const VELOCIDADE_FADE = 0.7; // volume por segundo ao entrar e sair

export function iniciarMusicaAmbiente({ somAtivo }) {
  const faixa = new Audio(`${import.meta.env.BASE_URL}audio/ambiente.mp3`);
  faixa.loop = true;
  faixa.preload = 'auto';
  faixa.volume = 0;
  let liberado = false, tentando = false, vol = 0;

  const liberar = () => { liberado = true; };
  for (const ev of ['pointerdown', 'keydown', 'touchstart']) window.addEventListener(ev, liberar, { passive: true });

  return {
    // chamado a cada quadro; calado = true quando um jogo está aberto (o jogo tem a própria música)
    atualizar(dt, calado) {
      const alvo = liberado && somAtivo() && !calado && !document.hidden ? VOLUME : 0;
      vol += Math.max(-dt * VELOCIDADE_FADE, Math.min(dt * VELOCIDADE_FADE, alvo - vol));
      faixa.volume = Math.max(0, Math.min(1, vol));
      if (alvo > 0 && faixa.paused && !tentando) {
        tentando = true;
        faixa.play().then(() => { tentando = false; }).catch(() => { tentando = false; liberado = false; }); // sem permissão: espera o próximo toque
      } else if (alvo === 0 && vol <= 0.001 && !faixa.paused) faixa.pause();
    },
  };
}
