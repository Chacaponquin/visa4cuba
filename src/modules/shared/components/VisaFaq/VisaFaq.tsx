import useTranslationComponent from "../../../app/modules/language/hooks/useTranslationComponent";
import En from "./components/En/En";
import Es from "./components/Es/Es";
import It from "./components/It/It";

export default function VisaFaq() {
  const { RENDER } = useTranslationComponent({
    RENDER: { en: <En />, es: <Es />, it: <It /> },
  });

  return RENDER;
}
