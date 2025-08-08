import Mail from "../../../../../../../app/modules/icon/components/Mail";
import useTranslation from "../../../../../../../app/modules/language/hooks/useTranslation";
import Button from "../../../../../../../app/modules/ui/components/Button/Button";
import Input from "../../../../../../../app/modules/ui/components/Input/Input";
import FooterSection from "../../shared/components/FooterSection/FooterSection";
import useSuscribeSection from "./hooks/useSuscribeSection";

export default function SuscribeSection() {
  const { email, setEmail, handleSubmit } = useSuscribeSection();

  const { TITLE, SUSCRIBE, TEXT, PLACEHOLDER } = useTranslation({
    TITLE: {
      es: "Suscríbete al boletín",
      en: "Subscribe to the newsletter",
      it: "Iscriviti alla newsletter",
    },
    SUSCRIBE: { es: "Suscribirse", en: "Subscribe", it: "Iscriviti" },
    TEXT: {
      es: "Recibe consejos de viaje, alertas importantes y promociones exclusivas.",
      en: "Receive travel tips, important alerts, and exclusive promotions.",
      it: "Ricevi consigli di viaggio, avvisi importanti e promozioni esclusive.",
    },
    PLACEHOLDER: {
      es: "Inserte su correo electrónico",
      en: "Enter your email",
      it: "Inserisci la tua email",
    },
  });

  return (
    <FooterSection icon={Mail} title={TITLE}>
      <p className="text-white mb-3">{TEXT}</p>

      <div className="flex items-center gap-x-3 w-full">
        <Input onChange={setEmail} value={email} placeholder={PLACEHOLDER} />

        <Button icon={Mail} color="light" size="sm" onClick={handleSubmit}>
          {SUSCRIBE}
        </Button>
      </div>
    </FooterSection>
  );
}
