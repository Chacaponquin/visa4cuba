import { APP_EMAIL } from "../../../../../../modules/app/domain/constants/app-email";
import { APP_INFO } from "../../../../../../modules/app/domain/constants/app-info";
import type { TranslationRouteBuilder } from "../../../../../../modules/app/domain/core/translation-route-builder";
import A from "../../../../../../modules/app/modules/ui/components/Markdown/components/A/A";
import H2 from "../../../../../../modules/app/modules/ui/components/Markdown/components/H2/H2";
import H3 from "../../../../../../modules/app/modules/ui/components/Markdown/components/H3/H3";
import List from "../../../../../../modules/app/modules/ui/components/Markdown/components/List/List";
import ListItem from "../../../../../../modules/app/modules/ui/components/Markdown/components/ListItem/ListItem";
import P from "../../../../../../modules/app/modules/ui/components/Markdown/components/P/P";
import Strong from "../../../../../../modules/app/modules/ui/components/Markdown/components/Strong/Strong";
import Td from "../../../../../../modules/app/modules/ui/components/Markdown/components/Table/components/Td/Td";
import Th from "../../../../../../modules/app/modules/ui/components/Markdown/components/Table/components/Th/Th";
import Table from "../../../../../../modules/app/modules/ui/components/Markdown/components/Table/Table";
import Layout from "../../../../../../modules/shared/components/Layout/Layout";
import InformationContent from "../../../../shared/components/InformationContent/InformationContent";
import InformationHeader from "../../../../shared/components/InformationHeader/InformationHeader";

interface Props {
  builder: TranslationRouteBuilder;
}

