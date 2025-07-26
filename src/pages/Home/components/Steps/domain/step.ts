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
      es: "Llena nuestro formulario en línea con tus datos personales y de viaje.",
      it: "Inserisci i tuoi dati personali e di viaggio nel nostro modulo online. Ci vogliono solo 5 minuti.",
      en: "Insert your personal data and travel information into our online module. Ci vogliono only 5 minutes.",
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
      es: "Paga de forma segura con tarjeta de crédito, débito o transferencia bancaria.",
      en: "Pay securely with credit card, debit card, or bank transfer.",
      it: "Paga in modo sicuro con carta di credito, debito o bonifico bancario.",
    },
    icon: Card,
  },
  {
    icon: CheckCorrect,
    description: {
      es: "Nuestro equipo experto revisa tu solicitud y se encarga de todos los trámites oficiales.",
      en: "Our team takes care of everything: we process your request and handle the official paperwork.",
      it: "Il nostro team si occupa di tutto: elaboriamo la tua richiesta e gestiamo le pratiche ufficiali.",
    },
    title: {
      es: "Procesamos tu Visa",
      en: "We process your Visa",
      it: "Elaboriamo del visto",
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
      es: "Descarga tu visa aprobada en formato PDF en 24–48 horas directamente en tu correo.",
      en: "Receive your approved visa in PDF format within 24–48 hours, ready to print.",
      it: "Ricevi il tuo visto approvato in formato PDF entro 24–48 ore, pronto da stampare.",
    },
  },
];
