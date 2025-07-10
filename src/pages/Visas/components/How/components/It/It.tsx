import InfoCard from "../InfoCard/InfoCard";
import Airplane from "../../../../../../modules/app/modules/icon/components/Airplane";
import P from "../../../../../../modules/app/modules/ui/components/Markdown/components/P/P";
import Medal from "../../../../../../modules/app/modules/icon/components/Medal";
import Time from "../../../../../../modules/app/modules/icon/components/Time";
import LayoutSection from "../../../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";
import Form from "../../../../../../modules/app/modules/icon/components/Form";
import { APP_ROUTES } from "../../../../../../modules/app/domain/constants/app-routes";
import { Link } from "react-router";
import Button from "../../../../../../modules/app/modules/ui/components/Button/Button";

export default function It() {
  return (
    <LayoutSection
      title="Come ottenere il visto per entrare a Cuba online"
      description="Ecco i nostri suggerimenti:"
    >
      <InfoCard
        color="primary"
        icon={Time}
        title="Visto online per Cuba a soli 35 euro in 48 ore"
      >
        <P>
          Visa4Cuba ti permette di acquistare facilmente il visto per Cuba
          online, con la garanzia di riceverlo direttamente a casa tua entro 48
          ore. Non dovrai quindi fare code in nessun ufficio né in aeroporto
          (risparmiando anche molto denaro!), e potrai ottenere il tuo visto per
          entrare a Cuba online in poco tempo e con pochi clic, a un prezzo
          competitivo. Su molti siti, il costo della tarjeta per Cuba può
          arrivare a 70 euro, e bisogna inviare diversi documenti per ottenerla:
          Visa4Cuba ti garantisce di ricevere il visto online per Cuba a soli 35
          euro con spedizione diretta al tuo indirizzo, fornendo solo alcuni
          semplici dati.
        </P>
      </InfoCard>

      <InfoCard
        color="secondary"
        icon={Medal}
        title="Ingresso a Cuba garantito al 100%"
      >
        <P>
          Affidati solo a siti web sicuri: acquistando il visto turistico da
          siti non certificati, potresti ricevere documenti falsi e non
          riconosciuti dalle autorità cubane, rischiando di non essere ammesso a
          Cuba all’arrivo. Con Visa4Cuba il tuo visto online per Cuba è
          garantito al 100%.
        </P>
      </InfoCard>

      <InfoCard
        icon={Airplane}
        title="Visto + assicurazione per Cuba"
        color="primary"
      >
        <P>
          Un altro valore aggiunto del nostro servizio online è la possibilità
          di acquistare contemporaneamente sia il visto che l’assicurazione per
          Cuba. L’assicurazione sanitaria a Cuba è obbligatoria dal 2010 e ti
          permette di vivere la tua vacanza in tutta tranquillità: senza
          copertura sanitaria potresti dover sostenere costi molto elevati in
          caso di piccoli incidenti medici, poiché gli ospedali cubani sono
          piuttosto costosi e le farmacie non sempre ben fornite a causa
          dell’embargo. Acquistare online la tua assicurazione sanitaria insieme
          al visto ti permette di risparmiare tempo e denaro, con la possibilità
          di scegliere tra una polizza più economica, che copra solo le spese
          mediche, oppure un’assicurazione viaggio completa.
        </P>
      </InfoCard>

      <InfoCard
        color="secondary"
        icon={Form}
        title="Raccolta dati per il visto"
      >
        <P>
          Ottenere il visto per Cuba è facile. Per prima cosa dovrai fornire i
          dati del tuo passaporto (numero del documento e data di scadenza): è
          importante sapere che il tuo passaporto, per entrare a Cuba, deve
          essere valido per almeno sei mesi oltre la data di scadenza. Quindi
          fai attenzione alla necessità di rinnovarlo prima di partire! Dovrai
          poi fornire anche i dati dell’assicurazione sanitaria, se l’hai già
          stipulata in precedenza, e la data di partenza del tuo viaggio.
          Infine, dovrai specificare l’indirizzo al quale desideri che ti venga
          spedito il visto per posta. Una volta completato il processo con tutti
          i dati richiesti, la tua richiesta sarà completa e potrai pagare
          direttamente online in tutta sicurezza con la maggior parte delle
          carte di credito internazionali.
        </P>
      </InfoCard>

      <Link to={APP_ROUTES.SHOP}>
        <Button size="lg" className="mt-4">
          Acquista ora il tuo visto per Cuba
        </Button>
      </Link>
    </LayoutSection>
  );
}
