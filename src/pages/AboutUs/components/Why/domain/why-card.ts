import Medal from "../../../../../modules/app/modules/icon/components/Medal";
import People from "../../../../../modules/app/modules/icon/components/People";
import Time from "../../../../../modules/app/modules/icon/components/Time";
import type { IconProps } from "../../../../../modules/app/modules/icon/domain/props";

export interface WhyCard {
  title: string;
  description: string;
  icon: (props: IconProps) => React.ReactNode;
}

export const WHY_CARDS: WhyCard[] = [
  {
    title: "Rapidez",
    icon: Time,
    description:
      "Procesamos tu visa en tiempo récord para que no pierdas tiempo",
  },
  {
    title: "Experiencia",
    icon: People,
    description: "Más de 10 años ayudando a viajeros a descubrir Cuba",
  },
  {
    icon: Medal,
    title: "Confianza",
    description: "Miles de clientes satisfechos respaldan nuestro servicio",
  },
];
