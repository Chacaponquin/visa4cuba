import Layout from "../../modules/shared/components/Layout/Layout";
import Header from "./components/Header/Header";
import Mission from "./components/Mission/Mission";
import Services from "./components/Services/Services";
import Why from "./components/Why/Why";
import Steps from "./components/Steps/Steps";

export default function AboutUs() {
  return (
    <Layout>
      <Header />
      <Services />
      <Mission />
      <Steps />
      <Why />
    </Layout>
  );
}
