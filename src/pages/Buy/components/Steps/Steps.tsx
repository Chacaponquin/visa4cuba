import type { BuyStep } from "../../domain/buy-steps";
import StepCard from "./components/StepCard/StepCard";

interface Props {
  steps: BuyStep[];
  selected: BuyStep;
  onChangeStep(s: BuyStep): void;
}

export default function Steps({ steps, selected, onChangeStep }: Props) {
  return (
    <div className="flex flex-col w-full max-w-[400px] gap-y-8">
      {steps.map((s, index) => (
        <StepCard
          onClick={() => onChangeStep(s)}
          key={index}
          selected={selected.type === s.type}
          description={s.description}
          title={s.title}
          passed={s.passed}
        />
      ))}
    </div>
  );
}
