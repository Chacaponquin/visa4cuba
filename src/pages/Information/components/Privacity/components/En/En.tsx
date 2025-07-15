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
    <Layout
      builder={builder}
      title="Privacy Policy - Visa4Cuba"
      description="Learn how we protect your personal data at Visa4Cuba. Read our privacy policy for more information about how your information is handled."
    >
      <InformationHeader title="Privacy Policies" />

      <InformationContent>
        <H2>1. Website Terms and Conditions of Use</H2>

        <P>
          Welcome to our website. By continuing to browse and use this website,
          you agree to comply with and be bound by the following terms and
          conditions of use, which, together with our privacy policy, govern the
          relationship between <Strong>Visa4Cuba</Strong> and you regarding this
          website. From now on, the terms "Visa4Cuba" and "we" refer to the
          owner of this website. Our company <Strong>EASY TRAVEL SL</Strong> is
          registered in Vitoria-Gasteiz, Alava, Spain, and its tax
          identification number (NIF) is 517726181. The term "you" refers to the
          user of our website.
        </P>

        <P>
          <Strong>
            Use of this website is subject to the following terms of use:
          </Strong>
        </P>

        <List>
          <ListItem>
            <P>
              The content of the pages is for your information and use only. It
              may also be subject to change without prior notice.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Neither we nor any third parties guarantee the accuracy,
              timeliness, performance, or suitability of the information and
              materials found or offered on this website for any particular
              purpose. You acknowledge that some information and materials may
              contain inaccuracies or errors for which we shall not be liable to
              the fullest extent permitted by law.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Your use of any information or materials on this website is
              entirely at your own risk, and we shall not assume any liability.
              It is your responsibility to ensure that all products, services,
              or information available through this website meet your specific
              requirements.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Every effort will be made to keep the website up and running
              normally. However, Cubacation assumes no liability if the website
              is unavailable at any time for technical reasons beyond our
              control.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Under no circumstances will we be liable for any loss or damage,
              including, without limitation, indirect or consequential damages,
              or any loss or damage resulting from loss of data or profits,
              associated with the use of this website.
            </P>
          </ListItem>

          <ListItem>
            <P>
              This website contains material which is owned by us or which we
              have licensed. This material includes, but is not limited to, the
              design, appearance, and graphics. Any reproduction not in
              accordance with the copyright terms set forth below is prohibited.{" "}
            </P>
          </ListItem>

          <ListItem>
            <P>
              All trademarks not owned by us and reproduced on this website are
              duly acknowledged.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Unauthorized use of this website may give rise to claims for
              damages and/or be a criminal offense.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Our website may occasionally include links to other websites.
              These links are provided for your convenience to provide certain
              information. This does not mean that we endorse that website, and
              therefore we have no responsibility or control over the content,
              nature, or availability of the linked websites.
            </P>
          </ListItem>

          <ListItem>
            <P>
              You may not create a link to this website from another website or
              document without the prior written consent of Visa4Cuba.{" "}
            </P>
          </ListItem>

          <ListItem>
            <P>
              The use of this website and any dispute arising from such use are
              subject to the laws of Spain.
            </P>
          </ListItem>
        </List>

        <H2>2. Copyright</H2>

        <P>
          This website and its contents are the property of EASY TRAVEL SL. All
          rights reserved. Any redistribution or reproduction of part or all of
          the contents in any form is prohibited, except in the following cases:
        </P>

        <List>
          <ListItem>
            <P>
              You may print or download to a local hard drive portions of the
              content for your personal, non-commercial use.
            </P>
          </ListItem>

          <ListItem>
            <P>
              You may copy the content to third parties for their personal,
              non-commercial use, but only if you acknowledge that our website
              is the source of the material.
            </P>
          </ListItem>
        </List>

        <P>
          You may not, except with our written permission, distribute or
          commercialize the content of this website. Nor may you transmit it or
          store it in another website or other form of electronic storage
          system.
        </P>

        <H2>3. Privacy Policy</H2>

        <H3 margin={false}>3.1 What personal data do we collect?</H3>

        <List>
          <ListItem>
            <P>
              When you make a reservation, we collect basic information such as
              your name, email address, and other contact details. Mandatory
              information that we require will always be marked with an asterisk
              on the website. You may also provide us with additional personal
              data during communications about your reservation via email or
              phone.
            </P>
          </ListItem>

          <ListItem>
            <P>
              We may store certain personal data, including your contact
              information and order details.
            </P>
          </ListItem>

          <ListItem>
            <P>
              We may also log your IP address and the type of browser you use
              when you visit our website.{" "}
            </P>
          </ListItem>

          <ListItem>
            <P>
              We may use cookies. Cookies are small information files that are
              sent to your browser and stored on your computer's hard drive. If
              you visit our website again, our server may recognize the cookie
              and provide information about your last visit. You can usually
              modify your browser settings to accept or reject all cookies, or
              alternatively, be notified when a cookie is created.
            </P>
          </ListItem>
        </List>

        <H3>3.2 How do we use your personal data?</H3>

        <List>
          <ListItem>
            <P>
              We use your personal data to manage or communicate with you about
              your reservation.
            </P>
          </ListItem>

          <ListItem>
            <P>
              If you so wish and select this option on our website, Visa4Cuba
              will send you information about other products or services that
              may interest you.
            </P>
          </ListItem>

          <ListItem>
            <P>
              We may access, copy, preserve, disclose, remove, suspend, or
              delete any personal information generated, stored, transmitted, or
              used through or in connection with your reservation if required to
              do so by applicable laws, statutes, regulations, or codes of
              conduct of competent authorities.
            </P>
          </ListItem>

          <ListItem>
            <P>We may use your IP address to create customer profiles. </P>
          </ListItem>

          <ListItem>
            <P>
              We may use cookies to provide you with a more personalized and
              user-friendly visit to our website and to help us track traffic
              patterns among users. Cookies cannot read your hard drive or other
              cookie files.
            </P>
          </ListItem>
        </List>

        <H3>3.3 How do we protect your personal data?</H3>

        <P>
          We take the necessary precautions to protect your personal data from
          loss, misuse, unauthorized access, alteration, or destruction. To do
          this, we use industry-standard Secure Sockets Layer (SSL) technology,
          which encrypts sensitive information such as your bank card details.
          Payment and your bank card details are handled solely by our partner
          bank, Banco BBVA, through a secure payment platform.{" "}
        </P>

        <H3>3.4 To whom may we disclose your personal data?</H3>

        <P>
          <Strong>
            We may disclose your personal data to the extent reasonably
            necessary to:
          </Strong>
        </P>

        <List>
          <ListItem>
            <P>
              To third parties, including our hosting company, our online
              payment service provider, service providers, and facility owners,
              for the purpose of managing your reservation.
            </P>
          </ListItem>

          <ListItem>
            <P>
              In the circumstances specified in clause 3.2 of this document.
            </P>
          </ListItem>

          <ListItem>
            <P>
              In the context of a sale or merger of part or all of our business
            </P>
          </ListItem>
        </List>

        <H3>3.5 How can you access and correct your personal data?</H3>

        <P>
          You can access and correct your personal data by contacting us through
          our website.
        </P>

        <H3>3.6 Consent</H3>

        <P>
          By providing your personal information to us in any way, you agree
          that we may collect, store, and process your personal information in
          the manner described in this privacy policy.
        </P>
      </InformationContent>
    </Layout>
  );
}
