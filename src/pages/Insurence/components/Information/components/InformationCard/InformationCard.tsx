interface Props {
  image: { src: string; alt: string };
  title: string;
  children?: React.ReactNode;
}

export default function InformationCard({ image, title, children }: Props) {
  return (
    <article className="flex flex-col w-full">
      <h1 className="w-full text-center text-2xl mb-5 font-title-semibold">
        {title}
      </h1>

      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-[330px] object-cover rounded-card mb-4"
      />

      {children}
    </article>
  );
}
