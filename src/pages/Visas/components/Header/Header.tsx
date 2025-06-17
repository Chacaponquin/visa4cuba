import { Link } from "react-router";
import LayoutHeader from "../../../../modules/shared/components/Layout/components/LayoutHeader/LayoutHeader";
import { APP_ROUTES } from "../../../../modules/app/domain/constants/app-routes";
import ArrowButton from "../../../../modules/app/modules/ui/components/ArrowButton/ArrowButton";
import { APP_IMAGES } from "../../../../modules/app/domain/constants/app-images";

export default function Header() {
  return (
    <LayoutHeader
      image={APP_IMAGES.CUBA_2.src}
      description="Obtén tu visa para Cuba de manera fácil y confiable. Procesamos todos los tipos de visas con la mejor atención personalizada y tiempos de entrega garantizados."
      title="Obten tu visa de forma segura"
    >
      <Link to={APP_ROUTES.SHOP}>
        <ArrowButton>Solicita tu visa</ArrowButton>
      </Link>
    </LayoutHeader>
  );
}
