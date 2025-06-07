import type { ShopCartItem } from "../entities/shop-cart-item";

export class CalculateCartItemSubTotal {
  static execute(item: ShopCartItem): number {
    return item.count * item.option.price;
  }
}
