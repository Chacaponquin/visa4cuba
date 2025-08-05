import { APP_IMAGES } from "../../../../../../../modules/app/domain/constants/app-images";
import type { TranslationRouteBuilder } from "../../../../../../../modules/app/domain/core/translation-route-builder";
import LayoutHeader from "../../../../../../../modules/shared/components/Layout/components/LayoutHeader/LayoutHeader";
import Layout from "../../../../../../../modules/shared/components/Layout/Layout";

interface Props {
  children?: React.ReactNode;
  builder: TranslationRouteBuilder;
  title: string;
  description: string;
}

export default function BlogLayout({
  children,
  builder,
  description,
  title,
}: Props) {
  return (
    <Layout builder={builder} title={title} description={description}>
      <LayoutHeader
        image={APP_IMAGES.BLOG.ARTICLES.VISA_ELECTRONIC.src}
        sideImage={APP_IMAGES.PASSPORTS}
      />

      <div className="w-full flex flex-col items-center px-5 py-14">
        <div className="w-full max-w-layout-sm flex flex-col">{children}</div>
      </div>
    </Layout>
  );
}
