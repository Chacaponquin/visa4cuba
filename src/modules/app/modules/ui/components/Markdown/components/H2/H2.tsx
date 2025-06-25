interface Props {
  children?: React.ReactNode;
}

export default function H2({ children }: Props) {
  return (
    <h1 className="font-title-semibold text-3xl mb-3 mt-10">{children}</h1>
  );
}
