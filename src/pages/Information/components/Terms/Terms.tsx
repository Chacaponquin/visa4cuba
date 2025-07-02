import TranslationPage from "../../../../modules/app/components/TranslationPage/TranslationPage";
import type { TranslationPageProps } from "../../../../modules/app/domain/core/translation-route";
import En from "./components/En/En";
import Es from "./components/Es/Es";
import It from "./components/It/It";

export default function Terms({ builder, language }: TranslationPageProps) {
  return (
    <TranslationPage
      language={language}
      builder={builder}
      en={<En builder={builder} />}
      es={<Es builder={builder} />}
      it={<It builder={builder} />}
    />
  );
}
