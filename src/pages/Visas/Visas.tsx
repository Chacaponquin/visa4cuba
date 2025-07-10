import BaseTranslationPage from "../../modules/app/components/BaseTranslationPage/BaseTranslationPage";
import type { TranslationPageProps } from "../../modules/app/domain/core/translation-route";
import Layout from "../../modules/shared/components/Layout/Layout";
import About from "./components/About/About";
import Faq from "./components/Faq/Faq";
import Header from "./components/Header/Header";
import How from "./components/How/How";

export default function Visas({ builder, language }: TranslationPageProps) {
  return (
    <BaseTranslationPage builder={builder} language={language}>
      <Layout builder={builder}>
        <Header />
        <About />
        <Faq />
        <How />
      </Layout>
    </BaseTranslationPage>
  );
}
