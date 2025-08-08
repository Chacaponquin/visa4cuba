import { APP_IMAGES } from "../../../../modules/app/domain/constants/app-images";
import useTranslation from "../../../../modules/app/modules/language/hooks/useTranslation";
import LayoutHeader from "../../../../modules/shared/components/Layout/components/LayoutHeader/LayoutHeader";

export default function Header() {
  const { TITLE, DESCRIPTION } = useTranslation({
    TITLE: {
      en: "Get total peace of mind with us",
      es: "Obtén total tranquilidad con nosotros",
      it: "Ottieni la massima tranquillità con noi",
    },
    DESCRIPTION: {
      en: "Protect your trip to Cuba with our specialized insurance. Comprehensive medical coverage, 24/7 assistance, and the best care so you can enjoy your experience worry-free.",
      es: "Protege tu viaje a Cuba con nuestro seguro especializado. Cobertura médica completa, asistencia 24/7 y la mejor atención para que disfrutes tu experiencia sin preocupaciones.",
      it: "Proteggi il tuo viaggio a Cuba con la nostra assicurazione specializzata. Copertura medica completa, assistenza 24/7 e la migliore cura per goderti l’esperienza senza preoccupazioni.",
    },
  });

  return (
    <LayoutHeader
      image={APP_IMAGES.VISA_PRESENTATION.src}
      title={TITLE}
      description={DESCRIPTION}
    ></LayoutHeader>
  );
}
