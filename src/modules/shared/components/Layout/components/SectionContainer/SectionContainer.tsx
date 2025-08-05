import clsx from "clsx";

interface Props {
  children?: React.ReactNode;
  id?: string;
  bg?: boolean;
}

export default function SectionContainer({ children, id, bg }: Props) {
  return (
    <section
      id={id}
      className={clsx(
        "w-full flex justify-center py-14 md:py-20 px-6 relative",
        { "bg-white": bg === false, "bg-primary-50/50": bg === true }
      )}
    >
      <div className="w-full flex flex-col max-w-layout items-center">
        {children}
      </div>
    </section>
  );
}
