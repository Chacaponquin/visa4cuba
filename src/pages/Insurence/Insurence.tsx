import Layout from "../../modules/shared/components/Layout/Layout";
import Faq from "./components/Faq/Faq";
import Header from "./components/Header/Header";
import How from "./components/How/How";
import Information from "./components/Information/Information";

export default function Insurence() {
  return (
    <Layout>
      <Header />

      <Information />

      <How />

      <Faq />
    </Layout>
  );
}
