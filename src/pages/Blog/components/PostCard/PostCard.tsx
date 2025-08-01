import { useContext, useState } from "react";
import type { BlogPost } from "../../domain/blog-post";
import { LanguageContext } from "../../../../modules/app/modules/language/context/language-context";
import { Link } from "react-router";
import { TranslationRouteBuilder } from "../../../../modules/app/domain/core/translation-route-builder";
import ArrowRight from "../../../../modules/app/modules/icon/components/ArrowRight";
import clsx from "clsx";

interface Props {
  card: BlogPost;
}

export default function PostCard({ card }: Props) {
  const { language } = useContext(LanguageContext);

  const [hover, setHover] = useState(false);

  return (
    <article className="flex flex-col w-full">
      <img
        src={card.image}
        alt={card.title[language]}
        className="rounded-3xl mb-5 w-full h-[400px] object-cover"
      />

      <h3 className="font-title-semibold text-gray-800 text-2xl mb-2">
        {card.title[language]}
      </h3>

      <span className="text-gray-500 text-sm mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, non.
      </span>

      <Link to={new TranslationRouteBuilder(card.link).build(language)}>
        <button
          className={clsx(
            "flex items-center gap-x-2 text-gray-600 stroke-gray-600 text-sm"
          )}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <span>Read more</span>

          <i
            className={clsx("transition-all duration-200", {
              "translate-x-2": hover,
            })}
          >
            <ArrowRight size={15} />
          </i>
        </button>
      </Link>
    </article>
  );
}
