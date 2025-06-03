import { APP_IMAGES } from "../../../../../../../app/domain/constants/app-images";
import Close from "../../../../../../../app/modules/icon/components/Close";

interface Props {
  onClose(): void;
}

export default function Header({ onClose }: Props) {
  return (
    <header className="flex flex-col mb-1">
      <div className="flex justify-end w-full mb-3">
        <button type="button" className="stroke-black" onClick={onClose}>
          <Close size={22} />
        </button>
      </div>

      <div className="flex w-full justify-center">
        <img
          src={APP_IMAGES.LOGO.src}
          alt={APP_IMAGES.LOGO.alt}
          className="w-[170px] object-contain"
        />
      </div>
    </header>
  );
}
