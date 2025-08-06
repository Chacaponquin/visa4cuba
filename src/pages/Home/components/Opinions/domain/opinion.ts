import { APP_IMAGES } from "../../../../../modules/app/domain/constants/app-images";
import type { TranslationConfig } from "../../../../../modules/app/modules/language/domain/translation";

export interface Opinion {
  description: TranslationConfig<string>;
  image: { src: string; alt: string };
  name: string;
}

export const OPINION_OPTIONS: Opinion[] = [
  {
    name: "Olivia García",
    description: {
      en: "The whole process was fast and clear. In less than 24 hours, I already had my visa for Cuba. The team was very helpful and answered all my questions. 100% recommended!",
      es: "Todo el proceso fue rápido y claro. En menos de 24 horas ya tenía mi visa para Cuba. El equipo fue muy atento y resolvió todas mis dudas. ¡Recomendado al 100%!",
      it: "Tutto il processo è stato rapido e chiaro. In meno di 24 ore avevo già il mio visto per Cuba. Il team è stato molto disponibile e ha risposto a tutte le mie domande. Consigliatissimo!",
    },
    image: APP_IMAGES.OPINION.SECOND,
  },
  {
    image: APP_IMAGES.OPINION.FIRST,
    name: "María Torres",
    description: {
      es: "¡Eficiencia increíble! Mi vuelo a La Habana era en 48 horas y necesitaba la visa con urgencia. Envié los documentos a las 9 a. m. y al día siguiente a las 11 a. m. ya tenía la visa en mi correo. El apoyo de María me guió paso a paso. ¡Salvaron las vacaciones de mi familia!",
      en: "Incredible efficiency! My flight to Havana was in 48 hours and I needed the visa urgently. I sent the documents at 9 AM and by 11 AM the next day I already had my visa in my email. María's support guided me step by step. They saved my family vacation!",
      it: "Efficienza incredibile! Il mio volo per L'Avana era tra 48 ore e avevo bisogno del visto con urgenza. Ho inviato i documenti alle 9:00 e il giorno dopo alle 11:00 avevo già il visto nella mia email. Il supporto di Maria mi ha guidato passo dopo passo. Hanno salvato le vacanze della mia famiglia!",
    },
  },
  {
    description: {
      es: "Tuve que viajar a Cuba por una emergencia familiar y necesitaba todo urgente. No solo me entregaron la visa en menos de 24 horas, ¡también incluyeron el seguro médico! Un servicio impecable y humano.",
      it: "Ho dovuto viaggiare a Cuba per un’emergenza familiare e avevo bisogno di tutto con urgenza. Mi hanno consegnato il visto in meno di 24 ore e incluso l’assicurazione medica! Un servizio impeccabile e umano.",
      en: "I had to travel to Cuba for a family emergency and needed everything urgently. They delivered the visa in less than 24 hours — and even included medical insurance! Impeccable and compassionate service.",
    },
    image: APP_IMAGES.OPINION.THIRD,
    name: "Julia Gutierrez",
  },
];
