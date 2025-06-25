import FaqCard from "../FaqCard/FaqCard";
import Time from "../../../app/modules/icon/components/Time";
import Avatar from "../../../app/modules/icon/components/Avatar";
import Medicine from "../../../app/modules/icon/components/Medicine";
import Safe from "../../../app/modules/icon/components/Safe";
import Sick from "../../../app/modules/icon/components/Sick";
import Forbid from "../../../app/modules/icon/components/Forbid";
import Passport from "../../../app/modules/icon/components/Passport";

export default function InsurenceFaq() {
  return (
    <>
      <FaqCard
        icon={Safe}
        title="¿Es obligatorio el seguro de viaje para Cuba?"
      >
        Sí. Desde el 30 de marzo de 2010, el gobierno cubano ha establecido que
        todos los viajeros extranjeros y cubanos que residen en el exterior al
        momento de su ingreso a Cuba deben contar con un seguro médico de viaje.
      </FaqCard>

      <FaqCard
        icon={Medicine}
        title="¿Para qué sirve el seguro de viaje para Cuba?"
      >
        El seguro médico se utiliza principalmente para cubrir los gastos
        médicos durante su estadía en Cuba, también se brindan otras posibles
        coberturas, incluida la pérdida de equipaje: verifique al firmar su
        póliza.
      </FaqCard>

      <FaqCard
        icon={Passport}
        title="Soy ciudadano cubano: ¿Todavía tengo que suscribirme a un seguro de viaje para Cuba?"
      >
        Sí. Todos los viajeros, extranjeros y cubanos residentes en el exterior,
        deben estar en posesión de un seguro médico de viaje al ingresar a Cuba.
      </FaqCard>

      <FaqCard
        icon={Forbid}
        title="¿Qué sucede si decido viajar a Cuba sin seguro de viaje?"
      >
        Además del riesgo de tener que afrontar costos médicos muy elevados
        incluso por problemas menores, si decides viajar a Cuba sin seguro
        médico obligatorio puedes estar sujeto al control de las autoridades
        cubanas y estar obligado a comprar el seguro directamente en el
        aeropuerto. a mayores costos.
      </FaqCard>

      <FaqCard
        icon={Sick}
        title="¿Qué pasa si me enfermo y no tengo seguro de viaje para Cuba?"
      >
        Como se mencionó anteriormente, el seguro médico de viaje para Cuba es
        obligatorio. El turista que, en contravención de la ley, logra ingresar
        a Cuba sin seguro médico corre un gran riesgo. De hecho, en caso de
        enfermedad o lesión, tendrá que pagar sus propias facturas médicas, que
        fácilmente pueden ascender a varios miles de dólares.
      </FaqCard>

      <FaqCard
        icon={Safe}
        title="¿Por qué Visa4Cuba recomienda el seguro médico de viaje ESICUBA?"
      >
        Es un SERVICIO dentro del territorio nacional de la República de Cuba,
        que ofrece tranquilidad y protección en caso de necesitar asistencia
        médica por enfermedad, medicamentos ambulatorios o relacionados con una
        hospitalización, repatriaciones (sanitarias o funerarias), anticipo de
        fondos, gestión de documentos, diferencias de precio en el boleto aéreo
        por la pérdida del vuelo, entre otros.
      </FaqCard>

      <FaqCard
        icon={Safe}
        title="¿Qué ventajas ofrece el seguro médico de ESICUBA?"
      >
        Con el seguro médico de ESICUBA, además de no tener que anticipar ningún
        gasto médico, tendrás acceso a las mejores clínicas internacionales en
        Cuba y tendrás una asistencia presencial muy rápida y eficiente. Cuáles
        son las clínicas internacionales a las que tienes acceso a través del
        seguro medico ? Haga clic aquí para ver todas las clínicas
        internacionales en Cuba con las que puede contactar en caso de necesidad
        presentando nuestro seguro
      </FaqCard>

      <FaqCard icon={Medicine} title="¿Qué debo hacer en caso de necesidad?">
        En caso de necesidad, debe comunicarse de inmediato con nuestras
        oficinas en La Habana, o el centro de operaciones cubano al +53
        78668527, 8339 y 8920.
      </FaqCard>

      <FaqCard
        icon={Avatar}
        title="¿Cuáles son los límites de edad para contratar un seguro médico para Cuba?"
      >
        La póliza de salud se puede suscribir para asegurados con edades
        comprendidas entre 0 y 70 años. Si tiene más de 70 años, contáctenos
        para un presupuesto personalizado.
      </FaqCard>

      <FaqCard
        icon={Time}
        title="¿Cuál es la duración máxima del seguro médico para Cuba?"
      >
        El seguro se puede contratar para viajes que tengan una duración máxima
        de 32 días. Si su viaje tiene una duración mayor, contáctenos para un
        presupuesto personalizado.
      </FaqCard>
    </>
  );
}
