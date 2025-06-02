import type { ShopCard } from "../../../domain/shop-card";
import World from "../../../../../modules/app/modules/icon/components/World";

export default function useShopContent() {
  const cards: ShopCard[] = Array.from({ length: 6 }).map(() => {
    return {
      description: "Para viajes de turismo",
      icon: World,
      includes: ["Emergencias", "Escala técnica"],
      price: 25,
      title: "Visa Turística",
    };
  });

  return { cards };
}
