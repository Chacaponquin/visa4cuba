import P from "../../../../modules/app/modules/ui/components/Markdown/components/P/P";
import LayoutSection from "../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";
import InfoCard from "../How/components/InfoCard/InfoCard";
import useTranslation from "../../../../modules/app/modules/language/hooks/useTranslation";
import { APP_IMAGES } from "../../../../modules/app/domain/constants/app-images";

export default function About() {
  const {
    DESCRIPTION,
    TITLE,
    INFO_1_TITLE,
    INFO_1_DESCRIPTION,
    INFO_2_TITLE,
    INFO_2_DESCRIPTION_1,
    INFO_2_DESCRIPTION_2,
    HEADER,
  } = useTranslation({
    TITLE: {
      es: "Visado turístico o visado normal para llegar a Cuba?",
      en: "Tourist visa or normal visa to enter Cuba?",
      it: "Visto turistico o visto normale per entrare a Cuba?",
    },
    DESCRIPTION: {
      es: "Aquí está toda la información útil",
      en: "Here is all the useful information",
      it: "Ecco tutte le informazioni utili",
    },
    INFO_1_TITLE: {
      es: "¿Sientes tu también la llamada de Cuba?",
      en: "Do you also feel the call of Cuba?",
      it: "Senti anche tu la chiamata di Cuba?",
    },
    INFO_1_DESCRIPTION: {
      en: "It's clear: charming beaches, lush nature, Caribbean music in the air, and open, smiling people make this island a particularly sought-after place for travelers from all over the world. In fact, you're already imagining relaxing in the sun and then diving into the ocean, exploring the streets of Old Havana in Hemingway's footsteps, and savoring a good cigar. You've already bought your plane tickets and booked your accommodation... in short, you're just a few steps away from the vacation of your dreams! But remember that to get to Cuba, you need a visa, which, luckily, you can easily obtain online.",
      es: "Está claro: playas encantadoras, naturaleza frondosa, música caribeña en el aire y personas abiertas y sonrientes hacen de esta isla un lugar particularmente anhelado por los viajeros de todo el mundo. De hecho, ya estás imaginando relajarte al sol y luego bucearte en el agua del océano, descubrir las calles de La Habana Vieja siguiendo las huellas de Hemingway y saborear un buen cigarro. Ya has comprado los billetes de avión y reservado tu alojamiento... en definitiva: ¡estás a pocos pasos de las vacaciones de tus sueños! Pero recuerda que para llegar a Cuba necesitas el visado que, por suerte, puedes conseguir fácilmente online.",
      it: "È chiaro: spiagge incantevoli, natura lussureggiante, musica caraibica nell'aria e la gente aperta e sorridente rendono quest'isola un un luogo particolarmente ambito dai viaggiatori di tutto il mondo. Di fatto, stai già immaginando di rilassarti al sole e poi tuffarti nel acqua dell'oceano, scopri le strade dell'Avana Vecchia seguendo il tracce di Hemingway e assaporare un buon sigaro. Hai già acquistato il biglietti aerei e prenotato l'alloggio...in breve: sei a pochi passi dalla vacanza dei tuoi sogni! Ma ricorda che per Per arrivare a Cuba è necessario un visto che, fortunatamente, è possibile ottenere. facilmente online.",
    },
    INFO_2_TITLE: {
      es: "¿Qué es exactamente la Visa para Cuba?",
      en: "What is the Visa for Cuba?",
      it: "Cos'è esattamente il visto per Cuba?",
    },
    INFO_2_DESCRIPTION_1: {
      es: "Comúnmente llamado 'tarjeta de turista', el visado es un documento obligatorio para poder entrar en el país y por lo tanto será mejor obtenerlo lo antes posible. La 'tarjeta de turista' para Cuba debe ser solicitada antes de salir y te permite permanecer en la isla durante 30 días, con la posibilidad de prorrogarlo de hasta 60 días pagando un suplemento en cualquier oficina de inmigración, poco antes de la expiración del documento. No es posible extender el período de validez del documento de antemano, ni es posible comprar un visado con una validez superior a los 30 días.",
      en: "Commonly called a 'tourist card', the visa is a mandatory document to enter the country, so it is best to obtain it as soon as possible. The 'tourist card' for Cuba must be requested before departure and allows you to stay on the island for 30 days, with the possibility of extending it up to 60 days by paying a supplement at any immigration office, shortly before the document expires. It is not possible to extend the validity period of the document in advance, nor is it possible to purchase a visa with a validity longer than 30 days.",
      it: "Comunemente chiamata 'carta turistica', il visto è un documento obbligatorio per entrare nel paese e quindi è meglio ottenerlo il prima possibile. La 'carta turistica' per Cuba deve essere richiesta prima della partenza e ti consente di rimanere sull'isola per 30 giorni, con la possibilità di prorogarla fino a 60 giorni pagando un supplemento in qualsiasi ufficio immigrazione, poco prima della scadenza del documento. Non è possibile estendere in anticipo il periodo di validità del documento, né è possibile acquistare un visto con una validità superiore a 30 giorni.",
    },
    INFO_2_DESCRIPTION_2: {
      es: `Pero es fundamental hacer una precisión: el documento llamado visado turístico para Cuba, coincide con la VISA, es decir con la tarjeta turística para Cuba. El auténtico "visado para Cuba" es el documento que SOLO se requiere a los ciudadanos de algunos países con régimen especial, que deben dirigirse a la embajada o al consulado de Cuba en su propio país de residencia para solicitarlo y obtenerlo.`,
      en: "But it is essential to make a clarification: the document called tourist visa for Cuba coincides with the VISA, that is, the tourist card for Cuba. The real 'visa for Cuba' is the document that is ONLY required for citizens of some countries with a special regime, who must go to the embassy or consulate of Cuba in their country of residence to request and obtain it.",
      it: "Ma è fondamentale fare una precisazione: il documento chiamato visto turistico per Cuba coincide con il VISA, ovvero la carta turistica per Cuba. Il vero 'visto per Cuba' è il documento che è RICHIESTO SOLO ai cittadini di alcuni paesi con regime speciale, che devono recarsi presso l'ambasciata o il consolato di Cuba nel proprio paese di residenza per richiederlo e ottenerlo.",
    },
    HEADER: {
      en: "Visa Information",
      es: "Información sobre visas",
      it: "Informazioni sul visto",
    },
  });

  return (
    <LayoutSection title={TITLE} header={HEADER} description={DESCRIPTION}>
      <InfoCard title={INFO_1_TITLE} image={APP_IMAGES.PEOPLE_PASSPORT}>
        <P>{INFO_1_DESCRIPTION}</P>
      </InfoCard>

      <InfoCard title={INFO_2_TITLE} reverse image={APP_IMAGES.PASSPORT}>
        <P>{INFO_2_DESCRIPTION_1}</P>

        <P>{INFO_2_DESCRIPTION_2}</P>
      </InfoCard>
    </LayoutSection>
  );
}
