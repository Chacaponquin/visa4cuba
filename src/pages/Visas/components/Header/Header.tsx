import { Link } from "react-router";
import LayoutHeader from "../../../../modules/shared/components/Layout/components/LayoutHeader/LayoutHeader";
import { APP_ROUTES } from "../../../../modules/app/domain/constants/app-routes";
import ArrowButton from "../../../../modules/app/modules/ui/components/ArrowButton/ArrowButton";
import { APP_IMAGES } from "../../../../modules/app/domain/constants/app-images";
import useTranslation from "../../../../modules/app/modules/language/hooks/useTranslation";
import { useContext } from "react";
import { LanguageContext } from "../../../../modules/app/modules/language/context/language-context";
import { TranslationRouteBuilder } from "../../../../modules/app/domain/core/translation-route-builder";

export default function Header() {
  const { language } = useContext(LanguageContext);

  const { TITLE, DESCRIPTION, BUTTON } = useTranslation({
    TITLE: {
      es: "Obten tu visa de forma segura",
      en: "Get your visa safely",
      it: "Richiedi il tuo visto in modo sicuro",
    },
    DESCRIPTION: {
      es: "Obtén tu visa para Cuba de manera fácil y confiable. Procesamos todos los tipos de visas con la mejor atención personalizada y tiempos de entrega garantizados.",
      en: "Get your visa for Cuba easily and reliably. We process all types of visas with the best personalized service and guaranteed delivery times.",
      it: "Ottieni il tuo visto per Cuba in modo semplice e affidabile. Elaboriamo tutti i tipi di visti con il miglior servizio personalizzato e tempi di consegna garantiti.",
    },
    BUTTON: {
      es: "Solicita tu visa",
      en: "Request your visa",
      it: "Richiedi il tuo visto",
    },
  });

  return (
    <LayoutHeader
      image={APP_IMAGES.CUBA_2.src}
      description={DESCRIPTION}
      title={TITLE}
      sideImage={APP_IMAGES.PASSPORTS}
    >
      <Link to={new TranslationRouteBuilder(APP_ROUTES.SHOP).build(language)}>
        <ArrowButton>{BUTTON}</ArrowButton>
      </Link>
    </LayoutHeader>
  );
}
