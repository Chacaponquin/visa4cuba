interface Props {
  children?: React.ReactNode;
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="w-full flex justify-center py-28 px-6">
      <div className="w-full flex flex-col max-w-layout items-center">
        {children}
      </div>
    </section>
  );
}
