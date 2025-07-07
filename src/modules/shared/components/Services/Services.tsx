import LayoutSection from "../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";
import useTranslation from "../../../app/modules/language/hooks/useTranslation";
import Card from "./components/Card/Card";
import { SERVICE_CARDS } from "./domain/service-card";

export default function Services() {
  const { TITLE, DESCRIPTION } = useTranslation({
    TITLE: {
      es: "Experiencias únicas en Cuba",
      en: "Unique experiences in Cuba",
      it: "Esperienze uniche a Cuba",
    },
    DESCRIPTION: {
      es: "Ofrecemos una amplia gama de servicios diseñados para hacer de tu viaje a Cuba una experiencia inolvidable y auténtica.",
      en: "We offer a wide range of services designed to make your trip to Cuba an unforgettable and authentic experience.",
      it: "Offriamo un'ampia gamma di servizi pensati per rendere il tuo viaggio a Cuba un'esperienza indimenticabile e autentica.",
    },
  });

  return (
    <LayoutSection title={TITLE} description={DESCRIPTION}>
      <div className="flex md:flex-row flex-col items-start gap-x-12 gap-y-7 justify-center">
        {SERVICE_CARDS.map((s, index) => (
          <Card key={index} service={s} />
        ))}
      </div>
    </LayoutSection>
  );
}
