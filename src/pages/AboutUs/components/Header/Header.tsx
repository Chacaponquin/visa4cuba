export default function Header() {
  return (
    <header
      style={{
        background:
          "linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/cuba-2.jpg') center/cover",
      }}
      className="flex w-full flex-col items-center justify-center py-44 text-center px-5"
    >
      <div className="flex flex-col items-center w-full max-w-3xl">
        <div className="text-6xl mb-8">
          <h1 className="font-title-bold mb-1 text-white">Descubre Cuba con</h1>
          <h1 className="font-title-bold text-secondary">Visa4Cuba</h1>
        </div>

        <p className="text-lg text-gray-200">
          Somos una agencia de viajes especializada en crear experiencias únicas
          e inolvidables en la hermosa isla de Cuba. Con más de 10 años de
          experiencia, te ayudamos a descubrir la auténtica cultura, historia y
          belleza cubana.
        </p>
      </div>
    </header>
  );
}
