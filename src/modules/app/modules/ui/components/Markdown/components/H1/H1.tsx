interface Props {
  children?: React.ReactNode;
}

export default function H1({ children }: Props) {
  return <h2 className="font-title-semibold text-4xl mb-4">{children}</h2>;
}