export default function En({ builder }: Props) {
  return (
    <Layout builder={builder}>
      <InformationHeader title="Cookie Policy"></InformationHeader>

      <InformationContent>
        <P>
          EASY TRAVEL SL, registered in Vitoria-Gasteiz, Alava (Spain)
          (hereinafter "Data Controller") is committed at all times to
          protecting the online privacy of its users. This document has been
          prepared pursuant to Art. 13 of EU Regulation 2016/679 (hereinafter
          the "Regulation") in order to enable you familiarize yourself with our
          cookie policy, to understand how your personal information is handled
          when you use {APP_INFO.WEB} (hereinafter collectively referred to as
          "Website").
        </P>
        <H2>1. Data Controller and Data Protection Officer "DPO"</H2>
        <P>
          The controller of processing carried out through the Website is EASY
          TRAVEL SL, as defined above. For communications on this matter the
          Controller has set up the email address{" "}
          <A link={APP_EMAIL.LINK} external>
            {APP_EMAIL.EMAIL}
          </A>
          . The Data Protection Officer (hereinafter the “DPO”) pursuant to Art.
          37 et seq. of the Regulation can be contacted via the email address:{" "}
          <A link={APP_EMAIL.LINK} external>
            {APP_EMAIL.EMAIL}
          </A>
          .
        </P>

        <H2>2. Cookies</H2>
        <H3 margin={false}>
          Definitions, characteristics and application of the regulation
        </H3>

        <P>
          Cookies are small text files that websites you visit send and record
          on your computer or mobile device, which are then resent to the same
          websites the next time you visit them. These cookies allow a website
          to remember your actions and preferences (such as, for example, your
          login details, your preferred language, font size, other display
          settings, etc.) so that they do not need to be indicated again when
          you return to that website or browse from one page to another. Cookies
          are used to perform computer authentication, session monitoring and
          storage of information regarding the activities of users who access a
          website and may also contain a unique identification code that enables
          the user's browsing within the website to be tracked for statistical
          or advertising purposes. While browsing a website, users may also
          receive on their computer cookies from websites or web servers other
          than the one they are visiting (so-called "third party" cookies). Some
          operations might not be performed without the use of cookies, which in
          some cases are therefore technically necessary for the website’s
          operation.{" "}
        </P>
        <P>
          There are various types of cookies, depending on their characteristics
          and functions, and they can remain on the user's computer for
          different periods of time. Session cookies are automatically deleted
          when the browser is closed, while persistent cookies remain on the
          user's device until a set deadline.
        </P>
        <P>
          According to the laws in force in Italy, the use of cookies does not
          always require the express consent of the user. In particular,
          "technical cookies", i.e. those used exclusively with a view to
          carrying out the transmission of a communication on an electronic
          communications network or insofar as this is strictly necessary to
          provide a service explicitly requested by the user, do not require
          such consent. In other words, these cookies are essential to the
          functioning of the website or necessary for carrying out the
          activities requested by the user.{" "}
        </P>

        <P>
          According to the Italian Data Protection Authority (see the Decision
          on Simplified Arrangements to Provide Information and Obtain Consent
          Regarding Cookies dated 8 May 2014 and subsequent clarifications,
          hereinafter “Decision”), technical cookies, which do not require
          express consent for their use, also include:{" "}
        </P>

        <List>
          <ListItem>
            <P>
              "analytics cookies" when used directly by the website operator to
              collect information, in aggregate form, on the number of users and
              how they visit the website.
            </P>
          </ListItem>

          <ListItem>
            <P>browsing or session cookies (to authenticate).</P>
          </ListItem>

          <ListItem>
            <P>
              function cookies, which allow the user to browse according to a
              series of selected criteria (for example, language, products
              selected for purchase) in order to improve the service provided to
              the user.{" "}
            </P>
          </ListItem>
        </List>

        <P>
          On the other hand, "profiling cookies", i.e. those designed to create
          user profiles and used to send advertising messages in line with the
          preferences expressed by the user while browsing the web, require the
          prior consent of the user.
        </P>

        <H3>
          Types of cookies used by the Website and the possibility of enabling
          or disabling them
        </H3>

        <P>
          The Website uses the following cookies that can be disabled, except
          for third party cookies for which you must refer directly to the
          enabling/disabling methods for the respective cookies, given in the
          links:
        </P>

        <List>
          <ListItem>
            <P>
              Browsing or session technical cookies that are strictly necessary
              for the functioning of the Website or that allow you to make use
              of the contents and services requested.{" "}
            </P>
          </ListItem>

          <ListItem>
            <P>
              Function cookies, which are used to activate specific features of
              the Website and a series of selected criteria (for example,
              language) in order to improve the service provided.{" "}
            </P>
          </ListItem>
        </List>

        <P>
          <Strong>WARNING</Strong>: By disabling technical and/or function
          cookies, the Website may not be available for consultation or some of
          the Website's services or functions may not be available or may not
          function properly and you may be required to manually change or enter
          certain information or preferences each time you visit the Website.
        </P>

        <P>
          Third party cookies, i.e. cookies from websites or web servers other
          than those of Papernet, used for the purposes of those third parties.
          It should be noted that these third parties, listed below with links
          to their privacy policies, are typically autonomous controllers of the
          data collected through the cookies they use, so you should refer to
          their policies on personal data processing, information and consent
          forms (enabling and disabling of their respective cookies), as
          specified in the above Decision. For completeness, it should be noted
          that Data Controller does its utmost to track cookies on its Website.
          These are regularly updated in the table below, where we provide
          transparency about the cookies Data Controller sends directly to you
          and their purposes. With regard to third parties who send cookies
          through our Website, links to their privacy policies are provided
          below: as already mentioned, we delegate to these third parties
          responsibility for providing the policy and collecting your consent,
          as required by the Decision. This responsibility applies not just to
          the cookies that third parties send directly, but also to any
          additional cookies that are sent through our Website as a result of
          use of services by the third parties themselves. Data Controller has
          no control over cookies sent by the service providers of these third
          parties and does not know their characteristics or purposes. The
          handling of information collected by “third parties” is governed by
          the relevant policies, to which you should refer. To ensure greater
          transparency and convenience, the web addresses of the various
          policies and methods for managing cookies are given below, while we
          specify that the Data Controller has no responsibility for the
          operation of third party cookies on this Website.
        </P>

        <P>
          The management of information collected by "third parties" is governed
          by the respective privacy policies, which you are encouraged to
          consult. To ensure greater transparency and convenience, below are the
          web addresses of the various policies and the methods for managing
          cookies, specifying that the Data Controller has no responsibility for
          the operation of third-party cookies on this Site.
        </P>

        <P>
          The following section lists the links to information on third-party
          cookies:
        </P>

        <List>
          <ListItem>
            <P>
              Google:{" "}
              <A
                external
                link="https://www.google.com/policies/privacy/partners/"
              >
                https://www.google.com/policies/privacy/partners/
              </A>
            </P>
          </ListItem>
        </List>

        <Table>
          <thead>
            <tr>
              <Th>Purpose</Th>
              <Th>Technical name</Th>
              <Th>Cookie type, function and purpose</Th>
              <Th>Duration</Th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <Td>Technical</Td>
              <Td>_GRECAPTCHA</Td>
              <Td>
                reCAPTCHA sets a necessary cookie (_GRECAPTCHA) when it is run
                for the purpose of providing its risk analysis.
              </Td>
              <Td>6 months</Td>
            </tr>
            <tr>
              <Td>Technical</Td>
              <Td>ci_session</Td>
              <Td>Allows you to keep the settings chosen during navigation</Td>
              <Td>2 hours</Td>
            </tr>
            <tr>
              <Td>Technical</Td>
              <Td>CONSENT</Td>
              <Td>Used for the consent of Google services</Td>
              <Td>2 years</Td>
            </tr>
            <tr>
              <Td>Analytical</Td>
              <Td>OGPC</Td>
              <Td>This cookie enables the functionality of Google Maps</Td>
              <Td>1 month</Td>
            </tr>
            <tr>
              <Td>Analytical</Td>
              <Td>DV</Td>
              <Td>
                These cookies are used for the purpose of targeted advertising
              </Td>
              <Td>6 hours</Td>
            </tr>
            <tr>
              <Td>Analytical</Td>
              <Td>1P_JAR</Td>
              <Td>
                Stores user preferences and information each time they visit web
                pages containing geographic maps of Google Maps
              </Td>
              <Td>1 month</Td>
            </tr>
            <tr>
              <Td>Analytical</Td>
              <Td>NID</Td>
              <Td>
                It is used for these purposes to show Google ads in Google
                services to users who have logged out after logging in
              </Td>
              <Td>6 months</Td>
            </tr>
            <tr>
              <Td>Analytical</Td>
              <Td>_ga</Td>
              <Td>
                Register a unique ID used to generate statistical data on how
                the visitor uses the website
              </Td>
              <Td>2 years</Td>
            </tr>
            <tr>
              <Td>Analytical</Td>
              <Td>_gat_gtag_UA_*</Td>
              <Td>Used to distinguish users</Td>
              <Td>2 years</Td>
            </tr>
            <tr>
              <Td>Analytical</Td>
              <Td>_ga_*</Td>
              <Td>Used to store and count page views</Td>
              <Td>2 years</Td>
            </tr>
            <tr>
              <Td>Analytical</Td>
              <Td>_gat</Td>
              <Td>
                Used by Google Analytics to limit the frequency of requests
              </Td>
              <Td>End of the browsing session</Td>
            </tr>
            <tr>
              <Td>Analytical</Td>
              <Td>_gid</Td>
              <Td>
                Register a unique ID used to generate statistical data on how
                the visitor uses the website
              </Td>
              <Td>End of the browsing session</Td>
            </tr>
          </tbody>
        </Table>

        <H3>Cookie settings</H3>

        <P>
          You may block or delete (in whole or in part) technical and function
          cookies through the specific features of your browser. However, please
          note that not authorising technical cookies may make it impossible for
          you to use the Website, view its contents and use its services.
          Blocking function cookies may result in certain services or functions
          on the Website not being available or not functioning properly and you
          may be forced to change or manually enter certain information or
          preferences each time you visit the Website.
        </P>

        <P>
          The choices made with regard to cookies on the Website will also be
          recorded in a cookie. However, this cookie may not work properly in
          some circumstances: in such cases, we recommend that you delete
          cookies that you do not like and also block their use through your
          browser’s features. Your cookie preferences should be reset if you use
          multiple devices or browsers to access the Website.{" "}
        </P>

        <H3>How to view and change cookies through your Browser</H3>

        <P>
          You may authorise, block or delete (in whole or in part) cookies
          through the specific features of your browser. For more information on
          how to set cookie preferences through your Browser, please refer to
          the instructions:
        </P>

        <List>
          <ListItem>
            <P>Internet Explorer</P>
          </ListItem>
          <ListItem>
            <P>Firefox</P>
          </ListItem>
          <ListItem>
            <P>Chrome</P>
          </ListItem>
          <ListItem>
            <P>Safari</P>
          </ListItem>
          <ListItem>
            <P>Opera</P>
          </ListItem>
        </List>

        <H2>3. Rights of data subjects</H2>

        <P>
          Pursuant to Art. 15 et seq. of the Regulation, you have the right at
          any time to request access to your Personal Data, its rectification or
          erasure, and to restrict its processing in the cases provided for
          under Art. 18 of the Regulation, to receive the personal data
          concerning you in a structured, commonly used and machine-readable
          format in the cases provided for by Art. 20 of the Regulation. At any
          time, you may revoke your consent pursuant to Art. 7 of the
          Regulation; lodge a complaint with the competent supervisory authority
          pursuant to Art. 77 of the GDPR (Data Protection Authority) pursuant
          to Art. 77 of the Regulation, if you believe that the processing of
          your data infringes the legislation in force.
        </P>

        <P>
          You can object to the processing of your data under Art. 21 of the
          GDPR in which you give evidence of the reasons for your objection: the
          Controller reserves the right to evaluate the request, which will not
          be accepted if there are legitimate grounds for the processing which
          override your interests, rights and freedoms.
        </P>

        <P>
          Requests should be sent in writing to the Controller or to the DPO at
          the following email address:{" "}
          <A link={APP_EMAIL.LINK} external>
            {APP_EMAIL.EMAIL}
          </A>
        </P>
      </InformationContent>
    </Layout>
  );
}
