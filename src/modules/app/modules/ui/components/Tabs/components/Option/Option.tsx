import clsx from "clsx";

interface Props {
  onClick(): void;
  name: string;
  selected: boolean;
}

export default function Option({ name, onClick, selected }: Props) {
  const CLASS = clsx(
    "w-full",
    "px-5 py-3",
    "rounded-card",
    "font-medium",
    "text-center",
    "text-base",
    "transition-all duration-200",
    "cursor-pointer",
    "whitespace-nowrap",

    {
      "bg-white shadow": selected,
    }
  );

  return (
    <div className={CLASS} onClick={onClick}>
      {name}
    </div>
  );
}
