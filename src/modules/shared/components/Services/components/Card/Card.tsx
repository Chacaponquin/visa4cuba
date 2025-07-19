import clsx from "clsx";
import type { ServiceCard } from "../../domain/service-card";
import IconCard from "../../../../../../modules/shared/components/IconCard/IconCard";
import { useContext } from "react";
import { LanguageContext } from "../../../../../app/modules/language/context/language-context";
import CheckCorrect from "../../../../../app/modules/icon/components/CheckCorrect";

interface Props {
  service: ServiceCard;
}

export default function Card({ service }: Props) {
  const { language } = useContext(LanguageContext);

  return (
    <article
      className={clsx(
        "rounded-card w-full flex flex-col transition-all duration-200"
      )}
    >
      <header className="flex items-center gap-x-4 mb-4">
        <IconCard icon={service.icon} size="lg" color={service.color} />

        <h2
          className={clsx("font-title-medium text-2xl", {
            "text-primary": service.color === "primary",
            "text-secondary": service.color === "secondary",
          })}
        >
          {service.title[language]}
        </h2>
      </header>

      <p className="text-sm text-gray-500 leading-6">
        {service.description[language]}
      </p>

      <div className="flex flex-col gap-y-2.5 mt-4">
        {service.includes.map((i, index) => (
          <div key={index} className="flex items-center gap-x-3">
            <i
              className={clsx({
                "stroke-primary": service.color === "primary",
                "stroke-secondary": service.color === "secondary",
              })}
            >
              <CheckCorrect size={18} />
            </i>

            <span className="text-sm text-gray-500">{i[language]}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
