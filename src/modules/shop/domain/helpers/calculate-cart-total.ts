import type { ShopCartItem } from "../entities/shop-cart-item";
import { CalculateCartItemTotal } from "./calculate-cart-item-total";

export class CalculateCartTotal {
  static execute(cart: ShopCartItem[]): number {
    let sum = 0;

    for (const c of cart) {
      sum += CalculateCartItemTotal.execute(c);
    }

    return sum;
  }
}
