import { APP_IMAGES } from "../../../../../../../app/domain/constants/app-images";

export default function Logo() {
  return (
    <div className="flex w-full max-w-[200px] items-center">
      <img
        src={APP_IMAGES.LOGO.src}
        alt={APP_IMAGES.LOGO.alt}
        className="w-[170px] object-contain"
      />
    </div>
  );
}
