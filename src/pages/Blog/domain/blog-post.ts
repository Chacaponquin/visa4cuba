import { APP_IMAGES } from "../../../modules/app/domain/constants/app-images";
import { APP_ROUTES } from "../../../modules/app/domain/constants/app-routes";
import type { TranslationConfig } from "../../../modules/app/modules/language/domain/translation";

export interface BlogPost {
  image: string;
  title: TranslationConfig<string>;
  link: string;
  description: TranslationConfig<string>;
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
    description: {
      es: "Descubre los últimos cambios en el visado para Cuba y cómo pueden afectar tu próximo viaje. Información actualizada y consejos prácticos.",
      it: "Scopri le ultime novità sul visto per Cuba e come possono influenzare il tuo prossimo viaggio. Informazioni aggiornate e consigli pratici.",
      en: "Discover the latest updates on the Cuban visa and how they may affect your next trip. Updated information and practical tips.",
    },
  },
];
