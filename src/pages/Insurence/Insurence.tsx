import type { TranslationPageProps } from "../../modules/app/domain/core/translation-route";
import Layout from "../../modules/shared/components/Layout/Layout";
import Faq from "./components/Faq/Faq";
import Header from "./components/Header/Header";
import How from "./components/How/How";
import Information from "./components/Information/Information";

export default function Insurence({ builder }: TranslationPageProps) {
  return (
    <Layout builder={builder}>
      <Header />

      <Information />

      <How />

      <Faq />
    </Layout>
  );
}
