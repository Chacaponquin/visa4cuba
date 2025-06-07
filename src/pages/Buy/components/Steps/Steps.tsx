import { useMemo } from "react";
import { SCREEN_SIZES } from "../../../../modules/app/domain/constants/screen-size";
import useScreen from "../../../../modules/shared/hooks/useScreen";
import type { BuyStep } from "../../domain/buy-steps";
import StepCard from "./components/StepCard/StepCard";

interface Props {
  steps: BuyStep[];
  selected: BuyStep;
  onChangeStep(s: BuyStep): void;
}

export default function Steps({ steps, selected, onChangeStep }: Props) {
  const { condition } = useScreen(SCREEN_SIZES.LG);

  const isteps = useMemo(() => {
    return condition ? steps : [selected];
  }, [condition, steps, selected]);

  return (
    <div className="flex flex-col w-full max-w-[400px] gap-y-8">
      {isteps.map((s, index) => (
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
