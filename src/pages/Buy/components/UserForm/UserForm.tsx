import Form from "../../../../modules/app/modules/form/components/Form/Form";
import FormSection from "../../../../modules/app/modules/form/components/FormSection/FormSection";
import User from "../../../../modules/app/modules/icon/components/User";
import Button from "../../../../modules/app/modules/ui/components/Button/Button";
import Input from "../../../../modules/app/modules/ui/components/Input/Input";
import BuyForm from "../../shared/components/BuyForm/BuyForm";

interface Props {
  onSubmit(): void;
  title: string;
  description: string;
  name: { value: string; onChange(v: string): void };
  lastname: { value: string; onChange(v: string): void };
  email: { value: string; onChange(v: string): void };
  phone: { value: string; onChange(v: string): void };
}

export default function UserForm({
  onSubmit,
  email,
  lastname,
  name,
  phone,
  description,
  title,
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

        <Button type="submit" className="mt-5" full size="lg">
          Siguiente
        </Button>
      </Form>
    </BuyForm>
  );
}
