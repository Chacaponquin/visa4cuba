interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
}

export default function ShopSection({ children, description, title }: Props) {
  return (
    <div className="w-full flex flex-col mb-16 md:mb-20 lg:mb-28 items-center">
      <header className="flex flex-col mb-6 text-center max-w-2xl">
        <h1 className="font-title-bold text-4xl mb-2">{title}</h1>
        <p className="text-base text-gray-700">{description}</p>
      </header>

      {children}
    </div>
  );
}
