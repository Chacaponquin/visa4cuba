import LayoutSection from "../../../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";
import P from "../../../../../../modules/app/modules/ui/components/Markdown/components/P/P";
import HowCard from "../../../../../../modules/shared/components/HowCard/HowCard";
import HowContainer from "../../../../../../modules/shared/components/HowContainer/HowContainer";

export default function En() {
  return (
    <LayoutSection
      bg="blue"
      header="Our Suggestions"
      title="How to get your visa to travel to Cuba online"
      description="Here are our suggestions:"
    >
      <HowContainer>
        <HowCard title="Online visa for Cuba for only 35 euros in 48 hours">
          <P>
            Visa4Cuba allows you to easily purchase your visa for Cuba online,
            with the guarantee of receiving it directly at your home within 48
            hours. This means you won’t have to wait in line at any office or
            airport (saving a lot of money too!), so you can get your visa to
            enter Cuba online in no time and with just a few clicks, at a
            competitive price. On many sites, the cost of the visa card for Cuba
            can reach 70 euros, and you need to send several documents to obtain
            it. Visa4Cuba guarantees that you will receive your visa online for
            Cuba for only 35 euros, delivered straight to your address, by
            providing just a few simple details.
          </P>
        </HowCard>

        <HowCard title="100% guaranteed entry to Cuba">
          <P>
            Only trust secure websites: buying your tourist visa from
            non-certified sites may result in receiving fake documents not
            recognized by Cuban authorities, putting you at risk of being denied
            entry into Cuba upon arrival. With Visa4Cuba, your online visa for
            Cuba is 100% guaranteed.
          </P>
        </HowCard>

        <HowCard title="Visa + insurance for Cuba">
          <P>
            Another added value of our online service is the ability to purchase
            both the visa and the insurance for Cuba at the same time. Health
            insurance is mandatory in Cuba since 2010 and allows you to enjoy
            your vacation with peace of mind. Without health coverage, you could
            end up spending a lot in case of minor medical incidents, as Cuban
            hospitals are quite expensive and pharmacies are not always
            well-stocked due to the embargo. Buying your health insurance online
            along with your visa allows you to save time and money, with the
            option to choose a more affordable policy that only covers medical
            expenses, or a more comprehensive travel insurance.
          </P>
        </HowCard>

        <HowCard title="Visa data collection">
          <P>
            Getting your visa for Cuba is easy. First, you’ll need to provide
            your passport details (document number and expiration date). It’s
            important to note that your passport must be valid for at least six
            months beyond your travel dates to enter Cuba. So be sure to check
            if it needs renewal before your trip! Then, you’ll also need to
            provide your health insurance information, if you already have one,
            and your travel start date. Finally, you’ll need to specify the
            address where you want your visa to be mailed. Once you’ve completed
            the process with all the required information, your application will
            be complete and you can securely pay online using most major
            international credit cards.
          </P>
        </HowCard>
      </HowContainer>
    </LayoutSection>
  );
}
