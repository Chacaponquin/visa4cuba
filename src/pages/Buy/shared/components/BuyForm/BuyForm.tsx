import type { IconProps } from "../../../../../modules/app/modules/icon/domain/props";

interface Props {
  children: React.ReactNode;
  title: string;
  icon: (props: IconProps) => React.ReactNode;
  description: string;
}

export default function BuyForm({ children, icon, description, title }: Props) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col items-center w-full max-w-[460px]">
        <header className="flex flex-col w-full items-center text-center mb-9 px-3">
          <i className="stroke-gray-700 w-max p-2.5 rounded-md border border-card mb-6">
            {icon({ size: 25 })}
          </i>

          <h1 className="font-title-semibold text-3xl mb-2">{title}</h1>

          <p className="text-sm text-gray-700">{description}</p>
        </header>

        {children}
      </div>
    </div>
  );
}
