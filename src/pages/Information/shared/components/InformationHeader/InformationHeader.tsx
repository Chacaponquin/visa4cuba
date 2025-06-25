interface Props {
  children?: React.ReactNode;
  title: string;
}

export default function InformationHeader({ title }: Props) {
  return (
    <header className="flex w-full px-6 py-10 justify-center bg-primary h-[390px] items-end">
      <div className="w-full max-w-layout-sm justify-center items-center">
        <h1 className="md:text-6xl text-5xl font-title-semibold text-white text-left">
          {title}
        </h1>
      </div>
    </header>
  );
}
