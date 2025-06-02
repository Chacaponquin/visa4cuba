import World from "../../../../../modules/app/modules/icon/components/World";
import { Id } from "../../../../../modules/shared/domain/value-object/id";
import type { ShopCartItem } from "../../../domain/shop-cart-item";

export default function useShopResult() {
  const items: ShopCartItem[] = [
    {
      count: 1,
      description: "Para viajes de turismo y recreación",
      icon: World,
      subtotal: 100,
      title: "Visa de turista",
      id: Id.generate(),
    },
    {
      count: 1,
      description: "Para viajes de turismo y recreación",
      icon: World,
      subtotal: 100,
      title: "Visa de turista",
      id: Id.generate(),
    },
  ];

  function handleDelete(id: string) {
    console.log(id);
  }

  function handleIncrease() {}

  function handleDecrease() {}

  return { items, handleDelete, handleDecrease, handleIncrease };
}
