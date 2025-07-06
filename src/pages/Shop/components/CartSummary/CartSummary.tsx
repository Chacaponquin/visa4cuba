import Cart from "../../../../modules/app/modules/icon/components/Cart";

export default function CartSummary() {
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

      <div className="w-[16px] h-[16px] flex items-center justify-center text-[0.60rem] bg-secondary text-white rounded-full absolute top-0 right-0">
        1
      </div>
    </div>
  );
}
