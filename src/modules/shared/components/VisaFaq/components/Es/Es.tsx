import FaqCard from "../../../FaqCard/FaqCard";
import Passport from "../../../../../app/modules/icon/components/Passport";
import Book from "../../../../../app/modules/icon/components/Book";
import World from "../../../../../app/modules/icon/components/World";
import Bed from "../../../../../app/modules/icon/components/Bed";
import Time from "../../../../../app/modules/icon/components/Time";
import Sad from "../../../../../app/modules/icon/components/Sad";
import Avatar from "../../../../../app/modules/icon/components/Avatar";
import Calendar from "../../../../../app/modules/icon/components/Calendar";

export default function Es() {
  return (
    <>
      <FaqCard
        icon={Passport}
        title="¿Para qué sirve la visa turística para entrar a Cuba?"
      >
        La visa para Cuba permite entrar y permanecer en el país hasta 30 días.
        Puede extenderse por otros 30 días solicitándolo directamente en una
        oficina de inmigración en Cuba y pagando una tasa adicional.
      </FaqCard>

      <FaqCard icon={Avatar} title="¿Qué tengo que hacer con mi visa?">
        Antes de embarcar, deberás mostrar tu visa turística al personal del
        aeropuerto. De lo contrario, no se te permitirá volar. Al llegar a Cuba,
        las autoridades de aduanas sellarán tu tarjeta de turista. Deberás
        conservarla durante toda tu estancia, presentarla en hoteles o casas
        particulares, y finalmente devolverla al salir del país.
      </FaqCard>

      <FaqCard
        icon={Book}
        title="¿Qué documentos necesito para obtener una visa para Cuba?"
      >
        Solo necesitas un pasaporte con una validez mínima de 6 meses y un
        seguro médico válido.
      </FaqCard>

      <FaqCard
        icon={Bed}
        title="¿Es necesario tener ya reservado el alojamiento para solicitar una visa para Cuba?"
      >
        No. Actualmente no es obligatorio especificar el alojamiento en el
        momento de solicitar tu visa para Cuba. Antes sí lo era, pero esta
        normativa ha cambiado.
      </FaqCard>

      <FaqCard
        icon={World}
        title="¿Puedo gestionar mi solicitud de visa para Cuba completamente online?"
      >
        Sí. Todo el proceso se realiza 100% online. Solo necesitas facilitar una
        dirección postal donde recibirás tu visa para Cuba por correo
        certificado.
      </FaqCard>

      <FaqCard
        icon={Time}
        title="¿Cuánto tiempo debo conservar mi tarjeta de turista?"
      >
        Debes conservar la tarjeta hasta el final de tu estancia. Tendrás que
        mostrarla en el aeropuerto al salir de Cuba y devolverla a las
        autoridades aduaneras.
      </FaqCard>

      <FaqCard
        icon={Sad}
        title="He perdido mi visa turística para Cuba. ¿Qué tengo que hacer?"
      >
        No te preocupes. Tendrás que rellenar una declaración escrita en el
        aeropuerto y entregarla a la oficina de inmigración. Te permitirán salir
        del país sin problemas.
      </FaqCard>

      <FaqCard
        icon={Calendar}
        title="¿La visa para Cuba tiene fecha de caducidad?"
      >
        No. La visa para Cuba no caduca. Una vez emitida, puedes usarla cuando
        quieras. Aun así, recomendamos comprarla con antelación al viaje para
        evitar retrasos en la entrega postal.
      </FaqCard>
    </>
  );
}
