import { Link } from "react-router";
import { APP_IMAGES } from "../../../../modules/app/domain/constants/app-images";
import ArrowButton from "../../../../modules/app/modules/ui/components/ArrowButton/ArrowButton";
import LayoutHeader from "../../../../modules/shared/components/Layout/components/LayoutHeader/LayoutHeader";
import { APP_ROUTES } from "../../../../modules/app/domain/constants/app-routes";
import useTranslation from "../../../../modules/app/modules/language/hooks/useTranslation";

export default function Header() {
  const { TITLE, DESCRIPTION, BUTTON } = useTranslation({
    TITLE: {
      es: "Obten total tranquilidad con",
      en: "Get total peace of mind with",
      it: "Ottieni totale tranquillità con",
    },
    DESCRIPTION: {
      es: "Protege tu viaje a Cuba con nuestros seguros especializados. Cobertura médica completa, asistencia 24/7 y la mejor atención para que disfrutes tu experiencia sin preocupaciones.",
      en: "Protect your trip to Cuba with our specialized insurance. Comprehensive medical coverage, 24/7 assistance, and the best care so you can enjoy your experience worry-free.",
      it: "Proteggi il tuo viaggio a Cuba con la nostra assicurazione specializzata. Copertura medica completa, assistenza 24/7 e la migliore assistenza per goderti la tua esperienza senza preoccupazioni.",
    },
    BUTTON: {
      es: "Compra tu seguro",
      en: "Buy your insurance",
      it: "Acquista la tua assicurazione",
    },
  });

  return (
    <LayoutHeader
      image={APP_IMAGES.HEALTH.src}
      description={DESCRIPTION}
      title={TITLE}
    >
      <Link to={APP_ROUTES.SHOP}>
        <ArrowButton>{BUTTON}</ArrowButton>
      </Link>
    </LayoutHeader>
  );
}
