import { LANGUAGE } from "../domain/language";

export class GetBrowserLanguage {
  static execute(): LANGUAGE {
    const lan = window.navigator.language;

    if (lan.startsWith("en")) {
      return LANGUAGE.EN;
    }

    if (lan.startsWith("es")) {
      return LANGUAGE.ES;
    }

    if (lan.startsWith("it")) {
      return LANGUAGE.IT;
    }

    return LANGUAGE.EN;
  }
}
