import clsx from "clsx";
import LayoutSection from "../../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";

interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
  header?: string;
  id?: string;
  bg?: "white" | "blue" | "custom";
  condition?: boolean;
}

export default function ShopSection({
  children,
  description,
  title,
  id,
  header,
  bg,
  condition = true,
}: Props) {
  return (
    <LayoutSection
      title={title}
      id={id}
      description={description}
      header={header}
      bg={bg}
      className={clsx(condition ? "" : "hidden")}
    >
      {children}
    </LayoutSection>
  );
}
