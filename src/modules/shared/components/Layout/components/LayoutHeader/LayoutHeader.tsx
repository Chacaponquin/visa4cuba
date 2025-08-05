interface Props {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  image: string;
  sideImage: { src: string; alt: string };
}

export default function LayoutHeader({
  children,
  description,
  title,
  image,
  sideImage,
}: Props) {
  return (
    <header
      style={{
        background: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${image}') center/cover`,
      }}
      className="flex w-full flex-col items-center px-5"
    >
      <div className="flex w-full max-w-layout lg:justify-between justify-center pt-6 items-end">
        <section className="flex flex-col lg:items-start items-center lg:text-left text-center w-full max-w-[450px] pt-32 pb-20">
          {title && (
            <div className="text-5xl">
              <h1 className="font-title-bold mb-1 text-white">{title}</h1>
            </div>
          )}

          {description && (
            <p className="text-lg text-gray-200 max-w-3xl mt-8">
              {description}
            </p>
          )}

          {children}
        </section>

        <section className="lg:flex hidden w-full max-w-[700px] h-full items-end">
          <img
            src={sideImage.src}
            alt={sideImage.alt}
            className="w-full object-contain"
          />
        </section>
      </div>
    </header>
  );
}
