# Currículo jogável em 3D (Three.js)

Um planetinha estilo "Pequeno Príncipe": o planeta inteiro aparece pequeno na tela, o personagem fica no centro
e o planeta gira sob os pés dele enquanto ele anda em qualquer direção (norte, sul, leste, oeste). Ao chegar perto
de uma estação (início, experiência, projetos, habilidades, contato), abre um painel com uma parte do currículo.
Árvores, pedras e estações são sólidas: não dá para atravessar (pedras dá para pular). Feito com [Three.js](https://threejs.org) + Vite, sem arquivos de modelo ou imagem:
planeta, árvores, estações e o terreno são gerados em código; o personagem é um sprite 2D em pixel art (`public/avatar`) com 4 direções (frente, costas e os dois lados) e animações de parado, andar, correr e pular; o terreno do planeta é desenhado por pixel num shader, por isso o litoral fica nítido em qualquer tamanho de tela.

> A versão 2D em PixiJS continua na branch `main`; esta é a branch `3d`.

## Visual pixel art

A cena 3D é desenhada numa tela interna de ~640 px de altura e ampliada sem suavização; um pós-processamento limita a paleta (com dithering) e desenha contorno escuro nas silhuetas. A altura interna é calculada para que cada pixel do avatar seja exatamente um pixel do mundo (`ALTURA_INTERNA` em `src/main.js`). Para comparar sem o contorno, abra com `?borda=0`.

## Música do planeta, Jasmim e Mazzy

- **Música ambiente** (`public/audio/ambiente.mp3`, módulo `src/musica.js`): toca em loop enquanto você anda pelo planeta, com entrada e saída suaves; some quando o cassino ou o jogo de nave abre (cada um tem o seu som) e volta ao fechar. O navegador só libera o áudio depois do primeiro toque ou tecla. O botão **♪ SOM** (canto superior direito) liga e desliga tudo e vale também para o cassino e para o jogo de nave. Todas as músicas do site foram criadas no **BeepBox**, e o rodapé diz isso.
- **Jasmim** (a flor mais bela) e **Mazzy** (a gatinha), em `src/carinhos.js`: moram perto do ponto de partida. Chegue perto e aperte `E` (ou toque no botão rosa que aparece): saem corações em pixel art, a flor dá um pulinho com um sininho e a Mazzy fecha os olhos de felicidade e mia. Os carinhos são contados no navegador e aparecem ao lado do nome. Quando você chega perto da Jasmim, aparece bem discreta no céu, embaixo do planeta (fora dele), a frase "a flor mais bela do meu mundo todo"; ao se afastar ela some (`fraseJasmim` em `src/main.js`). A flor é feita com formas simples do Three.js e a Mazzy é um sprite desenhado em código (para mudar o desenho, edite `METADE` em `src/carinhos.js`; o tamanho dela é `ESCALA_PIXEL`).

## Futebol

Há uma **bola de futebol** e um **gol** em lugares aleatórios do planeta (a primeira vez já nascem à vista; os nomes `bola` e `gol` aparecem em cima de cada um). É só andar em direção à bola: a cada passo você dá um toque e ela rola na sua frente, e você a leva até o gol (as árvores, pedras e estações bloqueiam a bola; pular passa por cima dela). Quando a bola entra no gol saem **cruzes de malta** em pixel art, como os corações da Mazzy, aparece "GOL!", toca uma fanfarra e, um instante depois, o gol e a bola vão para outros lugares do planeta. Os gols ficam contados no navegador e aparecem ao lado do nome do gol. Tudo está em `src/futebol.js` (a bola é um icosaedro com os pentágonos pretos pintados por face; o atrito em `ATRITO` e a distância do toque em `CONTATO` mudam o jeito de conduzir).

## Cassino da Sorte (minijogo)

A estação **Cassino** abre um caça-níquel de brincadeira (tecla `E` ou botão **JOGAR**): só fichas virtuais, guardadas no navegador, sem dinheiro de verdade. A máquina tem gabinete neon, tela curva, painel de controle inclinado com **botões quadrados salientes** (`?`, SKINS, GIRAR e SOM, que afundam ao apertar) e uma **alavanca** na lateral que desce em perspectiva (a bola cresce ao chegar perto de quem joga) e volta com um quique; `ESPAÇO` também puxa a alavanca. O som do giro é feito em código (WebAudio): catraca da alavanca, batida no fim do curso, motor grave, um "tec" a cada símbolo que passa (mais espaçados na freada), uma trava em cada rolo e moedinhas caindo na bandeja quando há prêmio. Os rolos giram para baixo mostrando 3 símbolos de cada vez; vale a linha do meio. Três símbolos iguais dão fichas e uma **skin** para uma parte do mundo (planeta, árvores ou céu); a cada 10 giros sem trio, o próximo é garantido. A **Coleção** permite equipar as skins, e a escolha fica salva. As skins estão definidas em `src/skins.js` e a lógica em `src/cassino.js`.

### Moedas e Nave Arcade (resumo dos extras do jogo de nave)

- **Painéis das estações**: montados a partir de blocos em `src/data.js` (renderizados por `src/painel.js`): destaque, números, etiquetas de tecnologias agrupadas, cartões recolhíveis (só um aberto por vez; os empregos atuais ganham a marca ATUAL), botões de contato com **links reais** (e-mail, telefone, GitHub, LinkedIn, portfólio e o código deste projeto) e botão **Copiar**. O rodapé é esperto: mostra as estações já visitadas (guardadas no navegador), sugere a próxima mais perto com a **direção** e o tempo para chegar, e, quando você visita tudo, convida a mandar um e-mail. As estações de jogo mostram os seus recordes. O painel é rolável e clicável.
- **Planeta inicial**: as sete estações são pequenas, ficam bem espaçadas (quatro num anel perto da partida e três atrás) e foram refeitas com mais detalhes: chalé com chaminé e venezianas, torre de escritórios com toldo e caixa-d'água, base de lançamento com torre de serviço, monumento de estrela com satélites, caça-níquel com letreiro de lâmpadas, nave pousada e caixa de correio de rua. Cada plataforma tem postes de luz e só o monumento da estrela flutua.
- **Obstáculos no mapa**: planetas e luas (sólidos, ninguém atravessa), cadeias de rochas escuras (muralhas curvas com brechas para passar) e campos de detritos (poeira e cascalho que deixam lento quem estiver dentro, a nave e os monstros). A região de partida fica livre.
- **Estrelas de poder**: de tempos em tempos surge uma estrela perto da nave (com um pontinho de aviso quando está fora da tela, mostrando os segundos que faltam): vermelha = dano +50% por 12 s, amarela = velocidade +50% por 12 s, azul = escudo por 9 s, roxa = XP em dobro por 15 s.
- **Buraco negro com tempo**: ele some depois de 28 s; o tempo que falta aparece em cima dele e ao lado do pontinho que aponta para ele (que pisca nos últimos 8 s).
- **Poderes dos alienígenas mais raros**: só cerca de 1 em cada 4 ataques é um poder especial, e nunca dois seguidos; o resto são rajada, tiro mirado e investida.
- **Monstros de todos os lados**: eles surgem sempre fora da tela, num anel em volta da nave (em cima, embaixo e dos lados), alguns bem longe, como se já estivessem por ali, e vão atrás de você. O mundo já começa povoado, aparecem monstros à frente de quem anda, e com o tempo cada surgimento traz um grupo maior.
- **Ondas**: a partida começa com poucos inimigos corpo a corpo; atiradores entram na onda 2, ameaças avançadas na 4 e suportes na 5. Cada onda coloca 3 inimigos a mais que a anterior, liberados em pequenos pelotões pelos cantos da tela em vez de surgirem todos de uma vez. Uma nova fase começa a cada 3 ondas e um chefão aparece a cada 5. Todos os inimigos avançam em direção à nave, inclusive atiradores e suportes. Há **combo** e o recorde de onda fica salvo.
- **Tudo fica mais forte com o tempo**: monstros, chefões e alienígenas ganham vida e velocidade, os tiros inimigos ferem mais, o chefão aprende espiral, anéis, raios e invocação, e o alienígena vai liberando mais ataques. Os monstros nunca param de aparecer, e as ondas são um extra por cima. O **combo** zera ao levar dano. O **laser** é curto, esquenta e recarrega devagar.
- **O céu fica mais grandioso a cada fase**: as primeiras fases são nebulosas famosas, depois vêm galáxias e quasares e, da fase 5 em diante, o mais poderoso e sobrenatural do universo: buraco negro supermassivo (com lente gravitacional), tesseract girando na quarta dimensão, pulsar, ponte de Einstein-Rosen e a teia cósmica.
- **O céu, em detalhe**: cada fase é uma região do universo com nebulosas e galáxias famosas desenhadas em pixel art (Órion, Pilares da Criação, Caranguejo, Cabeça de Cavalo, Andrômeda, Hélice, Sombrero, Quasar e as Plêiades).
- **Música de fundo** no jogo de nave (`public/audio/arcade.mp3`, volume baixo em `VOLUME_MUSICA` no `src/arcade.js`); respeita o botão SOM do cassino e recomeça a cada partida. Quando um chefão ou um alienígena aparece, a música normal pausa e toca a de chefão (`public/audio/chefe.mp3`); quando ele cai, a normal volta de onde parou. No game over toca a música de descanso (`public/audio/gameover.mp3`).
- **Armas nas teclas 1 a 4** (ou clicando nos botões): **1** tiro normal, **2** laser contínuo (dano alto, alcance curto, esquenta e recarrega), **3** e **4** são slots de poderes novos, conquistados ao subir de nível ou vencer o alienígena: **míssil** (dano em área nos inimigos mais próximos) e **bolas de energia** (giram em volta da nave). Cada poder tem seus próprios upgrades (mais mísseis/bolas, recarga, dano, área, velocidade).
- **Oficina por partes da nave**: um painel de engenharia mostra a nave aberta (que muda conforme as melhorias) e liga cada peça às suas melhorias: motor, núcleo de energia, armas, escudo regenerativo, casco e sensores. Só as moedas espaciais pagam por elas.
- **Temas de monstros**: a cada derrota (e a cada fase) os bichos e o chefão mudam por completo, não só de cor. SLIMES, INVASORES (naves e bichos quadradões de fliperama), BICHARADA (caracóis, mariposas, besouros, vespas, escorpiões e moscas espaciais), GALÁXIA (droides, caças e andadores de uma guerra nas estrelas, com uma esfera gigante como chefão), AGENTES (homens de preto, alienígenas cabeçudos e baratas gigantes), XENO (ovos, parasitas, caçadores e uma rainha, no clima de alien x predador) e REVOADA (pintinhos, corvos, corujas, fênix, tucanos e bandos de passarinhos). Os desenhos são feitos em código, só inspirados nas silhuetas clássicas.
- **Chefões e alienígenas também variam**: cada chefão é uma nave diferente sorteada (11 no total: nave-mãe, cruzador, disco-mãe, nave-caveira, cristal vivo e os chefões de cada tema) e cada buraco negro tem um alienígena diferente (cinzento, polvo cósmico, cérebro mecânico, ceifador, olho mestre, louva-a-deus e medusa estelar), cada um com seus ataques preferidos e golpes exclusivos. Os alienígenas têm mais vida e ficam mais rápidos e agressivos ao perder vida (fúria abaixo de 50% e desespero abaixo de 25%). Ataques: rajada, tiros mirados, teleporte, invocar, investida, raio, bombas, espiral, chuva de tiros com aberturas, raio giratório, anéis com abertura e cerco; mais os exclusivos: tentáculos (polvo), bombas em círculo (cérebro), combo de foices (ceifador), leque de raios (olho), cortes de lado a lado (louva-a-deus), chuva dupla (medusa) e ovnis atiradores (cinzento). O nome aparece no aviso. O nome do tema aparece no aviso do começo e de cada fase.

- **Rochas espaciais** (poucas) quebram com alguns tiros e soltam itens: ímã (puxa todos os cristais por 3 s), explosão (fere todos os monstros da tela), coração, escudo e turbo.
- **Buracos negros** aparecem de vez em quando: entrar leva a uma luta contra um **alienígena** com ataques variados (rajadas, leques, teletransporte, invocação, investida corpo a corpo, raio direto e bombas); vencer dá um poder (orbes, pulso, laser ou drone) e perder só expulsa do buraco negro.
- **Derrotar um alienígena** dá o ímã (puxa todos os cristais por 3 s). O +1 projétil do canhão é um upgrade de nível, mas é forte e por isso raro: o primeiro "Cano adicional" pode aparecer cedo, o segundo é bem mais raro, e o quarto cano só vem como "Cano quádruplo" (lendário), junto com +30% de cadência ou +2 de perfuração, à sua escolha. O curandeiro e o amplificador só afetam os inimigos que estão perto deles (o alcance aparece como um círculo pontilhado).
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
