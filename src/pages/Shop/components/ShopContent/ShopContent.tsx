import useTranslation from "../../../../modules/app/modules/language/hooks/useTranslation";
import ShopSection from "../../shared/components/ShopSection/ShopSection";
import ShopCard from "./components/ShopCard/ShopCard";
import useShopContent from "./hooks/useShopContent";

export default function ShopContent() {
  const { options } = useShopContent();

  const { TITLE, DESCRIPTION, HEADER } = useTranslation({
    TITLE: {
      es: "Elige la solución que prefieras",
      en: "Choose the solution you prefer",
      it: "Scegli la soluzione che preferisci",
    },
    DESCRIPTION: {
      es: "Obtén tu visa y seguro de viaje para Cuba de forma rápida y seguro. Procesamiento en línea con entrega a domicilio.",
      en: "Get your visa and travel insurance for Cuba quickly and securely. Online processing with home delivery.",
      it: "Ottieni il visto e l'assicurazione di viaggio per Cuba in modo rapido e sicuro. Elaborazione online con consegna a domicilio.",
    },
    HEADER: { es: "Precios", en: "Prices", it: "Prezzi" },
  });

  return (
    <ShopSection header={HEADER} title={TITLE} description={DESCRIPTION}>
      <div className="w-full mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
        {options.map((card, i) => (
          <ShopCard icon={card.icon} key={i} card={card} />
        ))}
      </div>
    </ShopSection>
  );
}
