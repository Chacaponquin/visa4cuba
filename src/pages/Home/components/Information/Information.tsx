import { Link } from "react-router";
import { APP_IMAGES } from "../../../../modules/app/domain/constants/app-images";
import Button from "../../../../modules/app/modules/ui/components/Button/Button";
import P from "../../../../modules/app/modules/ui/components/Markdown/components/P/P";
import ImageInfoCard from "../../../../modules/shared/components/ImageInfoCard/ImageInfoCard";
import LayoutSection from "../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";
import { APP_ROUTES } from "../../../../modules/app/domain/constants/app-routes";

export default function Information() {
  return (
    <LayoutSection
      title="¿Qué ofrecemos?"
      description="Conoce nuestros servicios para tener la mejor experiencia en tu viaje a Cuba"
    >
      <ImageInfoCard title="Visa para Cuba" image={APP_IMAGES.CUBA_1}>
        <P>
          La compilación del visado para Cuba es simple: debes introducir
          nombre, apellido, número de pasaporte, fecha de nacimiento y
          nacionalidad. La tarjeta es de color verde para todos los turistas,
          incluidos los ciudadanos italianos y europeos. Son una excepción los
          países con régimen especial que necesitan un real visado turístico y
          algunos países cuyos residentes pueden entrar en Cuba sin VISA
          también.
        </P>

        <Link to={APP_ROUTES.VISA}>
          <Button color="secondary" size="lg" className="mt-5">
            Saber más sobre visas a Cuba
          </Button>
        </Link>
      </ImageInfoCard>

      <ImageInfoCard title="Seguro médico" reverse image={APP_IMAGES.HEALTH}>
        <P>
          Destinados a personas que viajan hacia Cuba, incluyendo aquellas que
          de forma temporal o a más largo plazo permanecen en el país.
        </P>

        <P>
          Nuestro seguro satisface las regulaciones actuales del país sobre la
          entrada de viajeros y la estancia de extranjeros en el territorio
          nacional y cumplimentan los requerimientos de visado de los diferentes
          países incluyendo la Unión Europea.
        </P>

        <Link to={APP_ROUTES.INSURANCE}>
          <Button color="secondary" className="mt-5" size="lg">
            Descubre los seguros para Cuba
          </Button>
        </Link>
      </ImageInfoCard>
    </LayoutSection>
  );
}
