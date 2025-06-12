import { APP_IMAGES } from "../../../../modules/app/domain/constants/app-images";
import AboutContainer from "../../shared/components/AboutContainer/AboutContainer";
import ResultCard from "./components/ResultCard/ResultCard";
import { RESULTS } from "./domain/mission-result";

export default function Mission() {
  return (
    <AboutContainer>
      <div className="flex lg:flex-row flex-col-reverse lg:items-start items-center w-full justify-between gap-x-10 gap-y-10">
        <section className="flex flex-col w-full">
          <h1 className="font-title-bold text-4xl mb-3">Nuestra misión</h1>

          <p className="mb-2 leading-7 text-gray-600">
            En Your Cuba, nos dedicamos a hacer realidad tu sueño de visitar la
            hermosa isla de Cuba. Entendemos que los trámites pueden ser
            complicados, por eso nos especializamos en simplificar todo el
            proceso de obtención de visas y seguros de viaje.
          </p>

          <p className="mb-2 leading-7 text-gray-600">
            Con años de experiencia en el sector turístico, hemos ayudado a
            miles de viajeros a descubrir la rica cultura, historia y belleza
            natural de Cuba de manera segura y sin complicaciones.
          </p>

          <div className="grid grid-cols-2 gap-x-3 w-full gap-y-3 mt-10">
            {RESULTS.map((r, index) => (
              <ResultCard
                description={r.description}
                title={r.title}
                key={index}
              />
            ))}
          </div>
        </section>

        <section className="w-full max-w-[600px]">
          <img
            src={APP_IMAGES.CUBA_1.src}
            alt={APP_IMAGES.CUBA_1.alt}
            className="w-full object-contain rounded-lg"
          />
        </section>
      </div>
    </AboutContainer>
  );
}
