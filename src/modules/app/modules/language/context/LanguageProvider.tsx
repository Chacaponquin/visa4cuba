import { useState } from "react";
import { LANGUAGE } from "../domain/language";
import { LanguageContext } from "./language-context";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState(LANGUAGE.EN);

  return (
    <LanguageContext.Provider
      value={{ language: language, handleChangeLanguage: setLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
