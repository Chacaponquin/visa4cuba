import InsurenceFaq from "../../../../modules/shared/components/InsurenceFaq/InsurenceFaq";
import LayoutSection from "../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";

export default function Faq() {
  return (
    <LayoutSection
      title="Preguntas Frecuentes"
      description="Resolvemos las dudas más comunes sobre el proceso de obtención de seguros para Cuba"
    >
      <InsurenceFaq />
    </LayoutSection>
  );
}
