import BaseTranslationPage from "../../modules/app/components/BaseTranslationPage/BaseTranslationPage";
import { APP_IMAGES } from "../../modules/app/domain/constants/app-images";
import type { TranslationPageProps } from "../../modules/app/domain/core/translation-route";
import useTranslation from "../../modules/app/modules/language/hooks/useTranslation";
import LayoutHeader from "../../modules/shared/components/Layout/components/LayoutHeader/LayoutHeader";
import Layout from "../../modules/shared/components/Layout/Layout";
import Services from "../../modules/shared/components/Services/Services";
import Faq from "./components/Faq/Faq";
import Information from "./components/Information/Information";
import Steps from "./components/Steps/Steps";
import Why from "./components/Why/Why";

export default function Home({ builder, language }: TranslationPageProps) {
  const { TITLE, DESCRIPTION, SEO_DESCRIPTION, SEO_TITLE } = useTranslation({
    TITLE: {
      es: "Visado turístico y seguro de viaje para Cuba 100% online",
      en: "Your visa for Cuba, 100% online",
      it: "Il tuo visto per Cuba, 100% online",
    },
    DESCRIPTION: {
      es: "Solicita tu visa para Cuba y contrata tu seguro médico en pocos minutos. Plataforma digital, atención 24/7 y entrega garantizada.",
      en: "Apply now for your tourist visa and mandatory insurance in just a few minutes. Our service is digital, fast, multilingual, and offers 24/7 support.",
      it: "Richiedi ora il tuo visto turistico e l’assicurazione obbligatoria in pochi minuti. Servizio digitale, rapido, multilingua e con supporto 24/7.",
    },
    SEO_TITLE: {
      es: "Visa y Seguro de Viaje para Cuba - Visa4Cuba",
      en: "Visa and Travel Insurance for Cuba - Visa4Cuba",
      it: "Visto e Assicurazione di Viaggio per Cuba - Visa4Cuba",
    },
    SEO_DESCRIPTION: {
      es: "Compra tu visado turístico y seguro de viaje obligatorio para Cuba en un solo lugar. Trámite rápido, sencillo y 100% online con Visa4Cuba.",
      en: "Get your tourist visa and mandatory travel insurance for Cuba in one place. Fast, simple, and 100% online process with Visa4Cuba.",
      it: "Acquista il tuo visto turistico e l'assicurazione di viaggio obbligatoria per Cuba in un unico sito. Procedura veloce, semplice e completamente online con Visa4Cuba.",
    },
  });

  return (
    <BaseTranslationPage language={language} builder={builder}>
      <Layout builder={builder} title={SEO_TITLE} description={SEO_DESCRIPTION}>
        <LayoutHeader
          image={APP_IMAGES.CUBA_FLAG.src}
          description={DESCRIPTION}
          title={TITLE}
        />

        <Services />
        <Steps />
        <Information />
        <Faq />
        <Why />
      </Layout>
    </BaseTranslationPage>
  );
}
