import { createContext } from "react";
import type { ShopCartItem } from "../domain/entities/shop-cart-item";
import type { ShopOption } from "../domain/entities/shop-option";

export interface ShopContextProps {
  cart: ShopCartItem[];
  options: ShopOption[];
  handleDeleteItem: (id: string) => void;
  handleDecreaseItem: (id: string) => void;
  handleIncreaseItem: (id: string) => void;
  handleAddItem: (option: ShopOption, count: number) => void;
}

export const ShopContext = createContext<ShopContextProps>({
  options: [] as ShopCartItem[],
  cart: [] as ShopOption[],
} as unknown as ShopContextProps);
