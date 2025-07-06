import { CalculateCartItemTotal } from "../../../../modules/shop/domain/helpers/calculate-cart-item-total";
import { CalculateCartSend } from "../../../../modules/shop/domain/helpers/calculate-cart-send";
import { CalculateCartSubTotal } from "../../../../modules/shop/domain/helpers/calculate-cart-subtotal";
import { CalculateCartTotal } from "../../../../modules/shop/domain/helpers/calculate-cart-total";
import ShopSection from "../../shared/components/ShopSection/ShopSection";
import ResultSummary from "./components/ResultSummary/ResultSummary";
import ShopCartItemCard from "./components/ShopCartItemCard/ShopCartItemCard";
import useShopResult from "./hooks/useShopResult";

export default function ShopResult() {
  const { items, handleDelete, handleDecrease, handleIncrease, cart } =
    useShopResult();

  return (
    <ShopSection
      id="shop-summary"
      title="Resumen de tu pedido"
      description="Revisa los servicios seleccionados antes de proceder"
    >
      <div className="w-full flex lg:flex-row flex-col items-start gap-x-7 gap-y-4">
        <div className="flex flex-col gap-y-2.5 w-full">
          {items.map((c) => (
            <ShopCartItemCard
              count={c.count}
              subtotal={CalculateCartItemTotal.execute(c)}
              onDecrease={() => handleDecrease(c.option.id)}
              onIncrease={() => handleIncrease(c.option.id)}
              key={c.option.id}
              icon={c.option.icon}
              description={c.option.description}
              onDelete={() => handleDelete(c.option.id)}
              title={c.option.title}
            />
          ))}
        </div>

        <ResultSummary
          prosecution={CalculateCartSend.execute(cart)}
          subtotal={CalculateCartSubTotal.execute(cart)}
          total={CalculateCartTotal.execute(cart)}
        />
      </div>
    </ShopSection>
  );
}
