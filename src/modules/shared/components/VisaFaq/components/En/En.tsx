import FaqCard from "../../../FaqCard/FaqCard";
import Airplane from "../../../../../app/modules/icon/components/Airplane";
import Passport from "../../../../../app/modules/icon/components/Passport";
import Book from "../../../../../app/modules/icon/components/Book";
import World from "../../../../../app/modules/icon/components/World";
import Bed from "../../../../../app/modules/icon/components/Bed";
import Time from "../../../../../app/modules/icon/components/Time";
import Sad from "../../../../../app/modules/icon/components/Sad";
import Calendar from "../../../../../app/modules/icon/components/Calendar";

export default function En() {
  return (
    <>
      <FaqCard
        icon={Airplane}
        title="What is the purpose of the tourist visa for Cuba?"
      >
        The tourist visa for Cuba allows you to enter and stay in Cuban
        territory for up to 30 days. The visa can be extended to 60 days by
        applying at an immigration office and paying a fee.
      </FaqCard>

      <FaqCard icon={Passport} title="What should I do with my visa?">
        Before boarding the plane, you must show your tourist visa to the
        airport staff, otherwise you will not be allowed to travel. Upon arrival
        in Cuba, the local customs authorities will check and stamp your tourist
        card. Then you must keep it and show it at the hotels or authorized
        guest houses where you will stay, and finally return it at the airport
        when you leave.
      </FaqCard>

      <FaqCard
        icon={Book}
        title="What documents do I need to get a visa for Cuba?"
      >
        You will need a passport valid for at least 6 months and health
        insurance.
      </FaqCard>

      <FaqCard
        icon={Bed}
        title="Do I need to have accommodation booked to apply for a visa to Cuba?"
      >
        It used to be mandatory to specify your accommodation when applying for
        the visa, but it is no longer required.
      </FaqCard>

      <FaqCard
        icon={World}
        title="Can I apply for the visa to Cuba entirely online?"
      >
        The procedure is carried out entirely online, but you must provide a
        postal address where your visa will be delivered by mail.
      </FaqCard>

      <FaqCard icon={Time} title="How long should I keep my tourist card?">
        You must keep your document until you leave Cuba and present it at the
        airport on your return. Before leaving the country, you must return it
        to the customs authorities.
      </FaqCard>

      <FaqCard
        icon={Sad}
        title="I’ve lost my tourist visa for Cuba. What should I do?"
      >
        If you lose your visa, it’s not a major issue: you will need to fill out
        a written declaration at the airport and submit it to the immigration
        office.
      </FaqCard>

      <FaqCard
        icon={Calendar}
        title="Does the tourist visa for Cuba have an expiration date?"
      >
        The visa for Cuba does not expire. Once purchased, you can use it
        anytime you want. However, we recommend buying it in advance of your
        trip to avoid possible delivery delays by mail.
      </FaqCard>
    </>
  );
}
