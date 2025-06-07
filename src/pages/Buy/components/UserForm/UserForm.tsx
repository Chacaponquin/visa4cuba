import Form from "../../../../modules/app/modules/form/components/Form/Form";
import FormSection from "../../../../modules/app/modules/form/components/FormSection/FormSection";
import User from "../../../../modules/app/modules/icon/components/User";
import Button from "../../../../modules/app/modules/ui/components/Button/Button";
import DatePicker from "../../../../modules/app/modules/ui/components/DatePicker/DatePicker";
import Input from "../../../../modules/app/modules/ui/components/Input/Input";
import Select from "../../../../modules/app/modules/ui/components/Select/Select";
import { COUNTRIES } from "../../../../modules/shared/domain/entities/country";
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
  function handleSubmit() {
    onSubmit();
  }

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

        <FormSection label="Nombre" required>
          <Input value={name.value} onChange={name.onChange} />
        </FormSection>

        <FormSection label="Apellidos" required>
          <Input value={lastname.value} onChange={lastname.onChange} />
        </FormSection>

        <FormSection label="Teléfono" required>
          <Input value={phone.value} onChange={phone.onChange} />
        </FormSection>

        <FormSection label="Nacionalidad" required>
          <Select
            options={COUNTRIES}
            label={(o) => o.name}
            onChange={country.onChange}
            ovalue={(o) => o.name}
            value={country.value}
          />
        </FormSection>

        <FormSection label="Fecha de nacimiento" required>
          <DatePicker onChange={birthdate.onChange} value={birthdate.value} />
        </FormSection>

        <Button type="submit" className="mt-5" full size="lg">
          Siguiente
        </Button>
      </Form>
    </BuyForm>
  );
}
