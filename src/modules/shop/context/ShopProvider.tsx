import { useMemo, useState } from "react";
import type { ShopOption } from "../domain/entities/shop-option";
import Bag from "../../app/modules/icon/components/Bag";
import Safe from "../../app/modules/icon/components/Safe";
import World from "../../app/modules/icon/components/World";
import { Id } from "../../shared/domain/value-object/id";
import type { ShopCartItem } from "../domain/entities/shop-cart-item";
import { ShopContext } from "./shop-context";

const EVISA = {
  es: "Evisa Turismo",
  en: "Turist Evisa",
  it: "Evisa Turismo",
};

const ENSURENCE = {
  es: "Seguro médico",
  en: "Medical insurance",
  it: "Assicurazione medica",
};

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
        includes: [EVISA],
        price: 39,
        title: {
          en: "Basic",
          es: "Básico",
          it: "Base",
        },
        description: {
          en: "Perfect for travelers who need the essentials",
          es: "Perfecto para viajeros que necesitan lo esencial",
          it: "Perfetto per i viaggiatori che necessitano dell'essenziale",
        },
        icon: World,
        id: Id.generate(),
        selected: false,
      },
      {
        includes: [EVISA, ENSURENCE],
        price: 69,
        title: {
          en: "Standard",
          es: "Completo",
          it: "Standard",
        },
        description: {
          en: "The most popular option with additional benefits",
          es: "La opción más popular con beneficios adicionales",
          it: "L'opzione più popolare con vantaggi aggiuntivi",
        },
        icon: Safe,
        id: Id.generate(),
        selected: true,
      },
      {
        includes: [
          EVISA,
          ENSURENCE,
          {
            en: "QR Code DViajeros",
            es: "Código QR DViajeros",
            it: "Codice QR DViajeros",
          },
        ],
        price: 89,
        title: {
          en: "Premium",
          es: "Premium",
          it: "Premium",
        },
        description: {
          en: "VIP service with full personalized attention",
          es: "Servicio VIP con atención personalizada completa",
          it: "Servizio VIP con attenzione personalizzata completa",
        },
        icon: Bag,
        id: Id.generate(),
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
