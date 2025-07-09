import Avatar from "../../../../../app/modules/icon/components/Avatar";
import Forbid from "../../../../../app/modules/icon/components/Forbid";
import Medicine from "../../../../../app/modules/icon/components/Medicine";
import Passport from "../../../../../app/modules/icon/components/Passport";
import Safe from "../../../../../app/modules/icon/components/Safe";
import Sick from "../../../../../app/modules/icon/components/Sick";
import Time from "../../../../../app/modules/icon/components/Time";
import FaqCard from "../../../FaqCard/FaqCard";

export default function En() {
  return (
    <>
      <FaqCard icon={Safe} title="Is travel insurance mandatory for Cuba?">
        Yes. Since March 30, 2010, the Cuban government has established that all
        foreign travelers and Cuban citizens residing abroad must have travel
        medical insurance upon entry to Cuba.
      </FaqCard>

      <FaqCard
        icon={Medicine}
        title="What is the purpose of travel insurance for Cuba?"
      >
        The medical insurance is primarily used to cover medical expenses during
        your stay in Cuba. It may also include other possible coverages,
        including lost luggage—check your policy at the time of signing.
      </FaqCard>

      <FaqCard
        icon={Passport}
        title="I'm a Cuban citizen: Do I still need travel insurance for Cuba?"
      >
        Yes. All travelers, both foreigners and Cubans residing abroad, must
        have travel medical insurance when entering Cuba.
      </FaqCard>

      <FaqCard
        icon={Forbid}
        title="What happens if I decide to travel to Cuba without travel insurance?"
      >
        In addition to the risk of facing very high medical costs even for minor
        issues, if you decide to travel to Cuba without the mandatory medical
        insurance, you may be subject to checks by Cuban authorities and
        required to purchase insurance directly at the airport—at higher costs.
      </FaqCard>

      <FaqCard
        icon={Sick}
        title="What happens if I get sick and don't have travel insurance for Cuba?"
      >
        As mentioned above, travel medical insurance for Cuba is mandatory. A
        tourist who, in violation of the law, manages to enter Cuba without
        medical insurance takes a significant risk. In the event of illness or
        injury, they will have to pay their own medical bills, which can easily
        amount to several thousand dollars.
      </FaqCard>

      <FaqCard
        icon={Safe}
        title="Why does Visa4Cuba recommend ESICUBA travel medical insurance?"
      >
        It is a SERVICE within the national territory of the Republic of Cuba
        that offers peace of mind and protection in case of needing medical
        assistance due to illness, outpatient medications or hospitalization,
        repatriation (medical or funerary), cash advances, document management,
        fare differences due to missed flights, among others.
      </FaqCard>

      <FaqCard
        icon={Safe}
        title="What are the advantages of ESICUBA medical insurance?"
      >
        With ESICUBA medical insurance, in addition to not having to pay any
        upfront medical expenses, you will have access to the best international
        clinics in Cuba and receive fast and efficient in-person assistance.
        Which international clinics can you access through this insurance? Click
        here to see all international clinics in Cuba that you can contact in
        case of need by presenting our insurance.
      </FaqCard>

      <FaqCard icon={Medicine} title="What should I do in case of need?">
        In case of need, you must immediately contact our offices in Havana, or
        the Cuban operations center at +53 78668527, 8339, and 8920.
      </FaqCard>

      <FaqCard
        icon={Avatar}
        title="What are the age limits for purchasing medical insurance for Cuba?"
      >
        The health policy can be purchased for individuals between 0 and 70
        years of age. If you are over 70, contact us for a personalized quote.
      </FaqCard>

      <FaqCard
        icon={Time}
        title="What is the maximum duration of medical insurance for Cuba?"
      >
        The insurance can be contracted for trips with a maximum duration of 32
        days. If your trip lasts longer, contact us for a personalized quote.
      </FaqCard>
    </>
  );
}
