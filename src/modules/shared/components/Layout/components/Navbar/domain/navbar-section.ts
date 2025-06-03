import { APP_ROUTES } from "../../../../../../app/domain/constants/app-routes";

export interface NavbarSection {
  title: string;
  link: string;
}

export const NAVBAR_SECTIONS = [
  { link: "", title: "Home" },
  { link: "", title: "Visas" },
  { link: "", title: "Seguros" },
  { link: APP_ROUTES.SHOP, title: "Shop" },
  { link: "", title: "Sobre nosotros" },
];
