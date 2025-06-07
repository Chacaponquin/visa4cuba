import { createContext, useMemo, useState } from "react";
import type { ShopOption, ShopSection } from "../domain/entities/shop-option";
import Bag from "../../app/modules/icon/components/Bag";
import Safe from "../../app/modules/icon/components/Safe";
import World from "../../app/modules/icon/components/World";
import { Id } from "../../shared/domain/value-object/id";
import type { ShopCartItem } from "../domain/entities/shop-cart-item";

interface Props {
  cart: ShopCartItem[];
  options: ShopSection[];
  handleDeleteItem: (id: string) => void;
  handleDecreaseItem: (id: string) => void;
  handleIncreaseItem: (id: string) => void;
  handleAddItem: (option: ShopOption, count: number) => void;
}

export const ShopContext = createContext<Props>({
  options: [],
  cart: [],
} as unknown as Props);

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<ShopCartItem[]>([]);

  function handleDeleteItem(id: string) {
    setCart((prev) => prev.filter((s) => s.option.id !== id));
  }

  function handleAddItem(option: ShopOption, count: number) {
    const found = cart.find((i) => i.option.id === option.id);

    if (found) {
      setCart((prev) =>
        prev.map((p) => {
          if (found.option.id === p.option.id) {
            return { ...p, count: p.count + count };
          }

          return p;
        })
      );
    } else {
      setCart((prev) => [...prev, { option: option, count: count }]);
    }
  }

  function handleDecreaseItem(id: string) {
    setCart((prev) =>
      prev.map((p) => {
        if (p.option.id === id) {
          return { ...p, count: p.count - 1 };
        }

        return p;
      })
    );
  }

  function handleIncreaseItem(id: string) {
    setCart((prev) =>
      prev.map((p) => {
        if (p.option.id === id) {
          return { ...p, count: p.count + 1 };
        }

        return p;
      })
    );
  }

  const options = useMemo<ShopSection[]>(() => {
    const result: ShopSection[] = [
      {
        title: "Solo Tarjeta Turística",
        icon: World,
        options: Array.from({ length: 2 }).map(() => {
          return {
            description: "Para viajes de turismo",
            includes: ["Emergencias", "Escala técnica"],
            price: 25,
            title: "Visa Turística",
            id: Id.generate(),
            icon: World,
          };
        }),
      },
      {
        title: "Solo Seguro de Viaje",
        icon: Safe,
        options: Array.from({ length: 3 }).map(() => {
          return {
            description: "Para viajes de turismo",
            includes: ["Emergencias", "Escala técnica"],
            price: 25,
            title: "Seguro de viaje",
            id: Id.generate(),
            icon: Safe,
          };
        }),
      },
      {
        title: "Tarjeta turística + Seguro de viaje (Oferta Especial)",
        icon: Bag,
        options: Array.from({ length: 3 }).map(() => {
          return {
            description: "Para viajes de turismo",
            includes: ["Emergencias", "Escala técnica"],
            price: 25,
            title: "Visa de turista + Seguro de viaje",
            id: Id.generate(),
            icon: Bag,
          };
        }),
      },
    ];

    return result;
  }, []);

  return (
    <ShopContext.Provider
      value={{
        options: options,
        cart: cart,
        handleDeleteItem: handleDeleteItem,
        handleAddItem: handleAddItem,
        handleDecreaseItem: handleDecreaseItem,
        handleIncreaseItem: handleIncreaseItem,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
