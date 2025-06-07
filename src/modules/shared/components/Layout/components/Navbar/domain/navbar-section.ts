import { APP_ROUTES } from "../../../../../../app/domain/constants/app-routes";

export interface NavbarSection {
  title: string;
  link: string;
}

export const NAVBAR_SECTIONS = [
  { link: APP_ROUTES.HOME, title: "Home" },
  { link: APP_ROUTES.VISA, title: "Visas" },
  { link: APP_ROUTES.INSURANCE, title: "Seguros" },
  { link: APP_ROUTES.SHOP, title: "Shop" },
  { link: APP_ROUTES.ABOUT_US, title: "Sobre nosotros" },
];
