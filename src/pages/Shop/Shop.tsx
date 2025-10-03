import { useEffect } from "react";
import BaseTranslationPage from "../../modules/app/components/BaseTranslationPage/BaseTranslationPage";
import type { TranslationPageProps } from "../../modules/app/domain/core/translation-route";
import useTranslation from "../../modules/app/modules/language/hooks/useTranslation";
import Layout from "../../modules/shared/components/Layout/Layout";
import CartSummary from "./components/CartSummary/CartSummary";
import ShopContent from "./components/ShopContent/ShopContent";
import ShopResult from "./components/ShopResult/ShopResult";

export default function Shop({ builder, language }: TranslationPageProps) {
  const { DESCRIPTION, TITLE } = useTranslation({
    TITLE: {
      es: "Ofertas especiales de visa y seguro de viaje para Cuba con precios competitivos - Visa4Cuba",
      en: "Special offers on Cuba travel visas and insurance with competitive prices - Visa4Cuba",
      it: "Offerte speciali per visto e assicurazione di viaggio a Cuba con prezzi vantaggiosi - Visa4Cuba",
    },
    DESCRIPTION: {
      es: "Elige entre nuestras ofertas de visado y seguro de viaje para Cuba. Añade tus productos al carrito y completa tu compra de forma rápida y segura.",
      en: "Browse our offers for visa and travel insurance to Cuba. Add products to your cart and complete your purchase quickly and securely.",
      it: "Scopri le nostre offerte per visto e assicurazione di viaggio per Cuba. Aggiungi i prodotti al carrello e completa l'acquisto in modo rapido e sicuro.",
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BaseTranslationPage language={language} builder={builder}>
      <Layout
        title={TITLE}
        description={DESCRIPTION}
        builder={builder}
        extra={<CartSummary />}
      >
        <ShopContent />
        <ShopResult />
      </Layout>
    </BaseTranslationPage>
  );
}
