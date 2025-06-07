import ShopSection from "../../shared/components/ShopSection/ShopSection";
import ShopCard from "./components/ShopCard/ShopCard";
import useShopContent from "./hooks/useShopContent";

export default function ShopContent() {
  const { options } = useShopContent();

  return (
    <ShopSection
      title="Elige la solución que prefieras"
      description="Obtén tu visa y seguro de viaje para Cuba de forma rápida y seguro. Procesamiento en línea con entrega a domicilio"
    >
      {options.map((section, index) => (
        <div key={index} className="mb-14 flex flex-col w-full">
          <div className="flex items-center gap-x-4 mb-4">
            <i className="px-3 py-2.5 rounded-lg stroke-primary bg-primary/10">
              {section.icon({ size: 26 })}
            </i>

            <h2 className="text-left text-2xl !font-title-semibold">
              {section.title}
            </h2>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3">
            {section.options.map((card, i) => (
              <ShopCard icon={section.icon} key={i} card={card} />
            ))}
          </div>
        </div>
      ))}
    </ShopSection>
  );
}
