import { APP_IMAGES } from "../../../../../app/domain/constants/app-images";
import Sections from "./components/Sections/Sections";
import SuscribeSection from "./components/SuscribeSection/SuscribeSection";

export default function Footer() {
  return (
    <footer className="w-full bg-primary-950 flex flex-col items-center px-5">
      <div className="w-full max-w-layout flex flex-col py-10">
        <img
          src={APP_IMAGES.FOOTER_LOGO.src}
          alt={APP_IMAGES.FOOTER_LOGO.alt}
          className="w-[170px] object-contain mb-8"
        />

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-6 sm:gap-y-10">
          <Sections />
          <SuscribeSection />
        </div>
      </div>

      <div className="w-full text-center py-3 px-5 text-white bg-primary-950">
        © YourCuba. Todos los derechos reservados.
      </div>
    </footer>
  );
}
