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
  const { TITLE, DESCRIPTION } = useTranslation({
    TITLE: {
      es: "Visas y Seguros para Cuba de forma rápida con",
      en: "Visas and Insurance for Cuba quickly with",
      it: "Visti e assicurazione per Cuba rapidamente con",
    },
    DESCRIPTION: {
      es: "Obtén tu visa turística y seguro de viaje para Cuba en minutos. Proceso 100% digital, soporte 24/7 y garantía de aprobación",
      en: "Get your tourist visa and travel insurance for Cuba in minutes. 100% digital process, 24/7 support, and approval guaranteed.",
      it: "Ottieni il visto turistico e l'assicurazione di viaggio per Cuba in pochi minuti. Processo digitale al 100%, assistenza 24 ore su 24, 7 giorni su 7 e approvazione garantita.",
    },
  });

  return (
    <BaseTranslationPage language={language} builder={builder}>
      <Layout builder={builder}>
        <LayoutHeader
          image={APP_IMAGES.BEACH.src}
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
