interface Props {
  children?: React.ReactNode;
  title: string;
}

export default function HowCard({ title, children }: Props) {
  return (
    <article className="rounded-card bg-white shadow px-7 py-7 flex flex-col">
      <h4 className="font-title-bold w-full text-center text-xl mb-2.5">
        {title}
      </h4>

      {children}
    </article>
  );
}
