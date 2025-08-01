import { APP_IMAGES } from "../../../modules/app/domain/constants/app-images";
import { APP_ROUTES } from "../../../modules/app/domain/constants/app-routes";
import type { TranslationConfig } from "../../../modules/app/modules/language/domain/translation";

export interface BlogPost {
  image: string;
  title: TranslationConfig<string>;
  link: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: {
      es: "Nuevas actualizaciones en el visado para Cuba",
      en: "New updates on the Cuban visa",
      it: "Nuovi aggiornamenti sul visto cubano",
    },
    image: APP_IMAGES.BLOG.ARTICLES.VISA_ELECTRONIC.src,
    link: APP_ROUTES.BLOG.ARTICLES.VISA_ELECTRONIC,
  },
];
