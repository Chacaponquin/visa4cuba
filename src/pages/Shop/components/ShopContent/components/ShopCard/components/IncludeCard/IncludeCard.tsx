interface Props {
  value: string;
}

export default function IncludeCard({ value }: Props) {
  return (
    <div className="flex mb-1 items-center gap-x-2">
      <div className="bg-secondary rounded-full w-[6px] h-[6px]"></div>

      <p className="text-sm text-gray-600">{value}</p>
    </div>
  );
}
