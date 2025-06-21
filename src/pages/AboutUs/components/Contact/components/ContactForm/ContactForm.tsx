import Form from "../../../../../../modules/app/modules/form/components/Form/Form";
import FormSection from "../../../../../../modules/app/modules/form/components/FormSection/FormSection";
import FormSectionColumn from "../../../../../../modules/app/modules/form/components/FormSectionColumn/FormSectionColumn";
import Send from "../../../../../../modules/app/modules/icon/components/Send";
import Button from "../../../../../../modules/app/modules/ui/components/Button/Button";
import Input from "../../../../../../modules/app/modules/ui/components/Input/Input";
import PhoneInput from "../../../../../../modules/app/modules/ui/components/PhoneInput/PhoneInput";
import Textarea from "../../../../../../modules/app/modules/ui/components/Textarea/Textarea";
import { UserFormPlaceholders } from "../../../../../../modules/user/domain/value-object/user-form";
import useContactForm from "./hooks/useContactForm";

export default function ContactForm() {
  const {
    handleSubmit,
    name,
    setName,
    lastname,
    setLastname,
    email,
    setEmail,
    phone,
    setPhone,
    message,
    setMessage,
    loading,
  } = useContactForm();

  return (
    <section className="border-[1.5px] border-card flex flex-col px-7 py-4 rounded-card bg-white w-full">
      <header className="mb-7">
        <h2 className="font-title-medium mb-1 text-2xl">Envíanos un mensaje</h2>
        <p className="text-gray-600 text-sm">
          Completa el formulario y nos pondremos en contacto contigo lo antes
          posible.
        </p>
      </header>

      <Form onSubmit={handleSubmit}>
        <FormSectionColumn>
          <FormSection required label="Nombre">
            <Input onChange={setName} value={name} placeholder="Tu nombre" />
          </FormSection>

          <FormSection required label="Apellidos">
            <Input
              onChange={setLastname}
              value={lastname}
              placeholder="Tu apellido"
            />
          </FormSection>

          <FormSection required label="Email">
            <Input
              onChange={setEmail}
              value={email}
              placeholder={UserFormPlaceholders.email}
            />
          </FormSection>

          <FormSection required label="Teléfono">
            <PhoneInput
              onChange={setPhone}
              value={phone}
              placeholder={UserFormPlaceholders.phone}
            />
          </FormSection>
        </FormSectionColumn>

        <FormSection required label="Mensaje">
          <Textarea
            value={message}
            onChange={setMessage}
            placeholder="Cuéntanos cómo podemos ayudarte"
          />
        </FormSection>

        <Button loading={loading} type="submit" size="lg" icon={Send} full>
          Enviar mensaje
        </Button>
      </Form>
    </section>
  );
}
