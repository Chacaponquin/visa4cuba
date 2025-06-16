import { useState } from "react";
import type { IconProps } from "../../../../../../modules/app/modules/icon/domain/props";
import clsx from "clsx";
import IconCard from "../../../../../../modules/shared/components/IconCard/IconCard";
import ArrowDown from "../../../../../../modules/app/modules/icon/components/ArrowDown";

interface Props {
  title: string;
  icon: (props: IconProps) => React.ReactNode;
  children?: React.ReactNode;
}

export default function FaqCard({ icon, title, children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-card rounded-card flex flex-col px-6 py-3 mb-3 w-full max-w-[760px]">
      <div
        className={clsx(
          "flex justify-between items-center gap-x-8 cursor-pointer"
        )}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="flex items-center gap-x-4">
          <IconCard color="primary" icon={icon} size="base" />

          <h2 className="font-title-semibold text-base">{title}</h2>
        </div>

        <i
          className={clsx("stroke-gray-700 transition-all duration-200", {
            "rotate-180": open,
          })}
        >
          <ArrowDown size={18} />
        </i>
      </div>

      {open && children}
    </div>
  );
}
