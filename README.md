# Currículo jogável em 3D (Three.js)

Um planetinha estilo "Pequeno Príncipe": o planeta inteiro aparece pequeno na tela, o personagem fica no centro
e o planeta gira sob os pés dele enquanto ele anda em qualquer direção (norte, sul, leste, oeste). Ao chegar perto
de uma estação (início, experiência, projetos, habilidades, contato), abre um painel com uma parte do currículo.
Árvores, pedras e estações são sólidas: não dá para atravessar (pedras dá para pular). Feito com [Three.js](https://threejs.org) + Vite, sem arquivos de modelo ou imagem:
planeta, árvores, estações e o terreno são gerados em código; o personagem é um sprite 2D em pixel art (`public/avatar`) com 4 direções (frente, costas e os dois lados) e animações de parado, andar, correr e pular; o terreno do planeta é desenhado por pixel num shader, por isso o litoral fica nítido em qualquer tamanho de tela.

> A versão 2D em PixiJS continua na branch `main`; esta é a branch `3d`.

## Visual pixel art

A cena 3D é desenhada numa tela interna de ~640 px de altura e ampliada sem suavização; um pós-processamento limita a paleta (com dithering) e desenha contorno escuro nas silhuetas. A altura interna é calculada para que cada pixel do avatar seja exatamente um pixel do mundo (`ALTURA_INTERNA` em `src/main.js`). Para comparar sem o contorno, abra com `?borda=0`.

## Cassino da Sorte (minijogo)

A estação **Cassino** abre um caça-níquel de brincadeira (tecla `E` ou botão **JOGAR**): só fichas virtuais, guardadas no navegador, sem dinheiro de verdade. Os rolos giram para baixo mostrando 3 símbolos de cada vez; vale a linha do meio. Três símbolos iguais dão fichas e uma **skin** para uma parte do mundo (planeta, árvores ou céu); a cada 10 giros sem trio, o próximo é garantido. A **Coleção** permite equipar as skins, e a escolha fica salva. As skins estão definidas em `src/skins.js` e a lógica em `src/cassino.js`.

### Moedas e Nave Arcade (resumo dos extras do jogo de nave)

- **Armas nas teclas 1 a 4** (ou clicando nos botões): **1** tiro normal, **2** laser contínuo (dano alto, alcance curto, esquenta e recarrega), **3** e **4** são slots de poderes novos, conquistados ao subir de nível ou vencer o alienígena: **míssil** (dano em área nos inimigos mais próximos) e **bolas de energia** (giram em volta da nave). Cada poder tem seus próprios upgrades (mais mísseis/bolas, recarga, dano, área, velocidade).
- **Oficina por partes da nave**: um painel de engenharia mostra a nave aberta (que muda conforme as melhorias) e liga cada peça às suas melhorias: motor, núcleo de energia, armas, escudo regenerativo, casco e sensores. Só as moedas espaciais pagam por elas.
- A **skin dos monstros muda** a cada vez que você perde.

- **Rochas espaciais** (poucas) quebram com alguns tiros e soltam itens: ímã (puxa todos os cristais por 1 s), explosão (fere todos os monstros da tela), coração, escudo e turbo.
- **Buracos negros** aparecem de vez em quando: entrar leva a uma luta contra um **alienígena** com ataques variados (rajadas, leques, teletransporte, invocação, investida corpo a corpo, raio direto e bombas); vencer dá um poder (orbes, pulso, laser ou drone) e perder só expulsa do buraco negro.
- **Chefões** (nave enorme que persegue a nave, atira em várias direções e joga de 1 a 3 bombas por vez em áreas) soltam **moedas espaciais**, que compram melhorias permanentes na **Oficina**.
- A cada 3 ondas começa uma nova **fase**, e os monstros ganham outra "skin" (cores, chifres, espinhos, três olhos); há monstros que atiram e bandos de insetos.

### Moedas e Nave Arcade

Poucas **fichas** (vermelhas, de cassino) aparecem em lugares aleatórios do planeta (e reaparecem em outro ponto bem depois de pegas, com um "plim"): é só andar por cima para ganhar fichas do cassino. A estação **Nave Arcade** abre um jogo estilo fliperama: a nave atira sozinha e você a move com as setas (ou WASD, ou arrastando o dedo) por um espaço sem limites (câmera que segue a nave, com planetas, nebulosas e estrelas piscando ao fundo em parallax), monstrinhos chegam pelos lados (cada vez mais, e em **ondas de monstros** de tempos em tempos), cada um solta um **cristal de XP** que a nave precisa pegar para subir de nível (a melhoria "ímã" os atrai de mais longe); a cada nível você escolhe uma melhoria (cadência, dano, projétil extra, perfuração, tiro veloz, propulsores, ímã, reparo). No fim da partida você ganha algumas **moedas espaciais** de bônus (o jogo de nave não dá mais fichas do cassino). Lógica em `src/arcade.js`.

## Rodar

```bash
npm install
npm run dev
```

Controles: `← ↑ ↓ →` (ou `WASD`) andam, `SHIFT` corre, `ESPAÇO` pula. No celular, arraste o dedo para andar e toque rápido para pular.
Link direto para uma estação: `?zona=2` (0 a 4).

## Personalizar

Todo o conteúdo está em [`src/data.js`](src/data.js): nome, título e as zonas (título, texto, cor e ícone:
`casa`, `predio`, `foguete`, `estrela`, `carta`). A posição de cada estação no planeta fica em `POSICOES`
no topo de `src/main.js` ([leste-oeste, norte-sul] em radianos); zonas extras são espalhadas automaticamente.

## Publicar

```bash
npm run build   # gera dist/ (base relativa, funciona em qualquer nome de repositório)
```
