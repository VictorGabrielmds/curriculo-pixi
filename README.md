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

## Tela e letras do jogo de nave

O quadro do jogo tem **480×270** pixels lógicos (era 320×180), então cabe bem mais universo na tela; monstros, rochas e nativos surgem sempre fora dela (`RAIO_TELA`, em `src/arcade.js`). O desenho continua em pixel art, mas **as letras são desenhadas numa camada à parte, na resolução real da tela** (`escrever()`, com contorno escuro e fonte monoespaçada em negrito), por cima do quadro: por isso ficam nítidas em qualquer tamanho de janela, em vez de borradas e serrilhadas como antes.

## Garagem mecatrônica da nave

Na **Oficina** do jogo de nave (aba **MONTAGEM DA NAVE**) você monta a nave como um PC ou um carro. Tudo está em `src/naveModular.js` (catálogo e contas), `src/naveDesenho.js` (pixel art), `src/garagem.js` + `src/garagem.css` (a bancada) e `src/naveModelo3d.js` (a nave 3D do planeta).

- **6 chassis** com encaixes (slots): *Explorador M-1* (1 arma, 1 motor, 1 placa, 1 módulo), *Interceptor Flecha* (2 armas, 2 motores, sem módulos), *Couraçado Tatu* (2 armas, 2 módulos, muita blindagem), *Chassi Colmeia* (3 placas, 2 motores, 2 módulos), *Fragata Aurora* (2 armas, 2 placas, 2 motores, 2 módulos e uma barreira embutida) e *Titã Dreadnought* (3 armas, 3 módulos, blindagem absurda e muito peso). Clique num encaixe da nave e escolha a peça.
- **36 peças** em cinco tipos: **armas** (canhão de pulso, geminado, bobina Tesla, dispersor, railgun, metralhadora rotativa, lança de plasma e o canhão de singularidade), **motores** (foguete químico, matriz iônica, turbina de plasma, bocal vetorial, impulsor magnético e o propulsor de antimatéria), **reatores** (capacitores, microfusão, reator fotônico, núcleo quântico, anel tokamak e o núcleo de anã branca), **placas eletrônicas** (computador analógico, coprocessador de mira, LIDAR, giroscópio MEMS, overclock, computador tático e o processador quântico) e **módulos** (dissipador, bobina de atração, baterias, placa balística, gerador de barreira, criogênico, supercapacitor, casco autorreparável e a barreira de fase). Cada peça tem massa (kg), consumo (W), calor (°C) e efeitos próprios.
- **Preços e progressão**: tudo custa moedas espaciais (◆), e o equipamento comum custa de 12 a 55 (antes custava de 6 a 18). As peças do topo (de 90 a 120 ◆) e o *Titã* ainda **exigem derrotar chefões** (de 6 a 12 no total, somando todas as partidas): enquanto faltar, aparece um cadeado com a contagem e o botão fica travado, mesmo com moedas de sobra; a prévia continua liberada. Quem já tinha fabricado peças as mantém. Os preços e os requisitos estão em `src/naveModular.js` (`custo` e `exige`).
- **Orçamento como num PC ou carro**: o reator tem de dar conta do consumo (senão há *subtensão* e a cadência e a recarga caem), o arrefecimento tem de dar conta do calor (senão há *superaquecimento* e o dano e a cadência caem) e a massa muda a velocidade. Medidores de potência, calor e massa mostram tudo ao vivo, com avisos.
- **Ajustes finos**: *clock* da eletrônica e *tensão* do reator, cada um com quatro posições (ECO, NORMAL, TURBO/ALTA, OVERCLOCK/CRÍTICA) em seletores giratórios; mais *pintura* (cor do casco e das aletas).
- **Prévia sem gastar nada**: clique numa peça bloqueada e a bancada mostra como a nave fica e quanto muda cada medidor. Fabricar custa moedas espaciais (uma vez só, depois pode instalar em quantos encaixes quiser). O botão **TESTE NA BANCADA** liga motores, reator e armas.
- **Tudo aparece na nave**: o sprite do jogo (24x24, com uma chama em cada motor, da cor do motor), a bancada animada e o ícone 3D da estação **Nave Arcade** no planeta (o chassi muda a silhueta e cada peça aparece no seu encaixe).
- **A nave gira para onde está indo** no jogo (`S.angNave`); o *giroscópio MEMS* e o *bocal vetorial* a fazem virar mais rápido.
- A aba **AJUSTE FINO** mantém as melhorias permanentes por subsistema (casco, núcleo, sensores…), que somam com as peças. Quem já tinha a versão antiga (um módulo por sistema) tem o projeto convertido sozinho.

