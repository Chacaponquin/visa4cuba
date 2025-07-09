import { useContext } from "react";
import Cart from "../../../../modules/app/modules/icon/components/Cart";
import { ShopContext } from "../../../../modules/shop/context/ShopContext";

export default function CartSummary() {
  const { cart } = useContext(ShopContext);

  function handleClick() {
    const element = document.getElementById("shop-summary");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div
      onClick={handleClick}
      className="stroke-gray-700 relative cursor-pointer flex items-center px-3 py-1.5"
    >
      <Cart size={23} />

      {cart.length > 0 && (
        <div className="w-[16px] h-[16px] flex items-center justify-center text-[0.60rem] bg-secondary text-white rounded-full absolute top-0 right-0">
          {cart.length}
        </div>
      )}
    </div>
  );
}
