import clsx from "clsx";
import { useState } from "react";
import ArrowRight from "../../../icon/components/ArrowRight";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export default function ArrowButton({ children, className }: Props) {
  const [hover, setHover] = useState(false);

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={clsx(
        "rounded-full text-base px-7 py-3 bg-secondary text-white flex items-center gap-x-3 mt-10 transition-all duration-200 hover:brightness-150",
        className
      )}
    >
      <span>{children}</span>

      <i
        className={clsx("stroke-white transition-all duration-200", {
          "translate-x-2": hover,
        })}
      >
        <ArrowRight size={22} />
      </i>
    </button>
  );
}
