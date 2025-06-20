import FaqCard from "../FaqCard/FaqCard";
import Time from "../../../app/modules/icon/components/Time";
import P from "../../../app/modules/ui/components/P/P";
import Sad from "../../../app/modules/icon/components/Sad";
import Calendar from "../../../app/modules/icon/components/Calendar";
import World from "../../../app/modules/icon/components/World";
import Bed from "../../../app/modules/icon/components/Bed";
import Book from "../../../app/modules/icon/components/Book";
import Passport from "../../../app/modules/icon/components/Passport";
import Airplane from "../../../app/modules/icon/components/Airplane";

export default function VisaFaq() {
  return (
    <>
      <FaqCard
        icon={Airplane}
        title="¿Para qué sirve el visado turístico para llegar a Cuba?"
      >
        <P>
          El visado para Cuba te permite de entrar y de permanecer en el
          territorio cubano durante un máximo de 30 días. El visado puede
          ampliarse hasta 60 días solicitándolo en una oficina de inmigración y
          pagando un suplemento.
        </P>
      </FaqCard>

      <FaqCard icon={Passport} title="¿Qué tengo que hacer con mi visado?">
        <P>
          Antes de subir al avión, tienes que mostrar tu visado turístico al
          personal del aeropuerto, de lo contrario no te permitirá de viajar. Al
          llegar en Cuba las autoridades de aduaneras locales comprobarán y
          sellarán tu tarjeta turística. Luego tendrás que guardarlo y mostrarlo
          en los hoteles o casas especiales donde te alojarás, y finalmente
          tendrás que devolverlo en el aeropuerto cuando te vayas.
        </P>
      </FaqCard>

      <FaqCard
        icon={Book}
        title="¿Qué documentos necesito para obtener un visado para Cuba?"
      >
        <P>
          Necesitarás un pasaporte con una validez mínima de 6 meses y un seguro
          médico
        </P>
      </FaqCard>

      <FaqCard
        icon={Bed}
        title="¿Es necesario tener ya reservado el alojamiento para solicitar un visado a Cuba?"
      >
        <P>
          Antes era obligatorio especificar el alojamiento durante la solicitud
          del visado, pero ya no es necesario.
        </P>
      </FaqCard>

      <FaqCard
        icon={World}
        title="¿Puedo gestionar mi solicitud para el visado para llegar a Cuba únicamente por Internet?"
      >
        <P>
          El procedimiento se realiza totalmente online, pero tienes que
          proporcionar una dirección postal en la que recibirás tu visado por
          correo.
        </P>
      </FaqCard>

      <FaqCard
        icon={Time}
        title="¿Cuánto tiempo tengo para conservar mi tarjeta de turista?"
      >
        <P>
          Tienes que conservar tu documento hasta que salgas de Cuba y mostrarlo
          en aeropuerto a tu regreso. Antes de salir del país, tienes que
          devolverlo a las autoridades aduaneras.
        </P>
      </FaqCard>

      <FaqCard
        icon={Sad}
        title="He perdido mi visado turístico para Cuba. ¿Qué tengo que hacer?"
      >
        <P>
          Si pierdes tu visado, no hay ningún problema en particular: tendrás
          que rellenar una declaración escrita en aeropuerto y entregarla a la
          oficina de inmigración.
        </P>
      </FaqCard>

      <FaqCard
        icon={Calendar}
        title="¿El visado turístico para Cuba tiene una fecha de caducidad?"
      >
        <P>
          El visado para Cuba no caduca. Una vez que lo hayas comprado, podrás
          utilizarlo siempre todas la veces que lo deseas. Pero recomendamos de
          comprarlo con antelación a tu viaje para evitar posibles retrasos en
          la entrega por parte del correo.
        </P>
      </FaqCard>
    </>
  );
}
