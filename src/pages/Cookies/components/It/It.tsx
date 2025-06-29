import { APP_EMAIL } from "../../../../modules/app/domain/constants/app-email";
import { APP_INFO } from "../../../../modules/app/domain/constants/app-info";
import type { TranslationRouteBuilder } from "../../../../modules/app/domain/core/translation-route-builder";
import A from "../../../../modules/app/modules/ui/components/Markdown/components/A/A";
import H2 from "../../../../modules/app/modules/ui/components/Markdown/components/H2/H2";
import H3 from "../../../../modules/app/modules/ui/components/Markdown/components/H3/H3";
import List from "../../../../modules/app/modules/ui/components/Markdown/components/List/List";
import ListItem from "../../../../modules/app/modules/ui/components/Markdown/components/ListItem/ListItem";
import P from "../../../../modules/app/modules/ui/components/Markdown/components/P/P";
import Strong from "../../../../modules/app/modules/ui/components/Markdown/components/Strong/Strong";
import Td from "../../../../modules/app/modules/ui/components/Markdown/components/Table/components/Td/Td";
import Th from "../../../../modules/app/modules/ui/components/Markdown/components/Table/components/Th/Th";
import Table from "../../../../modules/app/modules/ui/components/Markdown/components/Table/Table";
import Layout from "../../../../modules/shared/components/Layout/Layout";
import InformationContent from "../../../Information/shared/components/InformationContent/InformationContent";
import InformationHeader from "../../../Information/shared/components/InformationHeader/InformationHeader";

interface Props {
  builder: TranslationRouteBuilder;
}

