import clsx from "clsx";
import Image from "./components/Image/Image";

interface Props {
  title: string;
  children?: React.ReactNode;
  image: { src: string; alt: string };
  reverse?: boolean;
}

export default function InfoCard({ title, children, image, reverse }: Props) {
  return (
    <div className="flex flex-col w-full items-center mb-20">
      <h2 className="font-title-bold text-xl mb-6 uppercase">{title}</h2>

      <div
        className={clsx("md:grid md:grid-cols-2 gap-y-6 gap-x-10 w-full flex", {
          "flex-col-reverse": reverse,
          "flex-col": !reverse,
        })}
      >
        {reverse ? (
          <>
            <div className="flex flex-col w-full">{children}</div>
            <Image image={image} />
          </>
        ) : (
          <>
            <Image image={image} />
            <div className="flex flex-col w-full">{children}</div>
          </>
        )}
      </div>
    </div>
  );
}
