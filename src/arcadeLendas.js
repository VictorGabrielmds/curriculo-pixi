// Chefões lendários do arcade: criaturas animadas com poderes únicos. Cada uma está num arquivo em src/lendas/.
// Para criar outra, copie um desses arquivos e acrescente na lista LENDAS abaixo (a ordem não importa).
// "vitorias" é quantos chefões você já derrotou (somando todas as partidas) para ela poder aparecer: assim o jogo sempre guarda uma novidade.
import { ignarax } from './lendas/ignarax.js';
import { tecela } from './lendas/tecela.js';
import { kraken } from './lendas/kraken.js';
import { ceifador } from './lendas/ceifador.js';
import { fenix } from './lendas/fenix.js';
import { arauto } from './lendas/arauto.js';

export const LENDAS = [ignarax, tecela, kraken, ceifador, fenix, arauto];
export { atualizarLenda, renderizar as renderizarLenda, retrato as retratoLenda } from './lendas/base.js';
