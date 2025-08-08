import BaseTranslationPage from "../../modules/app/components/BaseTranslationPage/BaseTranslationPage";
import type { TranslationPageProps } from "../../modules/app/domain/core/translation-route";
import useTranslation from "../../modules/app/modules/language/hooks/useTranslation";
import Layout from "../../modules/shared/components/Layout/Layout";
import Faq from "./components/Faq/Faq";
import Header from "./components/Header/Header";
import How from "./components/How/How";
import Information from "./components/Information/Information";
import Stats from "./components/Stats";

export default function Insurence({ builder, language }: TranslationPageProps) {
  const { DESCRIPTION, TITLE } = useTranslation({
    TITLE: {
      es: "Seguro de viaje para Cuba - Visa4Cuba",
      en: "Travel Insurance for Cuba - Visa4Cuba",
      it: "Assicurazione di viaggio per Cuba - Visa4Cuba",
    },
    DESCRIPTION: {
      es: "Contrata tu seguro de viaje obligatorio para entrar a Cuba. Compra rápida y fácil con Visa4Cuba, con cobertura médica completa y aceptación garantizada.",
      en: "Get your mandatory travel insurance for entering Cuba. Fast and easy purchase with Visa4Cuba, offering full medical coverage and guaranteed acceptance.",
      it: "Ottieni la tua assicurazione di viaggio obbligatoria per entrare a Cuba. Acquisto facile e veloce con Visa4Cuba, con copertura medica completa e accettazione garantita.",
    },
  });

  return (
    <BaseTranslationPage language={language} builder={builder}>
      <Layout description={DESCRIPTION} title={TITLE} builder={builder}>
        <Header />
        <Information />
        <Stats />
        <How />
        <Faq />
      </Layout>
    </BaseTranslationPage>
  );
}
