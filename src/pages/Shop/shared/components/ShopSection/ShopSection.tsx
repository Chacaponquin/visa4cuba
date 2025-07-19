import LayoutSection from "../../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";

interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
  header?: string;
  id?: string;
}

export default function ShopSection({
  children,
  description,
  title,
  id,
  header,
}: Props) {
  return (
    <LayoutSection
      title={title}
      id={id}
      description={description}
      header={header}
    >
      {children}
    </LayoutSection>
  );
}
