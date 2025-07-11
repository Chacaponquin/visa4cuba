import { useContext } from "react";
import useTranslation from "../../../../modules/app/modules/language/hooks/useTranslation";
import ShopSection from "../../shared/components/ShopSection/ShopSection";
import DownloadButton from "./components/DownloadButton/DownloadButton";
import HeaderCard from "./components/HeaderCard/HeaderCard";
import useShopHeader from "./hooks/useShopHeader";
import { LanguageContext } from "../../../../modules/app/modules/language/context/language-context";

export default function ShopHeader() {
  const { language } = useContext(LanguageContext);
  const { sections } = useShopHeader();

  const { TITLE, DESCRIPTION, DOWN_1, DOWN_2 } = useTranslation({
    TITLE: {
      es: "Visas y Seguros para Cuba en línea",
      en: "Visas and Insurance for Cuba Online",
      it: "Visti e assicurazione per Cuba online",
    },
    DESCRIPTION: {
      es: "Tramita tu visa y seguro obligatorio para Cuba de forma rápida y 100% en línea. Recíbelos en tu correo sin complicaciones.",
      en: "Apply for your visa and mandatory insurance for Cuba quickly and 100% online. Receive them in your email without any complications.",
      it: "Richiedi il visto e l'assicurazione obbligatoria per Cuba in modo rapido e 100% online. Ricevili via email senza complicazioni.",
    },
    DOWN_1: {
      es: "Tabla de límites de seguros",
      en: "Insurance limits table",
      it: "Tabella dei limiti assicurativi",
    },
    DOWN_2: {
      es: "Condiciones generales",
      en: "General conditions",
      it: "Condizioni generali",
    },
  });

  return (
    <ShopSection title={TITLE} description={DESCRIPTION}>
      <div className="flex flex-col w-full items-center">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3">
          {sections.map((section, index) => (
            <HeaderCard
              description={section.description[language]}
              key={index}
              title={section.title[language]}
              color={section.color}
              icon={section.icon}
            />
          ))}
        </div>

        <div className="flex w-full justify-center gap-x-7 mt-5">
          <DownloadButton color="primary" text={DOWN_1} />
          <DownloadButton color="secondary" text={DOWN_2} />
        </div>
      </div>
    </ShopSection>
  );
}
