import { Helmet } from "react-helmet-async";
import type { TranslationRouteBuilder } from "../../../app/domain/core/translation-route-builder";
import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import useLayout from "./hooks/useLayout";

interface Props {
  builder: TranslationRouteBuilder;
  children?: React.ReactNode;
  extra?: React.ReactNode;
  title: string;
  description: string;
}

export default function Layout({
  children,
  builder,
  extra,
  description,
  title,
}: Props) {
  const {
    openAside,
    handleCloseAside,
    handleOpenAside,
    fixedNavbar,
    navbarRef,
  } = useLayout();

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

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
    </>
  );
}
