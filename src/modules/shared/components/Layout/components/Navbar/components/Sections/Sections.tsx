import { useLocation } from "react-router";
import type { NavbarSection } from "../../domain/navbar-section";
import SectionCard from "./components/SectionCard/SectionCard";
import { useContext } from "react";
import { LanguageContext } from "../../../../../../../app/modules/language/context/language-context";

interface Props {
  sections: NavbarSection[];
}

export default function Sections({ sections }: Props) {
  const { language } = useContext(LanguageContext);
  const location = useLocation();

  return (
    <div className="lg:flex hidden items-center gap-x-5">
      {sections.map((s, index) => (
        <SectionCard
          key={index}
          link={s.link}
          selected={location.pathname.endsWith(s.link)}
          title={s.title[language]}
        />
      ))}
    </div>
  );
}
