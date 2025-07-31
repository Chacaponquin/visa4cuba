import type { TranslationRouteBuilder } from "../../../../../../../modules/app/domain/core/translation-route-builder";
import Layout from "../../../../../../../modules/shared/components/Layout/Layout";

interface Props {
  children?: React.ReactNode;
  builder: TranslationRouteBuilder;
}

export default function BlogLayout({ children, builder }: Props) {
  return (
    <Layout builder={builder}>
      <div className="w-full flex flex-col items-center px-5">
        <div className="w-full max-w-layout-sm">{children}</div>
      </div>
    </Layout>
  );
}
