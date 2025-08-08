import { APP_IMAGES } from "../../../modules/app/domain/constants/app-images";
import ImageBanner from "../../../modules/shared/components/ImageBanner/ImageBanner";
import OperationStats from "../../../modules/shared/components/OperationStats/OperationStats";

export default function Stats() {
  return (
    <ImageBanner image={APP_IMAGES.SELF_CARE.src}>
      <OperationStats />
    </ImageBanner>
  );
}
