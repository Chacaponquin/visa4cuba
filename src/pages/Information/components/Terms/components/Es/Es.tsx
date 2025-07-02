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

export default function Es({ builder }: Props) {
  return (
    <Layout builder={builder}>
      <InformationHeader title="Términos y condiciones"></InformationHeader>

      <InformationContent>
        <H2>1. Condiciones generales de compra de visas y seguros</H2>

        <H3 margin={false}>1.1 Introducción</H3>

        <List>
          <ListItem>
            <P>
              Somos Visa4Cuba, la marca de una sociedad anónima registrada en
              Santa Marta Magdalena (COLOMBIA) con número de registro B85212432.
              A partir de ahora, el término "nosotros" se referirá a Visa4Cuba
              mientras que "usted" se referirá al cliente, entendido como todas
              las personas indicadas en la reserva, incluidas las añadidas o
              sustituidas en fechas posteriores.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Lea atentamente estas condiciones. Al seleccionar "He leído,
              entendido y acepto las condiciones de reserva", acepta cumplir
              estas condiciones y confirma que tiene la autoridad para aceptar
              estos términos en nombre de todas las personas incluidas en el
              grupo.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Estos términos y condiciones contienen en su totalidad el acuerdo
              entre Visa4Cuba y el cliente y reemplazan cualquier entendimiento
              o acuerdo previo (tanto oral como escrito) sobre el tema y no
              pueden ser corregidos o modificados a menos que se acuerde
              expresamente por escrito con Visa4Cuba.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Estos términos y condiciones contienen ciertas exclusiones y
              limitaciones de responsabilidad. Si alguna parte de las
              condiciones resulta inválida o inaplicable, el resto de las
              condiciones seguirán siendo válidas. La condición inválida o
              inaplicable será reemplazada por una expresión alternativa válida
              y aplicable que tenga el mismo significado.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Visa4Cuba es un agencia de viajes debidamente autorizada para
              comercializar visa de turistas por el Consulado de Cuba en Madrid.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Visa4Cuba es un agente intermediario debidamente autorizado para
              comercializar seguros de viaje para turistas emitidos por la
              empresa cubana ESICUBA SA a través de su subsidiaria ASISTUR SA.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Las Autoridades Estatales que emiten Visas son entidades
              independientes y no agentes o empleados de Visa4Cuba. Visa4Cuba no
              se hace responsable de los actos, errores, omisiones, garantías,
              infracciones o negligencia de cualquiera de estos proveedores, así
              como de los daños personales o materiales, muerte u otros daños y
              costos derivados de lo anterior. Visa4Cuba no se hace responsable
              y no devolverá dinero por el incumplimiento total o parcial de sus
              obligaciones contractuales, cuando sean imposibles de cumplir por
              causas de fuerza mayor o eventos fortuitos, entendidos como
              eventos extraordinarios, imprevisibles o previsibles, inevitables
              o derivados de un evento natural, huelgas u otras causas fuera de
              su control directo y no será responsable de ningún gasto
              adicional, omisión, demora.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Las compañías de seguros son compañías independientes y no agentes
              ni empleados de Visa4Cuba. Visa4Cuba no se hace responsable de los
              actos, errores, omisiones, garantías, infracciones o negligencia
              de cualquiera de estos proveedores, así como de los daños
              personales o materiales, muerte u otros daños y costos derivados
              de lo anterior. Visa4Cuba no se hace responsable y no devolverá
              dinero por el incumplimiento total o parcial de sus obligaciones
              contractuales, cuando sean imposibles de cumplir por causas de
              fuerza mayor o eventos fortuitos, entendidos como eventos
              extraordinarios, imprevisibles o previsibles, inevitables o
              derivados de un evento natural, huelgas u otras causas fuera de su
              control directo y no será responsable de ningún gasto adicional,
              omisión, demora.
            </P>
          </ListItem>
        </List>

        <H3>1.2 Procedimiento</H3>

        <P>
          Después de realizar un pedido en nuestro sitio
          www.yourcubavisacover.com, recibirá un correo electrónico de nuestra
          parte confirmando que hemos recibido su pedido. El contrato entre
          nosotros solo se celebrará cuando le enviemos este correo electrónico
          de aceptación.
        </P>

        <H3>1.3 Obtener una visa</H3>

        <P>
          Cuando Visa4Cuba te envía la tarjeta de turista para Cuba, es
          importante que confirmes que has obtenido todas las tarjetas de
          turista para tu viaje. Debe notificarnos inmediatamente por correo
          electrónico si encuentra alguna discrepancia en la documentación.
        </P>

        <H3>1.4 Obtneción del seguro</H3>

        <P>
          Cuando Visa4Cuba le envía un Seguro para Cuba, es importante que
          confirme que ha obtenido todos los Seguros para su viaje. Debe
          notificarnos inmediatamente por correo electrónico si encuentra alguna
          discrepancia en la documentación.
        </P>

        <H3>1.5 Entrega de la visa</H3>

        <List>
          <ListItem>
            <P>
              Visa4Cuba enviará las tarjetas turísticas electrónicamente en
              formato PDF al correo electrónico proporcionado durante la compra.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Recibirá su visa lista para imprimir, junto con instrucciones
              claras sobre cómo utilizarla.
            </P>
          </ListItem>

          <ListItem>
            <P>
              No se aplican costos de envío. El precio total se muestra
              claramente antes de finalizar la compra.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Los pedidos se procesan y envían el mismo día en que se reciben,
              siempre que se realicen antes de las 2 p.m. CEST. Los pedidos
              realizados después de esa hora serán enviados el siguiente día
              hábil.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Tenga en cuenta que, aunque la entrega es inmediata tras el
              procesamiento, pueden existir ligeros retrasos dependiendo del
              proveedor de correo electrónico o configuraciones de seguridad. Si
              su viaje es inminente, le recomendamos realizar la compra con
              antelación y revisar también su carpeta de correo no deseado o
              spam.
            </P>
          </ListItem>
        </List>

        <H3>1.6 Inclumpliento con la entrega de la visa</H3>

        <List>
          <ListItem>
            <P>
              En el improbable caso de que la tarjeta de visa de turista no
              llegue a su destino, se reembolsará el monto total.
            </P>
          </ListItem>

          <ListItem>
            <P>
              No se añadirán a su pedido gastos de envío por mensajería (si es
              solo Seguro)
            </P>
          </ListItem>

          <ListItem>
            <P>
              Los seguros se emiten el mismo día en que se reciben, siempre que
              el pedido se realice antes de las 2 p.m. CEST. Los pedidos
              realizados después de las 2 p.m. CEST se enviarán en los
              siguientes días hábiles.
            </P>
          </ListItem>
        </List>

        <H3>1.7 Envío de los seguros</H3>

        <List>
          <ListItem>
            <P>
              Visa4Cuba enviará los Seguros en formato PDF a la dirección de
              correo electrónico que proporcionó durante la compra.
            </P>
          </ListItem>

          <ListItem>
            <P>
              No se añadirán a su pedido gastos de envío por mensajería (si es
              solo Seguro)
            </P>
          </ListItem>

          <ListItem>
            <P>
              Los seguros se emiten el mismo día en que se reciben, siempre que
              el pedido se realice antes de las 2 p.m. CEST. Los pedidos
              realizados después de las 2 p.m. CEST se enviarán en los
              siguientes días hábiles.
            </P>
          </ListItem>
        </List>

        <H3>1.8 Cancelaciones y reembolsos</H3>

        <List>
          <ListItem>
            <P>
              Si desea cancelar su pedido, puede hacerlo si su seguro aún no se
              ha emitido. Cualquier solicitud de cancelación o modificación debe
              ser enviada a nosotros por escrito, enviando un correo electrónico
              a info@yourcubavisacover.com y entrará en vigencia a partir del
              día de su recepción.
            </P>
          </ListItem>

          <ListItem>
            <P>
              <Strong>
                Todas las cancelaciones y reembolsos estarán sujetos a una
                penalización del 10%
              </Strong>
              , utilizado para cubrir las tarifas bancarias para procesar la
              cancelación o el reembolso. Por lo general, emitimos el seguro
              dentro de 1 día hábil posterior al pago, pero estos tiempos pueden
              variar, así que comuníquese con nosotros para ver el estado de su
              pedido.
            </P>
          </ListItem>
        </List>

        <H3>1.9 Política de devoluciones de visas</H3>

        <List>
          <ListItem>
            <P>
              Los productos pedidos se pueden devolver dentro de los 14 días
              posteriores a la recepción sin especificar el motivo. Si Visa4Cuba
              recibe los productos en buen estado, se reembolsará el importe
              total del pedido. Los productos solo se pueden devolver en su
              estado original, es decir, si no están ni llenos ni doblados.
            </P>
          </ListItem>

          <ListItem>
            <P>
              El Consumidor correrá con los gastos de envío del envío de
              devolución.Todos los reembolsos estarán sujetos a una tarifa de
              cancelación del 10%., utilizado para cubrir las tarifas bancarias
              para procesar la cancelación o el reembolso.
            </P>
          </ListItem>
        </List>

        <H3>1.10 Política de cancelación para el seguro</H3>

        <List>
          <ListItem>
            <P>
              Los seguros pueden ser cancelados dentro de los 14 días siguientes
              a su emisión sin especificar el motivo, siempre dentro de al menos
              48 desde la fecha de inicio de la cobertura del seguro.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Todos los reembolsos estarán sujetos a una tarifa de cancelación
              del 10%., utilizado para cubrir las tarifas bancarias para
              procesar la cancelación o el reembolso.
            </P>
          </ListItem>
        </List>

        <H3>1.11 Descargo de responsabilidad</H3>

        <List>
          <ListItem>
            <P>
              Al enviar sus documentos de viaje, es su responsabilidad verificar
              que se hayan obtenido todas las tarjetas de turista requeridas
              para su viaje, que los seguros tengan las fechas correctas de
              entrada y salida de Cuba, que sus datos personales sean reportados
              cuidadosamente y que su pasaporte es válido por al menos seis
              meses después de la finalización de su viaje.
            </P>
          </ListItem>

          <ListItem>
            <P>
              Tenga en cuenta que incluso cuando se emite una visa, a un viajero
              se le puede negar la entrada ya que en cada país los funcionarios
              de inmigración locales toman la decisión final de entrada.
            </P>
          </ListItem>
        </List>

        <H3>1.12 Limitación de responsabilidad</H3>

        <P>
          En caso de pérdida, pérdida, daño, retraso o destrucción de una
          tarjeta de turista, Visa4Cuba será responsable solo en caso de falla y
          su responsabilidad se limitará al costo básico de reemplazo de ese
          artículo. Visa4Cuba no se hace responsable de los artículos perdidos,
          dañados, retrasados o destruidos por un servicio de entrega o
          autoridad emisora. En la máxima medida permitida por la ley, Visa4Cuba
          excluye o limita cualquier pérdida directa, indirecta o consecuente y
          todas las condiciones y garantías legales o implícitas, incluidas,
          entre otras, la pérdida de ganancias o los costos de viaje o
          vacaciones o cualquier pérdida que surja de la información obtenida
          del sitio web. Sujeto a las demás disposiciones de esta cláusula,
          nuestra máxima responsabilidad por la pérdida que le cause es por
          contrato, acto ilícito u otro, el nivel de las comisiones pagadas por
          usted se limitará a los no consumidores; para Consumidores, pérdidas y
          daños hasta un máximo de 250 Euros de los que Visa4Cuba sea
          directamente responsable y que puedan ser totalmente imputables a una
          incorrecta prestación del servicio.
        </P>

        <H3>1.13 General</H3>

        <P>
          Estos términos y condiciones y cualquier documento a los que se haga
          referencia expresa constituyen el acuerdo completo entre nosotros y
          reemplazan todas las discusiones, correspondencia, negociaciones,
          acuerdos previos, entendimientos o acuerdos entre nosotros
          relacionados con el objeto de cualquier contrato. Si alguna
          disposición de estos Términos no cumple con alguna ley, la disposición
          debe leerse de una manera que le dé el mayor efecto posible. Si no es
          posible darle algún efecto a la disposición, entonces debe
          considerarse separable del resto de los Términos. Cuando Visa4Cuba no
          pueda cumplir con ninguna obligación en virtud del contrato debido a
          cualquier circunstancia, asunto o cosa más allá de su control
          razonable ("fuerza mayor"), seremos liberados de tales obligaciones en
          la medida de dicha prevención, restricción o interferencia de la
          manera causada. Visa4Cuba puede subcontratar todo o parte de sus
          obligaciones o ceder todo o parte de sus derechos bajo este contrato.
          Este acuerdo no crea ningún derecho exigible para una persona que no
          sea parte de él, excepto cualquier sucesor o cesionario legítimo.
          Cualquier disputa que surja de este contrato se regirá por las leyes
          de la legislación española y ambas partes acuerdan someterse a la
          jurisdicción exclusiva de los juzgados y tribunales de España. Este
          acuerdo no crea ningún derecho exigible para una persona que no sea
          parte de él, excepto cualquier sucesor o cesionario legítimo.
          Cualquier disputa que surja de este contrato se regirá por las leyes
          de la legislación española y ambas partes acuerdan someterse a la
          jurisdicción exclusiva de los juzgados y tribunales de España. Este
          acuerdo no crea ningún derecho exigible para una persona que no sea
          parte de él, excepto cualquier sucesor o cesionario legítimo.
          Cualquier disputa que surja de este contrato se regirá por las leyes
          de la legislación española y ambas partes acuerdan someterse a la
          jurisdicción exclusiva de los juzgados y tribunales de España.
        </P>
      </InformationContent>
    </Layout>
  );
}
