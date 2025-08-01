import type { TranslationRouteBuilder } from "../../../../../../../../modules/app/domain/core/translation-route-builder";
import H1 from "../../../../../../../../modules/app/modules/ui/components/Markdown/components/H1/H1";
import H2 from "../../../../../../../../modules/app/modules/ui/components/Markdown/components/H2/H2";
import List from "../../../../../../../../modules/app/modules/ui/components/Markdown/components/List/List";
import ListItem from "../../../../../../../../modules/app/modules/ui/components/Markdown/components/ListItem/ListItem";
import P from "../../../../../../../../modules/app/modules/ui/components/Markdown/components/P/P";
import Strong from "../../../../../../../../modules/app/modules/ui/components/Markdown/components/Strong/Strong";
import BlogLayout from "../../../../shared/components/BlogLayout/BlogLayout";

interface Props {
  builder: TranslationRouteBuilder;
}

export default function En({ builder }: Props) {
  return (
    <BlogLayout builder={builder}>
      <H1>
        From 1 July 2025, the visa for Cuba is electronic: here’s what changes
        for European travellers
      </H1>

      <P>
        Starting <Strong>1 July 2025</Strong>, entry to Cuba will require{" "}
        <Strong>only an electronic visa</Strong>.
      </P>

      <P>
        The traditional <Strong>paper tourist card</Strong>, known to all those
        who have travelled to the Caribbean island, is now officially{" "}
        <Strong>replaced by the e-Visa.</Strong>
      </P>

      <P>
        This is a major change for travellers from Europe (Italy, Spain,
        Germany, France, etc.), and it’s crucial to understand how to apply for
        the new <Strong>Cuba visa</Strong>.
      </P>

      <H2>What is the new electronic visa for Cuba?</H2>

      <P>
        <Strong>The electronic visa for Cuba (e-Visa)</Strong> is an official
        travel authorisation issued online by the Cuban government.
      </P>

      <P>
        It is no longer a paper document sent by post or presented at the
        airport, but a <Strong>digital document linked to your passport</Strong>
        .
      </P>

      <P>
        The new system allows Cuban authorities to better control entries and
        speeds up border checks. The e-Visa has the{" "}
        <Strong>same validity</Strong> as the old tourist card:{" "}
        <Strong>30 days stay</Strong>, with the possibility of a 30-day
        extension once in Cuba.
      </P>

      <H2>Farewell tourist card: what changes from 1 July?</H2>

      <P>
        Until 30 June 2025, European travellers would receive a{" "}
        <Strong>green paper tourist card</Strong>, to be shown at airport
        check-in and upon arrival. From July onwards, that procedure is no
        longer valid.
      </P>

      <P>Here’s what changes:</P>

      <List>
        <ListItem>
          <P>No physical documents by post</P>
        </ListItem>

        <ListItem>
          <P>Everything is digital</P>
        </ListItem>

        <ListItem>
          <P>
            The process is handled online through authorised platforms like
            Visa4Cuba
          </P>
        </ListItem>
      </List>

      <H2>Why you should act now</H2>

      <P>
        Travelling without the new <Strong>Cuba e-Visa</Strong> poses real
        risks:
      </P>

      <List>
        <ListItem>
          <P>You may not be allowed to board your flight</P>
        </ListItem>

        <ListItem>
          <P>Airlines now verify e-Visa validity online</P>
        </ListItem>

        <ListItem>
          <P>
            If you don’t have it, you may be refused at boarding with no refund
          </P>
        </ListItem>
      </List>

      <P>
        For this reason, it’s essential to request your visa{" "}
        <Strong>before you travel</Strong>
        and make sure it’s been approved.
      </P>

      <H2>How to apply for the Cuba e-Visa</H2>

      <P>The process is simple and 100% online:</P>

      <List>
        <ListItem>
          <P>Complete the online form with your personal details</P>
        </ListItem>

        <ListItem>
          <P>Upload your passport (valid for at least 6 months)</P>
        </ListItem>

        <ListItem>
          <P>Make the online payment</P>
        </ListItem>

        <ListItem>
          <P>Receive your approved e-Visa by email</P>
        </ListItem>
      </List>

      <P>
        With Visa4Cuba, the entire process is done in <Strong>English</Strong>,
        with <Strong>personal support</Strong> and automatic delivery of your
        e-Visa to your inbox.
      </P>

      <H2>How much does the Cuba e-Visa cost?</H2>

      <P>
        The cost of the <Strong>Cuba electronic</Strong> visa depends on the
        service chosen. With Visa4Cuba, the basic package starts from{" "}
        <Strong>€39</Strong>, and includes:
      </P>

      <List>
        <ListItem>
          <P>Online processing</P>
        </ListItem>

        <ListItem>
          <P>Delivery by email within 24–48 hours</P>
        </ListItem>

        <ListItem>
          <P>Support before and after your trip</P>
        </ListItem>
      </List>

      <P>There are also complete packages that include:</P>

      <List>
        <ListItem>
          <P>There are also complete packages that include:</P>
        </ListItem>

        <ListItem>
          <P>Guided assistance with the D’Viajeros form</P>
        </ListItem>
      </List>

      <H2>Is travel insurance still required?</H2>

      <P>
        <Strong>Yes, travel medical insurance for Cuba</Strong> remains
        mandatory.Even with an e-Visa, you must present valid insurance upon
        arrival.
      </P>

      <P>
        Otherwise, authorities may deny you entry or require you to purchase a
        local insurance (which is often more expensive and less comprehensive).
      </P>

      <P>
        Visa4Cuba offers complete packages that include official,
        government-approved insurance.
      </P>

      <H2>Why choose Visa4Cuba?</H2>

      <List>
        <ListItem>
          <P>Interface in English, designed for European travellers</P>
        </ListItem>

        <ListItem>
          <P>Support via email and WhatsApp</P>
        </ListItem>

        <ListItem>
          <P>Guaranteed delivery within 24–48 hours</P>
        </ListItem>

        <ListItem>
          <P>Complete simplicity: we take care of everything</P>
        </ListItem>
      </List>

      <H2>Conclusion</H2>

      <P>
        If you’re planning a trip to Cuba after <Strong>1 July 2025</Strong>,
        make sure you’re ready: the{" "}
        <Strong>electronic visa is now mandatory</Strong>.
      </P>

      <P>
        Don’t wait until the last minute:{" "}
        <Strong>apply today for your Cuba visa online</Strong> and travel with
        peace of mind.
      </P>
    </BlogLayout>
  );
}
