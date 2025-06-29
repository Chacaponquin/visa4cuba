import { useState, useEffect } from "react";
import { LANGUAGE } from "../domain/language";
import { LanguageContext } from "./language-context";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState(LANGUAGE.EN);

  useEffect(() => {
    const navigatorLanguage = window.navigator.language;

    if (navigatorLanguage.includes("en")) {
      setLanguage(LANGUAGE.EN);
    } else if (navigatorLanguage.includes("es")) {
      setLanguage(LANGUAGE.ES);
    } else {
      setLanguage(LANGUAGE.EN);
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{ language: language, handleChangeLanguage: setLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