## Criaturas lendárias (chefões do jogo de nave)

Além das naves e monstros-chefes de cada tema, o jogo tem **chefões lendários**: criaturas grandes, animadas de verdade e com poderes que não se repetem. Cada uma está em `src/lendas/` (a base em `base.js`, o registro em `src/arcadeLendas.js`):

- **IGNARAX · o Dragão de Cinzas**: asas que batem, corpo serpenteante, boca que abre. *Sopro de fogo* em leque, *chuva de meteoros* marcada no chão e *rasante* como um cometa; ao enfurecer, o fogo dobra e ele solta *anéis de chamas*.
- **TECELÃ · a Aranha-Rainha**: oito pernas que andam. *Teias* que prendem (lentidão), *salto* que cai como um meteoro, *crias* e *veneno*; ao enfurecer, *cerco de teias*.
- **ABISMO · o Kraken do Vazio** (aparece depois de 3 chefões vencidos): *tentáculos* que varrem uma fatia marcada no chão, *tinta* que esconde inimigos e tiros e *redemoinho* que puxa a nave.
- **CEIFADOR · o Rei Esqueleto** (3 chefões vencidos): *almas* teleguiadas, *muralha de ossos* com uma brecha, *foice* que volta como bumerangue e *legião* de fantasmas.
- **FÊNIX · a Eterna** (5 chefões vencidos): *penas em chamas*, *mergulho*, *ciranda de fogo* e, ao morrer, vira um **ovo e renasce** mais forte, dourada.
- **ARAUTO · o Olho do Vazio** (6 chefões vencidos): *loucura* (inverte os controles da nave), *raio de gravidade* giratório, *olhos* em órbita que atiram e *vazio* que puxa tudo; teleporta.

Como funciona: cada criatura é desenhada em vetor (curvas e rotações) e convertida em **pixel art a cada quadro** (borda recortada, poucas cores e contorno), por isso se anima sem arquivos de imagem. A entrada é uma pequena cena (faixas de cinema, nome e título) e, na primeira vez, aparece "NOVA CRIATURA DESCOBERTA". A vida passa de 50% e ela **enfurece**. Os ataques são avisados no chão antes de acertar. O **Bestiário** (botão na tela inicial e no fim da partida) tem abas para lendárias, alienígenas e nativos e mostra tudo em silhueta até você encontrar; a primeira vitória sobre cada uma rende moedas extras. O progresso (vistas, derrotadas, chefões vencidos) fica no navegador. Para criar outra criatura, copie um arquivo de `src/lendas/`, mude o desenho e os ataques e acrescente em `LENDAS`.

## Fases do universo e nativos

A cada 3 ondas começa uma **fase**, e cada fase é um lugar diferente do universo, com a ideia de "tem coisa nova aqui, quero ver o que vem depois". São 13 lugares (Berçário de Estrelas, Pilares da Criação, Nebulosa do Caranguejo, Cabeça de Cavalo, Nebulosa da Hélice, Galáxia de Andrômeda, Cemitério do Sombrero, Tempestade do Quasar, Horizonte de Eventos, o Tesseract, Pulsar, Ponte de Einstein-Rosen e Teia Cósmica); depois da última o jogo volta para os mais estranhos, mais forte. Em cada um:

