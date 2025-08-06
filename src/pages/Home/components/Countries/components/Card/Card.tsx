import { useContext } from "react";
import { LanguageContext } from "../../../../../../modules/app/modules/language/context/language-context";
import type { CountryCard } from "../../domain/country-card";

interface Props {
  props: CountryCard;
}

export default function Card({ props }: Props) {
  const { language } = useContext(LanguageContext);

  return (
    <article className="shadow rounded-card px-7 py-5 bg-white flex items-center gap-x-5">
      <img
        src={props.flag.src}
        alt={props.flag.alt}
        className="rounded-full w-[50px] h-[50px] object-cover"
      />

      <p className="text-xl text-primary font-title-semibold">
        {props.name[language]}
      </p>
    </article>
  );
}
