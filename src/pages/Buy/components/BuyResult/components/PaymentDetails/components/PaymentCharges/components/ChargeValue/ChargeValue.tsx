interface Props {
  label: string;
  children: React.ReactNode;
}

export default function ChargeValue({ children, label }: Props) {
  return (
    <div className="text-sm flex items-center justify-between gap-x-4 w-full">
      <p className="text-gray-700">{label}</p>

      <span className="!font-medium text-gray-700">{children}</span>
    </div>
  );
}
