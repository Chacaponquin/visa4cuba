import type { TranslationRouteBuilder } from "../../../app/domain/core/translation-route-builder";
import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import useLayout from "./hooks/useLayout";

interface Props {
  children?: React.ReactNode;
  builder: TranslationRouteBuilder;
}

export default function Layout({ children, builder }: Props) {
  const { openAside, handleCloseAside, handleOpenAside } = useLayout();

  return (
    <div className="w-full flex flex-col">
      <Navbar onOpenAside={handleOpenAside} builder={builder} />

      {openAside && <Aside onClose={handleCloseAside} />}

      {children}

      <Footer />
    </div>
  );
}
