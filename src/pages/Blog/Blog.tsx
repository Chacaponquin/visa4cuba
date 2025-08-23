import { APP_IMAGES } from "../../modules/app/domain/constants/app-images";
import type { TranslationPageProps } from "../../modules/app/domain/core/translation-route";
import useTranslation from "../../modules/app/modules/language/hooks/useTranslation";
import LayoutHeader from "../../modules/shared/components/Layout/components/LayoutHeader/LayoutHeader";
import LayoutSection from "../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";
import Layout from "../../modules/shared/components/Layout/Layout";
import PostCard from "./components/PostCard/PostCard";
import { BLOG_POSTS } from "./domain/blog-post";

export default function Blog({ builder }: TranslationPageProps) {
  const { DESCRIPTION, TITLE } = useTranslation({
    DESCRIPTION: {
      es: `Descubre consejos de viaje, novedades sobre visados y guías esenciales para tu viaje a Cuba. El blog de Visa4Cuba te mantiene informado y listo para tu próxima aventura cubana.`,
      en: `Discover travel tips, visa updates, and essential guides for your trip to Cuba. The Visa4Cuba blog keeps you informed and ready for your next Cuban adventure.`,
      it: `Scopri consigli di viaggio, aggiornamenti sui visti e guide essenziali per il tuo viaggio a Cuba. Il blog di Visa4Cuba ti tiene informato e pronto per la tua prossima avventura cubana.`,
    },
    TITLE: {
      en: "Blog about Cuba travel, visas and insurance tips - Visa4Cuba",
      es: "Blog sobre viajes a Cuba, visados y consejos de seguros - Visa4Cuba",
      it: "Blog su viaggi a Cuba, visti e consigli per l'assicurazione - Visa4Cuba",
    },
  });

  return (
    <Layout builder={builder} description={DESCRIPTION} title={TITLE}>
      <LayoutHeader title="Blog" image={APP_IMAGES.MORRO.src} />

      <LayoutSection bg="blue">
        <div className="flex flex-col gap-y-4 w-full">
          {BLOG_POSTS.map((b, index) => (
            <PostCard card={b} key={index} />
          ))}
        </div>
      </LayoutSection>
    </Layout>
  );
}
