import type { IconProps } from "../../../../../../modules/app/modules/icon/domain/props";
import IconCard from "../../../../../../modules/shared/components/IconCard/IconCard";

interface Props {
  icon: (props: IconProps) => React.ReactNode;
  title: string;
}

export default function StatCard({ icon, title }: Props) {
  return (
    <article className="flex items-center gap-x-3">
      <IconCard icon={icon} color="secondary" size="xl" />

      <p className="font-title-semibold text-lg text-secondary">{title}</p>
    </article>
  );
}
