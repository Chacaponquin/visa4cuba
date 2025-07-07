import { useContext, useEffect } from "react";
import { LanguageContext } from "../../modules/language/context/language-context";
import type { LANGUAGE } from "../../modules/language/domain/language";
import type { TranslationRouteBuilder } from "../../domain/core/translation-route-builder";
import { Navigate } from "react-router";
import { GetBrowserLanguage } from "../../modules/language/use-cases/get-browser-language";

interface Props {
  builder: TranslationRouteBuilder;
  language?: LANGUAGE;
  children?: React.ReactNode;
}

export default function BaseTranslationPage({
  builder,
  language,
  children,
}: Props) {
  const { handleChangeLanguage } = useContext(LanguageContext);

  useEffect(() => {
    if (language) {
      handleChangeLanguage(language);
    }
  }, [language, handleChangeLanguage]);

  return (
    <>
      {language ? (
        children
      ) : (
        <Navigate to={builder.build(GetBrowserLanguage.execute())} replace />
      )}
    </>
  );
}
