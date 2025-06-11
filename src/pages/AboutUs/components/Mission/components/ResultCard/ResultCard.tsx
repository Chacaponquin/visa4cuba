interface Props {
  title: string;
  description: string;
}

export default function ResultCard({ description, title }: Props) {
  return (
    <article className="flex flex-col rounded-lg bg-primary-100 px-5 py-4 h-max">
      <h3 className="font-title-medium text-2xl mb-0.5 text-primary">
        {title}
      </h3>

      <span className="text-gray-500 text-sm">{description}</span>
    </article>
  );
}
