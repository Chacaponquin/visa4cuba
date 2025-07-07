import { useContext } from "react";
import { APP_IMAGES } from "../../../../modules/app/domain/constants/app-images";
import P from "../../../../modules/app/modules/ui/components/Markdown/components/P/P";
import ImageInfoCard from "../../../../modules/shared/components/ImageInfoCard/ImageInfoCard";
import AboutContainer from "../../shared/components/AboutContainer/AboutContainer";
import ResultCard from "./components/ResultCard/ResultCard";
import { RESULTS } from "./domain/mission-result";
import { LanguageContext } from "../../../../modules/app/modules/language/context/language-context";
import useTranslation from "../../../../modules/app/modules/language/hooks/useTranslation";

export default function Mission() {
  const { language } = useContext(LanguageContext);

  const { TITLE, TEXT1, TEXT2 } = useTranslation({
    TITLE: {
      es: "Nuestra misión",
      en: "Our mission",
      it: "La nostra missione",
    },
    TEXT1: {
      es: "En Visa4Cuba, nos dedicamos a hacer realidad tu sueño de visitar la hermosa isla de Cuba. Entendemos que los trámites pueden ser complicados, por eso nos especializamos en simplificar todo el proceso de obtención de visas y seguros de viaje.",
      en: "At Visa4Cuba, we are dedicated to making your dream of visiting the beautiful island of Cuba a reality. We understand that the process can be complicated, which is why we specialize in simplifying the entire visa and travel insurance process.",
      it: "Noi di Visa4Cuba ci impegniamo a far sì che il tuo sogno di visitare la splendida isola di Cuba diventi realtà. Sappiamo che la burocrazia può essere complicata, ecco perché siamo specializzati nel semplificare l'intero processo di richiesta di visti e assicurazioni di viaggio.",
    },
    TEXT2: {
      es: "Con años de experiencia en el sector turístico, hemos ayudado a miles de viajeros a descubrir la rica cultura, historia y belleza natural de Cuba de manera segura y sin complicaciones.",
      en: "With years of experience in the tourism sector, we've helped thousands of travelers discover Cuba's rich culture, history, and natural beauty safely and hassle-free.",
      it: "Grazie ad anni di esperienza nel settore turistico, abbiamo aiutato migliaia di viaggiatori a scoprire la ricca cultura, la storia e le bellezze naturali di Cuba in modo sicuro e senza problemi.",
    },
  });

  return (
    <AboutContainer>
      <ImageInfoCard image={APP_IMAGES.CUBA_1} title={TITLE}>
        <P>{TEXT1}</P>

        <P>{TEXT2}</P>

        <div className="grid grid-cols-2 gap-x-3 w-full gap-y-3 mt-10">
          {RESULTS.map((r, index) => (
            <ResultCard
              description={r.description[language]}
              title={r.title}
              key={index}
            />
          ))}
        </div>
      </ImageInfoCard>
    </AboutContainer>
  );
}
