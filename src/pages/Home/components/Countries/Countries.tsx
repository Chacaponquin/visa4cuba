import useTranslation from "../../../../modules/app/modules/language/hooks/useTranslation";
import LayoutSection from "../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";
import Card from "./components/Card/Card";
import { COUNTRY_CARDS } from "./domain/country-card";

export default function Countries() {
  const { HEADER, TITLE } = useTranslation({
    HEADER: {
      en: "Countries we offer",
      es: "Paises asociados",
      it: "Paesi associati",
    },
    TITLE: {
      en: "Countries We Support for Immigration",
      es: "Países que apoyamos para la inmigración",
      it: "Paesi che sosteniamo per l'immigrazione",
    },
  });

  return (
    <LayoutSection bg="blue" header={HEADER} title={TITLE}>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-3 gap-y-3 w-full">
        {COUNTRY_CARDS.map((c, index) => (
          <Card props={c} key={index} />
        ))}
      </div>
    </LayoutSection>
  );
}
