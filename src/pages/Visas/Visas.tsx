import { useEffect } from "react";
import BaseTranslationPage from "../../modules/app/components/BaseTranslationPage/BaseTranslationPage";
import type { TranslationPageProps } from "../../modules/app/domain/core/translation-route";
import useTranslation from "../../modules/app/modules/language/hooks/useTranslation";
import Layout from "../../modules/shared/components/Layout/Layout";
import About from "./components/About/About";
import Faq from "./components/Faq/Faq";
import Header from "./components/Header/Header";
import How from "./components/How/How";
import Stats from "./components/Stats/Stats";

export default function Visas({ builder, language }: TranslationPageProps) {
  const { DESCRIPTION, TITLE } = useTranslation({
    TITLE: {
      es: "Visado turístico para Cuba con solicitud online fácil y rápida - Visa4Cuba",
      en: "Tourist visa for Cuba with fast and easy online application process - Visa4Cuba",
      it: "Visto turistico per Cuba con richiesta online semplice e veloce - Visa4Cuba",
    },
    DESCRIPTION: {
      es: "Solicita tu visado turístico para viajar a Cuba de forma rápida y segura con Visa4Cuba. Tramitamos tu visa sin complicaciones y con envío garantizado.",
      en: "Apply for your tourist visa to travel to Cuba quickly and safely with Visa4Cuba. We handle your visa hassle-free with guaranteed delivery.",
      it: "Richiedi il tuo visto turistico per viaggiare a Cuba in modo rapido e sicuro con Visa4Cuba. Ci occupiamo della tua richiesta senza complicazioni e con spedizione garantita.",
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BaseTranslationPage builder={builder} language={language}>
      <Layout description={DESCRIPTION} title={TITLE} builder={builder}>
        <Header />
        <About />
        <Stats />
        <How />
        <Faq />
      </Layout>
    </BaseTranslationPage>
  );
}