- **Faixa de apresentação** com o número da fase, o nome do lugar, uma frase e qual é o nativo dali (`src/arcadeFases.js`).
- **Céu próprio e ambientação por cima dele**, tudo desenhado em código (`src/arcadeAmbiente.js`): neblinas, partículas e poeira, cometas, riscos de vento, olhos que piscam na escuridão, auroras, ondas de pulso, relâmpagos, feixes de farol, lente gravitacional, grade do Tesseract, portais e fios da teia cósmica.
- **Um monstro nativo só daquele lugar** (`src/arcadeNativos.js`): maior que os comuns, mais lento e mais resistente, com um truque próprio (dividir-se em duas, arremessar pedras, andar de lado cuspindo brasas, atravessar paredes, comer cristais e se curar, puxar a nave, abrir portais...). Eles **atiram só um tiro por vez**. Os nativos usam o mesmo desenho vetorial → pixel art a cada quadro dos chefões lendários.
- Os monstros comuns que **atiram** também soltam **um tiro por vez** (antes eram três).

## Alienígenas dos buracos negros (13)

Cada buraco negro tem um alienígena (`ALIENS` em `src/arcadeTemas.js`; a IA e os golpes ficam em `atualizarAlien`, em `src/arcade.js`). Os 7 primeiros (cinzento, polvo cósmico, cérebro mecânico, ceifador, olho mestre, louva-a-deus e medusa estelar) estão disponíveis desde o início; **os 6 novos vão sendo liberados** conforme você derrota ou só encontra mais alienígenas, para sempre haver algo novo para descobrir:

- **Escorpião de Cristal · Ferrão Prismático**: *ferrão* (mira com uma linha de aviso e dispara um dardo rápido e dois estilhaços) e *fissuras* (colunas de cristal rompem a arena, menos numa faixa segura).
- **Glitch · Erro Fatal**: *blocos* (paredes de blocos que cruzam a arena, cada uma com uma passagem) e *eco* (some e reaparece em vários pontos atirando em leque, deixando imagens para trás).
- **Cogumelo Esporífero · Jardim das Esporas**: *esporos* (bolas lentas que estouram em tiros) e *névoa* (nuvens que deixam a nave lenta; o golpe seguinte aproveita isso).
- **Vespertilio · Asas da Meia-Noite**: *ricochete* (morcegos que rebatem nas paredes) e a investida em sequência.
- **Cronos · Guardião do Tempo**: *tempo parado* (um anel de relógios surge em volta da nave, congela e depois todos voam juntos para ela) e *ponteiros* (dois ou três raios de relógio em velocidades diferentes).
- **Naja Celeste · Serpente das Constelações**: *constritor* (anéis que se fecham em volta da nave, com uma abertura) e *ondulação* (jatos que balançam como uma serpente; cruzados na fúria).

Todos ganharam uma **apresentação** (faixa no meio da arena com nome e título, "NOVO ALIENÍGENA" na primeira vez), **materialização** de cima para baixo, uma **aura própria** (faíscas, bolhas, almas, folhas, esporos, cristais, areia, estrelas ou falhas de vídeo) e, na fúria e no desespero, um anel vermelho com fagulhas e tremor (`src/arcadeAliens.js`). Os tiros especiais (esporos, cristais, blocos, morcegos e relógios) têm desenho e comportamento próprios (estourar, quicar ou congelar e depois mirar).

