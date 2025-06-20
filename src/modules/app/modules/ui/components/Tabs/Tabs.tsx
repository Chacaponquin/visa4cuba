import clsx from "clsx";
import Option from "./components/Option/Option";

export interface TabOption {
  name: string;
  onClick(): void;
  selected: boolean;
  render?: boolean;
}

interface Props {
  options: TabOption[];
  className?: string;
  full?: boolean;
}

export default function Tabs({ options, className, full }: Props) {
  return (
    <div
      className={clsx(
        "flex rounded-card bg-gray-100 px-1.5 py-1.5 max-w-[760px]",

        { "w-full": full, "w-max": !full },

        className
      )}
    >
      {options
        .filter((o) => o.render === undefined || o.render === true)
        .map((o, index) => (
          <Option
            key={index}
            name={o.name}
            onClick={o.onClick}
            selected={o.selected}
          />
        ))}
    </div>
  );
}
