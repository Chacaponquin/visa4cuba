import type { IconProps } from "../../../../../../modules/app/modules/icon/domain/props";

interface Props {
  icon: (props: IconProps) => React.ReactNode;
  title: string;
  children?: React.ReactNode;
}

export default function ContactCard({ icon, title, children }: Props) {
  return (
    <article className="px-6 w-full py-3.5 rounded-card bg-white border-card border-[1.5px] mb-5">
      <header className="flex items-center gap-x-3 mb-3">
        <i className="stroke-secondary">{icon({ size: 25 })}</i>

        <h3 className="font-title-medium text-lg">{title}</h3>
      </header>

      {children}
    </article>
  );
}
