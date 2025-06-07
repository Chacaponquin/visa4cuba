import type { ShopCartItem } from "../entities/shop-cart-item";
import { CalculateCartItemSend } from "./calculate-cart-item-send";

export class CalculateCartSend {
  static execute(cart: ShopCartItem[]): number {
    let sum = 0;

    cart.forEach(() => {
      sum += CalculateCartItemSend.execute();
    });

    return sum;
  }
}
