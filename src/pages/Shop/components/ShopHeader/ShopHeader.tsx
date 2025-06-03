import ShopSection from "../../shared/components/ShopSection/ShopSection";
import DownloadButton from "./components/DownloadButton/DownloadButton";
import HeaderCard from "./components/HeaderCard/HeaderCard";
import useShopHeader from "./hooks/useShopHeader";

export default function ShopHeader() {
  const { sections } = useShopHeader();

  return (
    <ShopSection
      title="Visas y Seguros para Cuba en línea"
      description="Tramita tu visa y seguro obligatorio para Cuba de forma rápida y 100% en línea. Recíbelos en tu correo sin complicaciones."
    >
      <div className="flex flex-col w-full items-center">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3">
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

        <div className="flex w-full justify-center gap-x-7 mt-5">
          <DownloadButton color="primary" text="Tabla de techos" />
          <DownloadButton color="secondary" text="Condiciones generales" />
        </div>
      </div>
    </ShopSection>
  );
}
