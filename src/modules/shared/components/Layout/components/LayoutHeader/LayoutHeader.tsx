import clsx from "clsx";

interface Props {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  image: string;
  sideImage?: { src: string; alt: string };
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
        background: `linear-gradient(to right, rgba(0, 102, 204, 1), rgba(0, 102, 204, 0.3)), url('${image}') center/cover`,
      }}
      className="flex w-full flex-col items-center px-5"
    >
      <div
        className={clsx("flex w-full max-w-layout pt-6 items-end", {
          "lg:justify-between justify-center": sideImage !== undefined,
          "justify-center": sideImage === undefined,
        })}
      >
        <section
          className={clsx("flex flex-col w-full pt-32 pb-32", {
            "lg:items-start items-center lg:text-left text-center max-w-[450px]":
              sideImage !== undefined,
            "text-center items-center max-w-[700px]": sideImage === undefined,
          })}
        >
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

        {sideImage && (
          <section className="lg:flex hidden w-full max-w-[700px] h-full items-end">
            <img
              src={sideImage.src}
              alt={sideImage.alt}
              className="w-full object-contain"
            />
          </section>
        )}
      </div>
    </header>
  );
}
