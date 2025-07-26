interface Props {
  children?: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

export default function LayoutHeader({
  children,
  description,
  title,
  image,
}: Props) {
  return (
    <header
      style={{
        background: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${image}') center/cover`,
      }}
      className="flex w-full flex-col items-center justify-center py-44 text-center px-5"
    >
      <div className="flex flex-col items-center w-full ">
        <div className="text-6xl mb-8">
          <h1 className="font-title-bold mb-1 text-white">{title}</h1>
        </div>

        <p className="text-lg text-gray-200 max-w-3xl">{description}</p>

        {children}
      </div>
    </header>
  );
}
