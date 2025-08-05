import clsx from "clsx";
import type { ServiceCard } from "../../domain/service-card";
import IconCard from "../../../../../../modules/shared/components/IconCard/IconCard";
import { useContext } from "react";
import { LanguageContext } from "../../../../../app/modules/language/context/language-context";
import CheckCorrect from "../../../../../app/modules/icon/components/CheckCorrect";
import Button from "../../../../../app/modules/ui/components/Button/Button";
import { Link } from "react-router";
import { TranslationRouteBuilder } from "../../../../../app/domain/core/translation-route-builder";
import { APP_ROUTES } from "../../../../../app/domain/constants/app-routes";

interface Props {
  service: ServiceCard;
}

export default function Card({ service }: Props) {
  const { language } = useContext(LanguageContext);

  return (
    <article
      className="rounded-card w-full flex flex-col transition-all duration-200 px-6 pb-3 pt-60 shadow-lg"
      style={{ background: `url('${service.image}') center/cover no-repeat` }}
    >
      <div className="rounded-card bg-white w-full px-5 py-4">
        <header className="flex items-center gap-x-4 mb-3">
          <IconCard icon={service.icon} size="base" color={service.color} />

          <h2
            className={clsx("font-title-medium text-xl", {
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

        <Link to={new TranslationRouteBuilder(APP_ROUTES.SHOP).build(language)}>
          <Button className="mt-8" color={service.color} size="base" full>
            {service.button[language]}
          </Button>
        </Link>
      </div>
    </article>
  );
}
