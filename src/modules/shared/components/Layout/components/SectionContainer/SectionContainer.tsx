interface Props {
  children?: React.ReactNode;
  id?: string;
}

export default function SectionContainer({ children, id }: Props) {
  return (
    <section
      id={id}
      className="w-full flex justify-center py-14 md:py-20 px-6 relative"
    >
      <div className="w-full flex flex-col max-w-layout items-center">
        {children}
      </div>
    </section>
  );
}
