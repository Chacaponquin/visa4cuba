import { APP_IMAGES } from "../../../../modules/app/domain/constants/app-images";
import useTranslation from "../../../../modules/app/modules/language/hooks/useTranslation";
import P from "../../../../modules/app/modules/ui/components/Markdown/components/P/P";
import ImageInfoCard from "../../../../modules/shared/components/ImageInfoCard/ImageInfoCard";
import LayoutSection from "../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";

export default function Information() {
  const {
    TITLE,
    DESCRIPTION,
    INFO_1_TITLE,
    INFO_1_DESCRIPTION,
    INFO_2_TITLE,
    INFO_2_DESCRIPTION_1,
    INFO_2_DESCRIPTION_2,
    INFO_3_TITLE,
    INFO_3_DESCRIPTION,
  } = useTranslation({
    TITLE: {
      en: "Travel with peace of mind with medical insurance for Cuba",
      es: "Viajes con tranquilidad con seguro médico para Cuba",
      it: "Viaggia con tranquillità con l'assicurazione medica per Cuba",
    },
    DESCRIPTION: {
      en: "Sun, Caribbean Sea, beautiful beaches, delicious mojitos, and the rhythm of rumba and salsa: a trip to Cuba is a true dream.",
      es: "Sol, mar caribe, hermosas playas, deliciosos mojitos y ritmo de rumba y salsa: un viaje a Cuba es un verdadero sueño.",
      it: "Sole, mare dei Caraibi, bellissime spiagge, deliziosi mojito e il ritmo della rumba e della salsa: un viaggio a Cuba è un vero sogno.",
    },
    INFO_1_TITLE: {
      es: "Seguro médico en línea",
      en: "Online health insurance",
      it: "Assicurazione sanitaria online",
    },
    INFO_1_DESCRIPTION: {
      es: "El seguro para Cuba no es solo una formalidad: aunque el país es seguro, siempre puede haber riesgos para la salud. Entre los más comunes, además de posibles accidentes como en cualquier otro lugar del mundo, se encuentran los virus gastrointestinales leves o virus más graves como el Zika o Dengue, hasta casos raros de infecciones como el cólera. Además, un riesgo que no debe subestimarse es la posibilidad de ciclones en los meses de junio a noviembre. Si a esto le sumamos el hecho de que los costos de hospitalizaciones y operaciones son bastante altos y los medicamentos pueden escasear debido al embargo, es claro que antes de partir es conveniente protegerse.",
      en: "Health insurance for Cuba is not just a formality: although the country is safe, there can always be health risks. Among the most common are mild gastrointestinal viruses or more severe viruses like Zika or Dengue, as well as rare cases of infections like cholera. Additionally, a risk that should not be underestimated is the possibility of cyclones from June to November. Considering that hospitalization and operation costs can be quite high and medications may be scarce due to the embargo, it is clear that it is wise to protect yourself before departure.",
      it: "L'assicurazione sanitaria per Cuba non è solo una formalità: sebbene il paese sia sicuro, ci possono sempre essere rischi per la salute. Tra i più comuni ci sono virus gastrointestinali lievi o virus più gravi come Zika o Dengue, fino a casi rari di infezioni come il colera. Inoltre, un rischio da non sottovalutare è la possibilità di cicloni nei mesi da giugno a novembre. Considerando che i costi di ospedalizzazione e operazioni possono essere piuttosto elevati e i farmaci possono scarseggiare a causa dell'embargo, è chiaro che è saggio proteggersi prima della partenza.",
    },
    INFO_2_TITLE: {
      es: "Fácil de contratar",
      en: "Easy to purchase",
      it: "Facile da acquistare",
    },
    INFO_2_DESCRIPTION_1: {
      es: "En particular, Visa4Cuba es el agente oficial de la aseguradora cubana ESICUBA con un contrato regular para la venta de seguros de viaje en Cuba.",
      en: "In particular, Visa4Cuba is the official agent of the Cuban insurer ESICUBA with a regular contract for the sale of travel insurance in Cuba.",
      it: "In particolare, Visa4Cuba è l'agente ufficiale dell'assicuratore cubano ESICUBA con un contratto regolare per la vendita di assicurazioni di viaggio a Cuba.",
    },
    INFO_2_DESCRIPTION_2: {
      es: "La gran ventaja de la póliza ESICUBA y la diferencia sustancial con el resto de seguros es que en caso de necesitar asistencia medica NO tendrá que adelantar dinero: solo llame al centro de seguros o al equipo de Visa4Cuba y el gobierno cubano pagará directamente. Con las otras pólizas, en cambio, para recibir asistencia es necesario llamar a su país para abrir el reclamo y anticipar los costos. En resumen, ¡queremos que te vayas de forma segura!",
      en: "The great advantage of the ESICUBA policy and the substantial difference from other insurances is that in case you need medical assistance, you will NOT have to advance any money: just call the insurance center or the Visa4Cuba team, and the Cuban government will pay directly. With other policies, however, to receive assistance, you need to call your country to open a claim and advance costs. In short, we want you to leave safely!",
      it: "Il grande vantaggio della polizza ESICUBA e la differenza sostanziale rispetto ad altre assicurazioni è che in caso di necessità di assistenza medica NON dovrai anticipare denaro: basta chiamare il centro assicurativo o il team di Visa4Cuba e il governo cubano pagherà direttamente. Con le altre polizze, invece, per ricevere assistenza è necessario chiamare il proprio paese per aprire un reclamo e anticipare i costi. In breve, vogliamo che tu parta in sicurezza!",
    },
    INFO_3_TITLE: {
      es: "Visa y seguro para Cuba",
      en: "Visa and insurance for Cuba",
      it: "Visto e assicurazione per Cuba",
    },
    INFO_3_DESCRIPTION: {
      es: 'A través de Visa4Cuba puede obtener fácilmente su seguro medico para Cuba en línea, pagando de forma segura con la mayoría de las tarjetas de crédito internacionales. El costo del seguro médico para Cuba es flexible y se puede personalizar según las necesidades de cada viajero: compruébalo ahora a través de nuestro portal. No solo eso: Visa4Cuba también te permite agilizar tus trámites previos a la salida comprando una visa y un seguro para Cuba al mismo tiempo. Al igual que el seguro, la visa para Cuba (VISA o "tarjeta de turista") es obligatoria y debe ser mostrada abordando el vuelo a la isla. A su llegada, será sellado por las autoridades aduaneras. Tiene una validez de 30 días con posibilidad de ampliación a 60 y comprándolo online a través de nuestro portal podrás recibirlo directamente en tu domicilio en 48 horas, evitando largas colas en las oficinas y ahorrando costes.',
      en: "Through Visa4Cuba, you can easily obtain your medical insurance for Cuba online, paying securely with most international credit cards. The cost of medical insurance for Cuba is flexible and can be customized to each traveler's needs: check it out now through our portal. Not only that: Visa4Cuba also allows you to streamline your pre-departure procedures by purchasing a visa and insurance for Cuba at the same time. Like the insurance, the visa for Cuba (VISA or 'tourist card') is mandatory and must be shown upon boarding the flight to the island. Upon arrival, it will be stamped by customs authorities. It is valid for 30 days, with the possibility of extending it to 60 days. By purchasing it online through our portal, you can receive it directly at your home within 48 hours, avoiding long lines at the offices and saving costs.",
      it: "Attraverso Visa4Cuba puoi ottenere facilmente la tua assicurazione medica per Cuba online, pagando in modo sicuro con la maggior parte delle carte di credito internazionali. Il costo dell'assicurazione medica per Cuba è flessibile e può essere personalizzato in base alle esigenze di ogni viaggiatore: controllalo ora attraverso il nostro portale. Non solo: Visa4Cuba ti consente anche di semplificare le tue procedure pre-partenza acquistando un visto e un'assicurazione per Cuba contemporaneamente. Come l'assicurazione, il visto per Cuba (VISA o 'carta turistica') è obbligatorio e deve essere mostrato all'imbarco del volo per l'isola. All'arrivo, sarà timbrato dalle autorità doganali. È valido per 30 giorni, con la possibilità di estenderlo a 60 giorni. Acquistandolo online attraverso il nostro portale, puoi riceverlo direttamente a casa tua in 48 ore, evitando lunghe code negli uffici e risparmiando sui costi.",
    },
  });

  return (
    <LayoutSection title={TITLE} description={DESCRIPTION}>
      <ImageInfoCard image={APP_IMAGES.BEACH} title={INFO_1_TITLE}>
        <P>{INFO_1_DESCRIPTION}</P>
      </ImageInfoCard>

      <ImageInfoCard reverse image={APP_IMAGES.DOCTOR} title={INFO_2_TITLE}>
        <P>{INFO_2_DESCRIPTION_1}</P>

        <P>{INFO_2_DESCRIPTION_2}</P>
      </ImageInfoCard>

      <ImageInfoCard image={APP_IMAGES.CUBA_4} title={INFO_3_TITLE}>
        <P>{INFO_3_DESCRIPTION}</P>
      </ImageInfoCard>
    </LayoutSection>
  );
}
