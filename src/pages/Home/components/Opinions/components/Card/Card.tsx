import clsx from "clsx";
import type { Opinion } from "../../domain/opinion";

interface Props {
  props: Opinion;
  onClick(): void;
  selected: boolean;
}

export default function Card({ props, onClick, selected }: Props) {
  return (
    <article
      onClick={onClick}
      className={clsx("transition-all duration-200 cursor-pointer", {
        "scale-150": selected,
        "hover:scale-110": !selected,
      })}
    >
      <img
        src={props.image.src}
        alt={props.name}
        className="object-cover rounded-full sm:w-[70px] sm:h-[70px] w-[60px] h-[60px]"
      />
    </article>
  );
}
