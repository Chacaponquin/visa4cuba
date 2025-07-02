import TranslationPage from "../../../../modules/app/components/TranslationPage/TranslationPage";
import type { TranslationPageProps } from "../../../../modules/app/domain/core/translation-route";
import En from "./components/En/En";
import Es from "./components/Es/Es";
import It from "./components/It/It";

export default function Privacity({ builder, language }: TranslationPageProps) {
  return (
    <TranslationPage
      builder={builder}
      en={<En builder={builder} />}
      es={<Es builder={builder} />}
      it={<It builder={builder} />}
      language={language}
    />
  );
}
