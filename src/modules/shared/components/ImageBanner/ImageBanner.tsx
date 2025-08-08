interface Props {
  children?: React.ReactNode;
  image: string;
}

export default function ImageBanner({ image, children }: Props) {
  return (
    <section
      style={{
        background: `linear-gradient(to top, rgba(10, 53, 97, 1), rgba(10, 53, 97, 0.2)), url('${image}') center/cover`,
      }}
      className="w-full h-[500px] flex justify-center items-end mb-20 px-5"
    >
      <div className="bg-white rounded-card w-max md:w-full max-w-layout py-5 px-10 h-max shadow flex md:flex-row flex-col justify-center gap-x-10 gap-y-4 translate-y-14 md:translate-y-10 z-10">
        {children}
      </div>
    </section>
  );
}
