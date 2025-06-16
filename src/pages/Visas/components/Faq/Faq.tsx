import Airplane from "../../../../modules/app/modules/icon/components/Airplane";
import Card from "../../../../modules/app/modules/icon/components/Card";
import LayoutSection from "../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";
import FaqCard from "./components/FaqCard/FaqCard";

export default function Faq() {
  return (
    <LayoutSection
      title="Preguntas Frecuentes"
      description="Resolvemos las dudas más comunes sobre el proceso de obtención de visas para Cuba"
    >
      <FaqCard
        icon={Airplane}
        title="¿Para qué sirve el visado turístico para llegar a Cuba?"
      ></FaqCard>

      <FaqCard
        icon={Card}
        title="¿Qué tengo que hacer con mi visado?"
      ></FaqCard>

      <FaqCard
        icon={Card}
        title="¿Qué documentos necesito para obtener un visado para Cuba?"
      ></FaqCard>

      <FaqCard
        icon={Card}
        title="¿Es necesario tener ya reservado el alojamiento para solicitar un visado a Cuba?"
      ></FaqCard>

      <FaqCard
        icon={Card}
        title="¿Puedo gestionar mi solicitud para el visado para llegar a Cuba únicamente por Internet?"
      ></FaqCard>

      <FaqCard
        icon={Card}
        title="¿Cuánto tiempo tengo para conservar mi tarjeta de turista?"
      ></FaqCard>

      <FaqCard
        icon={Card}
        title="He perdido mi visado turístico para Cuba. ¿Qué tengo que hacer?"
      ></FaqCard>

      <FaqCard
        icon={Card}
        title="¿El visado turístico para Cuba tiene una fecha de caducidad?"
      ></FaqCard>
    </LayoutSection>
  );
}
