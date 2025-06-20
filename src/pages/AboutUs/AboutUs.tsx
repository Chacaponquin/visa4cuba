import Layout from "../../modules/shared/components/Layout/Layout";
import Services from "../../modules/shared/components/Services/Services";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Mission from "./components/Mission/Mission";

export default function AboutUs() {
  return (
    <Layout>
      <Header />
      <Services />
      <Mission />
      <Contact />
    </Layout>
  );
}
