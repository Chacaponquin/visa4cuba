import clsx from "clsx";
import type { IconProps } from "../../../../../../../../modules/app/modules/icon/domain/props";

interface Props {
  value: string;
  icon: (props: IconProps) => React.ReactNode;
  color: "green" | "blue";
}

export default function AdventageValue({ icon, value, color }: Props) {
  return (
    <div className="flex items-center gap-x-3">
      <i
        className={clsx({
          "stroke-green-500": color === "green",
          "stroke-blue-500": color === "blue",
        })}
      >
        {icon({ size: 19 })}
      </i>

      <span className="text-sm text-gray-600">{value}</span>
    </div>
  );
}
