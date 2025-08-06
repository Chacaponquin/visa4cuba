import { APP_IMAGES } from "../../../../modules/app/domain/constants/app-images";
import useTranslation from "../../../../modules/app/modules/language/hooks/useTranslation";
import Banner from "../../shared/components/Banner/Banner";

export default function SecondBanner() {
  const { BUTTON, TITLE, DESCRIPTION } = useTranslation({
    TITLE: {
      en: "Let’s Discuss & Start Visa Consultations",
      it: "Parliamone e iniziamo la consulenza per il visto",
      es: "Hablemos y comencemos la asesoría para la visa",
    },
    BUTTON: { en: "Lets Get Started", es: "Empecemos", it: "Iniziamo" },
    DESCRIPTION: {
      es: "Te ayudamos a obtener tu visa y seguro médico para Cuba, fácil y rápido.",
      en: "Ti aiutiamo a ottenere visto e assicurazione per Cuba, facile e veloce.",
      it: "We help you get your visa and insurance for Cuba, fast and easy.",
    },
  });

  return (
    <Banner
      button={BUTTON}
      title={TITLE}
      image={APP_IMAGES.BANNER2}
      description={DESCRIPTION}
    />
  );
}
