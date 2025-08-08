import { useLocation } from "react-router";
import Separator from "../../../../../app/modules/ui/components/Separator/Separator";
import { NAVBAR_SECTIONS } from "../Navbar/domain/navbar-section";
import AsideSection from "./components/AsideSection/AsideSection";
import Header from "./components/Header/Header";
import { useContext } from "react";
import { LanguageContext } from "../../../../../app/modules/language/context/language-context";

interface Props {
  onClose(): void;
}

export default function Aside({ onClose }: Props) {
  const location = useLocation();
  const { language } = useContext(LanguageContext);

  return (
    <div
      className="lg:hidden fixed flex w-full h-screen justify-end items-center bg-black/50 z-50 pl-4"
      onClick={onClose}
    >
      <aside
        className="w-full flex rounded-l-lg flex-col max-w-[300px] bg-white h-full px-8 py-5"
        onClick={(e) => e.stopPropagation()}
      >
        <Header onClose={onClose} />

        <Separator className="mt-4 mb-4" />

        <div className="flex flex-col w-full gap-y-2">
          {NAVBAR_SECTIONS.map((s, index) => (
            <AsideSection
              key={index}
              link={s.link}
              selected={location.pathname.includes(s.link)}
              title={s.title[language]}
            />
          ))}
        </div>
      </aside>
    </div>
  );
}
