import { useContext, useMemo, useState } from "react";
import type { ShopOption } from "../../../../../../../modules/shop/domain/entities/shop-option";
import useToast from "../../../../../../../modules/app/hooks/useToast";
import useTranslation from "../../../../../../../modules/app/modules/language/hooks/useTranslation";
import { ShopContext } from "../../../../../../../modules/shop/context/shop-context";

interface Props {
  option: ShopOption;
}

export default function useShopCard({ option }: Props) {
  const { handleAddItem, cart } = useContext(ShopContext);
  const { success } = useToast();

  const { MESSAGE } = useTranslation({
    MESSAGE: {
      es: "Elemento añadido al carro de compra",
      it: "Articolo aggiunto al carrello",
      en: "Item added to shopping cart",
    },
  });

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

    success({ message: MESSAGE });

    const element = document.getElementById("shop-summary");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return { count, handleDecrease, handleIncrease, handleAdd, exists };
}
