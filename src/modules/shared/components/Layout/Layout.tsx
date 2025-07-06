import type { TranslationRouteBuilder } from "../../../app/domain/core/translation-route-builder";
import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import useLayout from "./hooks/useLayout";

interface Props {
  children?: React.ReactNode;
  builder: TranslationRouteBuilder;
  extra?: React.ReactNode;
}

export default function Layout({ children, builder, extra }: Props) {
  const {
    openAside,
    handleCloseAside,
    handleOpenAside,
    fixedNavbar,
    navbarRef,
  } = useLayout();

  return (
    <div className="w-full flex flex-col">
      <Navbar
        onOpenAside={handleOpenAside}
        builder={builder}
        fixed={false}
        ref={navbarRef}
      >
        {extra}
      </Navbar>

      {fixedNavbar && (
        <Navbar onOpenAside={handleOpenAside} builder={builder} fixed>
          {extra}
        </Navbar>
      )}

      {openAside && <Aside onClose={handleCloseAside} />}

      {children}

      <Footer />
    </div>
  );
}
