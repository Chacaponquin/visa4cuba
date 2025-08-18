import { useContext } from "react";
import { ShopContext } from "../../../../../modules/shop/context/shop-context";

export default function useShopResult() {
  const { cart, handleDeleteItem, handleIncreaseItem, handleDecreaseItem } =
    useContext(ShopContext);

  function handleDelete(id: string) {
    handleDeleteItem(id);
  }

  function handleIncrease(id: string) {
    handleIncreaseItem(id);
  }

  function handleDecrease(id: string) {
    handleDecreaseItem(id);
  }

  return { items: cart, handleDelete, handleDecrease, handleIncrease, cart };
}
