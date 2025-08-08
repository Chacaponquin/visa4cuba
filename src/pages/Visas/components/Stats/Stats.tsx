import { APP_IMAGES } from "../../../../modules/app/domain/constants/app-images";
import ImageBanner from "../../../../modules/shared/components/ImageBanner/ImageBanner";
import StatCard from "./components/StatCard/StatCard";

export default function Stats() {
  return (
    <ImageBanner image={APP_IMAGES.PASSPORT.src}>
      <StatCard title="35+" text="Countries Represented" />
      <StatCard title="853+" text="Completed Visa Passports" />
      <StatCard title="55M+" text="Revenew In per year" />
      <StatCard title="40+" text="Experience immigration officer" />
    </ImageBanner>
  );
}