O **Bestiário** tem três abas, **Criaturas lendárias**, **Alienígenas** e **Nativos das fases**, todas em silhueta até você encontrar cada uma, com dica de como lidar e contagem de vistas e derrotadas.

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
- **Atributos da nave**: toda subida de nível oferece pelo menos um ponto geral entre dano, vida, armadura, velocidade e recarga. Dano e recarga afetam todo o arsenal; armadura reduz até 50% do dano recebido. As evoluções específicas continuam existindo, mas aparecem menos e cuidam da característica única de cada arma.
- **Armas nas teclas 1 a 4** (ou clicando nos botões): **1** tiro normal e os outros slots recebem poderes sorteados, como laser, míssil, orbes, turbo, cura, escudo, salto e drift. Cada poder ainda pode chegar ao nível 4.
- **Oficina por partes da nave**: um painel de engenharia mostra a nave aberta e compra melhorias permanentes. Núcleo e computador de recarga afetam todas as armas e sistemas; amplificador bélico aumenta todo o arsenal; casco e blindagem dão vida e armadura. Só as moedas espaciais pagam por elas.
- **Temas de monstros**: a cada derrota (e a cada fase) os bichos e o chefão mudam por completo, não só de cor. SLIMES, INVASORES (naves e bichos quadradões de fliperama), BICHARADA (caracóis, mariposas, besouros, vespas, escorpiões e moscas espaciais), GALÁXIA (droides, caças e andadores de uma guerra nas estrelas, com uma esfera gigante como chefão), AGENTES (homens de preto, alienígenas cabeçudos e baratas gigantes), XENO (ovos, parasitas, caçadores e uma rainha, no clima de alien x predador) e REVOADA (pintinhos, corvos, corujas, fênix, tucanos e bandos de passarinhos). Os desenhos são feitos em código, só inspirados nas silhuetas clássicas.
- **Chefões e alienígenas também variam**: cada chefão é uma nave diferente sorteada e cada buraco negro tem um alienígena diferente, 13 ao todo (cinzento, polvo cósmico, cérebro mecânico, ceifador, olho mestre, louva-a-deus, medusa estelar e, liberados aos poucos, escorpião de cristal, glitch, cogumelo esporífero, vespertilio, Cronos e naja celeste; veja a seção própria). Os aliens usam uma IA de combate: perseguem e orbitam a nave com inércia, escolhem golpes conforme a distância, evitam repetir ataques e montam combos — de longe minam rotas de fuga e depois investem; de perto preferem rajadas, tentáculos, cortes e raios. Cada espécie preserva seus golpes favoritos. Abaixo de 50% de vida entram em fúria; abaixo de 25% antecipam a rota da nave, carregam mais rápido e encadeiam poderes com menos descanso.

- **Rochas espaciais** (poucas) quebram com alguns tiros e soltam itens: ímã (puxa todos os cristais por 3 s), explosão (fere todos os monstros da tela), coração, escudo e turbo.
- **Buracos negros** aparecem de vez em quando: entrar leva a uma luta contra um **alienígena** com ataques variados (rajadas, leques, teletransporte, invocação, investida corpo a corpo, raio direto, bombas e os golpes exclusivos de cada espécie); vencer dá um poder (orbes, pulso, laser ou drone) e perder só expulsa do buraco negro.
- **Derrotar um alienígena** dá o ímã (puxa todos os cristais por 3 s). O +1 projétil do canhão é um upgrade de nível, mas é forte e por isso raro: o primeiro "Cano adicional" pode aparecer cedo, o segundo é bem mais raro, e o quarto cano só vem como "Cano quádruplo" (lendário), junto com +30% de cadência ou +2 de perfuração, à sua escolha. O curandeiro e o amplificador só afetam os inimigos que estão perto deles (o alcance aparece como um círculo pontilhado).
- **Chefões** (nave enorme que persegue a nave, atira em várias direções e joga de 1 a 3 bombas por vez em áreas) soltam **moedas espaciais**, que compram melhorias permanentes na **Oficina**.
- A cada 3 ondas começa uma nova **fase**, e os monstros ganham outra "skin" (cores, chifres, espinhos, três olhos); há monstros que atiram e bandos de insetos.

### Moedas e Nave Arcade

Poucas **fichas** (vermelhas, de cassino) aparecem em lugares aleatórios do planeta (e reaparecem em outro ponto bem depois de pegas, com um "plim"): é só andar por cima para ganhar fichas do cassino. A estação **Nave Arcade** abre um jogo estilo fliperama: a nave atira sozinha e você a move com as setas (ou WASD, ou arrastando o dedo) por um espaço sem limites (câmera que segue a nave, com planetas, nebulosas e estrelas piscando ao fundo em parallax), monstrinhos chegam pelos lados em ondas graduais, cada um solta um **cristal de XP** e, a cada nível, você escolhe entre atributos da nave, novos poderes e evoluções específicas mais raras. No fim da partida você ganha algumas **moedas espaciais** de bônus. Lógica em `src/arcade.js`.

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
