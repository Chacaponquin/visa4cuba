import clsx from "clsx";

interface Props {
  value: string;
  onChange(v: string): void;
  placeholder?: string;
  name?: string;
  id?: string;
}

export default function Textarea({
  onChange,
  value,
  id,
  name,
  placeholder,
}: Props) {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      name={name}
      id={id}
      onChange={(e) => onChange(e.target.value)}
      className={clsx(
        "rounded-input",
        "border-[1.5px] border-card",
        "px-3 py-2",
        "transition-all duration-200",
        "hover:shadow-input hover:border-primary",
        "focus:shadow-input focus:border-primary",
        "outline-none",
        "text-sm",
        "bg-white",
        "h-[120px]"
      )}
    ></textarea>
  );
}
