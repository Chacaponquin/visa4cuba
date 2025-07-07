import { APP_INFO } from "../../../../modules/app/domain/constants/app-info";
import Location from "../../../../modules/app/modules/icon/components/Location";
import Mail from "../../../../modules/app/modules/icon/components/Mail";
import Phone from "../../../../modules/app/modules/icon/components/Phone";
import Time from "../../../../modules/app/modules/icon/components/Time";
import useTranslation from "../../../../modules/app/modules/language/hooks/useTranslation";
import LayoutSection from "../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";
import ContactCard from "./components/ContactCard/ContactCard";
import ContactForm from "./components/ContactForm/ContactForm";
import TimeInfo from "./components/TimeInfo/TimeInfo";

export default function Contact() {
  const {
    TITLE,
    DESCRIPTION,
    PHONE,
    SCHEDULE,
    EMAIL,
    EMAIL_TEXT,
    SCHEDULE_TITLE,
    LABEL1,
    LABEL2,
    OFFICE,
  } = useTranslation({
    TITLE: { es: "Contáctanos", en: "Contact us", it: "Contattaci" },
    DESCRIPTION: {
      es: "Estamos aquí para ayudarte con tus seguros y visas para Cuba. Nuestro equipo de expertos está listo para brindarte la mejor asesoría.",
      en: "We're here to help you with your insurance and visas for Cuba. Our team of experts is ready to provide you with the best advice.",
      it: "Siamo qui per aiutarti con l'assicurazione e i visti per Cuba. Il nostro team di esperti è pronto a fornirti i migliori consigli.",
    },
    PHONE: { es: "Teléfono", en: "Phone", it: "Telefono" },
    SCHEDULE: {
      es: "Lunes a Viernes, 9:00 AM - 6:00 PM",
      en: "Monday to Friday, 9:00 AM - 6:00 PM",
      it: "Dal lunedì al venerdì, dalle 9:00 alle 18:00",
    },
    EMAIL: { en: "Email", es: "Email", it: "Email" },
    EMAIL_TEXT: {
      es: "Respuesta en 24 horas",
      en: "Response within 24 hours",
      it: "Risposta entro 24 ore",
    },
    SCHEDULE_TITLE: { es: "Horarios", it: "Orari", en: "Schedules" },
    LABEL1: {
      es: "Lunes - Viernes:",
      en: "Monday - Friday:",
      it: "Lunedì - Venerdì:",
    },
    LABEL2: { it: "Sabato:", es: "Sábado:", en: "Saturday:" },
    OFFICE: { es: "Oficina", en: "Office", it: "Ufficio" },
  });

  return (
    <LayoutSection title={TITLE} description={DESCRIPTION}>
      <div className="flex lg:flex-row lg:items-start flex-col w-full gap-x-10 gap-y-4">
        <section className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-x-6 w-full lg:max-w-[400px]">
          <ContactCard icon={Phone} title={PHONE}>
            <p className="font-semibold">{APP_INFO.PHONE}</p>
            <span className="text-gray-600 text-sm">{SCHEDULE}</span>
          </ContactCard>

          <ContactCard icon={Mail} title={EMAIL}>
            <p className="font-semibold">{APP_INFO.EMAIL}</p>
            <span className="text-gray-600 text-sm">{EMAIL_TEXT}</span>
          </ContactCard>

          <ContactCard icon={Location} title={OFFICE}>
            <p className="font-semibold">La Habana, Cuba</p>
            <span className="text-gray-600 text-sm">
              Calle 100, entre A y B, Altahabana
            </span>
          </ContactCard>

          <ContactCard icon={Time} title={SCHEDULE_TITLE}>
            <TimeInfo label={LABEL1} info="9:00 AM - 6:00 PM" />
            <TimeInfo label={LABEL2} info="10:00 AM - 2:00 PM" />
          </ContactCard>
        </section>

        <ContactForm />
      </div>
    </LayoutSection>
  );
}
