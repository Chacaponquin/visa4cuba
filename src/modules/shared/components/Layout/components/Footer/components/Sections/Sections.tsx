import FooterSection from "../../shared/components/FooterSection/FooterSection";
import FooterInfo from "../../shared/components/FooterInfo/FooterInfo";
import Share from "../../../../../../../app/modules/icon/components/Share";
import User from "../../../../../../../app/modules/icon/components/User";
import City from "../../../../../../../app/modules/icon/components/City";
import { APP_ROUTES } from "../../../../../../../app/domain/constants/app-routes";

export default function Sections() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4">
      <FooterSection title="Corporativo" icon={City}>
        <FooterInfo text="Política de cookies" link="" />
        <FooterInfo text="Términos y condiciones" link="" />
        <FooterInfo
          text="Política de privacidad"
          link={APP_ROUTES.INFORMATION.PRIVACITY}
        />
      </FooterSection>

      <FooterSection title="Soporte" icon={User}>
        <FooterInfo text="Contáctanos" link="" />
        <FooterInfo text="Preguntas frecuentes" link="" />
      </FooterSection>

      <FooterSection title="Social" icon={Share}>
        <FooterInfo text="Facebook" link="" />
        <FooterInfo text="Instagram" link="" />
        <FooterInfo text="Twitter" link="" />
      </FooterSection>
    </div>
  );
}
