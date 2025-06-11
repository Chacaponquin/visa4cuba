import clsx from "clsx";
import type { ServiceCard } from "../../domain/service-card";
import IconCard from "../../../../../../modules/shared/components/IconCard/IconCard";

interface Props {
  service: ServiceCard;
}

export default function Card({ service }: Props) {
  return (
    <article
      className={clsx(
        "rounded-card w-full max-w-md flex flex-col border-2 border-card py-5 px-7 transition-all duration-200",
        {
          "border-primary/20 hover:border-primary": service.color === "primary",
          "border-secondary/20 hover:border-secondary":
            service.color === "secondary",
        }
      )}
    >
      <header className="flex items-center gap-x-3.5 mb-4">
        <IconCard icon={service.icon} size="base" color={service.color} />

        <h2
          className={clsx("font-title-medium text-xl", {
            "text-primary": service.color === "primary",
            "text-secondary": service.color === "secondary",
          })}
        >
          {service.title}
        </h2>
      </header>

      <p className="text-sm text-gray-500 leading-6">{service.description}</p>

      <div className="flex flex-col gap-y-1.5 mt-4">
        {service.includes.map((i, index) => (
          <div key={index} className="flex items-center gap-x-3">
            <i
              className={clsx("w-[6px] h-[6px] rounded-full", {
                "bg-primary": service.color === "primary",
                "bg-secondary": service.color === "secondary",
              })}
            ></i>

            <span className="text-sm text-gray-500">{i}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
