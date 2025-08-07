import clsx from "clsx";

interface Props {
  children?: React.ReactNode;
  id?: string;
  bg?: "custom" | "blue" | "white";
}

export default function SectionContainer({
  children,
  id,
  bg = "white",
}: Props) {
  return (
    <section
      id={id}
      style={{
        background:
          bg === "custom"
            ? `linear-gradient(to top, rgba(236, 251, 255, 0.8), rgba(236, 251, 255, 0.8)), url('/images/custom-bg.png') center/cover`
            : undefined,
      }}
      className={clsx(
        "w-full flex justify-center py-14 md:py-20 px-6 relative",
        { "bg-white": bg === "white", "bg-primary-50/50": bg === "blue" }
      )}
    >
      <div className="w-full flex flex-col max-w-layout items-center">
        {children}
      </div>
    </section>
  );
}
