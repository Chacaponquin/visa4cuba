import clsx from "clsx";
import Checked from "../../../../../../modules/app/modules/icon/components/Checked";

interface Props {
  title: string;
  description: string;
  passed: boolean;
  selected: boolean;
  onClick(): void;
}

export default function StepCard({
  title,
  description,
  passed,
  selected,
  onClick,
}: Props) {
  return (
    <article
      onClick={onClick}
      className={clsx("flex items-start w-full gap-x-4", {
        "opacity-60": !selected,
      })}
    >
      <i
        className={clsx("", {
          "stroke-gray-700": !passed,
          "stroke-secondary": passed,
        })}
      >
        <Checked size={25} />
      </i>

      <div className="flex flex-col">
        <h2 className="text-base text-black mb-0.5 !font-medium">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </article>
  );
}
