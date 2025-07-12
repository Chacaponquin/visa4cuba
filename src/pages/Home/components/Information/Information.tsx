import { Link } from "react-router";
import { APP_IMAGES } from "../../../../modules/app/domain/constants/app-images";
import Button from "../../../../modules/app/modules/ui/components/Button/Button";
import P from "../../../../modules/app/modules/ui/components/Markdown/components/P/P";
import ImageInfoCard from "../../../../modules/shared/components/ImageInfoCard/ImageInfoCard";
import LayoutSection from "../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";
import { APP_ROUTES } from "../../../../modules/app/domain/constants/app-routes";
import useTranslation from "../../../../modules/app/modules/language/hooks/useTranslation";

export default function Information() {
  const {
    TITLE,
    DESCRIPTION,
    INFO_1_TITLE,
    INFO_1_DESCRIPTION,
    INFO_1_BUTTON,
    INFO_2_TITLE,
    INFO_2_DESCRIPTION_1,
    INFO_2_DESCRIPTION_2,
    INFO_2_BUTTON,
  } = useTranslation({
    TITLE: {
      es: "¿Qué ofrecemos?",
      en: "What do we offer?",
      it: "Cosa offriamo?",
    },
    DESCRIPTION: {
      es: "Conoce nuestros servicios para tener la mejor experiencia en tu viaje a Cuba",
      en: "Learn about our services to enjoy the best experience on your trip to Cuba.",
      it: "Scopri i nostri servizi per vivere al meglio il tuo viaggio a Cuba.",
    },
    INFO_1_TITLE: {
      es: "Visa para Cuba",
      en: "Visa for Cuba",
      it: "Visto per Cuba",
    },
    INFO_1_DESCRIPTION: {
      es: "La compilación del visado para Cuba es simple: debes introducir nombre, apellido, número de pasaporte, fecha de nacimiento y nacionalidad. La tarjeta es de color verde para todos los turistas, incluidos los ciudadanos italianos y europeos. Son una excepción los países con régimen especial que necesitan un real visado turístico y algunos países cuyos residentes pueden entrar en Cuba sin VISA también.",
      en: "Completing a visa for Cuba is simple: you must enter your first name, last name, passport number, date of birth, and nationality. The card is green for all tourists, including Italian and European citizens. Exceptions are countries with special tourist visa regimes that require a tourist visa, and some countries whose residents can enter Cuba without a visa.",
      it: "Compilare la domanda di visto per Cuba è semplice: devi inserire nome, cognome, numero di passaporto, data di nascita e nazionalità. La tessera è verde per tutti i turisti, compresi i cittadini italiani ed europei. Fanno eccezione i Paesi con regimi speciali che richiedono un visto turistico e alcuni Paesi i cui residenti possono entrare a Cuba anche senza visto.",
    },
    INFO_1_BUTTON: {
      es: "Saber más sobre visas a Cuba",
      en: "Learn more about visas to Cuba",
      it: "Scopri di più sui visti per Cuba",
    },
    INFO_2_TITLE: {
      es: "Seguro médico",
      en: "Health insurance",
      it: "Assicurazione sanitaria",
    },
    INFO_2_DESCRIPTION_1: {
      es: "Destinados a personas que viajan hacia Cuba, incluyendo aquellas que de forma temporal o a más largo plazo permanecen en el país.",
      en: "Intended for people traveling to Cuba, including those staying in the country temporarily or for a longer period of time.",
      it: "Destinato a chi viaggia a Cuba, compresi coloro che soggiornano nel Paese temporaneamente o per un periodo di tempo più lungo.",
    },
    INFO_2_DESCRIPTION_2: {
      es: "Nuestro seguro satisface las regulaciones actuales del país sobre la entrada de viajeros y la estancia de extranjeros en el territorio nacional y cumplimentan los requerimientos de visado de los diferentes países incluyendo la Unión Europea.",
      en: "Our insurance complies with the country's current regulations regarding the entry of travelers and the stay of foreigners in the country and meets the visa requirements of various countries, including the European Union.",
      it: "La nostra assicurazione è conforme alle normative vigenti nel Paese in merito all'ingresso dei viaggiatori e al soggiorno degli stranieri nel Paese e soddisfa i requisiti di visto di vari Paesi, tra cui l'Unione Europea.",
    },
    INFO_2_BUTTON: {
      es: "Descubre los seguros para Cuba",
      en: "Discover insurance for Cuba",
      it: "Scopri l'assicurazione per Cuba",
    },
  });

  return (
    <LayoutSection title={TITLE} description={DESCRIPTION}>
      <ImageInfoCard title={INFO_1_TITLE} image={APP_IMAGES.CUBA_1}>
        <P>{INFO_1_DESCRIPTION}</P>

        <Link to={APP_ROUTES.VISA}>
          <Button color="secondary" size="lg" className="mt-5">
            {INFO_1_BUTTON}
          </Button>
        </Link>
      </ImageInfoCard>

      <ImageInfoCard title={INFO_2_TITLE} reverse image={APP_IMAGES.HEALTH}>
        <P>{INFO_2_DESCRIPTION_1}</P>

        <P>{INFO_2_DESCRIPTION_2}</P>

        <Link to={APP_ROUTES.INSURANCE}>
          <Button color="secondary" className="mt-5" size="lg">
            {INFO_2_BUTTON}
          </Button>
        </Link>
      </ImageInfoCard>
    </LayoutSection>
  );
}
