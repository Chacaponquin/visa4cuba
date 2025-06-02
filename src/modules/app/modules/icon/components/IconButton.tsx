import clsx from "clsx";
import type { IconProps } from "../domain/props";

interface Props {
  disabled?: boolean;
  icon: (props: IconProps) => React.ReactNode;
  onClick(): void;
  color?: "red" | "default";
}

export default function IconButton({
  icon,
  disabled,
  onClick,
  color = "default",
}: Props) {
  return (
    <button
      type="button"
      className={clsx(
        "p-1.5 rounded-md border border-card",
        {
          "stroke-gray-800": color === "default",
          "stroke-red-500": color === "red",
        },
        { "hover:bg-gray-100": true }
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {icon({ size: 17 })}
    </button>
  );
}
