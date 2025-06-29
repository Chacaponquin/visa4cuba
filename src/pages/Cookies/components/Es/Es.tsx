import { APP_EMAIL } from "../../../../modules/app/domain/constants/app-email";
import { APP_INFO } from "../../../../modules/app/domain/constants/app-info";
import type { TranslationRouteBuilder } from "../../../../modules/app/domain/core/translation-route-builder";
import A from "../../../../modules/app/modules/ui/components/Markdown/components/A/A";
import H2 from "../../../../modules/app/modules/ui/components/Markdown/components/H2/H2";
import H3 from "../../../../modules/app/modules/ui/components/Markdown/components/H3/H3";
import List from "../../../../modules/app/modules/ui/components/Markdown/components/List/List";
import ListItem from "../../../../modules/app/modules/ui/components/Markdown/components/ListItem/ListItem";
import P from "../../../../modules/app/modules/ui/components/Markdown/components/P/P";
import Strong from "../../../../modules/app/modules/ui/components/Markdown/components/Strong/Strong";
import Td from "../../../../modules/app/modules/ui/components/Markdown/components/Table/components/Td/Td";
import Th from "../../../../modules/app/modules/ui/components/Markdown/components/Table/components/Th/Th";
import Table from "../../../../modules/app/modules/ui/components/Markdown/components/Table/Table";
import Layout from "../../../../modules/shared/components/Layout/Layout";
import InformationContent from "../../../Information/shared/components/InformationContent/InformationContent";
import InformationHeader from "../../../Information/shared/components/InformationHeader/InformationHeader";

interface Props {
  builder: TranslationRouteBuilder;
}

