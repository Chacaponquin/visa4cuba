import { useContext, useMemo } from "react";
import { LanguageContext } from "../context/language-context";
import type {
  Translation,
  TranslationConfig,
  TranslationInput,
} from "../domain/translation";

export default function useTranslationComponent<T>(
  input: TranslationInput<T, React.ReactNode>
) {
  const { language } = useContext(LanguageContext);

  const object: Translation<T, React.ReactNode> = useMemo(() => {
    let translation: Translation<T, React.ReactNode> = {} as Translation<
      T,
      React.ReactNode
    >;

    for (const [key, object] of Object.entries<
      TranslationConfig<React.ReactNode>
    >(input)) {
      translation = { ...translation, [key]: object[language] };
    }

    return translation;
  }, [language, input]);

  return object;
}
