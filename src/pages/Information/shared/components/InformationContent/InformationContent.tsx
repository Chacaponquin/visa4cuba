interface Props {
  children?: React.ReactNode;
}

export default function InformationContent({ children }: Props) {
  return (
    <main className="w-full flex justify-center px-6 py-5 md:py-10 mb-10">
      <div className="w-full flex flex-col max-w-layout-sm">{children}</div>
    </main>
  );
}
