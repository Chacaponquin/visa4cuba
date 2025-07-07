import type { TranslationConfig } from "../../../../../modules/app/modules/language/domain/translation";

export interface MissionResult {
  title: string;
  description: TranslationConfig<string>;
}

export const RESULTS: MissionResult[] = [
  {
    title: "1000+",
    description: {
      es: "Clientes satisfechos",
      en: "Satisfied customers",
      it: "Clienti soddisfatti",
    },
  },
  {
    title: "%98.5",
    description: {
      es: "Visas aprobadas",
      en: "Visas approved",
      it: "Visti approvati",
    },
  },
  {
    title: "24h",
    description: {
      es: "Tiempo promedio de procesamiento",
      en: "Proceeding time",
      it: "Tiempo promedio de procesamiento",
    },
  },
  {
    title: "50+",
    description: {
      es: "Países atendidos",
      en: "Countries served",
      it: "Paesi serviti",
    },
  },
];
