import { Link } from "react-router";
import { APP_ROUTES } from "../../../../modules/app/domain/constants/app-routes";
import LayoutHeader from "../../../../modules/shared/components/Layout/components/LayoutHeader/LayoutHeader";
import ArrowButton from "../../../../modules/app/modules/ui/components/ArrowButton/ArrowButton";
import { APP_IMAGES } from "../../../../modules/app/domain/constants/app-images";

export default function Header() {
  return (
    <LayoutHeader
      image={APP_IMAGES.CUBA_1.src}
      title="Descubre Cuba con"
      description="Somos una agencia de viajes especializada en crear experiencias únicas e inolvidables en la hermosa isla de Cuba. Con más de 10 años de experiencia, te ayudamos a descubrir la auténtica cultura, historia y belleza cubana."
    >
      <Link to={APP_ROUTES.SHOP}>
        <ArrowButton>Panifica tu viaje</ArrowButton>
      </Link>
    </LayoutHeader>
  );
}
