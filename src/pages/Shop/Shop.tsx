import Layout from "../../modules/shared/components/Layout/Layout";
import ShopContent from "./components/ShopContent/ShopContent";
import ShopHeader from "./components/ShopHeader/ShopHeader";
import ShopResult from "./components/ShopResult/ShopResult";

export default function Shop() {
  return (
    <Layout>
      <main className="w-full flex flex-col items-center px-5">
        <div className="w-full flex flex-col max-w-[1100px] items-center">
          <ShopHeader />
          <ShopContent />
          <ShopResult />
        </div>
      </main>
    </Layout>
  );
}
