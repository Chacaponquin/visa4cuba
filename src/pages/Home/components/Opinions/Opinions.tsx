import useTranslation from "../../../../modules/app/modules/language/hooks/useTranslation";
import LayoutSection from "../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";
import { OPINION_OPTIONS } from "./domain/opinion";
import Card from "./components/Card/Card";

export default function Opinions() {
  const { TITLE, HEADER } = useTranslation({
    TITLE: {
      en: "Let’s Explore Why People Say About Our Services",
      es: "Descubre por qué la gente habla tan bien de nuestros servicios",
      it: "Scopri perché le persone parlano così bene dei nostri servizi",
    },
    HEADER: { es: "Opiniones", en: "Opinions", it: "Opinioni" },
  });

  return (
    <LayoutSection title={TITLE} header={HEADER}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-20 mt-10">
        {OPINION_OPTIONS.map((o, index) => (
          <Card key={index} props={o} />
        ))}
      </div>
    </LayoutSection>
  );
}
