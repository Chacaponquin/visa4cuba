import type { TranslationRouteBuilder } from "../../../../../../modules/app/domain/core/translation-route-builder";
import H2 from "../../../../../../modules/app/modules/ui/components/Markdown/components/H2/H2";
import H3 from "../../../../../../modules/app/modules/ui/components/Markdown/components/H3/H3";
import List from "../../../../../../modules/app/modules/ui/components/Markdown/components/List/List";
import ListItem from "../../../../../../modules/app/modules/ui/components/Markdown/components/ListItem/ListItem";
import P from "../../../../../../modules/app/modules/ui/components/Markdown/components/P/P";
import Strong from "../../../../../../modules/app/modules/ui/components/Markdown/components/Strong/Strong";
import Layout from "../../../../../../modules/shared/components/Layout/Layout";
import InformationContent from "../../../../shared/components/InformationContent/InformationContent";
import InformationHeader from "../../../../shared/components/InformationHeader/InformationHeader";

interface Props {
  builder: TranslationRouteBuilder;
}

export default function En({ builder }: Props) {
  return (
    <Layout builder={builder}>
      <InformationHeader title="Términos y condiciones"></InformationHeader>

      <InformationContent>
        <H2>1. General Conditions for the Purchase of Visas and Insurance</H2>

        <H3 margin={false}>1.1 Introduction</H3>

        <List>
          <ListItem>
            <P>
              We are Visa4Cuba, the brand of a corporation registered in Santa
              Marta Magdalena (COLOMBIA) with registration number B85212432.
              From now on, the term "we" will refer to Visa4Cuba, while "you"
              will refer to the client, understood as all persons indicated in
              the reservation, including those added or replaced at a later
              date.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Please read these conditions carefully. By selecting "I have read,
              understood, and accept the reservation conditions," you agree to
              abide by these conditions and confirm that you have the authority
              to accept these terms on behalf of all persons included in the
              group.
            </P>
          </ListItem>

          <ListItem>
            <P>
              These terms and conditions contain the entire agreement between
              Visa4Cuba and the client and supersede any prior understandings or
              agreements (whether oral or written) on the subject matter. They
              cannot be amended or modified unless expressly agreed in writing
              with Visa4Cuba.
            </P>
          </ListItem>

          <ListItem>
            <P>
              These terms and conditions contain certain exclusions and
              limitations of liability. If any part of the terms and conditions
              is found to be invalid or unenforceable, the remaining terms and
              conditions will remain valid. The invalid or unenforceable
              condition will be replaced by a valid and enforceable alternative
              term that has the same meaning.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Visa4Cuba is a travel agency duly authorized to market tourist
              visas by the Cuban Consulate in Madrid.{" "}
            </P>
          </ListItem>

          <ListItem>
            <P>
              Visa4Cuba is a duly authorized intermediary agent to market travel
              insurance for tourists issued by the Cuban company ESICUBA SA
              through its subsidiary ASISTUR SA.
            </P>
          </ListItem>

          <ListItem>
            <P>
              The State Authorities that issue visas are independent entities
              and not agents or employees of Visa4Cuba. Visa4Cuba is not
              responsible for the acts, errors, omissions, warranties, breaches,
              or negligence of any of these providers, as well as for personal
              or property damage, death, or other damages and costs arising from
              the foregoing. Visa4Cuba is not responsible and will not refund
              money for the total or partial non-fulfillment of its contractual
              obligations when they are impossible to fulfill due to force
              majeure or fortuitous events, understood as extraordinary,
              unforeseeable or foreseeable, unavoidable events or arising from a
              natural event, strikes, or other causes beyond its direct control,
              and will not be liable for any additional expenses , omissions, or
              delays.
            </P>
          </ListItem>

          <ListItem>
            <P>
              The insurance companies are independent companies and not agents
              or employees of Visa4Cuba. Visa4Cuba is not responsible for the
              acts, errors, omissions, warranties, breaches, or negligence of
              any of these providers, nor for personal or property damage,
              death, or other damages and costs arising from the foregoing.
              Visa4Cuba is not responsible and will not refund any money for the
              total or partial non-fulfillment of its contractual obligations
              when these are impossible to fulfill due to force majeure or
              unforeseeable events, understood as extraordinary, unforeseeable
              or foreseeable, unavoidable events, or events arising from a
              natural event, strikes, or other causes beyond its direct control,
              and will not be liable for any additional expenses, omissions, or
              delays.
            </P>
          </ListItem>
        </List>

        <H3>1.2 Procedure</H3>

        <P>
          After placing an order on our website www.yourcubavisacover.com, you
          will receive an email from us confirming that we have received your
          order. The contract between us will only be concluded when we send you
          this acceptance email.
        </P>

        <H3>1.3 Obtaining a Visa</H3>

        <P>
          When Visa4Cuba sends you the tourist card for Cuba, it is important
          that you confirm that you have obtained all the tourist cards for your
          trip. You must notify us immediately by email if you find any
          discrepancies in the documentation.
        </P>

        <H3>1.4 Obtaining Insurance</H3>

        <P>
          When Visa4Cuba sends you Cuba Insurance, it is important that you
          confirm that you have obtained all the insurance for your trip. You
          must notify us immediately by email if you find any discrepancies in
          the documentation.{" "}
        </P>

        <H3>1.5 Visa Delivery</H3>

        <List>
          <ListItem>
            <P>
              Visa4Cuba will send tourist cards electronically in PDF format to
              the email address provided during purchase.
            </P>
          </ListItem>

          <ListItem>
            <P>
              You will receive your visa ready to print, along with clear
              instructions on how to use it.
            </P>
          </ListItem>

          <ListItem>
            <P>
              No shipping costs apply. The total price is clearly displayed
              before checkout.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Orders are processed and shipped the same day they are received,
              provided they are placed before 2 p.m. CEST. Orders placed after
              that time will be shipped the next business day.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Please note that although delivery is immediate after processing,
              there may be slight delays depending on your email provider or
              security settings. If your trip is imminent, we recommend making
              your purchase in advance and also checking your spam or junk mail
              folder.
            </P>
          </ListItem>
        </List>

        <H3>1.6 Visa Delivery Failure</H3>

        <List>
          <ListItem>
            <P>
              In the unlikely event that the tourist visa card does not arrive
              at its destination, the full amount will be refunded.
            </P>
          </ListItem>

          <ListItem>
            <P>
              No courier shipping charges will be added to your order (if it is
              Insurance only).
            </P>
          </ListItem>

          <ListItem>
            <P>
              Insurances are issued the same day they are received, provided the
              order is placed before 2 p.m. CEST. Orders placed after 2 p.m.
              CEST will be shipped on the following business days.
            </P>
          </ListItem>
        </List>

        <H3>1.7 Shipping of Insurance</H3>

        <List>
          <ListItem>
            <P>
              Visa4Cuba will send the Insurance Policy in PDF format to the
              email address you provided during purchase.
            </P>
          </ListItem>

          <ListItem>
            <P>
              No courier shipping costs will be added to your order (if it is
              Insurance only).
            </P>
          </ListItem>

          <ListItem>
            <P>
              Insurance policies are issued on the same day they are received,
              provided that the order is placed before 2 p.m. CEST. Orders
              placed after 2 p.m. CEST will be shipped on the following business
              days.
            </P>
          </ListItem>
        </List>

        <H3>1.8 Cancellations and Refunds</H3>

        <List>
          <ListItem>
            <P>
              If you wish to cancel your order, you may do so if your insurance
              has not yet been issued. Any cancellation or modification request
              must be sent to us in writing by emailing
              info@yourcubavisacover.com and will take effect on the day it is
              received.
            </P>
          </ListItem>

          <ListItem>
            <P>
              <Strong>
                All cancellations and refunds will be subject to a 10% penalty
              </Strong>
              , used to cover bank fees for processing the cancellation or
              refund. We typically issue insurance within 1 business day of
              payment, but these times may vary, so please contact us to check
              the status of your order.{" "}
            </P>
          </ListItem>
        </List>

        <H3>1.9 Visa Return Policy</H3>

        <List>
          <ListItem>
            <P>
              Ordered products can be returned within 14 days of receipt without
              specifying a reason. If Visa4Cuba receives the products in good
              condition, the full order amount will be refunded. Products can
              only be returned in their original condition, that is, if they are
              neither full nor folded.
            </P>
          </ListItem>

          <ListItem>
            <P>
              The consumer will bear the return shipping costs. All refunds will
              be subject to a 10% cancellation fee, used to cover bank fees for
              processing the cancellation or refund.
            </P>
          </ListItem>
        </List>

        <H3>1.10 Insurance Cancellation Policy</H3>

        <List>
          <ListItem>
            <P>
              Insurance policies may be canceled within 14 days of issuance
              without specifying a reason, provided that cancellations are made
              at least 48 days after the start date of the insurance coverage.
            </P>
          </ListItem>

          <ListItem>
            <P>
              All refunds will be subject to a 10% cancellation fee, used to
              cover bank fees for processing the cancellation or refund.
            </P>
          </ListItem>
        </List>

        <H3>1.11 Disclaimer</H3>

        <List>
          <ListItem>
            <P>
              When submitting your travel documents, it is your responsibility
              to verify that all required tourist cards have been obtained for
              your trip, that insurance policies reflect the correct entry and
              exit dates for Cuba, that your personal information is carefully
              recorded, and that your passport is valid for at least six months
              after the end of your trip.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Please note that even when a visa is issued, a traveler may be
              denied entry, as local immigration officials in each country make
              the final entry decision.
            </P>
          </ListItem>
        </List>

        <H3>1.12 Limitation of Liability</H3>

        <P>
          In the event of loss, damage, delay, or destruction of a tourist card,
          Visa4Cuba will be liable only in the event of failure, and its
          liability will be limited to the basic replacement cost of that item.
          Visa4Cuba is not responsible for items lost, damaged, delayed, or
          destroyed by a delivery service or issuing authority. To the maximum
          extent permitted by law, Visa4Cuba excludes or limits any direct,
          indirect, or consequential loss and all statutory or implied
          conditions and warranties, including, but not limited to, loss of
          profits or travel or vacation costs, or any loss arising from
          information obtained from the website. Subject to the other provisions
          of this clause, our maximum liability for loss caused to you is
          whether in contract, tort, or otherwise. The level of fees paid by you
          will be limited to non-consumers. For Consumers, losses and damages up
          to a maximum of 250 Euros for which Visa4Cuba is directly responsible
          and which may be fully attributable to improper provision of the
          service.
        </P>

        <H3>1.13 General</H3>

        <P>
          These terms and conditions and any documents expressly referred to
          herein constitute the entire agreement between us and supersede all
          discussions, correspondence, negotiations, prior agreements,
          understandings, or arrangements between us relating to the subject
          matter of any contract. If any provision of these Terms is
          inconsistent with any law, the provision must be read in a way that
          gives it the greatest possible effect. If it is not possible to give
          the provision any effect, then it must be deemed severable from the
          rest of the Terms. When Visa4Cuba is unable to perform any obligations
          under the contract due to any circumstance, matter, or thing beyond
          its reasonable control ("force majeure"), we will be released from
          such obligations to the extent such prevention, restriction, or
          interference was caused. Visa4Cuba may subcontract all or part of its
          obligations or assign all or part of its rights under this agreement.
          This agreement does not create any enforceable rights for a person who
          is not a party to it, except for any legitimate successor or assignee.
          Any dispute arising from this agreement will be governed by the laws
          of Spain, and both parties agree to submit to the exclusive
          jurisdiction of the courts of Spain. This agreement does not create
          any enforceable rights for a person who is not a party to it, except
          for any legitimate successor or assignee. Any dispute arising from
          this agreement will be governed by the laws of Spain, and both parties
          agree to submit to the exclusive jurisdiction of the courts of Spain.
          This agreement does not create any enforceable rights for a person who
          is not a party to it, except for any legitimate successor or assignee.
          Any dispute arising from this contract will be governed by Spanish
          law, and both parties agree to submit to the exclusive jurisdiction of
          the courts of Spain.
        </P>
      </InformationContent>
    </Layout>
  );
}
