import clsx from "clsx";
import type { UiSize } from "../../domain/size";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  loading?: boolean;
  type?: "submit" | "button";
  className?: string;
  color?: "primary" | "light";
  size?: UiSize;
}

export default function Button({
  children,
  onClick,
  className,
  type = "button",
  color = "primary",
  size = "base",
}: Props) {
  const CLASS = clsx(
    "font-medium text-sm text-center",

    {
      "bg-primary-700 hover:bg-primary text-white": color === "primary",
      "bg-white hover:bg-gray-100 text-black border border-card":
        color === "light",
    },

    { "py-2 px-4": size === "base", "py-1 px-3": size === "sm" },

    { "rounded-lg": size === "base", "rounded-md": size === "sm" },

    className
  );

  return (
    <button type={type} onClick={onClick} className={CLASS}>
      {children}
    </button>
  );
}
