import clsx from "clsx";

interface Props {
  children?: React.ReactNode;
  title: string;
  image: { src: string; alt: string };
  reverse?: boolean;
  footer?: React.ReactNode;
}

export default function ImageInfoCard({
  image,
  title,
  children,
  footer,
}: Props) {
  return (
    <div
      className={clsx(
        "flex flex-col items-center w-full justify-between gap-x-10 gap-y-5 bg-white rounded-card shadow px-12 py-7"
      )}
    >
      <section className="flex flex-col w-full lg:pt-5">
        <h1 className="font-title-bold text-3xl text-primary mb-7 text-center">
          {title}
        </h1>

        {children}
      </section>

      <section className="w-full relative">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full object-cover object-top rounded-lg max-h-[400px]"
        />
      </section>

      {footer}
    </div>
  );
}
