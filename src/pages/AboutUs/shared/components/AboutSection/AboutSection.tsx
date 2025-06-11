import AboutContainer from "../AboutContainer/AboutContainer";

interface Props {
  children?: React.ReactNode;
  title: string;
  description: string;
}

export default function AboutSection({ children, description, title }: Props) {
  return (
    <AboutContainer>
      <header className="text-center max-w-4xl flex flex-col items-center mb-10">
        <h1 className="text-5xl font-title-bold mb-3">{title}</h1>

        <p className="text-gray-600 text-lg">{description}</p>
      </header>

      {children}
    </AboutContainer>
  );
}
