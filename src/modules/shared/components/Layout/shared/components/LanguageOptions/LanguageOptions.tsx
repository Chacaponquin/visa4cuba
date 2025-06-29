import { Fragment, useContext, useMemo } from "react";
import { LANGUAGE } from "../../../../../../app/modules/language/domain/language";
import clsx from "clsx";
import { LanguageContext } from "../../../../../../app/modules/language/context/language-context";
import type { TranslationRouteBuilder } from "../../../../../../app/domain/core/translation-route-builder";
import { Link } from "react-router";

interface LanguageOption {
  name: string;
  language: LANGUAGE;
}

interface Props {
  builder: TranslationRouteBuilder;
}

export default function LanguageOptions({ builder }: Props) {
  const { language } = useContext(LanguageContext);

  const options = useMemo(() => {
    return [
      { language: LANGUAGE.EN, name: "en" },
      { language: LANGUAGE.ES, name: "es" },
      { language: LANGUAGE.IT, name: "it" },
    ] as LanguageOption[];
  }, []);

  return (
    <div className="flex items-center gap-x-2">
      {options.map((o, index) => (
        <Fragment key={index}>
          {index > 0 && (
            <span className="text-gray-400 text-sm font-medium">/</span>
          )}

          <Link to={builder.build(o.language)}>
            <span
              className={clsx("text-sm uppercase !font-medium cursor-pointer", {
                "text-primary": language === o.language,
                "text-gray-500": language !== o.language,
              })}
            >
              {o.name}
            </span>
          </Link>
        </Fragment>
      ))}
    </div>
  );
}
