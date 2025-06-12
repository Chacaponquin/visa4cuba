import AboutSection from "../../shared/components/AboutSection/AboutSection";
import StepCard from "./components/StepCard/StepCard";
import { STEPS } from "./domain/step";

export default function Steps() {
  return (
    <AboutSection
      title="Obtén tu Visa en 4 Pasos"
      description="Nuestro proceso optimizado hace que obtener tu visa sea rápido y sin complicaciones"
    >
      <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-3 gap-y-3">
        {STEPS.map((s, index) => (
          <StepCard key={index} props={s} step={index + 1} />
        ))}
      </div>
    </AboutSection>
  );
}