export default function Es({ builder }: Props) {
  return (
    <Layout builder={builder}>
      <InformationHeader title="Política de cookies"></InformationHeader>

      <InformationContent>
        <P>
          EASY TRAVEL SL, registrada en Vitoria-Gasteiz, Álava (España) (en
          adelante "Responsable del Tratamiento") se compromete en todo momento
          a proteger la privacidad en línea de sus usuarios. Este documento ha
          sido preparado de conformidad con el Art. 13 del Reglamento de la UE
          2016/679 (en adelante el "Reglamento") para permitirle familiarizarse
          con nuestra política de cookies, y comprender cómo se manejan sus
          datos personales cuando utiliza {APP_INFO.WEB} (en adelante
          colectivamente referida como "Sitio Web").
        </P>
        <H2>
          1. Responsable del Tratamiento y Delegado de Protección de Datos "DPO"
        </H2>
        <P>
          El responsable del tratamiento realizado a través del Sitio Web es
          EASY TRAVEL SL, tal y como se define arriba. Para comunicaciones sobre
          este tema, el Responsable ha habilitado el correo electrónico{" "}
          <A link={APP_EMAIL.LINK}>{APP_EMAIL.EMAIL}</A>. El Delegado de
          Protección de Datos (en adelante "DPO") según el Art. 37 y ss. del
          Reglamento puede ser contactado en:{" "}
          <A link={APP_EMAIL.LINK}>{APP_EMAIL.EMAIL}</A>.
        </P>
        <H2>2. Cookies</H2>
        <H3 margin={false}>
          Definiciones, características y aplicación de la normativa
        </H3>
        <P>
          Las cookies son pequeños archivos de texto que los sitios web que
          visita envían y almacenan en su ordenador o dispositivo móvil, que
          luego se reenvían a los mismos sitios web la próxima vez que los
          visita. Estas cookies permiten que un sitio web recuerde sus acciones
          y preferencias (como, por ejemplo, sus datos de inicio de sesión, su
          idioma preferido, tamaño de fuente, otras configuraciones de
          visualización, etc.) para que no tenga que volver a indicarlos cada
          vez que regrese a ese sitio web o navegue de una página a otra. Las
          cookies se utilizan para realizar autenticación informática, monitoreo
          de sesiones y almacenamiento de información sobre las actividades de
          los usuarios que acceden a un sitio web y también pueden contener un
          código de identificación único que permite rastrear la navegación del
          usuario dentro del sitio web con fines estadísticos o publicitarios.
          Mientras navega por un sitio web, los usuarios también pueden recibir
          en su ordenador cookies de sitios web o servidores web distintos del
          que están visitando (las llamadas "cookies de terceros"). Algunas
          operaciones no podrían realizarse sin el uso de cookies, que en
          algunos casos son, por tanto, técnicamente necesarias para el
          funcionamiento del sitio web.
        </P>
        <P>
          Existen varios tipos de cookies, según sus características y
          funciones, y pueden permanecer en el ordenador del usuario durante
          distintos períodos de tiempo. Las cookies de sesión se eliminan
          automáticamente cuando se cierra el navegador, mientras que las
          cookies persistentes permanecen en el dispositivo del usuario hasta un
          plazo determinado.
        </P>
        <P>
          Según las leyes vigentes en Italia, el uso de cookies no siempre
          requiere el consentimiento expreso del usuario. En particular, las
          "cookies técnicas", es decir, aquellas utilizadas exclusivamente para
          llevar a cabo la transmisión de una comunicación en una red de
          comunicaciones electrónicas o en la medida estrictamente necesaria
          para proporcionar un servicio explícitamente solicitado por el
          usuario, no requieren dicho consentimiento. En otras palabras, estas
          cookies son esenciales para el funcionamiento del sitio web o
          necesarias para realizar las actividades solicitadas por el usuario.
        </P>
        <P>
          Según la Autoridad Italiana de Protección de Datos (véase la Decisión
          sobre Disposiciones Simplificadas para Proporcionar Información y
          Obtener Consentimiento Respecto a las Cookies del 8 de mayo de 2014 y
          aclaraciones posteriores, en adelante "Decisión"), las cookies
          técnicas, que no requieren consentimiento expreso para su uso, también
          incluyen:
        </P>
        <List>
          <ListItem>
            <P>
              "cookies de análisis" cuando son utilizadas directamente por el
              operador del sitio web para recopilar información, de forma
              agregada, sobre el número de usuarios y cómo visitan el sitio web.
            </P>
          </ListItem>

          <ListItem>
            <P>cookies de navegación o de sesión (para autenticarse).</P>
          </ListItem>

          <ListItem>
            <P>
              cookies de funcionalidad, que permiten al usuario navegar según
              una serie de criterios seleccionados (por ejemplo, idioma,
              productos seleccionados para compra) para mejorar el servicio
              proporcionado al usuario.
            </P>
          </ListItem>
        </List>

        <P>
          Por otro lado, las "cookies de perfil", es decir, aquellas diseñadas
          para crear perfiles de usuario y utilizadas para enviar mensajes
          publicitarios en línea con las preferencias expresadas por el usuario
          durante la navegación web, requieren el consentimiento previo del
          usuario.
        </P>

        <H3>
          Tipos de cookies utilizadas por el Sitio Web y posibilidad de
          habilitarlas o deshabilitarlas
        </H3>

        <P>
          El Sitio Web utiliza las siguientes cookies que pueden deshabilitarse,
          excepto en el caso de las cookies de terceros, para las que deberá
          consultar directamente los métodos de habilitación/deshabilitación de
          las respectivas cookies en , que se indican en los enlaces :
        </P>

        <List>
          <ListItem>
            <P>
              Cookies técnicas de navegación o de sesión que son estrictamente
              necesarias para el funcionamiento del Sitio Web o que le permiten
              hacer uso de los contenidos y servicios solicitados.{" "}
            </P>
          </ListItem>

          <ListItem>
            <P>
              Cookies de función, que se utilizan para activar características
              específicas de el Sitio Web y una serie de criterios seleccionados
              (por ejemplo, idioma) con el fin de mejorar el servicio prestado.{" "}
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
          The management of information collected by «third parties» is governed
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
              <A link="https://www.google.com/policies/privacy/partners/">
                https://www.google.com/policies/privacy/partners/
              </A>
            </P>
          </ListItem>
        </List>

        <Table>
          <thead>
            <tr>
              <Th>Finalidad</Th>
              <Th>Nombre técnico</Th>
              <Th>Tipo, función y finalidad de la cookie</Th>
              <Th>Duración</Th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <Td>Técnico</Td>
              <Td>_GRECAPTCHA</Td>
              <Td>
                reCAPTCHA establece una cookie necesaria (_GRECAPTCHA) cuando se
                ejecuta con el fin de proporcionar su análisis de riesgos.
              </Td>
              <Td>6 meses</Td>
            </tr>
            <tr>
              <Td>Técnica</Td>
              <Td>ci_session</Td>
              <Td>
                Permite conservar la configuración elegida durante la navegación
              </Td>
              <Td>2 horas</Td>
            </tr>
            <tr>
              <Td>Técnica</Td>
              <Td>CONSENT</Td>
              <Td>
                Se utiliza para el consentimiento de los servicios de Google
              </Td>
              <Td>2 años</Td>
            </tr>
            <tr>
              <Td>Analítica</Td>
              <Td>OGPC</Td>
              <Td>Esta cookie habilita la funcionalidad de Google Maps</Td>
              <Td>1 mes</Td>
            </tr>
            <tr>
              <Td>Analítica</Td>
              <Td>DV</Td>
              <Td>
                Estas cookies se utilizan con fines publicitarios específicos
              </Td>
              <Td>6 horas</Td>
            </tr>
            <tr>
              <Td>Analítica</Td>
              <Td>1P_JAR</Td>
              <Td>
                Almacena las preferencias y la información del usuario cada vez
                que visita páginas web que contienen mapas geográficos de Google
                Maps.
              </Td>
              <Td>1 mes</Td>
            </tr>
            <tr>
              <Td>Analítico</Td>
              <Td>NID</Td>
              <Td>
                Se utiliza con el fin de mostrar anuncios de Google en los
                servicios de Google a los usuarios que han cerrado sesión
                después de iniciar sesión.
              </Td>
              <Td>6 meses</Td>
            </tr>
            <tr>
              <Td>Analítico</Td>
              <Td>_ga</Td>
              <Td>
                Registra un ID único que se utiliza para generar datos
                estadísticos sobre cómo el visitante utiliza el sitio web.
              </Td>
              <Td>2 años</Td>
            </tr>
            <tr>
              <Td>Analítico</Td>
              <Td>_gat_gtag_UA_*</Td>
              <Td>Se utiliza para distinguir a los usuarios</Td>
              <Td>2 años</Td>
            </tr>
            <tr>
              <Td>Analítico</Td>
              <Td>_ga_*</Td>
              <Td>
                Se utiliza para almacenar y contar las visitas a la página
              </Td>
              <Td>2 años</Td>
            </tr>
            <tr>
              <Td>Analítico</Td>
              <Td>_gat</Td>
              <Td>
                Utilizado por Google Analytics para limitar la frecuencia de las
                solicitudes
              </Td>
              <Td>Fin de la sesión de navegación</Td>
            </tr>
            <tr>
              <Td>Analítico</Td>
              <Td>_gid</Td>
              <Td>
                Registra un identificador único que se utiliza para generar
                datos estadísticos sobre cómo el visitante utiliza el sitio web.
              </Td>
              <Td>Fin de la sesión de navegación</Td>
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
          multiple devices or browsers to access the Website.
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
          <A link={APP_EMAIL.LINK}>{APP_EMAIL.EMAIL}</A>
        </P>
      </InformationContent>
    </Layout>
  );
}
