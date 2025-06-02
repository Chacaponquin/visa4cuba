import ShopSection from "../../shared/components/ShopSection/ShopSection";
import ResultSummary from "./components/ResultSummary/ResultSummary";
import ShopCartItemCard from "./components/ShopCartItemCard/ShopCartItemCard";
import useShopResult from "./hooks/useShopResult";

export default function ShopResult() {
  const { items, handleDelete, handleDecrease, handleIncrease } =
    useShopResult();

  return (
    <ShopSection
      title="Resumen de tu pedido"
      description="Revisa los servicios seleccionados antes de proceder"
    >
      <div className="w-full flex lg:flex-row flex-col items-start gap-x-7 gap-y-4">
        <div className="flex flex-col gap-y-2.5 w-full">
          {items.map((c) => (
            <ShopCartItemCard
              count={c.count}
              subtotal={c.subtotal}
              onDecrease={handleDecrease}
              onIncrease={handleIncrease}
              key={c.id}
              icon={c.icon}
              description={c.description}
              onDelete={() => handleDelete(c.id)}
              title={c.title}
            />
          ))}
        </div>

        <ResultSummary prosecution={5} subtotal={100} total={138} />
      </div>
    </ShopSection>
  );
}
