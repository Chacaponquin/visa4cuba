import useTranslation from "../../../../modules/app/modules/language/hooks/useTranslation";
import LayoutSection from "../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";
import Card from "./components/Card/Card";
import { WHY_CARDS } from "./domain/why-card";

export default function Why() {
  const { TITLE, DESCRIPTION } = useTranslation({
    TITLE: {
      es: "¿Por qué elegir Visa4Cuba?",
      en: "Why choose Visa4Cuba?",
      it: "Perché scegliere Visa4Cuba?",
    },
    DESCRIPTION: {
      es: "Somos más que una agencia de viajes, somos tus compañeros de aventura",
      en: "We are more than a travel agency, we are your adventure companions.",
      it: "Siamo più di un'agenzia di viaggi, siamo i tuoi compagni di avventure.",
    },
  });

  return (
    <LayoutSection title={TITLE} description={DESCRIPTION}>
      <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 gap-x-8 mt-5">
        {WHY_CARDS.map((w, i) => (
          <Card key={i} card={w} />
        ))}
      </div>
    </LayoutSection>
  );
}
