import { useContext } from "react";
import { ShopContext } from "../../../../../modules/shop/context/shop-context";

export default function useShopContent() {
  const { options } = useContext(ShopContext);

  return { options };
}
