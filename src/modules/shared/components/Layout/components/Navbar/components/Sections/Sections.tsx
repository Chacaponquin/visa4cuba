import { useLocation } from "react-router";
import type { NavbarSection } from "../../domain/navbar-section";
import SectionCard from "./components/SectionCard/SectionCard";

interface Props {
  sections: NavbarSection[];
}

export default function Sections({ sections }: Props) {
  const location = useLocation();

  return (
    <div className="lg:flex hidden items-center gap-x-2">
      {sections.map((s, index) => (
        <SectionCard
          key={index}
          link={s.link}
          selected={location.pathname === s.link}
          title={s.title}
        />
      ))}
    </div>
  );
}
