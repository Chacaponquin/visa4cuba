import { APP_IMAGES } from "../../../../modules/app/domain/constants/app-images";
import LayoutHeader from "../../../../modules/shared/components/Layout/components/LayoutHeader/LayoutHeader";

export default function Header() {
  return (
    <LayoutHeader
      image={APP_IMAGES.HEALTH.src}
      description="Protege tu viaje a Cuba con nuestros seguros especializados. Cobertura médica completa, asistencia 24/7 y la mejor atención para que disfrutes tu experiencia sin preocupaciones."
      title="Obten total tranquilidad con"
    ></LayoutHeader>
  );
}
