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

export default function En() {
  return (
    <>
      <FaqCard
        icon={Safe}
        title="Is travel medical insurance mandatory for Cuba?"
      >
        Yes. Since 30 March 2010, the Cuban government requires all travellers,
        including Cuban citizens living abroad, to have valid travel medical
        insurance to enter the country.
      </FaqCard>

      <FaqCard
        icon={Medicine}
        title="What is the purpose of travel medical insurance for Cuba?"
      >
        It covers medical expenses during your stay in Cuba. Some policies also
        include extra coverages like luggage protection—check your policy
        details when purchasing.
      </FaqCard>

      <FaqCard
        icon={Passport}
        title="I'm a Cuban citizen living abroad. Do I still need travel insurance?"
      >
        Yes. All foreign visitors and Cubans living outside the island must show
        proof of travel medical insurance when entering Cuba.
      </FaqCard>

      <FaqCard
        icon={Airplane}
        title="What happens if I travel to Cuba without travel insurance?"
      >
        You may be stopped by immigration and forced to buy local insurance at
        the airport at a higher price. You’ll also face serious financial risk
        if medical care is needed.
      </FaqCard>

      <FaqCard
        icon={Sick}
        title="What if I get sick and don’t have travel insurance?"
      >
        You will need to cover all medical expenses out of pocket. These can
        easily run into thousands of euros/dollars, even for basic treatment.
      </FaqCard>

      <FaqCard
        icon={Safe}
        title="Why does Visa4Cuba recommend ESICUBA travel medical insurance?"
      >
        ESICUBA is an official Cuban provider. It guarantees access to Cuban
        medical services and includes coverage for hospitalisation, outpatient
        treatment, medications, repatriation (medical or funeral), document
        assistance, and flight delay-related costs.
      </FaqCard>

      <FaqCard
        icon={Avatar}
        title="What are the benefits of choosing ESICUBA insurance?"
      >
        You won’t have to pay upfront for treatment. You’ll also have access to
        Cuba’s best international clinics and 24/7 in-person support. Need to
        see the full list of partner clinics? Click here.
      </FaqCard>

      <FaqCard icon={Phone} title="What should I do in case of an emergency?">
        Immediately contact our team in Havana or the Cuban support centre at:
        <Strong>{APP_INFO.PHONE}</Strong>, <Strong>8339</Strong> /{" "}
        <Strong>8920</Strong>
      </FaqCard>

      <FaqCard
        icon={Avatar}
        title="What are the age limits for purchasing medical insurance?"
      >
        Coverage is available for travellers aged 0–70. If you're over 70,
        contact us for a custom quote.
      </FaqCard>

      <FaqCard icon={Time} title="What is the maximum duration of coverage?">
        Standard policies cover trips of up to 32 days. If you're staying
        longer, we can provide a personalised insurance plan.
      </FaqCard>
    </>
  );
}
