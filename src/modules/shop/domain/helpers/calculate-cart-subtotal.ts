import type { ShopCartItem } from "../entities/shop-cart-item";
import { CalculateCartItemSubTotal } from "./calculate-cart-item-subtotal";

export class CalculateCartSubTotal {
  static execute(cart: ShopCartItem[]): number {
    let sum = 0;

    for (const c of cart) {
      sum += CalculateCartItemSubTotal.execute(c);
    }

    return sum;
  }
}
