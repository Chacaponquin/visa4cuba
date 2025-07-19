import clsx from "clsx";
import CheckCorrect from "../../../../../../../../modules/app/modules/icon/components/CheckCorrect";

interface Props {
  value: string;
  selected: boolean;
}

export default function IncludeCard({ value, selected }: Props) {
  return (
    <div className="flex mb-2 items-center gap-x-2.5">
      <i className={clsx(selected ? "stroke-white" : "stroke-primary")}>
        <CheckCorrect size={17} />
      </i>

      <p
        className={clsx("text-sm", !selected ? "text-gray-600" : "text-white")}
      >
        {value}
      </p>
    </div>
  );
}
