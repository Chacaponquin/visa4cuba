import BaseTranslationPage from "../../modules/app/components/BaseTranslationPage/BaseTranslationPage";
import type { TranslationPageProps } from "../../modules/app/domain/core/translation-route";
import useTranslation from "../../modules/app/modules/language/hooks/useTranslation";
import Layout from "../../modules/shared/components/Layout/Layout";
import Services from "../../modules/shared/components/Services/Services";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Mission from "./components/Mission/Mission";

export default function AboutUs({ builder, language }: TranslationPageProps) {
  const { DESCRIPTION, TITLE } = useTranslation({
    TITLE: {
      es: "Contáctanos para seguros y visas en Cuba - Visa4Cuba",
      en: "Contact Us for Cuba travel insurance and visas - Visa4Cuba",
      it: "Contattaci per assicurazioni di viaggio e visti per Cuba - Visa4Cuba",
    },
    DESCRIPTION: {
      es: "¿Tienes dudas sobre tu visa o seguro para Cuba? Ponte en contacto con el equipo de Visa4Cuba. Estamos aquí para ayudarte.",
      en: "Have questions about your visa or insurance for Cuba? Get in touch with the Visa4Cuba team. We're here to help you.",
      it: "Hai domande sul visto o sull'assicurazione per Cuba? Contatta il team di Visa4Cuba. Siamo qui per aiutarti.",
    },
  });

  return (
    <BaseTranslationPage builder={builder} language={language}>
      <Layout title={TITLE} description={DESCRIPTION} builder={builder}>
        <Header />
        <Services />
        <Mission />
        <Contact />
      </Layout>
    </BaseTranslationPage>
  );
}
