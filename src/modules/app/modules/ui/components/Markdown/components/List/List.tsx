interface Props {
  children?: React.ReactNode;
}

export default function List({ children }: Props) {
  return <ul className="list-disc flex flex-col pl-10">{children}</ul>;
}
