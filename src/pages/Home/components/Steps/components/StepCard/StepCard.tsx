import { useContext } from "react";
import IconCard from "../../../../../../modules/shared/components/IconCard/IconCard";
import type { Step } from "../../domain/step";
import { LanguageContext } from "../../../../../../modules/app/modules/language/context/language-context";

interface Props {
  step: number;
  props: Step;
}

export default function StepCard({ props, step }: Props) {
  const { language } = useContext(LanguageContext);

  return (
    <article className="relative rounded-card border-2 border-primary/30 px-6 py-4 flex flex-col text-center items-center transition-all duration-200 hover:border-primary hover:shadow-xl">
      <div className="absolute -right-3 -top-3 rounded-full w-[30px] h-[30px] flex items-center justify-center bg-primary text-white text-sm">
        {step}
      </div>

      <IconCard size="lg" color="primary" icon={props.icon} className="mb-4" />

      <h2 className="text-xl font-title-semibold mb-0.5">
        {props.title[language]}
      </h2>

      <span className="text-sm text-gray-500">
        {props.description[language]}
      </span>
    </article>
  );
}
