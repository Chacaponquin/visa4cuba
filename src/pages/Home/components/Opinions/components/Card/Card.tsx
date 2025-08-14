import clsx from "clsx";
import type { Opinion } from "../../domain/opinion";
import { useContext } from "react";
import { LanguageContext } from "../../../../../../modules/app/modules/language/context/language-context";
import P from "../../../../../../modules/app/modules/ui/components/Markdown/components/P/P";

interface Props {
  props: Opinion;
}

export default function Card({ props }: Props) {
  const { language } = useContext(LanguageContext);

  return (
    <article
      className={clsx(
        "transition-all duration-200 cursor-pointer shadow-md flex flex-col items-center rounded-card relative",
        {}
      )}
    >
      <img
        src={props.image.src}
        alt={props.name}
        className="object-cover rounded-full w-[80px] h-[80px] absolute top-0 -translate-y-[50%]"
      />

      <div className="flex flex-col w-full px-5 py-4 items-center justify-between h-full mt-10">
        <P>{props.description[language]}</P>

        <h4 className="text-gray-800 text-lg font-title-semibold mt-4">
          {props.name}
        </h4>
      </div>
    </article>
  );
}
