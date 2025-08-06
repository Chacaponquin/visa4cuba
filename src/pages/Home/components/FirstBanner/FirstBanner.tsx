import { APP_IMAGES } from "../../../../modules/app/domain/constants/app-images";
import useTranslation from "../../../../modules/app/modules/language/hooks/useTranslation";
import Banner from "../../shared/components/Banner/Banner";

export default function FirstBanner() {
  const { TITLE, DESCRIPTION, BUTTON } = useTranslation({
    TITLE: {
      en: "Urgent Visa for Cuba?",
      es: "¿Visa urgente para Cuba?",
      it: "Visto urgente per Cuba?",
    },
    DESCRIPTION: {
      en: "We will deliver it to you in 24-48 hours + medical insurance included.",
      es: "Te lo entregamos en 24-48 horas, con seguro médico incluido.",
      it: "Te lo consegniamo in 24-48 ore, assicurazione medica inclusa.",
    },
    BUTTON: {
      en: "I want my cuban kit now!",
      it: "Voglio subito il mio kit per Cuba!",
      es: "¡Quiero mi kit para Cuba ahora!",
    },
  });

  return (
    <Banner
      button={BUTTON}
      title={TITLE}
      image={APP_IMAGES.BANNER1}
      description={DESCRIPTION}
    />
  );
}
