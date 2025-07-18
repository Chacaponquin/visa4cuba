import { useContext, useMemo, useState } from "react";
import type { ShopOption } from "../../../../../../../modules/shop/domain/entities/shop-option";
import { ShopContext } from "../../../../../../../modules/shop/context/ShopContext";
import useToast from "../../../../../../../modules/app/hooks/useToast";

interface Props {
  option: ShopOption;
}

export default function useShopCard({ option }: Props) {
  const { handleAddItem, cart } = useContext(ShopContext);
  const { success } = useToast();

  const exists = useMemo(() => {
    return cart.some((e) => e.option.id === option.id);
  }, [cart, option]);

  const [count, setCount] = useState(1);

  function handleDecrease() {
    setCount((prev) => prev - 1);
  }

  function handleIncrease() {
    setCount((prev) => prev + 1);
  }

  function handleAdd() {
    handleAddItem(option, count);

    success({ message: "Elemento añadido al carro de compra" });
  }

  return { count, handleDecrease, handleIncrease, handleAdd, exists };
}
