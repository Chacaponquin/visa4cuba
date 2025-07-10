import FaqCard from "../../../FaqCard/FaqCard";
import Airplane from "../../../../../app/modules/icon/components/Airplane";
import Passport from "../../../../../app/modules/icon/components/Passport";
import Book from "../../../../../app/modules/icon/components/Book";
import World from "../../../../../app/modules/icon/components/World";
import Bed from "../../../../../app/modules/icon/components/Bed";
import Time from "../../../../../app/modules/icon/components/Time";
import Sad from "../../../../../app/modules/icon/components/Sad";
import Calendar from "../../../../../app/modules/icon/components/Calendar";

export default function It() {
  return (
    <>
      <FaqCard
        icon={Airplane}
        title="A cosa serve il visto turistico per entrare a Cuba?"
      >
        Il visto per Cuba ti permette di entrare e soggiornare nel territorio
        cubano per un massimo di 30 giorni. Il visto può essere esteso fino a 60
        giorni richiedendolo presso un ufficio immigrazione e pagando un
        supplemento.
      </FaqCard>

      <FaqCard icon={Passport} title="Cosa devo fare con il mio visto?">
        Prima di salire sull’aereo, devi mostrare il tuo visto turistico al
        personale dell’aeroporto, altrimenti non ti sarà consentito viaggiare.
        All’arrivo a Cuba, le autorità doganali locali controlleranno e
        timbreranno la tua tarjeta turistica. Successivamente dovrai conservarla
        e mostrarla negli hotel o nelle case particular dove alloggerai, e
        infine dovrai restituirla in aeroporto al momento della partenza.
      </FaqCard>

      <FaqCard
        icon={Book}
        title="Quali documenti servono per ottenere un visto per Cuba?"
      >
        Avrai bisogno di un passaporto con una validità minima di 6 mesi e di
        un’assicurazione sanitaria.
      </FaqCard>

      <FaqCard
        icon={Bed}
        title="È necessario avere già prenotato l’alloggio per richiedere un visto per Cuba?"
      >
        In passato era obbligatorio specificare l’alloggio durante la richiesta
        del visto, ma ora non è più necessario.
      </FaqCard>

      <FaqCard
        icon={World}
        title="Posso gestire la richiesta del visto per Cuba completamente online?"
      >
        La procedura si svolge interamente online, ma è necessario fornire un
        indirizzo postale al quale riceverai il visto per posta.
      </FaqCard>

      <FaqCard
        icon={Time}
        title="Per quanto tempo devo conservare la mia tarjeta turistica?"
      >
        Devi conservare il documento fino alla tua partenza da Cuba e mostrarlo
        in aeroporto al ritorno. Prima di lasciare il paese, devi restituirlo
        alle autorità doganali.
      </FaqCard>

      <FaqCard
        icon={Sad}
        title="Ho perso il mio visto turistico per Cuba. Cosa devo fare?"
      >
        Se perdi il visto, non ci sono particolari problemi: dovrai compilare
        una dichiarazione scritta in aeroporto e consegnarla all’ufficio
        immigrazione.
      </FaqCard>

      <FaqCard
        icon={Calendar}
        title="Il visto turistico per Cuba ha una data di scadenza?"
      >
        Il visto per Cuba non ha scadenza. Una volta acquistato, potrai
        utilizzarlo tutte le volte che vuoi. Tuttavia, consigliamo di
        acquistarlo in anticipo rispetto al viaggio per evitare eventuali
        ritardi nella consegna da parte del servizio postale.
      </FaqCard>
    </>
  );
}
