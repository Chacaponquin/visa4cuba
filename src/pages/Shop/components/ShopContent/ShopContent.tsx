import ShopSection from "../../shared/components/ShopSection/ShopSection";
import ShopCard from "./components/ShopCard/ShopCard";
import useShopContent from "./hooks/useShopContent";

export default function ShopContent() {
  const { cards } = useShopContent();

  return (
    <ShopSection
      title="Visas y seguros para Cuba en línea"
      description="Obtén tu visa y seguro de viaje para Cuba de forma rápida y seguro. Procesamiento en línea con entrega a domicilio"
    >
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3">
        {cards.map((card, index) => (
          <ShopCard key={index} card={card} />
        ))}
      </div>
    </ShopSection>
  );
}
