import { APP_IMAGES } from "../../../../modules/app/domain/constants/app-images";
import CheckCorrect from "../../../../modules/app/modules/icon/components/CheckCorrect";
import Passport from "../../../../modules/app/modules/icon/components/Passport";
import World from "../../../../modules/app/modules/icon/components/World";
import useTranslation from "../../../../modules/app/modules/language/hooks/useTranslation";
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
    <section
      style={{
        background: `linear-gradient(to top, rgba(10, 53, 97, 1), rgba(10, 53, 97, 0.2)), url('${APP_IMAGES.VINTAGE_CAR.src}') center/cover`,
      }}
      className="w-full h-[500px] flex justify-center items-end mb-20 px-5"
    >
      <div className="bg-white rounded-card w-max md:w-full max-w-layout py-5 px-10 h-max shadow flex md:flex-row flex-col justify-center gap-x-14 gap-y-4 translate-y-14 md:translate-y-10 z-10">
        <StatCard icon={Passport} title={STAT_1} />
        <StatCard icon={CheckCorrect} title={STAT_2} />
        <StatCard icon={World} title={STAT_3} />
      </div>
    </section>
  );
}
