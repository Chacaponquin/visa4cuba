import BaseTranslationPage from "../../modules/app/components/BaseTranslationPage/BaseTranslationPage";
import type { TranslationPageProps } from "../../modules/app/domain/core/translation-route";
import Layout from "../../modules/shared/components/Layout/Layout";
import CartSummary from "./components/CartSummary/CartSummary";
import ShopContent from "./components/ShopContent/ShopContent";
import ShopHeader from "./components/ShopHeader/ShopHeader";
import ShopResult from "./components/ShopResult/ShopResult";

export default function Shop({ builder, language }: TranslationPageProps) {
  return (
    <BaseTranslationPage language={language} builder={builder}>
      <Layout builder={builder} extra={<CartSummary />}>
        <main className="w-full flex flex-col items-center px-5 mt-20">
          <div className="w-full flex flex-col max-w-layout items-center">
            <ShopHeader />
            <ShopContent />
            <ShopResult />
          </div>
        </main>
      </Layout>
    </BaseTranslationPage>
  );
}
