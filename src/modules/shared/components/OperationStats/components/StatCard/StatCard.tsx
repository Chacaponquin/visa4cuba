interface Props {
  title: string;
  text: string;
}

export default function StatCard({ title, text }: Props) {
  return (
    <div className="flex items-center gap-x-3">
      <h4 className="font-title-bold text-2xl text-secondary">{title}</h4>

      <span className="text-gray-500 text-sm">{text}</span>
    </div>
  );
}
