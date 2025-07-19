import type React from "react";
import type { IconProps } from "../../../app/modules/icon/domain/props";
import type { UiColor } from "../../../app/modules/ui/domain/color";
import type { UiSize } from "../../../app/modules/ui/domain/size";
import { useMemo } from "react";
import clsx from "clsx";

interface Props {
  icon: (props: IconProps) => React.ReactNode;
  color: UiColor;
  size: UiSize;
  className?: string;
}

export default function IconCard({
  color,
  icon,
  size: isize,
  className,
}: Props) {
  const size = useMemo(() => {
    if (isize === "base") {
      return 25;
    }

    if (isize === "lg") {
      return 28;
    }

    if (isize === "sm") {
      return 18;
    }

    return 18;
  }, [isize]);

  return (
    <i
      className={clsx(
        "rounded-lg",
        {
          "bg-primary/10": color === "primary",
          "bg-secondary/10": color === "secondary",
        },
        {
          "stroke-primary": color === "primary",
          "stroke-secondary": color === "secondary",
        },
        {
          "px-2.5 py-2": isize === "base",
          "p-1.5": isize === "sm",
          "px-3.5 py-2.5": isize === "lg",
        },
        className
      )}
    >
      {icon({ size: size })}
    </i>
  );
}
