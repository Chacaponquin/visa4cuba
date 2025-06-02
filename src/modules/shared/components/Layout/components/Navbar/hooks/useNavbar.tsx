import { APP_ROUTES } from "../../../../../../app/domain/constants/app-routes";
import type { NavbarSection } from "../domain/navbar-section";

export default function useNavbar() {
  const sections: NavbarSection[] = [
    { link: "", title: "Home" },
    { link: "", title: "Visas" },
    { link: "", title: "Seguros" },
    { link: APP_ROUTES.SHOP, title: "Shop" },
    { link: "", title: "Sobre nosotros" },
  ];

  return { sections };
}
