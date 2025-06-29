import { createContext } from "react";
import { LANGUAGE } from "../domain/language";

export interface LanguageContextProps {
  language: LANGUAGE;
  handleChangeLanguage(lan: LANGUAGE): void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: LANGUAGE.EN,
} as LanguageContextProps);
