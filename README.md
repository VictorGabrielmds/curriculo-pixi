# Currículo jogável em 3D (Three.js)

Um planetinha estilo "Pequeno Príncipe": o personagem fica grande no centro da tela e o planeta gira sob os pés dele
enquanto ele anda. Cada estação no caminho (início, experiência, projetos, habilidades, contato) abre um painel
com uma parte do currículo. Feito com [Three.js](https://threejs.org) + Vite, sem arquivos de modelo ou imagem:
planeta, árvores, estações e personagem são gerados em código.

> A versão 2D em PixiJS continua na branch `main`; esta é a branch `3d`.

## Rodar

```bash
npm install
npm run dev
```

Controles: `← →` / `A D` andam, `ESPAÇO` pula. No celular, toque nas laterais da tela (andar) e no meio (pular).
Link direto para uma estação: `?zona=2` (0 a 4).

## Personalizar

Todo o conteúdo está em [`src/data.js`](src/data.js): nome, título e as zonas (título, texto, cor e ícone:
`casa`, `predio`, `foguete`, `estrela`, `carta`). Ajuste `ESPACO` e `INICIO` no topo de `src/main.js`
se adicionar zonas, para elas não se sobreporem no planeta.

## Publicar

```bash
npm run build   # gera dist/ (base relativa, funciona em qualquer nome de repositório)
```
