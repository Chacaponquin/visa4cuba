interface Props {
  children?: React.ReactNode;
}

export default function FormSectionColumn({ children }: Props) {
  return (
    <div className="grid w-full sm:grid-cols-2 grid-cols-1 gap-x-4">
      {children}
    </div>
  );
}
