interface Props {
  children?: React.ReactNode;
}

export default function ListItem({ children }: Props) {
  return <li className="">{children}</li>;
}
