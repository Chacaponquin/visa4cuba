import clsx from "clsx";
import type { IconProps } from "../../../../../../modules/app/modules/icon/domain/props";
import Button from "../../../../../../modules/app/modules/ui/components/Button/Button";
import { PriceTextBuilder } from "../../../../../../modules/shared/domain/helpers/price-text-builder";
import type { ShopOption } from "../../../../../../modules/shop/domain/entities/shop-option";

import IncludeCard from "./components/IncludeCard/IncludeCard";
import useShopCard from "./hooks/useShopCard";
import { useContext } from "react";
import { LanguageContext } from "../../../../../../modules/app/modules/language/context/language-context";
import useTranslation from "../../../../../../modules/app/modules/language/hooks/useTranslation";

interface Props {
  card: ShopOption;
  icon: (props: IconProps) => React.ReactNode;
}

export default function ShopCard({ card, icon }: Props) {
  const { language } = useContext(LanguageContext);

  const { BUTTON } = useTranslation({
    BUTTON: { en: "Add", es: "Añadir", it: "Aggiungere" },
  });

  const { handleAdd } = useShopCard({
    option: card,
  });

  return (
    <article
      className={clsx(
        "rounded-lg flex flex-col shadow-md px-6 py-4 h-full sm:min-h-[400px] justify-between",
        {
          "bg-primary": card.selected,
          "bg-white": !card.selected,
          "scale-105": card.selected,
        }
      )}
    >
      <div className="flex flex-col w-full">
        <header className="w-full flex items-center gap-x-4 mb-5">
          <i
            className={clsx("rounded-lg px-2.5 py-2", {
              "stroke-primary bg-primary/10": !card.selected,
              "stroke-white bg-white/20": card.selected,
            })}
          >
            {icon({ size: 26 })}
          </i>

          <div className="flex flex-col">
            <h2
              className={clsx(
                "font-title-semibold text-xl",
                card.selected ? "text-white" : "text-black"
              )}
            >
              {card.title[language]}
            </h2>
          </div>
        </header>

        <span
          className={clsx(
            "text-3xl mb-1.5 !font-title-semibold",
            card.selected ? "text-white" : "text-secondary"
          )}
        >
          {PriceTextBuilder.execute(card.price)}
        </span>

        <span
          className={clsx(
            "text-sm",
            card.selected ? "text-white" : "text-gray-500"
          )}
        >
          {card.description[language]}
        </span>

        {card.includes.length > 0 && (
          <div className="flex flex-col w-full mt-4">
            {card.includes.map((i, index) => (
              <IncludeCard
                key={index}
                selected={card.selected}
                value={i[language]}
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex w-full items-center justify-between gap-x-3 mt-8">
        <Button
          color={card.selected ? "light" : "primary"}
          size="base"
          full
          onClick={handleAdd}
        >
          {BUTTON}
        </Button>
      </div>
    </article>
  );
}
