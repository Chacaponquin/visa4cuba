import type { IconProps } from "../../../../../../../../app/modules/icon/domain/props";

interface Props {
  title: string;
  icon: (props: IconProps) => React.ReactNode;
  children: React.ReactNode;
}

export default function FooterSection({ children, icon, title }: Props) {
  return (
    <section className="flex flex-col w-full">
      <div className="flex items-center gap-x-2 mb-2.5">
        <i className="stroke-secondary">{icon({ size: 22 })}</i>

        <h2 className="text-white uppercase text-base font-medium">{title}</h2>
      </div>

      {children}
    </section>
  );
}
