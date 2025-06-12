import Card from "../../../../../modules/app/modules/icon/components/Card";
import CheckCorrect from "../../../../../modules/app/modules/icon/components/CheckCorrect";
import Download from "../../../../../modules/app/modules/icon/components/Download";
import Form from "../../../../../modules/app/modules/icon/components/Form";
import type { IconProps } from "../../../../../modules/app/modules/icon/domain/props";

export interface Step {
  title: string;
  description: string;
  icon: (props: IconProps) => React.ReactNode;
}

export const STEPS: Step[] = [
  {
    title: "Completa el Formulario",
    description:
      "Llena nuestro formulario online con tus datos personales y de viaje. Solo toma 5 minutos.",
    icon: Form,
  },
  {
    title: "Realiza el Pago",
    description:
      "Pago seguro online con tarjeta de crédito, débito o transferencia bancaria.",
    icon: Card,
  },
  {
    icon: CheckCorrect,
    description:
      "Nuestro equipo experto procesa tu solicitud y gestiona todos los trámites oficiales.",
    title: "Procesamos tu Visa",
  },
  {
    title: "Recibe tu Visa",
    icon: Download,
    description:
      "Descarga tu visa aprobada en formato PDF en 24-48 horas directo a tu email.",
  },
];
