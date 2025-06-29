interface Props {
  children?: React.ReactNode;
}

export default function Th({ children }: Props) {
  return (
    <th className="pt-1 rounded pr-5 pb-3 text-left font-medium font-normal text-sm">
      {children}
    </th>
  );
}
