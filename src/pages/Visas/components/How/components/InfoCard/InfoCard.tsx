import clsx from "clsx";
import type { IconProps } from "../../../../../../modules/app/modules/icon/domain/props";
import type { UiColor } from "../../../../../../modules/app/modules/ui/domain/color";

interface Props {
  icon: (props: IconProps) => React.ReactNode;
  title: string;
  color: UiColor;
  children?: React.ReactNode;
}

export default function InfoCard({ icon, title, children, color }: Props) {
  return (
    <div className="flex w-full items-start gap-x-5 mb-6 max-w-[730px]">
      <i
        className={clsx({
          "stroke-primary": color === "primary",
          "stroke-secondary": color === "secondary",
        })}
      >
        {icon({ size: 30 })}
      </i>

      <div className="flex flex-col w-full">
        <h2 className="font-semibold text-lg mb-0.5 uppercase">{title}</h2>

        {children}
      </div>
    </div>
  );
}
