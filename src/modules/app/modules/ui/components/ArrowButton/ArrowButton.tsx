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
        "rounded-full text-xl px-8 py-3.5 bg-white text-gray-700 flex items-center gap-x-3 mt-10 transition-all duration-200 hover:brightness-150 hover:bg-gray-50",
        className
      )}
    >
      <span>{children}</span>

      <i
        className={clsx("stroke-gray-700 transition-all duration-200", {
          "translate-x-2": hover,
        })}
      >
        <ArrowRight size={22} />
      </i>
    </button>
  );
}
