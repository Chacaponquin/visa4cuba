import LayoutSection from "../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";
import VisaFaq from "../../../../modules/shared/components/VisaFaq/VisaFaq";

export default function Faq() {
  return (
    <LayoutSection
      title="Preguntas Frecuentes"
      description="Resolvemos las dudas más comunes sobre el proceso de obtención de visas para Cuba"
    >
      <VisaFaq />
    </LayoutSection>
  );
}
