import Minus from "../../../app/modules/icon/components/Minus";
import Plus from "../../../app/modules/icon/components/Plus";
import ActionButton from "./components/ActionButton/ActionButton";

interface Props {
  value: number;
  onIncrease(): void;
  onDecrease(): void;
}

export default function Counter({ value, onDecrease, onIncrease }: Props) {
  return (
    <div className="flex items-center gap-x-3">
      <ActionButton disabled={value === 1} icon={Minus} onClick={onDecrease} />

      <span className="text-gray-800 text-sm font-medium">{value}</span>

      <ActionButton icon={Plus} disabled={false} onClick={onIncrease} />
    </div>
  );
}
