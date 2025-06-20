interface Props {
  children?: React.ReactNode;
}

export default function FormSectionColumn({ children }: Props) {
  return <div className="grid w-full grid-cols-2 gap-x-4">{children}</div>;
}
