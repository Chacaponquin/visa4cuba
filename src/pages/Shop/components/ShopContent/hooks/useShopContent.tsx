import type { ShopCardSection } from "../../../domain/shop-card";
import World from "../../../../../modules/app/modules/icon/components/World";
import Safe from "../../../../../modules/app/modules/icon/components/Safe";
import Bag from "../../../../../modules/app/modules/icon/components/Bag";

export default function useShopContent() {
  const sections: ShopCardSection[] = [
    {
      title: "Solo Tarjeta Turística",
      icon: World,
      cards: Array.from({ length: 2 }).map(() => {
        return {
          description: "Para viajes de turismo",
          includes: ["Emergencias", "Escala técnica"],
          price: 25,
          title: "Visa Turística",
        };
      }),
    },
    {
      title: "Solo Seguro de Viaje",
      icon: Safe,
      cards: Array.from({ length: 3 }).map(() => {
        return {
          description: "Para viajes de turismo",
          includes: ["Emergencias", "Escala técnica"],
          price: 25,
          title: "Seguro de viaje",
        };
      }),
    },
    {
      title: "Tarjeta turística + Seguro de viaje (Oferta Especial)",
      icon: Bag,
      cards: Array.from({ length: 3 }).map(() => {
        return {
          description: "Para viajes de turismo",
          includes: ["Emergencias", "Escala técnica"],
          price: 25,
          title: "Visa de turista + Seguro de viaje",
        };
      }),
    },
  ];

  return { sections };
}
