import useTranslationComponent from "../../../app/modules/language/hooks/useTranslationComponent";
import En from "./components/En/En";
import Es from "./components/Es/Es";
import It from "./components/It/It";

export default function InsurenceFaq() {
  const { RENDER } = useTranslationComponent({
    RENDER: { es: <Es />, en: <En />, it: <It /> },
  });

  return RENDER;
}
