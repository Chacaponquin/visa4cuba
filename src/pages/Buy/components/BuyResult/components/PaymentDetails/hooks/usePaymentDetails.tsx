import { useContext } from "react";
import { ShopContext } from "../../../../../../../modules/shop/context/shop-context";

export default function usePaymentDetails() {
  const { cart } = useContext(ShopContext);

  return { cart };
}
