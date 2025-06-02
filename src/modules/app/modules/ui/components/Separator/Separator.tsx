import clsx from "clsx";

interface Props {
  className?: string;
}

export default function Separator({ className }: Props) {
  return <div className={clsx("border-t w-full border-card", className)}></div>;
}
