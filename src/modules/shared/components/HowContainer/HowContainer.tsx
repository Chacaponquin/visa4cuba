interface Props {
  children?: React.ReactNode;
}

export default function HowContainer({ children }: Props) {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-x-10 gap-x-6 gap-y-6 w-full">
      {children}
    </div>
  );
}
