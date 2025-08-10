import { useContext } from "react";
import useTranslation from "../../../../modules/app/modules/language/hooks/useTranslation";
import { CalculateCartItemTotal } from "../../../../modules/shop/domain/helpers/calculate-cart-item-total";
import { CalculateCartSend } from "../../../../modules/shop/domain/helpers/calculate-cart-send";
import { CalculateCartSubTotal } from "../../../../modules/shop/domain/helpers/calculate-cart-subtotal";
import { CalculateCartTotal } from "../../../../modules/shop/domain/helpers/calculate-cart-total";
import ShopSection from "../../shared/components/ShopSection/ShopSection";
import ResultSummary from "./components/ResultSummary/ResultSummary";
import ShopCartItemCard from "./components/ShopCartItemCard/ShopCartItemCard";
import useShopResult from "./hooks/useShopResult";
import { LanguageContext } from "../../../../modules/app/modules/language/context/language-context";

export default function ShopResult() {
  const { items, handleDelete, handleDecrease, handleIncrease, cart } =
    useShopResult();
  const { language } = useContext(LanguageContext);

  const { TITLE, DESCRIPTION } = useTranslation({
    TITLE: {
      es: "Resumen de tu pedido",
      en: "Summary of your order",
      it: "Riepilogo del tuo ordine",
    },
    DESCRIPTION: {
      es: "Revisa los servicios seleccionados antes de proceder",
      en: "Review the selected services before proceeding",
      it: "Controlla i servizi selezionati prima di procedere",
    },
  });

  return (
    <ShopSection
      condition={cart.length > 0}
      id="shop-summary"
      title={TITLE}
      description={DESCRIPTION}
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
              description={c.option.description[language]}
              onDelete={() => handleDelete(c.option.id)}
              title={c.option.title[language]}
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
