import { APP_INFO } from "../../../../../app/domain/constants/app-info";
import Airplane from "../../../../../app/modules/icon/components/Airplane";
import Avatar from "../../../../../app/modules/icon/components/Avatar";
import Medicine from "../../../../../app/modules/icon/components/Medicine";
import Passport from "../../../../../app/modules/icon/components/Passport";
import Phone from "../../../../../app/modules/icon/components/Phone";
import Safe from "../../../../../app/modules/icon/components/Safe";
import Sick from "../../../../../app/modules/icon/components/Sick";
import Time from "../../../../../app/modules/icon/components/Time";
import Strong from "../../../../../app/modules/ui/components/Markdown/components/Strong/Strong";
import FaqCard from "../../../FaqCard/FaqCard";

export default function It() {
  return (
    <>
      <FaqCard
        icon={Safe}
        title="L'assicurazione di viaggio per Cuba è obbligatoria?"
      >
        Sì, è obbligatoria. Dal 30 marzo 2010, tutti i viaggiatori stranieri e i
        cittadini cubani residenti all’estero devono avere un'assicurazione
        medica valida per l'ingresso a Cuba. Verrà richiesta al momento del
        controllo passaporti.
      </FaqCard>

      <FaqCard
        icon={Medicine}
        title="A cosa serve l'assicurazione medica di viaggio per Cuba?"
      >
        L'assicurazione medica copre le spese sanitarie in caso di malattia o
        infortunio durante il soggiorno a Cuba. Alcune polizze includono anche
        copertura per bagagli smarriti, rimpatrio sanitario e spese legali.
        Verifica sempre le condizioni della polizza al momento della
        sottoscrizione.
      </FaqCard>

      <FaqCard
        icon={Passport}
        title="Sono cittadino cubano: devo comunque sottoscrivere un'assicurazione?"
      >
        Sì. Anche se sei cittadino cubano residente all'estero, sei tenuto ad
        avere un'assicurazione medica per entrare a Cuba, come qualsiasi altro
        viaggiatore.
      </FaqCard>

      <FaqCard
        icon={Airplane}
        title="Cosa succede se decido di viaggiare a Cuba senza assicurazione?"
      >
        Se viaggi senza assicurazione, rischi di non poter entrare nel Paese. Le
        autorità potrebbero obbligarti ad acquistarne una in aeroporto, spesso a
        costi più elevati. Inoltre, potresti dover affrontare spese sanitarie
        elevate in caso di emergenza.
      </FaqCard>

      <FaqCard
        icon={Sick}
        title="Cosa succede se mi ammalo e non ho un'assicurazione?"
      >
        In caso di malattia o incidente senza assicurazione, tutte le spese
        mediche saranno a tuo carico. I costi possono arrivare a migliaia di
        euro. Ti consigliamo vivamente di viaggiare con una copertura
        assicurativa valida.
      </FaqCard>

      <FaqCard
        icon={Safe}
        title="Perché Visa4Cuba consiglia l'assicurazione medica ESICUBA?"
      >
        Perché è l'assicurazione ufficiale gestita dallo Stato cubano, valida in
        tutto il territorio nazionale. Include assistenza medica, ricoveri,
        rimpatrio, trasporto, gestione documentale e molto altro. È accettata da
        tutte le autorità cubane senza problemi.
      </FaqCard>

      <FaqCard
        icon={Avatar}
        title="Quali vantaggi offre l'assicurazione medica ESICUBA?"
      >
        Con ESICUBA avrai accesso diretto alle migliori cliniche convenzionate,
        senza anticipare costi. Riceverai assistenza rapida in caso di
        necessità, anche per cure ambulatoriali. È la soluzione più semplice e
        affidabile per viaggiare in sicurezza.
      </FaqCard>

      <FaqCard icon={Phone} title="Cosa devo fare in caso di necessità?">
        In caso di emergenza, contatta subito l’ufficio centrale ESICUBA
        all’Avana o il numero operativo: <Strong>{APP_INFO.PHONE}</Strong>,{" "}
        <Strong>8339</Strong>, o <Strong>8920</Strong>. I contatti sono
        disponibili 24 ore su 24.
      </FaqCard>

      <FaqCard
        icon={Avatar}
        title="Quali sono i limiti di età per sottoscrivere un'assicurazione medica per Cuba?"
      >
        L'assicurazione standard è disponibile per persone tra 0 e 70 anni.
        Oltre questa età è necessario richiedere un preventivo personalizzato.
      </FaqCard>

      <FaqCard
        icon={Time}
        title="Qual è la durata massima dell'assicurazione medica per Cuba?"
      >
        La copertura standard è valida fino a 32 giorni consecutivi. Se il tuo
        viaggio supera questa durata, contattaci per una soluzione
        personalizzata su misura.
      </FaqCard>
    </>
  );
}
