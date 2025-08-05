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
    <article className="bg-white h-max shadow relative rounded-card flex flex-col items-center transition-all duration-200 hover:-translate-y-2">
      <header className="py-3 px-4 flex justify-center bg-primary text-white font-title-bold w-full text-xl">
        {step}
      </header>

      <div className="flex flex-col px-6 py-5 items-center text-center">
        <h2 className="text-xl font-title-semibold mb-2 w-full">
          {props.title[language]}
        </h2>

        <span className="text-sm text-gray-500 mb-8">
          {props.description[language]}
        </span>

        <IconCard
          size="xl"
          color="primary"
          icon={props.icon}
          className="mb-2"
        />
      </div>
    </article>
  );
}
