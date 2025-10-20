import { Helmet } from "react-helmet-async";
import type { TranslationRouteBuilder } from "../../../app/domain/core/translation-route-builder";
import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import useLayout from "./hooks/useLayout";
import { KEYWORDS } from "./domain/keywords";
import { useContext } from "react";
import { LanguageContext } from "../../../app/modules/language/context/language-context";

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
  const { language } = useContext(LanguageContext);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={KEYWORDS[language].join(", ")} />
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
