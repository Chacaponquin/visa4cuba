import type { IconProps } from "../../../../../../modules/app/modules/icon/domain/props";
import Button from "../../../../../../modules/app/modules/ui/components/Button/Button";
import Counter from "../../../../../../modules/shared/components/Counter/Counter";
import { PriceTextBuilder } from "../../../../../../modules/shared/domain/helpers/price-text-builder";
import type { ShopOption } from "../../../../../../modules/shop/domain/entities/shop-option";

import IncludeCard from "./components/IncludeCard/IncludeCard";
import useShopCard from "./hooks/useShopCard";

interface Props {
  card: ShopOption;
  icon: (props: IconProps) => React.ReactNode;
}

export default function ShopCard({ card, icon }: Props) {
  const { count, handleDecrease, handleIncrease, handleAdd, exists } =
    useShopCard({
      option: card,
    });

  return (
    <article className="rounded-lg flex flex-col border border-card shadow-md px-6 py-4 h-full justify-between">
      <div className="flex flex-col w-full">
        <header className="w-full flex items-center gap-x-4 mb-5">
          <i className="stroke-primary rounded-lg bg-primary/10 px-2.5 py-2">
            {icon({ size: 26 })}
          </i>

          <div className="flex flex-col">
            <h2 className="font-title-semibold text-xl">{card.title}</h2>
          </div>
        </header>

        <span className="text-3xl mb-1.5 !font-title-semibold text-secondary">
          {PriceTextBuilder.execute(card.price)}
        </span>

        <span className="text-gray-500 text-sm">{card.description}</span>

        {card.includes.length > 0 && (
          <div className="flex flex-col w-full mt-4">
            {card.includes.map((i, index) => (
              <IncludeCard key={index} value={i} />
            ))}
          </div>
        )}
      </div>

      <div className="flex w-full items-center justify-between gap-x-3 mt-5">
        {exists ? (
          <>
            <Counter
              onDecrease={handleDecrease}
              onIncrease={handleIncrease}
              value={count}
            />

            <Button color="primary" size="sm" onClick={handleAdd}>
              Añadir
            </Button>
          </>
        ) : (
          <>
            <Button color="primary" size="base" full onClick={handleAdd}>
              Añadir
            </Button>
          </>
        )}
      </div>
    </article>
  );
}
