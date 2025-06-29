import { APP_IMAGES } from "../../modules/app/domain/constants/app-images";
import type { TranslationPageProps } from "../../modules/app/domain/core/translation-route";
import LayoutHeader from "../../modules/shared/components/Layout/components/LayoutHeader/LayoutHeader";
import Layout from "../../modules/shared/components/Layout/Layout";
import Services from "../../modules/shared/components/Services/Services";
import Faq from "./components/Faq/Faq";
import Information from "./components/Information/Information";
import Steps from "./components/Steps/Steps";
import Why from "./components/Why/Why";

export default function Home({ builder }: TranslationPageProps) {
  return (
    <Layout builder={builder}>
      <LayoutHeader
        image={APP_IMAGES.BEACH.src}
        description="Obtén tu visa turística y seguro de viaje para Cuba en minutos. Proceso 100% digital, soporte 24/7 y garantía de aprobación"
        title="Visas y Seguros para Cuba de forma rápida con"
      />

      <Services />
      <Steps />
      <Information />
      <Faq />
      <Why />
    </Layout>
  );
}
