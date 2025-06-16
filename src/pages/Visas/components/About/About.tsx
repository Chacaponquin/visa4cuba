import { Link } from "react-router";
import Airplane from "../../../../modules/app/modules/icon/components/Airplane";
import Card from "../../../../modules/app/modules/icon/components/Card";
import Button from "../../../../modules/app/modules/ui/components/Button/Button";
import P from "../../../../modules/app/modules/ui/components/P/P";
import LayoutSection from "../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";
import InfoCard from "../How/components/InfoCard/InfoCard";
import { APP_ROUTES } from "../../../../modules/app/domain/constants/app-routes";

export default function About() {
  return (
    <LayoutSection
      title="Visado turístico o visado normal para llegar a Cuba?"
      description="Aquí está toda la información útil"
    >
      <InfoCard
        title="¿Sientes tu también la llamada de Cuba?"
        icon={Airplane}
        color="primary"
      >
        <P>
          Esta claro: playas encantadoras, naturaleza frondosa, música caribeña
          en el aire y personas abiertas y sonrientes hacen de esta isla un
          lugar particularmente anhelado por los viajeros de todo el mundo. De
          hecho, ya estás imaginando relajarte al sol y luego bucearte en el
          agua del océano, descubrir las calles de La Habana Vieja siguiendo las
          huellas de Hemingway y saborear un buen cigarro. Ya has comprado los
          billetes de avión y reservado tu alojamiento... en definitiva: ¡estás
          a pocos pasos de las vacaciones de tus sueños! Pero recuerda que para
          llegar a Cuba necesitas el visado que, por suerte, puedes conseguir
          fácilmente online.
        </P>
      </InfoCard>

      <InfoCard
        title="¿Qué es exactamente la Visa para Cuba?"
        icon={Card}
        color="secondary"
      >
        <P>
          Comúnmente llamado "tarjeta de turista", el visado es un documento
          obligatorio para poder entrar en el país y por lo tanto será mejor
          obtenerlo lo antes posible. La " tarjeta de turista " para Cuba debe
          ser solicitada antes de salir y te permite permanecer en la isla
          durante 30 días, con la posibilidad de prorrogarlo de hasta 60 días
          pagando un suplemento en cualquier oficina de inmigración, poco antes
          de la expiración del documento. No es posible extender el período de
          validez del documento de antemano, ni es posible comprar un visado con
          una validez superior a los 30 días.
        </P>

        <P>
          Pero es fundamental hacer una precisión: el documento llamado visado
          turístico para Cuba, coincide con la VISA, es decir con la tarjeta
          turística para Cuba. El auténtico "visado para Cuba" es el documento
          que SOLO se requiere a los ciudadanos de algunos países con régimen
          especial, que deben dirigirse a la embajada o al consulado de Cuba en
          su propio país de residencia para solicitarlo y obtenerlo.
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
