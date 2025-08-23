import clsx from "clsx";

interface Props {
  children?: React.ReactNode;
  margin?: boolean;
}

export default function H3({ children, margin = true }: Props) {
  return (
    <h4
      className={clsx("font-title-semibold text-2xl mb-3", { "mt-5": margin })}
    >
      {children}
    </h4>
  );
}
