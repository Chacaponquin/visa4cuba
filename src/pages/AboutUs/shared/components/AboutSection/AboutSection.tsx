import LayoutSection from "../../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";

interface Props {
  children?: React.ReactNode;
  title: string;
  description: string;
}

export default function AboutSection({ children, description, title }: Props) {
  return (
    <LayoutSection title={title} description={description}>
      {children}
    </LayoutSection>
  );
}
