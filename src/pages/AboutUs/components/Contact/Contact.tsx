import { APP_INFO } from "../../../../modules/app/domain/constants/app-info";
import Location from "../../../../modules/app/modules/icon/components/Location";
import Mail from "../../../../modules/app/modules/icon/components/Mail";
import Phone from "../../../../modules/app/modules/icon/components/Phone";
import Time from "../../../../modules/app/modules/icon/components/Time";
import LayoutSection from "../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";
import ContactCard from "./components/ContactCard/ContactCard";
import ContactForm from "./components/ContactForm/ContactForm";
import TimeInfo from "./components/TimeInfo/TimeInfo";

export default function Contact() {
  return (
    <LayoutSection
      title="Contáctanos"
      description="Estamos aquí para ayudarte con tus seguros y visas para Cuba. Nuestro equipo de expertos está listo para brindarte la mejor asesoría."
    >
      <div className="flex lg:flex-row lg:items-start flex-col w-full gap-x-10 gap-y-4">
        <section className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-x-6 w-full lg:max-w-[400px]">
          <ContactCard icon={Phone} title="Teléfono">
            <p className="font-semibold">{APP_INFO.PHONE}</p>
            <span className="text-gray-600 text-sm">
              Lunes a Viernes, 9:00 AM - 6:00 PM
            </span>
          </ContactCard>

          <ContactCard icon={Mail} title="Email">
            <p className="font-semibold">{APP_INFO.EMAIL}</p>
            <span className="text-gray-600 text-sm">Respuesta en 24 horas</span>
          </ContactCard>

          <ContactCard icon={Location} title="Oficina">
            <p className="font-semibold">La Habana, Cuba</p>
            <span className="text-gray-600 text-sm">
              Calle 100, entre A y B, Altahabana
            </span>
          </ContactCard>

          <ContactCard icon={Time} title="Horarios">
            <TimeInfo label="Lunes - Viernes:" info="9:00 AM - 6:00 PM" />
            <TimeInfo info="10:00 AM - 2:00 PM" label="Sábado:" />
          </ContactCard>
        </section>

        <ContactForm />
      </div>
    </LayoutSection>
  );
}
