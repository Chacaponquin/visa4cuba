import Logo from "./components/Logo/Logo";
import Options from "./components/Options/Options";
import Sections from "./components/Sections/Sections";
import { NAVBAR_SECTIONS } from "./domain/navbar-section";

interface Props {
  onOpenAside(): void;
}

export default function Navbar({ onOpenAside }: Props) {
  return (
    <nav className="w-full flex py-4 justify-center px-5 border-b border-b-card">
      <div className="flex w-full items-center justify-between max-w-layout">
        <Logo />

        <Sections sections={NAVBAR_SECTIONS} />

        <Options onOpenAside={onOpenAside} />
      </div>
    </nav>
  );
}
