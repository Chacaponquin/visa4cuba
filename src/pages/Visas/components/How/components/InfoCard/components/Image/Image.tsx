interface Props {
  image: { src: string; alt: string };
}

export default function Image({ image }: Props) {
  return (
    <figure className="w-full">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-[350px] object-cover rounded-card"
      />
    </figure>
  );
}
