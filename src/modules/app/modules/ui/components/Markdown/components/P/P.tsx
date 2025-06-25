interface Props {
  children?: React.ReactNode;
}

export default function P({ children }: Props) {
  return <p className="mb-2 leading-7 text-base text-gray-700">{children}</p>;
}
