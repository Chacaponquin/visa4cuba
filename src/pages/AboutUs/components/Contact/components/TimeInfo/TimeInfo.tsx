interface Props {
  label: string;
  info: string;
}

export default function TimeInfo({ info, label }: Props) {
  return (
    <div className="flex items-center justify-between gap-3 w-full mb-1">
      <span className="text-sm text-gray-600">{label}</span>

      <span className="text-sm !font-medium">{info}</span>
    </div>
  );
}
