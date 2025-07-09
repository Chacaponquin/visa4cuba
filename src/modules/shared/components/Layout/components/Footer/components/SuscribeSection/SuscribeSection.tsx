import Mail from "../../../../../../../app/modules/icon/components/Mail";
import Button from "../../../../../../../app/modules/ui/components/Button/Button";
import Input from "../../../../../../../app/modules/ui/components/Input/Input";
import FooterSection from "../../shared/components/FooterSection/FooterSection";
import useSuscribeSection from "./hooks/useSuscribeSection";

export default function SuscribeSection() {
  const { email, setEmail, handleSubmit } = useSuscribeSection();

  return (
    <FooterSection icon={Mail} title="Suscríbete al boletín">
      <p className="text-white mb-3">
        Recibe consejos de viaje, alertas importantes y promociones exclusivas.
      </p>

      <div className="flex items-center gap-x-4">
        <Input
          onChange={setEmail}
          value={email}
          placeholder="Inserte su correo electrónico"
        />

        <Button icon={Mail} color="light" size="base" onClick={handleSubmit}>
          Suscribirse
        </Button>
      </div>
    </FooterSection>
  );
}
