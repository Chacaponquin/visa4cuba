import { Navigate } from "react-router";
import { LANGUAGE } from "../../modules/language/domain/language";
import { useContext } from "react";
import { LanguageContext } from "../../modules/language/context/language-context";
import type { TranslationRouteBuilder } from "../../domain/core/translation-route-builder";

interface Props {
  en: React.ReactNode;
  es: React.ReactNode;
  it: React.ReactNode;
  builder: TranslationRouteBuilder;
  language?: LANGUAGE;
}

export default function TranslationPage({
  en,
  es,
  it,
  language,
  builder,
}: Props) {
  const { language: contextLanguage } = useContext(LanguageContext);

  return (
    <>
      {language ? (
        <>
          {language === LANGUAGE.EN && en}
          {language === LANGUAGE.ES && es}
          {language === LANGUAGE.IT && it}
        </>
      ) : (
        <Navigate to={builder.build(contextLanguage)} replace />
      )}
    </>
  );
}
