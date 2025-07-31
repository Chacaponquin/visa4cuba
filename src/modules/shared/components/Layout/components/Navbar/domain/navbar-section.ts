import { APP_ROUTES } from "../../../../../../app/domain/constants/app-routes";
import type { TranslationConfig } from "../../../../../../app/modules/language/domain/translation";

export interface NavbarSection {
  title: TranslationConfig<string>;
  link: string;
}

export const NAVBAR_SECTIONS: NavbarSection[] = [
  { link: APP_ROUTES.HOME, title: { es: "Home", en: "Home", it: "Home" } },
  { link: APP_ROUTES.VISA, title: { es: "Visas", en: "Visas", it: "Visto" } },
  {
    link: APP_ROUTES.INSURANCE,
    title: { es: "Seguros", en: "Insurance", it: "Assicurazione" },
  },
  { link: APP_ROUTES.SHOP, title: { es: "Tienda", en: "Shop", it: "Shop" } },
  { link: APP_ROUTES.BLOG.ROOT, title: { es: "Blog", en: "Blog", it: "Blog" } },
  {
    link: APP_ROUTES.ABOUT_US,
    title: { es: "Sobre nosotros", en: "About us", it: "Chi siamo" },
  },
];
