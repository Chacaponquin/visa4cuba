import useToast from "../../../../modules/app/hooks/useToast";
import Form from "../../../../modules/app/modules/form/components/Form/Form";
import FormSection from "../../../../modules/app/modules/form/components/FormSection/FormSection";
import User from "../../../../modules/app/modules/icon/components/User";
import useTranslation from "../../../../modules/app/modules/language/hooks/useTranslation";
import Button from "../../../../modules/app/modules/ui/components/Button/Button";
import DatePicker from "../../../../modules/app/modules/ui/components/DatePicker/DatePicker";
import Input from "../../../../modules/app/modules/ui/components/Input/Input";
import Select from "../../../../modules/app/modules/ui/components/Select/Select";
import { COUNTRIES } from "../../../../modules/shared/domain/entities/country";
import { ShopUserValidator } from "../../../../modules/shop/domain/validator/shop-user/shop-user-validator";
import BuyForm from "../../shared/components/BuyForm/BuyForm";

interface Props {
  onSubmit(): void;
  title: string;
  description: string;
  name: { value: string; onChange(v: string): void };
  lastname: { value: string; onChange(v: string): void };
  email: { value: string; onChange(v: string): void };
  phone: { value: string; onChange(v: string): void };
  birthdate: { value: Date | null; onChange(v: Date): void };
  country: { value: string | null; onChange(v: string): void };
}

export default function UserForm({
  onSubmit,
  email,
  lastname,
  name,
  phone,
  description,
  title,
  birthdate,
  country,
}: Props) {
  const { errors } = useToast();

  function handleSubmit() {
    const validator = new ShopUserValidator();

    validator.execute({ success: onSubmit, error: errors });
  }

  const { BIRTHDATE, BUTTON, COUNTRY, LAST_NAME, NAME, PHONE } = useTranslation(
    {
      NAME: { es: "Nombre", en: "Name", it: "Nome" },
      LAST_NAME: { es: "Apellidos", en: "Lastname", it: "Cognomi" },
      PHONE: { es: "Teléfono", en: "Phone", it: "Telefono" },
      COUNTRY: { es: "Nacionalidad", en: "Nationality", it: "Nazionalità" },
      BIRTHDATE: {
        es: "Fecha de nacimiento",
        en: "Birthdate",
        it: "Data di nascita",
      },
      BUTTON: { es: "Siguiente", en: "Next", it: "Seguente" },
    }
  );

  return (
    <BuyForm icon={User} description={description} title={title}>
      <Form onSubmit={handleSubmit}>
        <FormSection label="Email" required>
          <Input
            value={email.value}
            onChange={email.onChange}
            placeholder="example@gmail.com"
          />
        </FormSection>

        <FormSection label={NAME} required>
          <Input value={name.value} onChange={name.onChange} />
        </FormSection>

        <FormSection label={LAST_NAME} required>
          <Input value={lastname.value} onChange={lastname.onChange} />
        </FormSection>

        <FormSection label={PHONE} required>
          <Input value={phone.value} onChange={phone.onChange} />
        </FormSection>

        <FormSection label={COUNTRY} required>
          <Select
            options={COUNTRIES}
            label={(o) => o.name}
            onChange={country.onChange}
            ovalue={(o) => o.name}
            value={country.value}
          />
        </FormSection>

        <FormSection label={BIRTHDATE} required>
          <DatePicker onChange={birthdate.onChange} value={birthdate.value} />
        </FormSection>

        <Button type="submit" className="mt-5" full size="lg">
          {BUTTON}
        </Button>
      </Form>
    </BuyForm>
  );
}
