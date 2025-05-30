import World from "../../../modules/app/modules/icon/components/World";
import type { ShopCard } from "../domain/card";

export default function useShop() {
  const cards: ShopCard[] = [
    {
      description: "Para viajes de turismo",
      icon: World,
      includes: [],
      price: 25,
      title: "Visa Túristica",
    },
  ];

  return { cards };
}
