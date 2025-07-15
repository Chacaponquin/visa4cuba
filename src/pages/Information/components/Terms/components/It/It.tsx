import type { TranslationRouteBuilder } from "../../../../../../modules/app/domain/core/translation-route-builder";
import H2 from "../../../../../../modules/app/modules/ui/components/Markdown/components/H2/H2";
import H3 from "../../../../../../modules/app/modules/ui/components/Markdown/components/H3/H3";
import List from "../../../../../../modules/app/modules/ui/components/Markdown/components/List/List";
import ListItem from "../../../../../../modules/app/modules/ui/components/Markdown/components/ListItem/ListItem";
import P from "../../../../../../modules/app/modules/ui/components/Markdown/components/P/P";
import Strong from "../../../../../../modules/app/modules/ui/components/Markdown/components/Strong/Strong";
import Layout from "../../../../../../modules/shared/components/Layout/Layout";
import InformationContent from "../../../../shared/components/InformationContent/InformationContent";
import InformationHeader from "../../../../shared/components/InformationHeader/InformationHeader";

interface Props {
  builder: TranslationRouteBuilder;
}

export default function It({ builder }: Props) {
  return (
    <Layout
      title="Termini e Condizioni - Visa4Cuba"
      description="Leggi i termini e le condizioni per l'utilizzo dei servizi offerti da Visa4Cuba. Informazioni legali importanti sul tuo acquisto e sui tuoi diritti come utente."
      builder={builder}
    >
      <InformationHeader title="Términos y condiciones"></InformationHeader>

      <InformationContent>
        <H2>1. Condizioni generali per l'acquisto di visti e assicurazioni</H2>

        <H3 margin={false}>1.1 Introduzione</H3>
        <List>
          <ListItem>
            <P>
              Siamo Visa4Cuba, il marchio di una società registrata in Santa
              Marta Magdalena (COLOMBIA) con numero di registrazione B85212432.
              D'ora in poi, con il termine "noi" ci riferiremo a Visa4Cuba.
              mentre "tu" si riferirà al cliente, inteso come tutto le persone
              indicate nella prenotazione, comprese quelle aggiunte o sostituiti
              in epoche successive.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Si prega di leggere attentamente i presenti termini e condizioni.
              Selezionando "Ho letto, compreso e accetto le condizioni di
              prenotazione", acconsento a rispettarle queste condizioni e
              confermi di avere l'autorità di accettare questi termini per conto
              di tutte le persone incluse nel grappolo.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Questi termini e condizioni contengono l'intero accordo tra
              Visa4Cuba e il cliente e sostituire qualsiasi intesa o previo
              accordo (sia orale che scritto) sull'argomento e non può essere
              corretto o modificato salvo diverso accordo espressamente per
              iscritto con Visa4Cuba.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Questi termini e condizioni contengono alcune esclusioni e
              limitazioni di responsabilità. Se una qualsiasi parte del le
              condizioni sono invalide o inapplicabili, il resto del le
              condizioni rimarranno valide. La condizione non valida o
              inapplicabile sarà sostituito da un'espressione alternativa valida
              e applicabile che abbia lo stesso significato.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Visa4Cuba è un'agenzia di viaggi debitamente autorizzata a
              ottenere visti turistici tramite il Consolato cubano a Madrid.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Visa4Cuba è un agente intermediario debitamente autorizzato per
              mercato assicurazioni di viaggio per turisti emesse dall' La
              società cubana ESICUBA SA attraverso la sua filiale ASISTUR SA.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Le autorità statali che rilasciano i visti sono entità
              indipendenti e non agenti o dipendenti di Visa4Cuba. Visa4Cuba no
              è responsabile di eventuali atti, errori, omissioni, garanzie,
              violazioni o negligenze di uno qualsiasi di questi fornitori,
              nonché come danni personali o alla proprietà, morte o altri danni
              e costi derivanti da quanto sopra. Visa4Cuba non è responsabile e
              non rimborserà denaro per il mancato rispetto totale o parziale
              delle sue obblighi contrattuali, quando è impossibile adempierli
              da parte cause di forza maggiore o caso fortuito, intese come
              eventi straordinari, imprevedibili o prevedibili, inevitabili o
              derivante da un evento naturale, scioperi o altre cause esterne il
              tuo controllo diretto e non sarà responsabile di alcuna spesa
              aggiuntivo, omissione, ritardo.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Le compagnie di assicurazione sono società indipendenti e non
              agenti né i dipendenti di Visa4Cuba. Visa4Cuba non è responsabile
              per la atti, errori, omissioni, garanzie, violazioni o negligenza
              da uno qualsiasi di questi fornitori, nonché eventuali danni danni
              personali o patrimoniali, morte o altri danni e costi conseguenti
              di quanto sopra. Visa4Cuba non è responsabile e non rimborserà
              denaro per l'inadempimento totale o parziale dei propri obblighi
              contrattuali, quando risultano impossibili da adempiere per
              ragioni di forza maggiore o eventi fortuiti, intesi come eventi
              straordinario, imprevedibile o prevedibile, inevitabile o
              derivanti da un evento naturale, scioperi o altre cause al di
              fuori del suo controllo controllo diretto e non sarà responsabile
              di eventuali spese aggiuntive, omissione, ritardo.
            </P>
          </ListItem>
        </List>
        <H3>1.2 Procedura</H3>
        <P>
          Dopo aver effettuato un ordine sul nostro sito
          www.yourcubavisacover.com, riceverai un'e-mail dal nostro parte che
          conferma che abbiamo ricevuto il tuo ordine. Il contratto tra
          festeggeremo solo quando ti invieremo questa email di accettazione.
        </P>
        <H3>1.3 Ottenere un visto</H3>
        <P>
          Quando Visa4Cuba ti invia la carta turistica per Cuba, è È importante
          che tu confermi di aver ottenuto tutte le carte turista per il tuo
          viaggio. È necessario avvisarci immediatamente via e-mail inviaci
          un'e-mail se riscontri delle discrepanze nella documentazione.
        </P>
        <H3>1.4 Ottenere l'assicurazione</H3>
        <P>
          Quando Visa4Cuba ti invia l'assicurazione per Cuba, è importante che
          confermare di aver stipulato tutte le assicurazioni necessarie per il
          viaggio. Deve avvisaci immediatamente via e-mail se trovi qualcosa
          discrepanza nella documentazione.
        </P>
        <H3>1.5 Consegna del visto</H3>
        <List>
          <ListItem>
            <P>
              Visa4Cuba invierà le carte turistiche elettronicamente in Formato
              PDF all'indirizzo e-mail fornito durante l'acquisto.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Riceverai il visto pronto per la stampa, insieme alle istruzioni.
              istruzioni chiare su come utilizzarlo.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Non si applicano spese di spedizione. Viene visualizzato il prezzo
              totale chiaramente prima di finalizzare l'acquisto.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Gli ordini vengono elaborati e spediti lo stesso giorno in cui
              vengono ricevuti, purché siano effettuate prima delle ore 14.00.
              ORA CENTRALE. Gli ordini Gli ordini effettuati dopo tale orario
              verranno spediti il giorno successivo abile.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Si prega di notare che, sebbene la consegna sia immediata dopo l'
              elaborazione, potrebbero verificarsi lievi ritardi a seconda della
              provider di posta elettronica o impostazioni di sicurezza. Sì il
              tuo viaggio è imminente, ti consigliamo di effettuare l'acquisto
              con in anticipo e controlla anche la tua cartella spam o spam.
            </P>
          </ListItem>
        </List>
        <H3>1.6 Mancato rilascio del visto</H3>
        <List>
          <ListItem>
            <P>
              Nel caso improbabile in cui la carta visto turistico non una volta
              arrivati a destinazione, vi verrà rimborsato l'intero importo.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Non verranno aggiunti costi di spedizione tramite corriere al tuo
              ordine (se applicabili). solo Assicurazione
            </P>
          </ListItem>

          <ListItem>
            <P>
              Le assicurazioni vengono emesse lo stesso giorno in cui vengono
              ricevute, a condizione che l'ordine viene effettuato prima delle
              ore 14:00. ORA CENTRALE. Gli ordini effettuate dopo le ore 14.00
              Il CEST verrà inviato nel giorni lavorativi successivi.
            </P>
          </ListItem>
        </List>
        <H3>1.7 Spedizione dell'assicurazione</H3>
        <List>
          <ListItem>
            <P>
              Visa4Cuba invierà le Assicurazioni in formato PDF all'indirizzo di
              indirizzo email fornito durante l'acquisto.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Non verranno aggiunti costi di spedizione tramite corriere al tuo
              ordine (se applicabili). solo Assicurazione)
            </P>
          </ListItem>

          <ListItem>
            <P>
              Le assicurazioni vengono emesse lo stesso giorno in cui vengono
              ricevute, a condizione che l'ordine viene effettuato prima delle
              ore 14:00. ORA CENTRALE. Gli ordini effettuate dopo le ore 14.00
              Il CEST verrà inviato nel giorni lavorativi successivi.
            </P>
          </ListItem>
        </List>
        <H3>1.8 Cancellazioni e rimborsi</H3>
        <List>
          <ListItem>
            <P>
              Se desideri annullare il tuo ordine, puoi farlo se la tua
              assicurazione non è ancora stata ha emesso. Ogni richiesta di
              cancellazione o modifica deve essere inviateci per iscritto
              inviandoci una e-mail a info@yourcubavisacover.com ed entrerà in
              vigore a partire dal giorno di ricezione.
            </P>
          </ListItem>

          <ListItem>
            <P>
              <Strong>
                Tutte le cancellazioni e i rimborsi saranno soggetti a Penalità
                del 10%
              </Strong>
              , utilizzato per coprire le commissioni bancarie per
              l'elaborazione del cancellazione o rimborso. Di solito emettiamo
              l'assicurazione entro 1 giorno lavorativo dal pagamento, ma i
              tempi possono variare. variano, quindi contattaci per vedere lo
              stato del tuo ordine.
            </P>
          </ListItem>
        </List>
        <H3>1.9 Politica di rimborso del visto</H3>
        <List>
          <ListItem>
            <P>
              I prodotti ordinati possono essere restituiti entro 14 giorni dopo
              il ricevimento senza specificarne il motivo. Sì Visa4Cuba Se
              riceverai i prodotti in buone condizioni, l'importo ti verrà
              rimborsato. ordine totale. I prodotti possono essere restituiti
              solo nella loro confezione originale. stato originale, cioè se non
              sono né pieni né piegati.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Il Consumatore sosterrà le spese di spedizione per l'invio del
              ritorno. Tutti i rimborsi saranno soggetti a una commissione. 10%
              di cancellazione, utilizzato per coprire le spese bancarie per
              elaborare la cancellazione o il rimborso.
            </P>
          </ListItem>
        </List>
        <H3>1.10 Politica di cancellazione dell'assicurazione</H3>
        <List>
          <ListItem>
            <P>
              L'assicurazione può essere annullata entro 14 giorni al momento
              della sua emissione senza specificarne il motivo, sempre entro
              almeno 48 dalla data di inizio della copertura assicurativa.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Tutti i rimborsi saranno soggetti a una penale di cancellazione.
              10%, utilizzato per coprire le commissioni bancarie per elaborare
              la cancellazione o il rimborso.
            </P>
          </ListItem>
        </List>
        <H3>1.11 Dichiarazione di non responsabilità</H3>
        <List>
          <ListItem>
            <P>
              Quando presenti i tuoi documenti di viaggio, è tua responsabilità
              verificarli che siano state ottenute tutte le carte turistiche
              richieste per il tuo viaggio, che l'assicurazione abbia le date
              corrette di ingresso e uscita da Cuba, che i tuoi dati personali
              siano comunicati con attenzione e che il tuo passaporto sia valido
              per almeno sei mesi dopo il completamento del loro viaggio.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Si prega di notare che anche quando viene rilasciato un visto, un
              viaggiatore Potrebbe esserti negato l'ingresso poiché in ogni
              paese i funzionari La decisione finale sull'ingresso spetta ai
              funzionari dell'immigrazione locali.
            </P>
          </ListItem>
        </List>
        <H3>1.12 Limitazione di responsabilità</H3>
        <P>
          In caso di perdita, smarrimento, danneggiamento, ritardo o distruzione
          di un carta turistica, Visa4Cuba sarà responsabile solo in caso di
          guasto e La tua responsabilità sarà limitata al costo di sostituzione
          di base di tale articolo. Visa4Cuba non è responsabile per gli oggetti
          smarriti, danneggiato, ritardato o distrutto da un servizio di
          consegna o autorità rilasciante. Nella misura massima consentita dalla
          legge, Visa4Cuba esclude o limita qualsiasi perdita diretta, indiretta
          o consequenziale e tutte le condizioni e garanzie legali o implicite,
          comprese, compresi, ma non limitati a, perdita di guadagni o costi di
          viaggio o ferie o qualsiasi perdita derivante dalle informazioni
          ottenute dal sito web. Fatte salve le altre disposizioni della
          presente clausola, La nostra massima responsabilità per qualsiasi
          perdita causata a te è contratto, atto illecito o altro, il livello
          delle commissioni pagate da ti limiterai ai non consumatori; per i
          consumatori, perdite e danni fino ad un massimo di 250 euro di cui
          Visa4Cuba è direttamente responsabile e che può essere pienamente
          attribuito ad un fornitura non corretta del servizio.
        </P>
        <H3>1.13 Generale</H3>
        <P>
          Questi termini e condizioni e tutti i documenti a cui si riferiscono
          il riferimento espresso costituisce l'intero accordo tra noi e
          sostituire tutte le discussioni, la corrispondenza, le negoziazioni,
          precedenti accordi, intese o accordi tra noi correlato all'oggetto di
          qualsiasi contratto. Se ce ne sono la disposizione di questi Termini
          non è conforme ad alcuna legge, la disposizione dovrebbe essere letto
          in modo da ottenere il massimo effetto possibile. Se non lo è
          possibile dare un qualche effetto alla disposizione, allora deve
          essere considerato separabile dal resto dei Termini. Quando Visa4Cuba
          non può adempiere a qualsiasi obbligo derivante dal contratto a causa
          di qualsiasi circostanza, questione o cosa al di fuori del tuo
          controllo ragionevole ("forza maggiore"), saremo liberati da tali
          obblighi in la portata di tale prevenzione, restrizione o interferenza
          con la maniera causata. Visa4Cuba può subappaltare tutto o parte del
          suo obblighi o cedere tutti o parte dei propri diritti derivanti dal
          presente contratto. Il presente accordo non crea alcun diritto
          esecutivo per una persona che non farne parte, ad eccezione di
          eventuali legittimi successori o cessionari. Ogni controversia
          derivante dal presente contratto sarà regolata dalle leggi della
          legislazione spagnola ed entrambe le parti concordano di sottoporsi
          alla giurisdizione esclusiva dei tribunali spagnoli. Questo l'accordo
          non crea alcun diritto esigibile per una persona diversa da parte di
          esso, ad eccezione di eventuali legittimi successori o cessionari.
          Ogni controversia derivante dal presente contratto sarà regolata dalle
          leggi della legislazione spagnola ed entrambe le parti concordano di
          sottoporsi alla giurisdizione esclusiva dei tribunali spagnoli. Questo
          l'accordo non crea alcun diritto esigibile per una persona diversa da
          parte di esso, ad eccezione di eventuali legittimi successori o
          cessionari. Ogni controversia derivante dal presente contratto sarà
          regolata dalle leggi della legislazione spagnola ed entrambe le parti
          concordano di sottoporsi alla giurisdizione esclusiva dei tribunali
          spagnoli.
        </P>
      </InformationContent>
    </Layout>
  );
}
