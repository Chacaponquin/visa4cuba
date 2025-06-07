import { useContext, useState } from "react";
import type { ShopOption } from "../../../../../../../modules/shop/domain/entities/shop-option";
import { ShopContext } from "../../../../../../../modules/shop/context/ShopContext";

interface Props {
  option: ShopOption;
}

export default function useShopCard({ option }: Props) {
  const { handleAddItem } = useContext(ShopContext);

  const [count, setCount] = useState(1);

  function handleDecrease() {
    setCount((prev) => prev - 1);
  }

  function handleIncrease() {
    setCount((prev) => prev + 1);
  }

  function handleAdd() {
    handleAddItem(option, count);
  }

  return { count, handleDecrease, handleIncrease, handleAdd };
}
