import clsx from "clsx";
import type { UiSize } from "../../../../domain/size";

interface Props {
  children?: React.ReactNode;
  size?: UiSize;
}

export default function P({ children, size = "base" }: Props) {
  return (
    <p
      className={clsx("mb-2 leading-7 text-gray-600", {
        "text-sm": size === "sm",
        "text-base": size === "base",
      })}
    >
      {children}
    </p>
  );
}
