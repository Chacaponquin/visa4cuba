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
  options: [] as ShopCartItem[],
  cart: [] as ShopOption[],
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
        includes: [
          {
            en: "Tourist visa processing",
            es: "Procesamiento de visa turística",
            it: "Elaborazione del visto turistico",
          },
          {
            en: "Basic medical insurance",
            es: "Seguro médico básico",
            it: "Assicurazione medica di base",
          },
          {
            en: "Standard documentation",
            es: "Documentación estándar",
            it: "Documentazione standard",
          },
          {
            en: "Email support",
            es: "Soporte por email",
            it: "Supporto via email",
          },
          {
            en: "Processing time: 7-10 days",
            es: "Tiempo de procesamiento: 7-10 días",
            it: "Tempo di elaborazione: 7-10 giorni",
          },
          {
            en: "1 document review",
            es: "1 revisión de documentos",
            it: "1 revisione dei documenti",
          },
        ],
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
        includes: [
          {
            en: "Tourist visa processing",
            es: "Procesamiento de visa turística",
            it: "Elaborazione del visto turistico",
          },
          {
            en: "Comprehensive medical insurance",
            es: "Seguro médico completo",
            it: "Assicurazione medica completa",
          },
          {
            en: "Premium documentation",
            es: "Documentación premium",
            it: "Documentazione premium",
          },
          {
            en: "Phone and email support",
            es: "Soporte telefónico y email",
            it: "Supporto telefonico ed email",
          },
          {
            en: "Processing time: 5-7 days",
            es: "Tiempo de procesamiento: 5-7 días",
            it: "Tempo di elaborazione: 5-7 giorni",
          },
          {
            en: "Assistance with hotel bookings",
            es: "Asistencia para reservas de hotel",
            it: "Assistenza per prenotazioni alberghiere",
          },
          {
            en: "Digital travel guide",
            es: "Guía de viaje digital",
            it: "Guida di viaggio digitale",
          },
        ],
        price: 69,
        title: {
          en: "Complete",
          es: "Completo",
          it: "Completo",
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
          {
            en: "Tourist visa processing",
            es: "Procesamiento de visa turística",
            it: "Elaborazione del visto turistico",
          },
          {
            en: "Premium medical insurance",
            es: "Seguro médico premium",
            it: "Assicurazione medica premium",
          },
          {
            en: "VIP documentation",
            es: "Documentación VIP",
            it: "Documentazione VIP",
          },
          {
            en: "24/7 multichannel support",
            es: "Soporte 24/7 multicanal",
            it: "Supporto multicanale 24/7",
          },
          {
            en: "Processing time: 3-5 days",
            es: "Tiempo de procesamiento: 3-5 días",
            it: "Tempo di elaborazione: 3-5 giorni",
          },
          {
            en: "Unlimited reviews",
            es: "Revisiones ilimitadas",
            it: "Revisioni illimitate",
          },
          {
            en: "Full travel assistance",
            es: "Asistencia completa de viaje",
            it: "Assistenza completa per il viaggio",
          },
          {
            en: "Dedicated personal manager",
            es: "Gestor personal asignado",
            it: "Manager personale dedicato",
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
