import { APP_IMAGES } from "../../../../modules/app/domain/constants/app-images";
import P from "../../../../modules/app/modules/ui/components/Markdown/components/P/P";
import ImageInfoCard from "../../../../modules/shared/components/ImageInfoCard/ImageInfoCard";
import AboutContainer from "../../shared/components/AboutContainer/AboutContainer";
import ResultCard from "./components/ResultCard/ResultCard";
import { RESULTS } from "./domain/mission-result";

export default function Mission() {
  return (
    <AboutContainer>
      <ImageInfoCard image={APP_IMAGES.CUBA_1} title="Nuestra misión">
        <P>
          En Your Cuba, nos dedicamos a hacer realidad tu sueño de visitar la
          hermosa isla de Cuba. Entendemos que los trámites pueden ser
          complicados, por eso nos especializamos en simplificar todo el proceso
          de obtención de visas y seguros de viaje.
        </P>

        <P>
          Con años de experiencia en el sector turístico, hemos ayudado a miles
          de viajeros a descubrir la rica cultura, historia y belleza natural de
          Cuba de manera segura y sin complicaciones.
        </P>

        <div className="grid grid-cols-2 gap-x-3 w-full gap-y-3 mt-10">
          {RESULTS.map((r, index) => (
            <ResultCard
              description={r.description}
              title={r.title}
              key={index}
            />
          ))}
        </div>
      </ImageInfoCard>
    </AboutContainer>
  );
}
