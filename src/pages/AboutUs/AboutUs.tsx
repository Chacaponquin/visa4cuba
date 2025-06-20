import Layout from "../../modules/shared/components/Layout/Layout";
import Header from "./components/Header/Header";
import Mission from "./components/Mission/Mission";
import Services from "./components/Services/Services";

export default function AboutUs() {
  return (
    <Layout>
      <Header />
      <Services />
      <Mission />
    </Layout>
  );
}
