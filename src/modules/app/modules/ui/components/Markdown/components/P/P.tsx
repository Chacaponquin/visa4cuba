import clsx from "clsx";
import type { UiSize } from "../../../../domain/size";

interface Props {
  children?: React.ReactNode;
  size?: UiSize;
}

export default function P({ children, size = "base" }: Props) {
  return (
    <p
      className={clsx("mb-2 text-gray-600", {
        "text-sm sm:leading-7 leading-6": size === "sm",
        "text-base leading-7": size === "base",
      })}
    >
      {children}
    </p>
  );
}
