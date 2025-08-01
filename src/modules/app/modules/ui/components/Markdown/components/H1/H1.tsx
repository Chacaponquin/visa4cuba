interface Props {
  children?: React.ReactNode;
}

export default function H1({ children }: Props) {
  return <h1 className="font-title-semibold text-4xl mb-4">{children}</h1>;
}
