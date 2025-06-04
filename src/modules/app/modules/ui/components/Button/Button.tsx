import clsx from "clsx";
import type { UiSize } from "../../domain/size";
import type { IconProps } from "../../../icon/domain/props";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  loading?: boolean;
  type?: "submit" | "button";
  className?: string;
  color?: "primary" | "light";
  size?: UiSize;
  icon?: (props: IconProps) => React.ReactNode;
}

export default function Button({
  children,
  onClick,
  className,
  type = "button",
  color = "primary",
  size = "base",
  icon,
}: Props) {
  const CLASS = clsx(
    "text-sm text-center",
    "flex items-center justify-center gap-x-2",

    {
      "bg-primary-700 hover:bg-primary text-white": color === "primary",
      "bg-white hover:bg-gray-100 text-black border border-card stroke-black":
        color === "light",
    },

    { "py-2 px-4": size === "base", "py-1 px-3": size === "sm" },

    { "rounded-lg": size === "base", "rounded-md": size === "sm" },

    className
  );

  return (
    <button type={type} onClick={onClick} className={CLASS}>
      {icon && <i className="">{icon({ size: 18 })}</i>}

      <p className="font-medium">{children}</p>
    </button>
  );
}
