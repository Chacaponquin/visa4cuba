import clsx from "clsx";
import type { IconProps } from "../../../../../../modules/app/modules/icon/domain/props";

interface Props {
  title: string;
  icon: (props: IconProps) => React.ReactNode;
  color: "primary" | "secondary";
  description: string;
}

export default function HeaderCard({ title, icon, description, color }: Props) {
  return (
    <article
      className={clsx(
        "rounded-xl px-8 py-5 flex flex-col border-2",
        "transition-all duration-300 hover:scale-105",
        {
          "bg-secondary/10 border-secondary": color === "secondary",
          "bg-primary/10 border-primary": color === "primary",
        }
      )}
    >
      <i
        className={clsx("px-3 py-3 w-max rounded-lg mb-4", {
          "stroke-primary bg-primary/10": color === "primary",
          "stroke-secondary bg-secondary/10": color === "secondary",
        })}
      >
        {icon({ size: 28 })}
      </i>

      <h1
        className={clsx("uppercase text-xl mb-2 font-semibold", {
          "text-primary": color === "primary",
          "text-secondary": color === "secondary",
        })}
      >
        {title}
      </h1>

      <span className="text-base text-gray-600">{description}</span>
    </article>
  );
}
