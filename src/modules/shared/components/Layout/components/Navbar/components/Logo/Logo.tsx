import { useContext } from "react";
import { APP_IMAGES } from "../../../../../../../app/domain/constants/app-images";
import { LanguageContext } from "../../../../../../../app/modules/language/context/language-context";
import { Link } from "react-router";
import { TranslationRouteBuilder } from "../../../../../../../app/domain/core/translation-route-builder";
import { APP_ROUTES } from "../../../../../../../app/domain/constants/app-routes";

export default function Logo() {
  const { language } = useContext(LanguageContext);

  return (
    <Link
      to={new TranslationRouteBuilder(APP_ROUTES.HOME).build(language)}
      className="flex w-full max-w-[200px] items-center"
    >
      <img
        src={APP_IMAGES.LOGO.src}
        alt={APP_IMAGES.LOGO.alt}
        className="md:w-[160px] w-[130px] object-contain"
      />
    </Link>
  );
}
