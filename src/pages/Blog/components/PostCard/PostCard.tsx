import { useContext } from "react";
import type { BlogPost } from "../../domain/blog-post";
import { LanguageContext } from "../../../../modules/app/modules/language/context/language-context";
import { Link } from "react-router";
import { TranslationRouteBuilder } from "../../../../modules/app/domain/core/translation-route-builder";
import Button from "../../../../modules/app/modules/ui/components/Button/Button";
import useTranslation from "../../../../modules/app/modules/language/hooks/useTranslation";

interface Props {
  card: BlogPost;
}

export default function PostCard({ card }: Props) {
  const { language } = useContext(LanguageContext);

  const { BUTTON } = useTranslation({
    BUTTON: { en: "Read more", es: "Leer más", it: "Per saperne di più" },
  });

  return (
    <article className="flex items-start gap-x-6 w-full bg-white shadow px-8 py-5 rounded-card">
      <img
        src={card.image}
        alt={card.title[language]}
        className="rounded-card w-full max-w-[400px] max-h-[240px] object-cover"
      />

      <div className="w-full flex flex-col">
        <h3 className="font-title-semibold text-gray-800 text-2xl mb-3.5">
          {card.title[language]}
        </h3>

        <span className="text-gray-500 text-base mb-7">
          {card.description[language]}
        </span>

        <div className="flex justify-end w-full">
          <Link to={new TranslationRouteBuilder(card.link).build(language)}>
            <Button color="secondary">{BUTTON}</Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
