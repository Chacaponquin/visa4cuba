import Card from "../../../../../modules/app/modules/icon/components/Card";
import Safe from "../../../../../modules/app/modules/icon/components/Safe";
import type { ShopHeaderCard } from "../domain/shop-header-card";

const sections: ShopHeaderCard[] = [
  {
    title: {
      es: "Tarjeta turística",
      en: "Tourist card",
      it: "Carta turistica",
    },
    icon: Card,
    color: "primary",
    description: {
      es: "Si viajas desde cualquier país necesitarás una Tarjeta Verde de Turista",
      en: "If you are traveling from any country you will need a Tourist Green Card",
      it: "Se viaggi da qualsiasi paese avrai bisogno di una Carta Verde Turistica",
    },
  },
  {
    title: {
      es: "Seguro médico de viaje",
      en: "Travel medical insurance",
      it: "Assicurazione medica di viaggio",
    },
    description: {
      es: "Para ingresar a Cuba, además de la visa, necesita un seguro médico de viaje, si no tiene, le recomendamos que lo compre junto con su visa",
      en: "To enter Cuba, in addition to a visa, you need travel medical insurance. If you do not have one, we recommend that you purchase it along with your visa.",
      it: "Per entrare a Cuba, oltre al visto, è necessaria un'assicurazione sanitaria di viaggio. Se non ne possiedi uno, ti consigliamo di acquistarlo insieme al visto.",
    },
    icon: Safe,
    color: "secondary",
  },
];

export default function useShopHeader() {
  return { sections };
}