export default function It({ builder }: Props) {
  return (
    <Layout builder={builder}>
      <InformationHeader title="Informativa sui cookie"></InformationHeader>

      <InformationContent>
        <P>
          EASY TRAVEL SL, con sede legale a Vitoria-Gasteiz, Álava (Spagna) (di
          seguito "Titolare del trattamento") si impegna costantemente a
          tutelare la privacy online dei propri utenti. Il presente documento è
          stato redatto ai sensi dell'art. 13 del Regolamento UE 2016/679 (di
          seguito "Regolamento") al fine di consentirvi di familiarizzare con la
          nostra politica sui cookie e di comprendere come vengono trattati i
          vostri dati personali quando utilizzate {APP_INFO.WEB} (di seguito
          collettivamente denominati "Sito web").
        </P>
        <H2>
          1. Titolare del trattamento e Responsabile della Protezione dei Dati
          "DPO"
        </H2>
        <P>
          Il titolare del trattamento effettuato tramite il Sito web è EASY
          TRAVEL SL, come sopra definito. Per comunicazioni in merito, il
          Titolare ha attivato l'indirizzo email{" "}
          <A link={APP_EMAIL.LINK} external>
            {APP_EMAIL.EMAIL}
          </A>
          . Il Responsabile della Protezione dei Dati (di seguito "RPD") ai
          sensi degli artt. 37 e seguenti del Regolamento è contattabile
          all'indirizzo email:{" "}
          <A link={APP_EMAIL.LINK} external>
            {APP_EMAIL.EMAIL}
          </A>
          .
        </P>

        <H2>2. Cookie</H2>
        <H3 margin={false}>
          Definizioni, caratteristiche e applicazione della normativa
        </H3>

        <P>
          I cookie sono piccoli file di testo che i siti web visitati inviano e
          registrano sul computer o dispositivo mobile dell'utente, per poi
          essere reinviati agli stessi siti web alla successiva visita. Questi
          cookie consentono a un sito web di ricordare le azioni e le preferenze
          dell'utente (come, ad esempio, i dati di accesso, la lingua preferita,
          la dimensione del carattere, altre impostazioni di visualizzazione,
          ecc.) in modo che non sia necessario reinserirle quando si torna sullo
          stesso sito o si naviga da una pagina all'altra. I cookie sono
          utilizzati per eseguire autenticazioni informatiche, monitoraggio di
          sessioni e memorizzazione di informazioni riguardanti le attività
          degli utenti che accedono a un sito web e possono contenere anche un
          codice identificativo univoco che consente di tenere traccia della
          navigazione dell'utente all'interno del sito per finalità statistiche
          o pubblicitarie. Nel corso della navigazione su un sito web, l'utente
          può ricevere sul proprio computer anche cookie di siti o server web
          diversi da quello che sta visitando (c.d. cookie di "terze parti").
          Alcune operazioni non potrebbero essere compiute senza l'uso dei
          cookie, che in alcuni casi sono quindi tecnicamente necessari per il
          funzionamento del sito web.
        </P>

        <P>
          Esistono vari tipi di cookie, a seconda delle loro caratteristiche e
          funzioni, e possono rimanere sul computer dell'utente per periodi di
          tempo diversi. I cookie di sessione vengono automaticamente cancellati
          alla chiusura del browser, mentre i cookie persistenti rimangono sul
          dispositivo dell'utente fino a una scadenza prestabilita.
        </P>
        <P>
          Secondo la normativa vigente in Italia, l'utilizzo dei cookie non
          richiede sempre il consenso espresso dell'utente. In particolare, non
          richiedono tale consenso i "cookie tecnici", ovvero quelli utilizzati
          al solo fine di effettuare la trasmissione di una comunicazione su una
          rete di comunicazione elettronica o nella misura strettamente
          necessaria per erogare un servizio esplicitamente richiesto
          dall'utente. In altre parole, questi cookie sono essenziali per il
          funzionamento del sito web o necessari per lo svolgimento delle
          attività richieste dall'utente.{" "}
        </P>

        <P>
          Secondo il Garante per la protezione dei dati personali (cfr.
          Provvedimento individuazione delle modalità semplificate per
          l'informativa e l'acquisizione del consenso per l'uso dei cookie
          dell'8 maggio 2014 e successivi chiarimenti, di seguito
          "Provvedimento"), i cookie tecnici, che non richiedono un consenso
          espresso per il loro utilizzo, includono anche:{" "}
        </P>

        <List>
          <ListItem>
            <P>
              "cookie analitici" quando utilizzati direttamente dal gestore del
              sito web per raccogliere informazioni, in forma aggregata, sul
              numero degli utenti e su come questi visitano il sito.
            </P>
          </ListItem>

          <ListItem>
            <P>cookie di navigazione o di sessione (per l'autenticazione).</P>
          </ListItem>

          <ListItem>
            <P>
              cookie di funzionalità, che permettono all'utente la navigazione
              in funzione di una serie di criteri selezionati (ad esempio, la
              lingua, i prodotti selezionati per l'acquisto) al fine di
              migliorare il servizio reso all'utente.{" "}
            </P>
          </ListItem>
        </List>

        <P>
          I "cookie di profilazione", invece, ovvero quelli volti a creare
          profili relativi all'utente e utilizzati al fine di inviare messaggi
          pubblicitari in linea con le preferenze manifestate dall'utente
          durante la navigazione in rete, richiedono il consenso preventivo
          dell'utente.
        </P>

        <H3>
          Tipologie di cookie utilizzate dal Sito e possibilità di abilitazione
          o disabilitazione
        </H3>

        <P>
          Il Sito utilizza i seguenti cookie che possono essere disabilitati, ad
          eccezione dei cookie di terze parti per i quali si deve fare
          riferimento direttamente alle modalità di abilitazione/disabilitazione
          dei rispettivi cookie, riportate nei link:
        </P>

        <List>
          <ListItem>
            <P>
              Cookie tecnici di navigazione o di sessione strettamente necessari
              al funzionamento del Sito o che consentono di usufruire dei
              contenuti e dei servizi richiesti.{" "}
            </P>
          </ListItem>

          <ListItem>
            <P>
              Cookie di funzionalità, che vengono utilizzati per attivare
              specifiche funzionalità del Sito e una serie di criteri
              selezionati (ad esempio, la lingua) al fine di migliorare il
              servizio offerto.{" "}
            </P>
          </ListItem>
        </List>

        <P>
          <Strong>ATTENZIONE</Strong>: Disabilitando i cookie tecnici e/o di
          funzionalità, il Sito potrebbe non essere consultabile o alcuni
          servizi o funzioni del Sito potrebbero non essere disponibili o
          potrebbero non funzionare correttamente e potrebbe essere necessario
          modificare o inserire manualmente alcune informazioni o preferenze
          ogni volta che si visita il Sito.
        </P>

        <P>
          Cookie di terze parti, ovvero cookie provenienti da siti web o server
          web diversi da quelli di Papernet, utilizzati per le finalità di tali
          terze parti. Si precisa che tali terze parti, elencate di seguito con
          link alle rispettive informative sulla privacy, sono in genere
          titolari autonomi del trattamento dei dati raccolti tramite i cookie
          che utilizzano, pertanto si prega di fare riferimento alle rispettive
          informative sul trattamento dei dati personali, informative e moduli
          di consenso (abilitazione e disabilitazione dei rispettivi cookie),
          come specificato nel Provvedimento sopra citato. Per completezza, si
          precisa che il Titolare del trattamento si impegna al massimo per
          tracciare i cookie sul proprio Sito Web. Questi sono regolarmente
          aggiornati nella tabella sottostante, dove forniamo trasparenza sui
          cookie che il Titolare del trattamento invia direttamente all'utente e
          sulle relative finalità. Per quanto riguarda le terze parti che
          inviano cookie tramite il nostro Sito Web, si forniscono di seguito i
          link alle rispettive informative sulla privacy: come già accennato,
          deleghiamo a tali terze parti la responsabilità di fornire
          l'informativa e raccogliere il consenso dell'utente, come richiesto
          dal Provvedimento. Tale responsabilità non si applica solo ai cookie
          inviati direttamente da terze parti, ma anche a eventuali ulteriori
          cookie inviati tramite il nostro Sito Web a seguito dell'utilizzo di
          servizi da parte delle terze parti stesse. Il Titolare del trattamento
          non ha alcun controllo sui cookie inviati dai fornitori di servizi di
          queste terze parti e non ne conosce le caratteristiche o le finalità.
          La gestione delle informazioni raccolte da "terze parti" è
          disciplinata dalle relative informative, alle quali si prega di fare
          riferimento. Per garantire una maggiore trasparenza e comodità, si
          riportano di seguito gli indirizzi web delle diverse informative e
          delle modalità per la gestione dei cookie, precisando che il Titolare
          del trattamento non ha alcuna responsabilità per la gestione dei
          cookie di terze parti su questo Sito Web.
        </P>

        <P>
          La gestione delle informazioni raccolte da "terze parti" è
          disciplinata dalle rispettive informative privacy, alle quali si
          invita a consultare. Per garantire una maggiore trasparenza e
          comodità, si riportano di seguito gli indirizzi web delle diverse
          informative e delle modalità per la gestione dei cookie, precisando
          che il Titolare del trattamento non ha alcuna responsabilità per la
          gestione dei cookie di terze parti su questo Sito.{" "}
        </P>

        <P>
          La sezione seguente elenca i link alle informazioni sui cookie di
          terze parti:
        </P>

        <List>
          <ListItem>
            <P>
              Google:{" "}
              <A
                external
                link="https://www.google.com/policies/privacy/partners/"
              >
                https://www.google.com/policies/privacy/partners/
              </A>
            </P>
          </ListItem>
        </List>

        <Table>
          <thead>
            <tr>
              <Th>Scopo</Th>
              <Th>Nome tecnico</Th>
              <Th>Tipo, funzione e scopo del cookie</Th>
              <Th>Durata</Th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <Td>Tecnico</Td>
              <Td>_GRECAPTCHA</Td>
              <Td>
                reCAPTCHA imposta un cookie necessario (_GRECAPTCHA) quando
                viene eseguito allo scopo di fornire la sua analisi dei rischi.{" "}
              </Td>
              <Td>6 mesi</Td>
            </tr>
            <tr>
              <Td>Tecnico</Td>
              <Td>ci_session</Td>
              <Td>
                Consente di mantenere le impostazioni scelte durante la
                navigazione
              </Td>
              <Td>2 ore</Td>
            </tr>
            <tr>
              <Td>Tecnico</Td>
              <Td>CONSENT</Td>
              <Td>Utilizzato per il consenso dei servizi Google</Td>
              <Td>2 anni</Td>
            </tr>
            <tr>
              <Td>Analitico</Td>
              <Td>OGPC</Td>
              <Td>Questo cookie abilita le funzionalità di Google Maps</Td>
              <Td>1 mese</Td>
            </tr>
            <tr>
              <Td>Analitico</Td>
              <Td>DV</Td>
              <Td>
                Questi I cookie vengono utilizzati per la pubblicità mirata
              </Td>
              <Td>6 ore</Td>
            </tr>
            <tr>
              <Td>Analitico</Td>
              <Td>1P_JAR</Td>
              <Td>
                Memorizza le preferenze e le informazioni dell'utente ogni volta
                che visita pagine web contenenti mappe geografiche di Google
                Maps
              </Td>
              <Td>1 mese</Td>
            </tr>
            <tr>
              <Td>Analitico</Td>
              <Td>NID</Td>
              <Td>
                Viene utilizzato per questi scopi per mostrare annunci Google
                nei servizi Google agli utenti che hanno effettuato il logout
                dopo aver effettuato l'accesso
              </Td>
              <Td>6 mesi</Td>
            </tr>
            <tr>
              <Td>Analitico</Td>
              <Td>_ga</Td>
              <Td>
                Registra un ID univoco utilizzato per generare dati statistici
                su come il visitatore utilizza il sito web
              </Td>
              <Td>2 anni</Td>
            </tr>
            <tr>
              <Td>Analitico</Td>
              <Td>_gat_gtag_UA_*</Td>
              <Td>Utilizzato per distinguere gli utenti</Td>
              <Td>2 anni</Td>
            </tr>
            <tr>
              <Td>Analitico</Td>
              <Td>_ga_*</Td>
              <Td>
                Utilizzato per memorizzare e conteggiare le visualizzazioni di
                pagina
              </Td>
              <Td>2 anni</Td>
            </tr>
            <tr>
              <Td>Analitico</Td>
              <Td>_gat</Td>
              <Td>
                Utilizzato da Google Analytics per limitare la frequenza delle
                richieste
              </Td>
              <Td>Fine della sessione di navigazione</Td>
            </tr>
            <tr>
              <Td>Analitico</Td>
              <Td>_gid</Td>
              <Td>
                Registra un ID univoco utilizzato per generare dati statistici
                su come il visitatore utilizza il sito web
              </Td>
              <Td>Fine della sessione di navigazione</Td>
            </tr>
          </tbody>
        </Table>

        <H3>Impostazioni cookie</H3>

        <P>
          Puoi bloccare o eliminare (in tutto o in parte) i cookie tecnici e
          funzionali attraverso le funzionalità specifiche del tuo browser.
          Tuttavia, tieni presente che non autorizzare i cookie tecnici potrebbe
          comportare l'impossibilità di utilizzare il Sito Web, visualizzarne i
          contenuti e usufruire dei suoi servizi. Il blocco dei cookie
          funzionali potrebbe comportare che alcuni servizi o funzioni del Sito
          Web non siano disponibili o non funzionino correttamente e potresti
          essere costretto a modificare o inserire manualmente alcune
          informazioni o preferenze ogni volta che visiti il Sito Web.
        </P>

        <P>
          Le scelte effettuate in merito ai cookie sul Sito Web saranno
          registrate anche in un cookie. Tuttavia, questo cookie potrebbe non
          funzionare correttamente in alcune circostanze: in tali casi, ti
          consigliamo di eliminare i cookie che non ti piacciono e di bloccarne
          l'utilizzo anche tramite le funzionalità del tuo browser. Le tue
          preferenze relative ai cookie devono essere reimpostate se utilizzi
          più dispositivi o browser per accedere al Sito Web.{" "}
        </P>

        <H3>Come visualizzare e modificare i cookie tramite il tuo Browser</H3>

        <P>
          Puoi autorizzare, bloccare o eliminare (in tutto o in parte) i cookie
          tramite le funzionalità specifiche del tuo browser. Per maggiori
          informazioni su come impostare le preferenze relative ai cookie
          tramite il tuo Browser, consulta le istruzioni:
        </P>

        <List>
          <ListItem>
            <P>Internet Explorer</P>
          </ListItem>
          <ListItem>
            <P>Firefox</P>
          </ListItem>
          <ListItem>
            <P>Chrome</P>
          </ListItem>
          <ListItem>
            <P>Safari</P>
          </ListItem>
          <ListItem>
            <P>Opera</P>
          </ListItem>
        </List>

        <H2>3. Diritti degli interessati</H2>

        <P>
          Ai sensi degli artt. 15 e ss. del Regolamento, Lei ha il diritto in
          qualsiasi momento di chiedere l'accesso ai Suoi Dati Personali, la
          loro rettifica o cancellazione, nonché la limitazione del trattamento
          nei casi previsti dall'art. 18 del Regolamento, di ricevere in un
          formato strutturato, di uso comune e leggibile da dispositivo
          automatico i dati personali che La riguardano nei casi previsti
          dall'art. 20 del Regolamento. In qualsiasi momento, potrà revocare il
          consenso ai sensi dell'art. 7 del Regolamento; proporre reclamo
          all'autorità di controllo competente ai sensi dell'art. 77 del GDPR
          (Garante per la Protezione dei Dati Personali) ai sensi dell'art. 77
          del Regolamento, qualora ritenga che il trattamento dei Suoi dati
          violi la normativa vigente.
        </P>

        <P>
          Può opporsi al trattamento dei Suoi dati ai sensi dell'art. 21 del
          GDPR, fornendo prova dei motivi dell'opposizione: il Titolare si
          riserva di valutare l'istanza, che non sarà accolta qualora sussistano
          motivi legittimi per procedere al trattamento che prevalgano sui Suoi
          interessi, diritti e libertà.
        </P>

        <P>
          Le richieste dovranno essere inviate per iscritto al Titolare del
          Trattamento o al DPO al seguente indirizzo email:{" "}
          <A link={APP_EMAIL.LINK} external>
            {APP_EMAIL.EMAIL}
          </A>
        </P>
      </InformationContent>
    </Layout>
  );
}
