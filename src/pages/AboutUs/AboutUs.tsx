import BaseTranslationPage from "../../modules/app/components/BaseTranslationPage/BaseTranslationPage";
import type { TranslationPageProps } from "../../modules/app/domain/core/translation-route";
import Layout from "../../modules/shared/components/Layout/Layout";
import Services from "../../modules/shared/components/Services/Services";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Mission from "./components/Mission/Mission";

export default function AboutUs({ builder, language }: TranslationPageProps) {
  return (
    <BaseTranslationPage builder={builder} language={language}>
      <Layout builder={builder}>
        <Header />
        <Services />
        <Mission />
        <Contact />
      </Layout>
    </BaseTranslationPage>
  );
}
