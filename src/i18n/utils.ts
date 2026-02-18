import dablEs from './dabl-es';
import dablEn from './dabl-en';
import modeloEs from './modelo-es';

const decks: Record<string, Record<string, Record<string, string>>> = {
  dabl: { es: dablEs, en: dablEn },
  modelo: { es: modeloEs },
};

export function t(deck: string, lang: string, key: string): string {
  return decks[deck]?.[lang]?.[key] || decks[deck]?.['es']?.[key] || key;
}
