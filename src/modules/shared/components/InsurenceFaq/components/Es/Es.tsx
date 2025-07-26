import { APP_INFO } from "../../../../../app/domain/constants/app-info";
import Airplane from "../../../../../app/modules/icon/components/Airplane";
import Avatar from "../../../../../app/modules/icon/components/Avatar";
import Medicine from "../../../../../app/modules/icon/components/Medicine";
import Passport from "../../../../../app/modules/icon/components/Passport";
import Phone from "../../../../../app/modules/icon/components/Phone";
import Safe from "../../../../../app/modules/icon/components/Safe";
import Sick from "../../../../../app/modules/icon/components/Sick";
import Time from "../../../../../app/modules/icon/components/Time";
import List from "../../../../../app/modules/ui/components/Markdown/components/List/List";
import ListItem from "../../../../../app/modules/ui/components/Markdown/components/ListItem/ListItem";
import P from "../../../../../app/modules/ui/components/Markdown/components/P/P";
import Strong from "../../../../../app/modules/ui/components/Markdown/components/Strong/Strong";
import FaqCard from "../../../FaqCard/FaqCard";

export default function Es() {
  return (
    <>
      <FaqCard
        icon={Safe}
        title="¿Es obligatorio el seguro de viaje para Cuba?"
      >
        Sí. Desde el 30 de marzo de 2010, el gobierno cubano exige a todos los
        viajeros extranjeros y a los ciudadanos cubanos residentes en el
        extranjero presentar un seguro de viaje válido al entrar en Cuba.
      </FaqCard>

      <FaqCard
        icon={Medicine}
        title="¿Para qué sirve el seguro de viaje para Cuba?"
      >
        El seguro de viaje cubre principalmente los gastos médicos durante tu
        estancia en Cuba. También puede incluir coberturas opcionales como
        pérdida de equipaje, repatriación o asistencia jurídica. Verifica
        siempre las condiciones al contratar tu póliza.
      </FaqCard>

      <FaqCard
        icon={Passport}
        title="Soy ciudadano cubano: ¿Debo contratar igualmente un seguro de viaje para Cuba?"
      >
        Sí. Todos los viajeros, incluidos los cubanos residentes en el
        extranjero, deben presentar un seguro de viaje válido al llegar a Cuba.
        No hay excepciones.
      </FaqCard>

      <FaqCard
        icon={Airplane}
        title="¿Qué ocurre si viajo a Cuba sin seguro de viaje?"
      >
        Puedes ser retenido por las autoridades cubanas y obligado a contratar
        un seguro de viaje local directamente en el aeropuerto, con precios más
        altos y coberturas limitadas. Además, te expones a gastos médicos
        elevados incluso por problemas menores.
      </FaqCard>

      <FaqCard
        icon={Sick}
        title="¿Y si me enfermo y no tengo seguro de viaje en Cuba?"
      >
        En caso de enfermedad o accidente, deberás cubrir todos los costes
        médicos de tu bolsillo, lo que puede suponer varios miles de euros. Por
        eso, el seguro de viaje para Cuba es obligatorio y altamente
        recomendable.
      </FaqCard>

      <FaqCard
        icon={Safe}
        title="¿Por qué Visa4Cuba recomienda el seguro de viaje ESICUBA?"
      >
        Porque es un servicio oficial dentro del territorio cubano. Garantiza
        cobertura completa en hospitales y clínicas autorizadas, acceso a
        medicamentos, repatriaciones médicas o funerarias, adelanto de fondos y
        asistencia en caso de pérdida de documentos o vuelos.
      </FaqCard>

      <FaqCard
        icon={Avatar}
        title="¿Qué ventajas ofrece el seguro de viaje ESICUBA?"
      >
        <List>
          <ListItem>
            <P>Sin adelantos: no pagas por adelantado</P>
          </ListItem>

          <ListItem>
            <P>Asistencia rápida en clínicas internacionales de Cuba</P>
          </ListItem>

          <ListItem>
            <P>Atención personalizada 24/7</P>
          </ListItem>

          <ListItem>
            <P>Cobertura reconocida por el gobierno cubano</P>
          </ListItem>
        </List>
      </FaqCard>

      <FaqCard icon={Phone} title="¿Qué debo hacer en caso de necesidad?">
        Contacta de inmediato con nuestras oficinas en La Habana o llama al
        centro operativo cubano: <Strong>{APP_INFO.PHONE}</Strong>,
        <Strong>8339</Strong>, <Strong>8920</Strong>
      </FaqCard>

      <FaqCard
        icon={Avatar}
        title="¿Cuáles son los límites de edad para contratar un seguro de viaje?"
      >
        Puedes contratarlo desde los 0 hasta los 70 años. Si tienes más de 70,
        contáctanos para un presupuesto personalizado.
      </FaqCard>

      <FaqCard
        icon={Time}
        title="¿Cuál es la duración máxima del seguro de viaje para Cuba?"
      >
        La póliza estándar cubre hasta 32 días. Si tu viaje es más largo,
        ofrecemos extensiones o planes especiales. Escríbenos para una solución
        adaptada.
      </FaqCard>
    </>
  );
}
