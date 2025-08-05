import clsx from "clsx";
import { Link } from "react-router";
import { TranslationRouteBuilder } from "../../../../../../../../../app/domain/core/translation-route-builder";
import { useContext, useMemo } from "react";
import { LanguageContext } from "../../../../../../../../../app/modules/language/context/language-context";

interface Props {
  selected: boolean;
  title: string;
  link: string;
}

export default function SectionCard({ link: ilink, title, selected }: Props) {
  const { language } = useContext(LanguageContext);

  const link = useMemo(
    () => new TranslationRouteBuilder(ilink).build(language),
    [ilink, language]
  );

  return (
    <Link to={link}>
      <div
        className={clsx("uppercase text-base whitespace-nowrap", {
          "text-secondary !font-medium": selected,
          "text-gray-600": !selected,
        })}
      >
        {title}
      </div>
    </Link>
  );
}
