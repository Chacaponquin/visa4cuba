import type { ShopCartItem } from "../entities/shop-cart-item";
import { CalculateCartItemSubTotal } from "./calculate-cart-item-subtotal";

export class CalculateCartItemTotal {
  static execute(item: ShopCartItem): number {
    return CalculateCartItemSubTotal.execute(item);
  }
}
