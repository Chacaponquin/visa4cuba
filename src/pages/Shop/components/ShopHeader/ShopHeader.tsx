import ShopSection from "../../shared/components/ShopSection/ShopSection";
import HeaderCard from "./components/HeaderCard/HeaderCard";
import useShopHeader from "./hooks/useShopHeader";

export default function ShopHeader() {
  const { sections } = useShopHeader();

  return (
    <ShopSection title="Visas y Seguros para Cuba en línea" description="">
      <div className="flex flex-col w-full items-center">
        <div className="flex justify-center gap-x-5 w-full">
          {sections.map((section, index) => (
            <HeaderCard
              description={section.description}
              key={index}
              title={section.title}
              color={section.color}
              icon={section.icon}
            />
          ))}
        </div>
      </div>
    </ShopSection>
  );
}
