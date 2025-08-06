import { useContext, useState } from "react";
import useTranslation from "../../../../modules/app/modules/language/hooks/useTranslation";
import LayoutSection from "../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";
import { OPINION_OPTIONS } from "./domain/opinion";
import Card from "./components/Card/Card";
import P from "../../../../modules/app/modules/ui/components/Markdown/components/P/P";
import { LanguageContext } from "../../../../modules/app/modules/language/context/language-context";

export default function Opinions() {
  const { language } = useContext(LanguageContext);

  const { TITLE, HEADER } = useTranslation({
    TITLE: {
      en: "Let’s Explore Why People Say About Our Services",
      es: "Descubre por qué la gente habla tan bien de nuestros servicios",
      it: "Scopri perché le persone parlano così bene dei nostri servizi",
    },
    HEADER: { es: "Opiniones", en: "Opinions", it: "Opinioni" },
  });

  const [selected, setSelected] = useState(OPINION_OPTIONS[1]);

  return (
    <LayoutSection title={TITLE} header={HEADER}>
      <div className="flex items-center gap-x-10 mb-10">
        {OPINION_OPTIONS.map((o, index) => (
          <Card
            key={index}
            onClick={() => setSelected(o)}
            props={o}
            selected={selected === o}
          />
        ))}
      </div>

      <div className="text-center mb-5 w-full max-w-[800px]">
        <P>{selected.description[language]}</P>
      </div>

      <h4 className="text-gray-800 text-xl font-title-semibold">
        {selected.name}
      </h4>
    </LayoutSection>
  );
}
