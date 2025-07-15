import { Link } from "react-router";
import { APP_ROUTES } from "../../../../modules/app/domain/constants/app-routes";
import LayoutHeader from "../../../../modules/shared/components/Layout/components/LayoutHeader/LayoutHeader";
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
      es: "Descubre Cuba con",
      en: "Discover Cuba with",
      it: "Scopri Cuba con",
    },
    DESCRIPTION: {
      it: "Siamo un'agenzia di viaggi specializzata nella creazione di esperienze uniche e indimenticabili nella splendida isola di Cuba. Con oltre 10 anni di esperienza, ti aiutiamo a scoprire l'autentica cultura, storia e bellezza cubana.",
      es: "Somos una agencia de viajes especializada en crear experiencias únicas e inolvidables en la hermosa isla de Cuba. Con más de 10 años de experiencia, te ayudamos a descubrir la auténtica cultura, historia y belleza cubana.",
      en: "We are a travel agency specializing in creating unique and unforgettable experiences on the beautiful island of Cuba. With over 10 years of experience, we help you discover authentic Cuban culture, history, and beauty.",
    },
    BUTTON: {
      es: "Panifica tu viaje",
      en: "Plan your trip",
      it: "Pianifica il tuo viaggio",
    },
  });

  return (
    <LayoutHeader
      image={APP_IMAGES.CUBA_1.src}
      title={TITLE}
      description={DESCRIPTION}
    >
      <Link to={new TranslationRouteBuilder(APP_ROUTES.SHOP).build(language)}>
        <ArrowButton>{BUTTON}</ArrowButton>
      </Link>
    </LayoutHeader>
  );
}
