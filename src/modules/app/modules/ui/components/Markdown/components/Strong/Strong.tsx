interface Props {
  children?: React.ReactNode;
}

export default function Strong({ children }: Props) {
  return <strong className="font-semibold text-black">{children}</strong>;
}
