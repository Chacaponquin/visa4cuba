import Button from "../../../../../../modules/app/modules/ui/components/Button/Button";
import Counter from "../../../../../../modules/shared/components/Counter/Counter";
import { PriceTextBuilder } from "../../../../../../modules/shared/domain/helpers/price-text-builder";
import type { ShopCard as IShopCard } from "../../../../domain/shop-card";
import IncludeCard from "./components/IncludeCard/IncludeCard";
import useShopCard from "./hooks/useShopCard";

interface Props {
  card: IShopCard;
}

export default function ShopCard({ card }: Props) {
  const { count, handleDecrease, handleIncrease } = useShopCard();

  return (
    <article className="rounded-lg flex flex-col border border-card shadow-md px-4 py-2.5">
      <header className="w-full flex items-center gap-x-3.5 mb-3">
        <i className="stroke-blue-700 rounded-lg bg-blue-100 px-2.5 py-2">
          {card.icon({ size: 24 })}
        </i>

        <div className="flex flex-col">
          <h2 className="font-medium text-base">{card.title}</h2>

          <span className="text-xl !font-semibold text-green-600">
            {PriceTextBuilder.execute(card.price)}
          </span>
        </div>
      </header>

      <span className="text-gray-600 text-sm">{card.description}</span>

      {card.includes.length > 0 && (
        <div className="flex flex-col w-full mt-2.5">
          {card.includes.map((i, index) => (
            <IncludeCard key={index} value={i} />
          ))}
        </div>
      )}

      <div className="flex w-full items-center justify-between gap-x-3 mt-4">
        <Counter
          onDecrease={handleDecrease}
          onIncrease={handleIncrease}
          value={count}
        />

        <Button size="sm">Añadir</Button>
      </div>
    </article>
  );
}
