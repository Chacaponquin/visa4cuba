import FooterSection from "../../shared/components/FooterSection/FooterSection";
import FooterInfo from "../../shared/components/FooterInfo/FooterInfo";
import Share from "../../../../../../../app/modules/icon/components/Share";
import User from "../../../../../../../app/modules/icon/components/User";
import City from "../../../../../../../app/modules/icon/components/City";
import { APP_ROUTES } from "../../../../../../../app/domain/constants/app-routes";
import { APP_INFO } from "../../../../../../../app/domain/constants/app-info";
import useTranslation from "../../../../../../../app/modules/language/hooks/useTranslation";

export default function Sections() {
  const { COOKIES, TERMS, PRIVACITY, SUPPORT, CONTACT, FAQ, SOCIAL, CORP } =
    useTranslation({
      COOKIES: {
        es: "Política de cookies",
        en: "Cookie Policy",
        it: "Informativa sui cookie",
      },
      TERMS: {
        es: "Términos y condiciones",
        en: "Terms and Conditions",
        it: "Termini e Condizioni",
      },
      PRIVACITY: {
        es: "Política de privacidad",
        en: "Privacy Policy",
        it: "Politica sulla riservatezza",
      },
      SUPPORT: { es: "Soporte", en: "Support", it: "Supporto" },
      CONTACT: { es: "Contáctanos", en: "Contact us", it: "Contattaci" },
      FAQ: {
        es: "Preguntas frecuentes",
        en: "Frequently Asked Questions",
        it: "Domande frequenti",
      },
      SOCIAL: { es: "Social", en: "Social", it: "Sociale" },
      CORP: { es: "Corporativo", en: "Corporate", it: "Aziendale" },
    });

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4">
      <FooterSection title={CORP} icon={City}>
        <FooterInfo text={COOKIES} link={APP_ROUTES.INFORMATION.COOKIES} />
        <FooterInfo
          text={TERMS}
          link={APP_ROUTES.INFORMATION.TERMS_AND_CONDITIONS}
        />
        <FooterInfo text={PRIVACITY} link={APP_ROUTES.INFORMATION.PRIVACITY} />
      </FooterSection>

      <FooterSection title={SUPPORT} icon={User}>
        <FooterInfo text={CONTACT} link={APP_ROUTES.ABOUT_US} />
        <FooterInfo text={FAQ} link={APP_ROUTES.HOME_FAQ} />
      </FooterSection>

      <FooterSection title={SOCIAL} icon={Share}>
        <FooterInfo text="Facebook" link={APP_INFO.FACEBOOK} />
        <FooterInfo text="Instagram" link={APP_INFO.INSTAGRAM} />
        <FooterInfo text="Twitter" link={APP_INFO.TWITTER} />
      </FooterSection>
    </div>
  );
}
