import { useState } from "react";
import clsx from "clsx";
import type { IconProps } from "../../../app/modules/icon/domain/props";
import ArrowDown from "../../../app/modules/icon/components/ArrowDown";
import IconCard from "../IconCard/IconCard";
import P from "../../../app/modules/ui/components/Markdown/components/P/P";

interface Props {
  title: string;
  icon: (props: IconProps) => React.ReactNode;
  children?: React.ReactNode;
}

export default function FaqCard({ icon, title, children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={clsx(
        "border-[1.5px] border-card rounded-card flex flex-col px-6 py-3 mb-3 w-full max-w-[760px] transition-all duration-200",
        { "border-primary shadow-input": open }
      )}
    >
      <div
        className={clsx(
          "flex justify-between items-center gap-x-8 cursor-pointer",
          { "mb-1.5": open }
        )}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="flex items-center gap-x-4">
          <span className="sm:flex hidden w-max">
            <IconCard color="primary" icon={icon} size="base" />
          </span>

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

      {open && (
        <div className="sm:pl-14">
          <P size="sm">{children}</P>
        </div>
      )}
    </div>
  );
}
