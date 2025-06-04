import Logo from "./components/Logo/Logo";
import Options from "./components/Options/Options";
import Sections from "./components/Sections/Sections";
import { NAVBAR_SECTIONS } from "./domain/navbar-section";

interface Props {
  onOpenAside(): void;
}

export default function Navbar({ onOpenAside }: Props) {
  return (
    <nav className="w-full flex py-5 justify-center mb-10 px-5">
      <div className="flex w-full items-center justify-between max-w-layout">
        <Logo />

        <Sections sections={NAVBAR_SECTIONS} />

        <Options onOpenAside={onOpenAside} />
      </div>
    </nav>
  );
}
