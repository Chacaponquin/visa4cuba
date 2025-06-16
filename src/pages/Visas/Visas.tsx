import Layout from "../../modules/shared/components/Layout/Layout";
import About from "./components/About/About";
import Faq from "./components/Faq/Faq";
import Header from "./components/Header/Header";
import How from "./components/How/How";

export default function Visas() {
  return (
    <Layout>
      <Header />
      <About />
      <Faq />
      <How />
    </Layout>
  );
}
