import clsx from "clsx";
import Button from "../Button/Button";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export default function ArrowButton({ children, className }: Props) {
  return (
    <Button className={clsx("mt-10", className)} color="secondary" size="lg">
      {children}
    </Button>
  );
}
