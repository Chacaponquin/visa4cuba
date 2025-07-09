import Avatar from "../../../../../app/modules/icon/components/Avatar";
import Forbid from "../../../../../app/modules/icon/components/Forbid";
import Medicine from "../../../../../app/modules/icon/components/Medicine";
import Passport from "../../../../../app/modules/icon/components/Passport";
import Safe from "../../../../../app/modules/icon/components/Safe";
import Sick from "../../../../../app/modules/icon/components/Sick";
import Time from "../../../../../app/modules/icon/components/Time";
import FaqCard from "../../../FaqCard/FaqCard";

export default function It() {
  return (
    <>
      <FaqCard
        icon={Safe}
        title="L'assicurazione di viaggio per Cuba è obbligatoria?"
      >
        Sì. Dal 30 marzo 2010, il governo cubano ha stabilito che tutti i
        viaggiatori stranieri e i cittadini cubani residenti all'estero devono
        essere in possesso di un'assicurazione medica di viaggio al momento
        dell'ingresso a Cuba.
      </FaqCard>

      <FaqCard
        icon={Medicine}
        title="A cosa serve l'assicurazione di viaggio per Cuba?"
      >
        L'assicurazione medica serve principalmente a coprire le spese sanitarie
        durante il soggiorno a Cuba. Sono inoltre previste altre coperture
        opzionali, inclusa la perdita del bagaglio: verifica le condizioni al
        momento della sottoscrizione della polizza.
      </FaqCard>

      <FaqCard
        icon={Passport}
        title="Sono cittadino cubano: devo comunque sottoscrivere un'assicurazione di viaggio per Cuba?"
      >
        Sì. Tutti i viaggiatori, sia stranieri che cubani residenti all'estero,
        devono essere in possesso di un'assicurazione medica di viaggio per
        entrare a Cuba.
      </FaqCard>

      <FaqCard
        icon={Forbid}
        title="Cosa succede se decido di viaggiare a Cuba senza assicurazione?"
      >
        Oltre al rischio di dover affrontare spese mediche molto elevate anche
        per problemi minori, se decidi di viaggiare a Cuba senza l'assicurazione
        medica obbligatoria potresti essere sottoposto a controlli da parte
        delle autorità cubane ed essere obbligato ad acquistare l'assicurazione
        direttamente in aeroporto, a costi maggiori.
      </FaqCard>

      <FaqCard
        icon={Sick}
        title="Cosa succede se mi ammalo e non ho un'assicurazione di viaggio per Cuba?"
      >
        Come già accennato, l'assicurazione medica di viaggio per Cuba è
        obbligatoria. Il turista che, in violazione della legge, riesce a
        entrare a Cuba senza assicurazione medica si assume un grande rischio.
        In caso di malattia o infortunio, dovrà pagare di tasca propria le spese
        mediche, che possono facilmente ammontare a diverse migliaia di dollari.
      </FaqCard>

      <FaqCard
        icon={Safe}
        title="Perché Visa4Cuba consiglia l'assicurazione medica di viaggio ESICUBA?"
      >
        È un SERVIZIO offerto all'interno del territorio nazionale della
        Repubblica di Cuba che garantisce serenità e protezione in caso di
        necessità di assistenza medica per malattia, farmaci ambulatoriali o
        ricoveri, rimpatri (sanitari o funebri), anticipo di fondi, gestione
        documenti, differenze tariffarie per perdita del volo, tra gli altri.
      </FaqCard>

      <FaqCard
        icon={Safe}
        title="Quali vantaggi offre l'assicurazione medica ESICUBA?"
      >
        Con l'assicurazione medica ESICUBA, oltre a non dover anticipare alcuna
        spesa medica, avrai accesso alle migliori cliniche internazionali a Cuba
        e riceverai un'assistenza rapida ed efficiente. Quali sono le cliniche
        internazionali convenzionate con l'assicurazione? Clicca qui per vedere
        tutte le cliniche internazionali a Cuba a cui puoi rivolgerti in caso di
        necessità presentando la nostra assicurazione.
      </FaqCard>

      <FaqCard icon={Medicine} title="Cosa devo fare in caso di necessità?">
        In caso di necessità, è necessario contattare immediatamente i nostri
        uffici all'Avana o il centro operativo cubano ai numeri +53 78668527,
        8339 e 8920.
      </FaqCard>

      <FaqCard
        icon={Avatar}
        title="Quali sono i limiti di età per sottoscrivere un'assicurazione medica per Cuba?"
      >
        La polizza sanitaria può essere sottoscritta per assicurati di età
        compresa tra 0 e 70 anni. Se hai più di 70 anni, contattaci per un
        preventivo personalizzato.
      </FaqCard>

      <FaqCard
        icon={Time}
        title="Qual è la durata massima dell'assicurazione medica per Cuba?"
      >
        L'assicurazione può essere sottoscritta per viaggi con una durata
        massima di 32 giorni. Se il tuo viaggio è più lungo, contattaci per un
        preventivo personalizzato.
      </FaqCard>
    </>
  );
}
