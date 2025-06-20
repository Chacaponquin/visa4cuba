import Airplane from "../../../../../modules/app/modules/icon/components/Airplane";
import Safe from "../../../../../modules/app/modules/icon/components/Safe";
import type { IconProps } from "../../../../../modules/app/modules/icon/domain/props";
import type { UiColor } from "../../../../../modules/app/modules/ui/domain/color";

export interface ServiceCard {
  includes: string[];
  title: string;
  description: string;
  icon: (props: IconProps) => React.ReactNode;
  color: UiColor;
}

export const SERVICE_CARDS: ServiceCard[] = [
  {
    title: "Visas para Cuba",
    description:
      "Tramitamos tu visa de turista para Cuba de manera rápida y segura. Nos encargamos de toda la documentación necesaria.",
    includes: [
      "Proceso 100% online",
      "Entrega en 24-48 horas",
      "Soporte personalizado",
    ],
    icon: Airplane,
    color: "primary",
  },
  {
    icon: Safe,
    title: "Seguros de Viaje",
    description:
      "Protege tu viaje con nuestros seguros especializados para Cuba. Cobertura médica y de equipaje incluida en el servicio.",
    includes: [
      "Cobertura médica completa",
      "Protección de equipaje",
      "Asistencia 24/7",
    ],
    color: "secondary",
  },
];
