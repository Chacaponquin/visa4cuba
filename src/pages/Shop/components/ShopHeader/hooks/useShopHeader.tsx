import Card from "../../../../../modules/app/modules/icon/components/Card";
import Safe from "../../../../../modules/app/modules/icon/components/Safe";
import type { ShopHeaderCard } from "../domain/shop-header-card";

export default function useShopHeader() {
  const sections: ShopHeaderCard[] = [
    {
      title: "Tarjeta turística",
      icon: Card,
      color: "primary",
      description:
        "Si viajas desde cualquier país necesitarás una Tarjeta Verde de Turista",
    },
    {
      title: "Seguro médico de viaje",
      description:
        "Para ingresar a Cuba, además de la visa, necesita un seguro médico de viaje, si no tiene, le recomendamos que lo compre junto con su visa",
      icon: Safe,
      color: "secondary",
    },
  ];

  return { sections };
}
