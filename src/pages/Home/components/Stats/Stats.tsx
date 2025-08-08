import { APP_IMAGES } from "../../../../modules/app/domain/constants/app-images";
import CheckCorrect from "../../../../modules/app/modules/icon/components/CheckCorrect";
import Passport from "../../../../modules/app/modules/icon/components/Passport";
import World from "../../../../modules/app/modules/icon/components/World";
import useTranslation from "../../../../modules/app/modules/language/hooks/useTranslation";
import ImageBanner from "../../../../modules/shared/components/ImageBanner/ImageBanner";
import StatCard from "./components/StatCard/StatCard";

export default function Stats() {
  const { STAT_1, STAT_2, STAT_3 } = useTranslation({
    STAT_1: {
      en: "Visa Process",
      es: "Proceso de Visa",
      it: "Procedura per il Visto",
    },
    STAT_2: {
      en: "99% Visa Approvals",
      es: "99 % de Visas Aprobadas",
      it: "99% di Visti Approvati",
    },
    STAT_3: { en: "Inmigration", es: "Inmigración", it: "Immigrazione" },
  });

  return (
    <ImageBanner image={APP_IMAGES.VINTAGE_CAR.src}>
      <StatCard icon={Passport} title={STAT_1} />
      <StatCard icon={CheckCorrect} title={STAT_2} />
      <StatCard icon={World} title={STAT_3} />
    </ImageBanner>
  );
}
