import type { TranslationPageProps } from "../../../../modules/app/domain/core/translation-route";
import H2 from "../../../../modules/app/modules/ui/components/Markdown/components/H2/H2";
import H3 from "../../../../modules/app/modules/ui/components/Markdown/components/H3/H3";
import List from "../../../../modules/app/modules/ui/components/Markdown/components/List/List";
import ListItem from "../../../../modules/app/modules/ui/components/Markdown/components/ListItem/ListItem";
import P from "../../../../modules/app/modules/ui/components/Markdown/components/P/P";
import Strong from "../../../../modules/app/modules/ui/components/Markdown/components/Strong/Strong";
import Layout from "../../../../modules/shared/components/Layout/Layout";
import InformationContent from "../../shared/components/InformationContent/InformationContent";
import InformationHeader from "../../shared/components/InformationHeader/InformationHeader";

export default function Privacity({ builder }: TranslationPageProps) {
  return (
    <Layout builder={builder}>
      <InformationHeader title="Políticas de privacidad" />

      <InformationContent>
        <H2>1. Términos y condiciones de uso de la página web</H2>

        <P>
          Bienvenidos a nuestra página web. Si usted continúa navegando y usando
          esta página web, estará aceptando cumplir y limitarse a los siguientes
          términos y condiciones de uso, los que junto a nuestra política de
          privacidad rigen la relación entre <Strong>Visa4Cuba</Strong> y usted
          acerca de esta página web. En lo adelante, los términos “Visa4Cuba” y
          "nosotros" estarán referidos al dueño de esta página web. Nuestra
          compañía <Strong>EASY TRAVEL SL</Strong> está registrada en
          Vitoria-Gasteiz, Alava, España y su número de identificación fiscal
          (NIF) es 517726181. El término "usted" se referirá al usuario de
          nuestra página web.
        </P>

        <P>
          <Strong>
            El uso de esta página web está sujeto a los siguientes términos de
            uso:
          </Strong>
        </P>

        <List>
          <ListItem>
            <P>
              El contenido de las páginas es solamente para su información y
              uso. Además podrá ser sujeto a cambios sin aviso previo.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Ni nosotros ni nuestras terceras partes garantizamos la exactitud,
              la puntualidad, el funcionamiento o la conveniencia de la
              información y los materiales encontrados u ofrecidos en esta
              página web para cualquier propósito particular. Usted acepta que
              alguna información y algunos de los materiales pueden tener
              inexactitudes o errores por los cuales no tendremos
              responsabilidad en la medida de lo que permita la ley.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Con el uso de cualquier información o material de esta página web
              usted asume enteramente su propio riesgo y por lo tanto no
              asumiremos ninguna responsabilidad. Será su responsabilidad
              asegurarse que todos los productos, servicios o información
              disponible en esta página web, cumplen sus requerimientos
              específicos.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Todos los esfuerzos necesarios serán realizados para mantener la
              página web activa y funcionando con normalidad. No obstante,
              Cubacation no asume ninguna responsabilidad si la página se
              encuentra en algún momento inhabilitada por razones técnicas
              ajenas a nuestra voluntad.
            </P>
          </ListItem>

          <ListItem>
            <P>
              En ningún caso seremos responsables ante cualquier pérdida o daño
              incluyendo aquellos sin limitación, indirectos o derivados, ni
              tampoco de las pérdidas o daños que deriven en pérdidas de datos o
              ganancias asociados al uso de esta página web.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Esta página web contiene material que es de nuestra propiedad o
              sobre el cual tenemos licencia de uso. Este material incluye, pero
              no se limita, al diseño, la apariencia y los gráficos. Cualquier
              reproducción que no esté en concordancia con los términos de
              copyright, incluidos más adelante, está prohibida.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Todas las marcas comerciales de las que no somos propietarios y
              que son reproducidas en esta página web, están debidamente
              reconocidas.
            </P>
          </ListItem>

          <ListItem>
            <P>
              El uso no autorizado de esta página web puede acarrear
              reclamaciones por daños y/o ser un delito.
            </P>
          </ListItem>

          <ListItem>
            <P>
              En ocasiones nuestra página web puede incluir enlaces a otras
              páginas. Estos enlaces son proporcionados por su conveniencia para
              brindar cierta información. Esto no significa que nosotros
              avalamos esa página web y por lo tanto no tendremos
              responsabilidad o control sobre el contenido, naturaleza o
              disponibilidad de las páginas enlazadas.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Usted no puede crear un enlace de esta página web desde otra
              página web o documento, sin el previo consentimiento por escrito
              de Visa4Cuba.
            </P>
          </ListItem>

          <ListItem>
            <P>
              El uso de esta página web y cualquier disputa que por dicho uso
              pueda acontecer están sujetas a las leyes de España.
            </P>
          </ListItem>
        </List>

        <H2>2. Copyright</H2>

        <P>
          Esta página web y sus contenidos son propiedad de EASY TRAVEL SL.
          Todos los derechos reservados. Cualquier redistribución o reproducción
          de parte o de todos los contenidos en cualquier forma está prohibida
          excepto en los siguientes casos:
        </P>

        <List>
          <ListItem>
            <P>
              Usted puede imprimir o descargar a un disco duro local, partes del
              contenido para su uso personal y no comercial.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Usted puede copiar el contenido a terceras partes para su uso
              personal y no comercial, pero solo si hace notar que nuestra
              página web es la fuente del material.
            </P>
          </ListItem>
        </List>

        <P>
          Usted no puede, excepto con nuestro permiso escrito, distribuir o
          comercializar el contenido de esta página web. Tampoco podrá
          transmitirlo o almacenarlo en otra página web u otra forma de sistema
          electrónico de almacenaje.
        </P>

        <H2>3. Política de Privacidad</H2>

        <H3 margin={false}>3.1 ¿Qué datos personales recopilamos?</H3>

        <List>
          <ListItem>
            <P>
              Cuando se hace una reservación, nosotros recopilamos información
              básica como puede ser su nombre, su dirección de correo
              electrónico y otros detalles de contacto. La información
              obligatoria que necesitamos aparecerá siempre marcada con un
              asterisco en la página web. Usted puede también darnos datos
              personales adicionales en el transcurso de las comunicaciones
              acerca de su reservación a través del correo electrónico o de
              nuestro teléfono.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Nosotros podemos almacenar ciertos datos personales incluyendo su
              información de contacto y los detalles de su pedido.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Nosotros podemos también registrar su dirección IP y el tipo de
              buscador que usa cuando visite nuestra página web.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Nosotros podemos usar cookies. Cookies son pequeños archivos de
              información enviados a su navegador y almacenados en el disco duro
              de su ordenador. Si usted vuelve a navegar por nuestra web,
              nuestro servidor podrá reconocer el cookie y brindar información
              sobre su última visita. Usualmente usted puede modificar la
              configuración de su buscador para aceptar y rechazar todos los
              cookies o como alternativa, ser notificado cuando una cookie es
              creada.
            </P>
          </ListItem>
        </List>

        <H3>3.2 ¿Cómo usamos sus datos personales?</H3>

        <List>
          <ListItem>
            <P>
              Nosotros usamos su datos personales para administrar o para
              comunicarnos con usted acerca de su reservación.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Si usted así lo desea y selecciona esta opción en nuestra página
              web, Visa4Cuba le enviará información sobre otros productos o
              servicios que le puedan interesar.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Nosotros podremos acceder, copiar, preservar, divulgar, remover,
              suspender o borrar cualquier información personal generada,
              almacenada, transmitida o usada a través o en conexión con su
              reservación, si somos requeridos por leyes aplicables, estatutos,
              regulaciones o códigos de conductas de autoridades competentes.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Nosotros podremos usar su dirección IP con el fin de crear
              perfiles de clientes.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Nosotros podremos usar cookies para brindarle una visita más
              personalizada y amistosa a nuestra página web y para ayudarnos a
              rastrear los patrones de tráfico entre los usuarios. Las cookies
              no pueden leer su disco duro ni otros archivos cookies.
            </P>
          </ListItem>
        </List>

        <H3>3.3 ¿Cómo protegemos sus datos personales?</H3>

        <P>
          Nosotros tomamos las precauciones necesarias para proteger sus datos
          personales de pérdidas, mal uso, acceso no autorizado, alteraciones o
          destrucción. Para eso usamos la tecnología estándar de la industria
          Secure Sockets Layer (SSL) la cual encripta información sensible como
          por ejemplo los detalles de su tarjeta bancaria. El pago y los
          detalles de su tarjeta bancaria son manejados únicamente por nuestro
          banco asociado, Banco BBVA, a través de una plataforma segura de pago.
        </P>

        <H3>3.4 ¿A quién le podremos divulgar sus datos personales?</H3>

        <P>
          <Strong>
            Nosotros podremos divulgar sus datos personales hasta lo
            razonablemente necesario a:
          </Strong>
        </P>

        <List>
          <ListItem>
            <P>
              A terceras partes incluyendo en ellas nuestra compañía receptiva,
              nuestra proveedor del servicio de pago por Internet, los
              proveedores de servicios y los propietarios de las instalaciones
              con el propósito de administrar su reservación.
            </P>
          </ListItem>

          <ListItem>
            <P>
              En las circustancias especificadas en el la cláusula 3.2 de este
              documento.
            </P>
          </ListItem>

          <ListItem>
            <P>
              En un contexto de venta o fusión de parte o todo nuestro negocio
            </P>
          </ListItem>
        </List>

        <H3>3.5 ¿Cómo puede acceder y rectificar sus datos personales?</H3>

        <P>
          Usted puede acceder y rectificar sus datos personal contactándonos a
          través de nuestra página web.
        </P>

        <H3>3.6 Consentimiento</H3>

        <P>
          Al entregarnos su información personal de cualquier forma, usted
          acepta que recopilemos, almacenemos y procesemos su información
          personal en la forma indicada en esta política de privacidad.
        </P>
      </InformationContent>
    </Layout>
  );
}
