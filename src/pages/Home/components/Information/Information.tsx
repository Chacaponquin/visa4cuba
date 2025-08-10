import { Link } from "react-router";
import { APP_IMAGES } from "../../../../modules/app/domain/constants/app-images";
import Button from "../../../../modules/app/modules/ui/components/Button/Button";
import P from "../../../../modules/app/modules/ui/components/Markdown/components/P/P";
import ImageInfoCard from "../../../../modules/shared/components/ImageInfoCard/ImageInfoCard";
import LayoutSection from "../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";
import { APP_ROUTES } from "../../../../modules/app/domain/constants/app-routes";
import useTranslation from "../../../../modules/app/modules/language/hooks/useTranslation";
import useTranslationComponent from "../../../../modules/app/modules/language/hooks/useTranslationComponent";
import { useContext } from "react";
import { LanguageContext } from "../../../../modules/app/modules/language/context/language-context";
import { TranslationRouteBuilder } from "../../../../modules/app/domain/core/translation-route-builder";

export default function Information() {
  const { language } = useContext(LanguageContext);
  const {
    TITLE,
    DESCRIPTION,
    INFO_1_TITLE,
    INFO_1_BUTTON,
    INFO_2_TITLE,
    INFO_2_BUTTON,
  } = useTranslation({
    TITLE: {
      es: "Servicios para viajar a Cuba sin preocupaciones",
      en: "What do we offer?",
      it: "Cosa offriamo?",
    },
    DESCRIPTION: {
      es: "Te ayudamos a preparar tu viaje a Cuba con visa, seguro médico y asistencia personalizada.",
      en: "Learn about our services to enjoy the best experience on your trip to Cuba.",
      it: "Scopri i nostri servizi per vivere al meglio il tuo viaggio a Cuba.",
    },
    INFO_1_TITLE: {
      es: "Visa para Cuba",
      en: "Visa for Cuba",
      it: "Visto per Cuba",
    },
    INFO_1_BUTTON: {
      es: "Conozca más sobre la visa cubana",
      en: "Learn more about the Cuban visa",
      it: "Scopri di più sul visto per Cuba",
    },
    INFO_2_TITLE: {
      es: "Seguro médico",
      en: "Health insurance",
      it: "Assicurazione sanitaria",
    },
    INFO_2_BUTTON: {
      es: "Descubre los seguros para Cuba",
      en: "Discover insurance for Cuba",
      it: "Scopri l'assicurazione per Cuba",
    },
    HEADER: {
      en: "Our Services",
      es: "Nuestros Servicios",
      it: "I nostri servizi",
    },
  });

  const { INFO_1_DESCRIPTION, INFO_2_DESCRIPTION } = useTranslationComponent({
    INFO_1_DESCRIPTION: {
      it: (
        <>
          <P>
            Richiedere il visto elettronico per Cuba è semplice e veloce: basta
            inserire nome, cognome, numero di passaporto, data di nascita e
            nazionalità.
          </P>

          <P>
            Dal 1º luglio 2025, per entrare a Cuba è obbligatorio il visto
            elettronico (eVisa), che ha sostituito definitivamente il visto
            cartaceo. Alcuni Paesi con regimi speciali richiedono un visto
            differente, mentre altri possono entrare senza visto. Verifica i
            requisiti prima di viaggiare.
          </P>
        </>
      ),
      en: (
        <>
          <P>
            Applying for an electronic visa for Cuba is quick and easy: just
            enter your first name, last name, passport number, date of birth,
            and nationality.
          </P>

          <P>
            Since 1 July 2025, entry into Cuba requires an electronic visa
            (eVisa), which has permanently replaced the paper visa. Some
            countries with special regimes require a different visa, while
            others are exempt. Check the requirements before you travel.
          </P>
        </>
      ),
      es: (
        <>
          <P>
            Solicitar la visa electrónica para Cuba es fácil y rápido: solo
            necesitas introducir tu nombre, apellidos, número de pasaporte,
            fecha de nacimiento y nacionalidad.
          </P>

          <P>
            Desde el 1 de julio de 2025, para entrar en Cuba es obligatorio
            contar con una visa electrónica (eVisa), que ha sustituido de forma
            definitiva a la visa en papel. Algunos países con regímenes
            especiales requieren un visado distinto, mientras que otros están
            exentos. Comprueba los requisitos antes de viajar.
          </P>
        </>
      ),
    },
    INFO_2_DESCRIPTION: {
      it: (
        <>
          <P>
            L’assicurazione medica è obbligatoria per entrare a Cuba, sia per
            soggiorni brevi che di lunga durata.
          </P>

          <P>
            La nostra polizza è conforme alle leggi cubane e copre tutte le
            esigenze richieste per ottenere il visto turistico.
          </P>

          <P>
            Include assistenza sanitaria, copertura bagagli e accesso alle
            cliniche convenzionate. È accettata anche da paesi come l’Unione
            Europea.
          </P>
        </>
      ),
      es: (
        <>
          <P>
            El seguro médico para Cuba es obligatorio para todos los viajeros.
            Nuestra cobertura cumple con los requisitos exigidos por el gobierno
            cubano y es válida para la entrada al país. Ofrece asistencia
            sanitaria completa, incluyendo emergencias, hospitalización y
            repatriación. Aceptado por migración y hoteles en Cuba.
          </P>
        </>
      ),
      en: (
        <>
          <P>
            Medical insurance is mandatory to enter Cuba, both for short and
            long stays.
          </P>

          <P>
            Our policy complies with Cuban laws and covers all the requirements
            needed to obtain a tourist visa.
          </P>

          <P>
            It includes medical assistance, luggage coverage, and access to
            partner clinics. It is also accepted by countries such as the
            European Union.
          </P>
        </>
      ),
    },
  });

  return (
    <LayoutSection bg="blue" title={TITLE} description={DESCRIPTION}>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-5">
        <ImageInfoCard
          title={INFO_1_TITLE}
          image={APP_IMAGES.VACATION}
          footer={
            <Link
              className="w-full"
              to={new TranslationRouteBuilder(APP_ROUTES.VISA).build(language)}
            >
              <Button color="secondary" size="lg" full className="mt-2">
                {INFO_1_BUTTON}
              </Button>
            </Link>
          }
        >
          {INFO_1_DESCRIPTION}
        </ImageInfoCard>

        <ImageInfoCard
          title={INFO_2_TITLE}
          reverse
          image={APP_IMAGES.HEALTH}
          footer={
            <Link
              className="w-full"
              to={new TranslationRouteBuilder(APP_ROUTES.INSURANCE).build(
                language
              )}
            >
              <Button color="secondary" className="mt-2" full size="lg">
                {INFO_2_BUTTON}
              </Button>
            </Link>
          }
        >
          {INFO_2_DESCRIPTION}
        </ImageInfoCard>
      </div>
    </LayoutSection>
  );
}
