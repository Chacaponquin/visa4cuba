import clsx from "clsx";
import { Link } from "react-router";

interface Props {
  selected: boolean;
  title: string;
  link: string;
}

export default function SectionCard({ link, title, selected }: Props) {
  return (
    <Link to={link}>
      <div
        className={clsx(
          "uppercase text-base px-3 rounded-md py-1 font-medium",
          {
            "bg-primary/10 text-primary": selected,
          }
        )}
      >
        {title}
      </div>
    </Link>
  );
}
