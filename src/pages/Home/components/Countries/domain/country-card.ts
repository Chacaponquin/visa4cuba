import { APP_IMAGES } from "../../../../../modules/app/domain/constants/app-images";
import type { TranslationConfig } from "../../../../../modules/app/modules/language/domain/translation";

export interface CountryCard {
  name: TranslationConfig<string>;
  flag: { src: string; alt: string };
}

export const COUNTRY_CARDS: CountryCard[] = [
  { flag: APP_IMAGES.FLAGS.CUBA, name: { en: "Cuba", es: "Cuba", it: "Cuba" } },
  {
    flag: APP_IMAGES.FLAGS.US,
    name: { en: "United States", es: "Estados Unidos", it: "United States" },
  },
  {
    flag: APP_IMAGES.FLAGS.FRANCE,
    name: { en: "France", es: "Francia", it: "France" },
  },
  {
    flag: APP_IMAGES.FLAGS.ITALY,
    name: { en: "Italy", es: "Italia", it: "Italy" },
  },
  {
    flag: APP_IMAGES.FLAGS.SPAIN,
    name: { en: "Spain", es: "España", it: "Spain" },
  },
  {
    flag: APP_IMAGES.FLAGS.GERMANY,
    name: { en: "Germany", es: "Alemania", it: "Germany" },
  },
];
