import Logo from "./components/Logo/Logo";
import Options from "./components/Options/Options";
import Sections from "./components/Sections/Sections";
import useNavbar from "./hooks/useNavbar";

export default function Navbar() {
  const { sections } = useNavbar();

  return (
    <nav className="w-full flex py-5 justify-center mb-10 px-5">
      <div className="flex w-full items-center justify-between max-w-[1100px]">
        <Logo />

        <Sections sections={sections} />

        <Options />
      </div>
    </nav>
  );
}
