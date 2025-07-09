import useTranslation from "../../../../modules/app/modules/language/hooks/useTranslation";
import InsurenceFaq from "../../../../modules/shared/components/InsurenceFaq/InsurenceFaq";
import LayoutSection from "../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";

export default function Faq() {
  const { DESCRIPTION, TITLE } = useTranslation({
    TITLE: {
      en: "Frequently Asked Questions",
      es: "Preguntas Frecuentes",
      it: "Domande Frequenti",
    },
    DESCRIPTION: {
      en: "We answer the most common questions about the process of obtaining insurance for Cuba",
      es: "Resolvemos las dudas más comunes sobre el proceso de obtención de seguros para Cuba",
      it: "Rispondiamo alle domande più comuni sul processo di ottenimento di assicurazioni per Cuba",
    },
  });

  return (
    <LayoutSection title={TITLE} description={DESCRIPTION}>
      <InsurenceFaq />
    </LayoutSection>
  );
}
