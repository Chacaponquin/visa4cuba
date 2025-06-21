import clsx from "clsx";

interface Props {
  children?: React.ReactNode;
  title: string;
  image: { src: string; alt: string };
  reverse?: boolean;
}

export default function ImageInfoCard({
  image,
  title,
  children,
  reverse,
}: Props) {
  return (
    <div
      className={clsx(
        "flex flex-col-reverse lg:items-start items-center w-full justify-between gap-x-10 gap-y-12 mb-20",
        { "lg:flex-row-reverse": reverse, "lg:flex-row": !reverse }
      )}
    >
      <section className="flex flex-col w-full lg:pt-5">
        <h1 className="font-title-bold text-4xl mb-3">{title}</h1>

        {children}
      </section>

      <section className="w-full max-w-[600px] relative">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full object-cover object-top rounded-lg max-h-[400px]"
        />

        <div
          className={clsx(
            "bg-secondary rounded-lg w-full absolute h-full -z-10",
            {
              "md:-left-5 mf:top-5 -left-3 top-3": reverse,
              "md:-right-5 md:top-5 top-3 -right-3": !reverse,
            }
          )}
        ></div>
      </section>
    </div>
  );
}
