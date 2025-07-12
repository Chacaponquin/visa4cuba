import Medal from "../../../../../modules/app/modules/icon/components/Medal";
import People from "../../../../../modules/app/modules/icon/components/People";
import Time from "../../../../../modules/app/modules/icon/components/Time";
import type { IconProps } from "../../../../../modules/app/modules/icon/domain/props";
import type { TranslationConfig } from "../../../../../modules/app/modules/language/domain/translation";

export interface WhyCard {
  title: TranslationConfig<string>;
  description: TranslationConfig<string>;
  icon: (props: IconProps) => React.ReactNode;
}

export const WHY_CARDS: WhyCard[] = [
  {
    title: { es: "Rapidez", en: "Speed", it: "Velocità" },
    icon: Time,
    description: {
      es: "Procesamos tu visa en tiempo récord para que no pierdas tiempo.",
      en: "We process your visa in record time so you don't waste time.",
      it: "Elaboriamo la tua richiesta di visto in tempi record, così non perderai tempo.",
    },
  },
  {
    title: { es: "Experiencia", en: "Experience", it: "Esperienza" },
    icon: People,
    description: {
      es: "Más de 10 años ayudando a viajeros a descubrir Cuba",
      en: "More than 10 years helping travelers discover Cuba",
      it: "Da oltre 10 anni aiutiamo i viaggiatori a scoprire Cuba",
    },
  },
  {
    icon: Medal,
    title: { es: "Confianza", en: "Trust", it: "Fiducia" },
    description: {
      es: "Miles de clientes satisfechos respaldan nuestro servicio",
      en: "Thousands of satisfied customers endorse our service",
      it: "Migliaia di clienti soddisfatti confermano il nostro servizio",
    },
  },
];
