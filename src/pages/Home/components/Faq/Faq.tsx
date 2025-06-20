import { useState } from "react";
import LayoutSection from "../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";
import type { TabOption } from "../../../../modules/app/modules/ui/components/Tabs/Tabs";
import Tabs from "../../../../modules/app/modules/ui/components/Tabs/Tabs";
import VisaFaq from "../../../../modules/shared/components/VisaFaq/VisaFaq";
import InsurenceFaq from "../../../../modules/shared/components/InsurenceFaq/InsurenceFaq";

enum FAQ_SECTION {
  VISA,
  INSURANCE,
}

export default function Faq() {
  const [section, setSection] = useState(FAQ_SECTION.VISA);

  const tabs: TabOption[] = [
    {
      name: "Visas de viaje",
      onClick: () => setSection(FAQ_SECTION.VISA),
      selected: section === FAQ_SECTION.VISA,
    },
    {
      name: "Seguros médicos",
      onClick: () => setSection(FAQ_SECTION.INSURANCE),
      selected: section === FAQ_SECTION.INSURANCE,
    },
  ];

  return (
    <LayoutSection
      title="Preguntas frecuentes"
      description="Resolvemos las dudas más comunes sobre el proceso de obtención de visas para Cuba"
    >
      <Tabs options={tabs} full className="mb-5" />

      {section === FAQ_SECTION.VISA && <VisaFaq />}
      {section === FAQ_SECTION.INSURANCE && <InsurenceFaq />}
    </LayoutSection>
  );
}
