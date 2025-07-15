import { Link } from "react-router";
import Star from "../../../../../../../../app/modules/icon/components/Star";
import { useContext, useMemo } from "react";
import { LanguageContext } from "../../../../../../../../app/modules/language/context/language-context";
import { TranslationRouteBuilder } from "../../../../../../../../app/domain/core/translation-route-builder";

interface Props {
  text: string;
  link: string;
}

export default function FooterInfo({ link: ilink, text }: Props) {
  const { language } = useContext(LanguageContext);

  const link = useMemo(
    () => new TranslationRouteBuilder(ilink).build(language),
    [ilink, language]
  );

  return (
    <Link to={link} className="flex items-center gap-x-2 mb-2">
      <i className="fill-secondary">
        <Star size={15} />
      </i>

      <p className="text-sm text-white">{text}</p>
    </Link>
  );
}
