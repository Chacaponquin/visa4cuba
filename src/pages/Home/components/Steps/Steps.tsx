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
      es: "Obtén tu Visa en 4 Pasos",
      en: "Get your Visa in 4 Steps",
      it: "Ottieni il tuo visto in 4 passaggi",
    },
    DESCRIPTION: {
      es: "Nuestro proceso optimizado hace que obtener tu visa sea rápido y sin complicaciones",
      en: "Our streamlined process makes obtaining your visa quick and hassle-free.",
      it: "La nostra procedura semplificata rende l'ottenimento del visto rapido e senza problemi.",
    },
    STEPS: { en: "Steps", es: "Pasos", it: "Passi" },
  });

  return (
    <LayoutSection title={TITLE} description={DESCRIPTION} header={TSTEP}>
      <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-3 gap-y-3">
        {STEPS.map((s, index) => (
          <StepCard key={index} props={s} step={index + 1} />
        ))}
      </div>
    </LayoutSection>
  );
}
