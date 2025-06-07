import clsx from "clsx";

interface Props {
  value: string;
  onChange(v: string): void;
  placeholder?: string;
  id?: string;
}

export default function Input({ value, placeholder, onChange }: Props) {
  const CLASS = clsx(
    "rounded-input",
    "border-[1.5px] border-card",
    "px-3 py-1",
    "transition-all duration-200",
    "hover:shadow-input hover:border-primary",
    "focus:shadow-input focus:border-primary",
    "outline-none",
    "text-sm",
    "bg-white"
  );

  return (
    <input
      type="text"
      className={CLASS}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
