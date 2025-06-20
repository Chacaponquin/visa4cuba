import clsx from "clsx";
import type { UiSize } from "../../domain/size";
import type { IconProps } from "../../../icon/domain/props";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  loading?: boolean;
  type?: "submit" | "button";
  className?: string;
  color?: "primary" | "light" | "secondary";
  size?: UiSize;
  icon?: (props: IconProps) => React.ReactNode;
  full?: boolean;
}

export default function Button({
  children,
  onClick,
  className,
  type = "button",
  color = "primary",
  size = "base",
  icon,
  full = false,
}: Props) {
  const CLASS = clsx(
    { "w-full": full, "w-max": !full },

    "text-center",
    "flex items-center justify-center gap-x-2",

    {
      "bg-primary-500 hover:bg-primary-600 text-white": color === "primary",
      "bg-secondary-500 hover:bg-secondary-600 text-white":
        color === "secondary",
      "bg-white hover:bg-gray-100 text-black border border-card stroke-black":
        color === "light",
    },

    {
      "py-2 px-4": size === "base",
      "py-2.5 px-5": size === "lg",
      "py-1 px-3": size === "sm",
    },

    {
      "rounded-lg": size === "base" || size === "lg",
      "rounded-md": size === "sm",
    },

    { "text-sm": size === "base" || size === "sm", "text-base": size === "lg" },

    className
  );

  return (
    <button type={type} onClick={onClick} className={CLASS}>
      {icon && <i className="">{icon({ size: 18 })}</i>}

      <p className="font-medium">{children}</p>
    </button>
  );
}
