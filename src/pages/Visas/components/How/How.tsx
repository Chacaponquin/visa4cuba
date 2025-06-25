import { Link } from "react-router";
import Airplane from "../../../../modules/app/modules/icon/components/Airplane";
import Form from "../../../../modules/app/modules/icon/components/Form";
import Medal from "../../../../modules/app/modules/icon/components/Medal";
import Time from "../../../../modules/app/modules/icon/components/Time";
import Button from "../../../../modules/app/modules/ui/components/Button/Button";
import LayoutSection from "../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";
import InfoCard from "./components/InfoCard/InfoCard";
import { APP_ROUTES } from "../../../../modules/app/domain/constants/app-routes";
import P from "../../../../modules/app/modules/ui/components/Markdown/components/P/P";

export default function How() {
  return (
    <LayoutSection
      title="Cómo obtener el visado para llegar a Cuba online"
      description="Aquí están nuestras sugerencias:"
    >
      <InfoCard
        color="primary"
        icon={Time}
        title="Visa online para Cuba por solo 35 euros en 48 horas"
      >
        <P>
          VISA4CUBA te permite de comprar fácilmente su visado para Cuba online,
          con la garantía de recibirla directamente en tu hogar en 48 horas. Por
          lo tanto, no tendrá que hacer colas en ninguna oficina ni en el
          aeropuerto (¡y además gastando mucho más dinero!), por lo que tendrá
          su visado para llegar a Cuba online en poco tiempo y en pocos clics, a
          un precio competitivo. En muchos sitios, el costo de la tarjeta para
          Cuba puede llegar a los 70 euros, teniendo que enviar varios
          documentos para obtenerla: VISA4CUBA te garantiza recibir tu visado
          online para Cuba por solo 35 euros con envío directo en tu lugar,
          proporcionando solo algunos simples datos.
        </P>
      </InfoCard>

      <InfoCard
        color="secondary"
        icon={Medal}
        title="Visita a Cuba 100% garantizada"
      >
        <P>
          Solo confías en sitios web seguros: comprando el visado turístico en
          sitios web que no son certificados, podrías recibir documentos falsos
          y no reconocidos por las autoridades cubanas, con el riesgo de no ser
          admitido en Cuba al llegar. Con VISA4CUBA tu visado online para Cuba
          está 100% garantizada
        </P>
      </InfoCard>

      <InfoCard icon={Airplane} title="Visa + seguro para Cuba" color="primary">
        <P>
          Otro valor añadido de nuestro servicio online es la posibilidad de
          comprar a la vez tanto el visado como el seguro para Cuba. El seguro
          médico en Cuba es obligatorio desde 2010 y te permite de vivirte tus
          vacaciones en toda tranquilidad: sin cobertura sanitaria correrías el
          riesgo de gastar sumas muy altas en caso de pequeños incidentes
          médicos, ya que los hospitales cubanos son bastante caros y las
          farmacias no siempre están bien surtidas a causa del embargo. Comprar
          tu seguro médico online junto con el visado te permite de ahorrar
          tiempo y dinero, con la posibilidad de elegir entre una póliza más
          económica, que solo te garantice el reembolso de los gastos médicos, o
          también un seguro de viaje completo.
        </P>
      </InfoCard>

      <InfoCard
        color="secondary"
        icon={Form}
        title="Recopilación de datos de visa"
      >
        <P>
          Obtener el visado para Cuba es fácil. En primer lugar, tendrás que
          proporcionar los datos de su pasaporte (número de documento y fecha de
          caducidad): es importante tener en cuenta que tu pasaporte para llegar
          a Cuba debe tener una validez de al menos seis meses a su vencimiento.
          Por lo tanto, ¡tenga cuidado con la posible necesidad de renovarlo
          antes de irse! A continuación, tendrás que proporcionar también los
          datos del seguro médico, si ya lo has contratado antes, y la fecha de
          inicio de tu viaje. Por último, tendrás que especificar la dirección a
          la que quieres que te envíen el visado por correo. Una vez que hayas
          completado el proceso con todos los datos requeridos, tu solicitud
          estará completa y podrás pagar directamente online en total seguridad
          con la mayoría de las tarjetas de crédito internacionales.
        </P>
      </InfoCard>

      <Link to={APP_ROUTES.SHOP}>
        <Button size="lg" className="mt-4">
          Compra ahora tu visa para Cuba
        </Button>
      </Link>
    </LayoutSection>
  );
}
