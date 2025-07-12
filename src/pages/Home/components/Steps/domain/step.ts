import Card from "../../../../../modules/app/modules/icon/components/Card";
import CheckCorrect from "../../../../../modules/app/modules/icon/components/CheckCorrect";
import Download from "../../../../../modules/app/modules/icon/components/Download";
import Form from "../../../../../modules/app/modules/icon/components/Form";
import type { IconProps } from "../../../../../modules/app/modules/icon/domain/props";
import type { TranslationConfig } from "../../../../../modules/app/modules/language/domain/translation";

export interface Step {
  title: TranslationConfig<string>;
  description: TranslationConfig<string>;
  icon: (props: IconProps) => React.ReactNode;
}

export const STEPS: Step[] = [
  {
    title: {
      es: "Completa el Formulario",
      en: "Complete the Form",
      it: "Completa il modulo",
    },
    description: {
      es: "Llena nuestro formulario online con tus datos personales y de viaje. Solo toma 5 minutos.",
      it: "Compila il nostro modulo online con i tuoi dati personali e di viaggio. Ci vogliono solo 5 minuti.",
      en: "Fill out our online form with your personal and travel information. It only takes 5 minutes.",
    },
    icon: Form,
  },
  {
    title: {
      es: "Realiza el Pago",
      en: "Make the Payment",
      it: "Effettua il pagamento",
    },
    description: {
      es: "Pago seguro online con tarjeta de crédito, débito o transferencia bancaria.",
      en: "Secure online payment by credit card, debit card, or bank transfer.",
      it: "Pagamento online sicuro tramite carta di credito, carta di debito o bonifico bancario.",
    },
    icon: Card,
  },
  {
    icon: CheckCorrect,
    description: {
      es: "Nuestro equipo experto procesa tu solicitud y gestiona todos los trámites oficiales.",
      en: "Our expert team processes your application and handles all official procedures.",
      it: "Il nostro team di esperti elabora la tua domanda e si occupa di tutte le procedure ufficiali.",
    },
    title: {
      es: "Procesamos tu Visa",
      en: "We process your Visa",
      it: "Elaboriamo il tuo visto",
    },
  },
  {
    title: {
      es: "Recibe tu Visa",
      en: "Receive your Visa",
      it: "Ricevi il tuo visto",
    },
    icon: Download,
    description: {
      es: "Descarga tu visa aprobada en formato PDF en 24-48 horas directo a tu email.",
      en: "Download your approved visa in PDF format within 24-48 hours, directly to your email.",
      it: "Scarica il visto approvato in formato PDF entro 24-48 ore, direttamente sulla tua email.",
    },
  },
];
