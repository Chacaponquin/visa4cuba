import { useState } from "react";
import LayoutSection from "../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";
import type { TabOption } from "../../../../modules/app/modules/ui/components/Tabs/Tabs";
import Tabs from "../../../../modules/app/modules/ui/components/Tabs/Tabs";
import VisaFaq from "../../../../modules/shared/components/VisaFaq/VisaFaq";
import InsurenceFaq from "../../../../modules/shared/components/InsurenceFaq/InsurenceFaq";
import useTranslation from "../../../../modules/app/modules/language/hooks/useTranslation";

enum FAQ_SECTION {
  VISA,
  INSURANCE,
}

export default function Faq() {
  const [section, setSection] = useState(FAQ_SECTION.VISA);

  const { TITLE, DESCRIPTION, TAB_1, TAB_2 } = useTranslation({
    TITLE: {
      es: "Preguntas frecuentes",
      en: "Frequently asked questions",
      it: "Domande frequenti",
    },
    DESCRIPTION: {
      es: "Resolvemos las dudas más comunes sobre el proceso de obtención de visas para Cuba",
      en: "We answer the most common questions about the visa process for Cuba.",
      it: "Rispondiamo alle domande più frequenti sulla procedura di visto per Cuba.",
    },
    TAB_1: { es: "Visas de viaje", en: "Travel visas", it: "Visti di viaggio" },
    TAB_2: {
      es: "Seguros médicos",
      en: "Health insurance",
      it: "Assicurazione sanitaria",
    },
  });

  const tabs: TabOption[] = [
    {
      name: TAB_1,
      onClick: () => setSection(FAQ_SECTION.VISA),
      selected: section === FAQ_SECTION.VISA,
    },
    {
      name: TAB_2,
      onClick: () => setSection(FAQ_SECTION.INSURANCE),
      selected: section === FAQ_SECTION.INSURANCE,
    },
  ];

  return (
    <LayoutSection id="faq" title={TITLE} description={DESCRIPTION}>
      <Tabs options={tabs} full className="mb-5" />

      {section === FAQ_SECTION.VISA && <VisaFaq />}
      {section === FAQ_SECTION.INSURANCE && <InsurenceFaq />}
    </LayoutSection>
  );
}
