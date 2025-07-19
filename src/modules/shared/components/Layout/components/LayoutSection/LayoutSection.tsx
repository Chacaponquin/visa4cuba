import SectionContainer from "../SectionContainer/SectionContainer";

interface Props {
  id?: string;
  children?: React.ReactNode;
  title: string;
  description: string;
  header?: string;
}

export default function LayoutSection({
  description,
  id,
  title,
  children,
  header,
}: Props) {
  return (
    <SectionContainer id={id}>
      {header && (
        <div className="rounded-full px-4 py-1.5 bg-primary/10 text-primary font-medium mb-3">
          {header}
        </div>
      )}

      <header className="text-center max-w-4xl flex flex-col items-center mb-10">
        <h2 className="text-4xl lg:text-5xl font-title-bold mb-3">{title}</h2>

        <p className="text-gray-500 text-base md:text-lg">{description}</p>
      </header>

      {children}
    </SectionContainer>
  );
}
