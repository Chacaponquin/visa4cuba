import Layout from "../../modules/shared/components/Layout/Layout";
import ShopContent from "./components/ShopContent/ShopContent";
import ShopResult from "./components/ShopResult/ShopResult";

export default function Shop() {
  return (
    <Layout>
      <main className="w-full flex flex-col items-center px-5">
        <div className="w-full flex flex-col max-w-[1200px] items-center">
          <ShopContent />
          <ShopResult />
        </div>
      </main>
    </Layout>
  );
}
