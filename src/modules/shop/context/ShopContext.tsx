import { createContext, useMemo, useState } from "react";
import type { ShopOption } from "../domain/entities/shop-option";
import Bag from "../../app/modules/icon/components/Bag";
import Safe from "../../app/modules/icon/components/Safe";
import World from "../../app/modules/icon/components/World";
import { Id } from "../../shared/domain/value-object/id";
import type { ShopCartItem } from "../domain/entities/shop-cart-item";

interface Props {
  cart: ShopCartItem[];
  options: ShopOption[];
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

  const options = useMemo<ShopOption[]>(() => {
    const result: ShopOption[] = [
      {
        description: "Perfecto para viajeros que necesitan lo esencial",
        icon: World,
        id: Id.generate(),
        includes: [
          "Procesamiento de visa turística",
          "Seguro médico básico",
          "Documentación estándar",
          "Soporte por email",
          "Tiempo de procesamiento: 7-10 días",
          "1 revisión de documentos",
        ],
        price: 39,
        title: "Básico",
        selected: false,
      },
      {
        description: "La opción más popular con beneficios adicionales",
        icon: Safe,
        id: Id.generate(),
        includes: [
          "Procesamiento de visa turística",
          "Seguro médico completo",
          "Documentación premium",
          "Soporte telefónico y email",
          "Tiempo de procesamiento: 5-7 días",
          "Asistencia para reservas de hotel",
          "Guía de viaje digital",
        ],
        price: 69,
        title: "Completo",
        selected: true,
      },
      {
        description: "Servicio VIP con atención personalizada completa",
        icon: Bag,
        id: Id.generate(),
        includes: [
          "Procesamiento de visa turística",
          "Seguro médico premium",
          "Documentación VIP",
          "Soporte 24/7 multicanal",
          "Tiempo de procesamiento: 3-5 días",
          "Revisiones ilimitadas",
          "Asistencia completa de viaje",
          "Gestor personal asignado",
        ],
        price: 89,
        title: "Premium",
        selected: false,
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
