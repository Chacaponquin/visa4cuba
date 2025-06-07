import { useContext } from "react";
import { ShopContext } from "../../../../../modules/shop/context/ShopContext";

export default function useShopContent() {
  const { options } = useContext(ShopContext);

  return { options };
}
