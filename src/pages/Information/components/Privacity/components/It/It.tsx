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
      builder={builder}
      title="Informativa sulla Privacy - Visa4Cuba"
      description="Scopri come proteggiamo i tuoi dati personali su Visa4Cuba. Leggi la nostra informativa sulla privacy per maggiori dettagli sul trattamento delle tue informazioni."
    >
      <InformationHeader title="Informativa sulla privacy" />

      <InformationContent>
        <H2>1. Termini e condizioni d'uso del sito web</H2>
        <P>
          Benvenuti sul nostro sito web. Se continui a navigare e utilizzare
          questo sito web, accetterai di rispettare e di essere vincolato da
          quanto segue termini e condizioni d'uso, che insieme alla nostra
          politica L'informativa sulla privacy regola il rapporto tra{" "}
          <Strong>Visa4Cuba</Strong> e l'utente informazioni su questo sito web.
          Di seguito, i termini “Visa4Cuba” e "noi" si riferirà al proprietario
          di questo sito web. Nostro la società <Strong>EASY TRAVEL SL</Strong>{" "}
          è registrata in Vitoria-Gasteiz, Alava, Spagna e il suo codice fiscale
          (NIF) è 517726181. Il termine "tu" si riferirà all'utente di il nostro
          sito web.
        </P>
        <P>
          <Strong>
            L'utilizzo di questo sito web è soggetto ai seguenti termini di
            utilizzo: utilizzo:
          </Strong>
        </P>
        <List>
          <ListItem>
            <P>
              Il contenuto delle pagine è solo a scopo informativo e utilizzo.
              Potrebbe anche essere soggetto a modifiche senza preavviso.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Né noi né le nostre terze parti garantiscono l'accuratezza, la
              puntualità, il funzionamento o la comodità del informazioni e
              materiali trovati o offerti su questo sito web per uno scopo
              particolare. Accetti che Alcune informazioni e alcuni materiali
              potrebbero avere inesattezze o errori per i quali non avremo
              responsabilità nella misura consentita dalla legge.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Utilizzando qualsiasi informazione o materiale da questo sito web
              Ti assumi interamente il tuo rischio e pertanto non non ci
              assumeremo alcuna responsabilità. Sarà tua responsabilità
              garantire che tutti i prodotti, servizi o informazioni disponibili
              su questo sito web, soddisfano le tue esigenze specifico.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Saranno fatti tutti gli sforzi necessari per mantenere l' sito web
              attivo e funzionante normalmente. Tuttavia, Cubacation non si
              assume alcuna responsabilità se la pagina è è a un certo punto
              disabilitato per motivi tecnici al di fuori del nostro controllo.
            </P>
          </ListItem>

          <ListItem>
            <P>
              In nessun caso saremo responsabili per eventuali perdite o danni
              compresi senza limitazioni quelli indiretti o derivati, né né per
              eventuali perdite o danni derivanti dalla perdita di dati o
              guadagni associati all'utilizzo di questo sito web.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Questo sito web contiene materiale di nostra proprietà o per i
              quali abbiamo la licenza di utilizzo. Questo materiale include, ma
              non si limita al design, all'aspetto e alla grafica. Qualunque
              riproduzione non conforme ai termini di è vietato il copyright,
              anche di seguito.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Tutti i marchi di cui non siamo proprietari e che vengono
              riprodotti su questo sito web, sono debitamente riconosciuto.
            </P>
          </ListItem>

          <ListItem>
            <P>
              L'uso non autorizzato di questo sito web può comportare richieste
              di risarcimento danni e/o costituire reato.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Occasionalmente il nostro sito web potrebbe contenere link ad
              altri siti web. pagine. Questi link sono forniti per vostra
              comodità. fornire determinate informazioni. Ciò non significa che
              noi Noi sosteniamo quel sito web e quindi non avremo
              responsabilità o controllo sul contenuto, sulla natura o
              disponibilità delle pagine collegate.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Non è consentito creare un collegamento a questo sito web da un
              altro sito web. sito web o documento, senza previo consenso
              scritto da Visa4Cuba.
            </P>
          </ListItem>

          <ListItem>
            <P>
              L'uso di questo sito web e qualsiasi controversia derivante da
              tale utilizzo possono verificarsi sono soggetti alle leggi
              spagnole.
            </P>
          </ListItem>
        </List>

        <H2>2. Diritto d'autore</H2>

        <P>
          Questo sito web e i suoi contenuti sono di proprietà di EASY TRAVEL
          SL. Tutti i diritti riservati. Qualsiasi ridistribuzione o
          riproduzione di parte o di tutto il contenuto in qualsiasi forma è
          vietata tranne nei seguenti casi:
        </P>

        <List>
          <ListItem>
            <P>
              È possibile stampare o scaricare su un disco rigido locale parti
              del documento contenuti per uso personale e non commerciale.
            </P>
          </ListItem>

          <ListItem>
            <P>
              È possibile copiare il contenuto e condividerlo con terze parti.
              personali e non commerciali, ma solo se sottolinei che il nostro
              il sito web è la fonte del materiale.
            </P>
          </ListItem>
        </List>

        <P>
          Non puoi, salvo con la nostra autorizzazione scritta, distribuire o
          commercializzare il contenuto di questo sito web. Né sarà in grado di
          trasmetterlo o memorizzarlo su un altro sito web o altra forma di
          sistema archiviazione elettronica.
        </P>

        <H2>3. Informativa sulla privacy</H2>

        <H3 margin={false}>3.1 Quali dati personali raccogliamo?</H3>

        <List>
          <ListItem>
            <P>
              Quando effettui una prenotazione, raccogliamo informazioni
              informazioni di base come il tuo nome, il tuo indirizzo email
              e-mail e altri recapiti. Le informazioni obbligatorio di cui
              abbiamo bisogno apparirà sempre contrassegnato con un asterisco
              sulla pagina web. Puoi anche fornirci dati ulteriori informazioni
              personali nel corso delle comunicazioni sulla tua prenotazione via
              e-mail o il nostro telefono.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Potremmo conservare determinati dati personali, tra cui i tuoi
              informazioni di contatto e dettagli del tuo ordine.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Potremmo anche registrare il tuo indirizzo IP e il tipo di motore
              di ricerca che utilizzi quando visiti il nostro sito web.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Potremmo utilizzare i cookie. I cookie sono piccoli file di
              informazioni inviate al tuo browser e memorizzate sul tuo disco
              rigido dal tuo computer. Se navighi di nuovo sul nostro sito web,
              Il nostro server sarà in grado di riconoscere il cookie e fornire
              informazioni sulla sua ultima visita. Di solito puoi modificare il
              configura il tuo browser per accettare e rifiutare tutti cookie o
              in alternativa, essere avvisati quando un cookie è creato.
            </P>
          </ListItem>
        </List>

        <H3>3.2 Come utilizziamo i tuoi dati personali?</H3>

        <List>
          <ListItem>
            <P>
              Utilizziamo i tuoi dati personali per amministrare o per
              comunicare con te in merito alla tua prenotazione.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Se lo desideri e selezioni questa opzione sulla nostra pagina web,
              Visa4Cuba ti invierà informazioni su altri prodotti o servizi che
              potrebbero interessarti.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Possiamo accedere, copiare, conservare, divulgare, rimuovere,
              sospendere o cancellare qualsiasi informazione personale generata,
              memorizzati, trasmessi o utilizzati tramite o in connessione con
              il tuo prenotazione, se richiesto dalle leggi applicabili, dagli
              statuti, regolamenti o codici di condotta delle autorità
              competenti.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Potremmo utilizzare il tuo indirizzo IP per creare profili dei
              clienti.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Potremmo utilizzare i cookie per offrirti una visita più
              piacevole. personalizzato e amichevole per il nostro sito web e
              per aiutarci tracciare i modelli di traffico tra gli utenti.
              Biscotti Non possono leggere il tuo disco rigido o altri cookie.
            </P>
          </ListItem>
        </List>

        <H3>3.3 Come proteggiamo i tuoi dati personali?</H3>

        <P>
          Prendiamo le precauzioni necessarie per proteggere i tuoi dati perdita
          personale, uso improprio, accesso non autorizzato, alterazioni o
          distruzione. Per questo utilizziamo la tecnologia standard del settore
          Secure Sockets Layer (SSL) che crittografa le informazioni sensibili
          come ad esempio i dati della tua carta di credito. Pagamento e il I
          dati della tua carta bancaria sono gestiti esclusivamente da noi banca
          partner, Banco BBVA, tramite una piattaforma di pagamento sicura.
        </P>

        <H3>3.4 A chi possiamo comunicare i tuoi dati personali?</H3>

        <P>
          <Strong>
            Potremmo divulgare i tuoi dati personali nella misura in cui
            ragionevolmente necessario per:
          </Strong>
        </P>

        <List>
          <ListItem>
            <P>
              A terzi, inclusa la nostra società in entrata, il nostro fornitore
              di servizi di pagamento online, fornitori di servizi e proprietari
              di strutture al fine di gestire la tua prenotazione.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Nelle circostanze specificate nella clausola 3.2 del presente
              documento.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Nel contesto di una vendita o fusione di una parte o di tutta la
              nostra attività
            </P>
          </ListItem>
        </List>

        <H3>3.5 Come puoi accedere e rettificare i tuoi dati personali?</H3>

        <P>
          Puoi accedere e rettificare i tuoi dati personali contattandoci
          all'indirizzo tramite il nostro sito web.
        </P>

        <H3>3.6 Consenso</H3>

        <P>
          Inviandoci in qualsiasi modo i tuoi dati personali, Accetti che
          possiamo raccogliere, archiviare ed elaborare le tue informazioni
          personali secondo le modalità indicate nella presente informativa
          sulla privacy.
        </P>
      </InformationContent>
    </Layout>
  );
}
