interface Props {
  children: React.ReactNode;
}

export default function Td({ children }: Props) {
  return (
    <td className="py-2 text-left text-sm text-gray-600 rounded leading-7 border-t-[0.2px] border-gray-400 pr-5">
      {children}
    </td>
  );
}
