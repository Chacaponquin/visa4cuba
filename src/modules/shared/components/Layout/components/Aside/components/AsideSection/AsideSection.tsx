import clsx from "clsx";
import { Link } from "react-router";

interface Props {
  title: string;
  link: string;
  selected: boolean;
}

export default function AsideSection({ link, selected, title }: Props) {
  return (
    <Link to={link}>
      <div
        className={clsx("rounded-lg px-3.5 py-2 uppercase font-medium", {
          "bg-primary/10 text-primary": selected,
        })}
      >
        {title}
      </div>
    </Link>
  );
}
