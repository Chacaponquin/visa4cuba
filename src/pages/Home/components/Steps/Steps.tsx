import useTranslation from "../../../../modules/app/modules/language/hooks/useTranslation";
import LayoutSection from "../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";
import StepCard from "./components/StepCard/StepCard";
import { STEPS } from "./domain/step";

export default function Steps() {
  const {
    TITLE,
    DESCRIPTION,
    STEPS: TSTEP,
  } = useTranslation({
    TITLE: {
      es: "Solicita tu Visa para Cuba en 4 pasos simples",
      en: "Get your visa in 4 easy steps",
      it: "Ottieni il tuo visto in 4 semplici passaggi",
    },
    DESCRIPTION: {
      es: "Nuestro proceso 100% online es rápido, seguro y sin complicaciones.",
      en: "100% online procedure with instant approval.",
      it: "Procedura 100% online con approvazione immediata.",
    },
    STEPS: { en: "Steps", es: "Pasos", it: "Passi" },
  });

  return (
    <LayoutSection title={TITLE} description={DESCRIPTION} header={TSTEP}>
      <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-7 gap-y-5">
        {STEPS.map((s, index) => (
          <StepCard key={index} props={s} step={index + 1} />
        ))}
      </div>
    </LayoutSection>
  );
}
