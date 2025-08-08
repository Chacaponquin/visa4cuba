import SectionContainer from "../SectionContainer/SectionContainer";

interface Props {
  title?: string;
  id?: string;
  children?: React.ReactNode;
  description?: string;
  header?: string;
  bg?: "white" | "blue" | "custom";
}

export default function LayoutSection({
  description,
  id,
  title,
  children,
  header,
  bg,
}: Props) {
  return (
    <SectionContainer bg={bg} id={id}>
      {header && (
        <div className="rounded-full px-4 py-1.5 bg-primary/10 text-primary font-medium mb-6">
          {header}
        </div>
      )}

      {title && (
        <header className="text-center max-w-4xl flex flex-col items-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-title-bold">{title}</h2>

          {description && (
            <p className="text-gray-500 text-base md:text-lg mt-3">
              {description}
            </p>
          )}
        </header>
      )}

      {children}
    </SectionContainer>
  );
}
