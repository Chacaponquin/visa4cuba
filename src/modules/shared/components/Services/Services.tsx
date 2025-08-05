import LayoutSection from "../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";
import useTranslation from "../../../app/modules/language/hooks/useTranslation";
import Card from "./components/Card/Card";
import { SERVICE_CARDS } from "./domain/service-card";

export default function Services() {
  const { TITLE, DESCRIPTION, HEADER } = useTranslation({
    TITLE: {
      es: "Servicios esenciales para tu viaje a Cuba",
      en: "Travel to Cuba without worries",
      it: "Viaggia a Cuba senza pensieri",
    },
    DESCRIPTION: {
      es: "Gestionamos tu visa y seguro médico con rapidez, seguridad y respaldo 24/7.",
      en: "We offer a wide range of services designed to make your trip to Cuba an unforgettable and authentic experience.",
      it: "Offriamo un'ampia gamma di servizi pensati per rendere il tuo viaggio a Cuba un'esperienza indimenticabile e autentica.",
    },
    HEADER: {
      es: "Acerca de nosotros",
      en: "About company",
      it: "sull'azienda",
    },
  });

  return (
    <LayoutSection title={TITLE} description={DESCRIPTION} header={HEADER}>
      <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7 justify-center">
        {SERVICE_CARDS.map((s, index) => (
          <Card key={index} service={s} />
        ))}
      </div>
    </LayoutSection>
  );
}
