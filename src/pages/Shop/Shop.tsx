import { useEffect } from "react";
import BaseTranslationPage from "../../modules/app/components/BaseTranslationPage/BaseTranslationPage";
import type { TranslationPageProps } from "../../modules/app/domain/core/translation-route";
import useTranslation from "../../modules/app/modules/language/hooks/useTranslation";
import Layout from "../../modules/shared/components/Layout/Layout";
import CartSummary from "./components/CartSummary/CartSummary";
import Header from "./components/Header/Header";
import ShopContent from "./components/ShopContent/ShopContent";
import ShopResult from "./components/ShopResult/ShopResult";

export default function Shop({ builder, language }: TranslationPageProps) {
  const { DESCRIPTION, TITLE } = useTranslation({
    TITLE: {
      es: "Ofertas de Visa y Seguro para Cuba - Visa4Cuba",
      en: "Visa and Insurance Offers for Cuba - Visa4Cuba",
      it: "Offerte per Visto e Assicurazione per Cuba - Visa4Cuba",
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
        <Header />
        <ShopContent />
        <ShopResult />
      </Layout>
    </BaseTranslationPage>
  );
}
