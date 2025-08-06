import { APP_IMAGES } from "../../../../../modules/app/domain/constants/app-images";
import type { TranslationConfig } from "../../../../../modules/app/modules/language/domain/translation";

export interface CountryCard {
  name: TranslationConfig<string>;
  flag: { src: string; alt: string };
}

export const COUNTRY_CARDS: CountryCard[] = [
  { flag: APP_IMAGES.FLAGS.CUBA, name: { en: "Cuba", es: "Cuba", it: "Cuba" } },
  { flag: APP_IMAGES.FLAGS.CUBA, name: { en: "Cuba", es: "Cuba", it: "Cuba" } },
  { flag: APP_IMAGES.FLAGS.CUBA, name: { en: "Cuba", es: "Cuba", it: "Cuba" } },
  { flag: APP_IMAGES.FLAGS.CUBA, name: { en: "Cuba", es: "Cuba", it: "Cuba" } },
  { flag: APP_IMAGES.FLAGS.CUBA, name: { en: "Cuba", es: "Cuba", it: "Cuba" } },
  { flag: APP_IMAGES.FLAGS.CUBA, name: { en: "Cuba", es: "Cuba", it: "Cuba" } },
];
