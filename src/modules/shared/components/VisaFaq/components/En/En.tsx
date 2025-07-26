import FaqCard from "../../../FaqCard/FaqCard";
import Passport from "../../../../../app/modules/icon/components/Passport";
import Book from "../../../../../app/modules/icon/components/Book";
import World from "../../../../../app/modules/icon/components/World";
import Bed from "../../../../../app/modules/icon/components/Bed";
import Time from "../../../../../app/modules/icon/components/Time";
import Sad from "../../../../../app/modules/icon/components/Sad";
import Calendar from "../../../../../app/modules/icon/components/Calendar";
import Avatar from "../../../../../app/modules/icon/components/Avatar";

export default function En() {
  return (
    <>
      <FaqCard
        icon={Passport}
        title="What is the purpose of a tourist visa for Cuba?"
      >
        A tourist visa allows you to enter and stay in Cuba for up to 30 days.
        It can be extended once for an additional 30 days at an immigration
        office by paying a fee.
      </FaqCard>

      <FaqCard
        icon={Avatar}
        title="What should I do with my visa once I receive it?"
      >
        Before boarding your flight, you must show your tourist visa at the
        airport check-in counter. Upon arrival in Cuba, immigration officers
        will stamp it. You must then keep it with you during your stay and
        present it when checking in at hotels or casas particulares. It must be
        returned at the airport upon departure.
      </FaqCard>

      <FaqCard
        icon={Book}
        title="What documents do I need to obtain a visa for Cuba?"
      >
        You need a valid passport (with at least 6 months validity) and valid
        travel medical insurance.
      </FaqCard>

      <FaqCard
        icon={Bed}
        title="Do I need to book accommodation before applying for a visa?"
      >
        No, accommodation details are no longer required at the time of visa
        application.
      </FaqCard>

      <FaqCard icon={World} title="Can I apply for my Cuba visa online only?">
        Yes. The process is entirely online. You must provide a postal address
        to receive the visa by mail.
      </FaqCard>

      <FaqCard icon={Time} title="How long should I keep my tourist visa?">
        You must keep it until you leave the country. Show it again at the
        airport on departure and hand it back to the immigration authorities.
      </FaqCard>

      <FaqCard
        icon={Sad}
        title="I’ve lost my Cuba tourist visa. What should I do?"
      >
        Don't worry. You must fill out a declaration at the airport and present
        it to immigration. A replacement will be issued.
      </FaqCard>

      <FaqCard icon={Calendar} title="Does a Cuba tourist visa expire?">
        No, the visa does not expire. Once issued, you can use it whenever you
        wish. However, we recommend ordering it well in advance to avoid postal
        delays.
      </FaqCard>
    </>
  );
}
