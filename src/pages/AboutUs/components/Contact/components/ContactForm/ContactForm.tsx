import Form from "../../../../../../modules/app/modules/form/components/Form/Form";
import FormSection from "../../../../../../modules/app/modules/form/components/FormSection/FormSection";
import FormSectionColumn from "../../../../../../modules/app/modules/form/components/FormSectionColumn/FormSectionColumn";
import Send from "../../../../../../modules/app/modules/icon/components/Send";
import useTranslation from "../../../../../../modules/app/modules/language/hooks/useTranslation";
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

  const {
    BUTTON,
    TITLE,
    DESCRIPTION,
    NAME,
    NAME_PLACEHOLDER,
    LAST_NAME,
    LAST_NAME_PLACEHOLDER,
    PHONE,
    MESSAGE,
    MESSAGE_PLACEHOLDER,
  } = useTranslation({
    BUTTON: {
      es: "Enviar mensaje",
      en: "Send message",
      it: "Invia messaggio",
    },
    TITLE: {
      es: "Envíanos un mensaje",
      en: "Send a message",
      it: "Invia un messaggio",
    },
    DESCRIPTION: {
      es: "Completa el formulario y nos pondremos en contacto contigo lo antes posible.",
      en: "Fill out the form and we will get back to you as soon as possible.",
      it: "Completare il formulario e noi potremo contattarlo contigo lo antes posible.",
    },
    NAME: { es: "Nombre", en: "Name", it: "Nome" },
    NAME_PLACEHOLDER: { es: "Tu nombre", en: "Your name", it: "Il tuo nome" },
    LAST_NAME: { es: "Apellidos", en: "Last name", it: "Cognome" },
    LAST_NAME_PLACEHOLDER: {
      es: "Tu apellido",
      en: "Your last name",
      it: "Il tuo cognome",
    },
    PHONE: { es: "Teléfono", en: "Phone", it: "Telefono" },
    MESSAGE: { es: "Mensaje", en: "Message", it: "Messaggio" },
    MESSAGE_PLACEHOLDER: {
      es: "Cuéntanos cómo podemos ayudarte",
      en: "Tell us how we can help you",
      it: "Raccontaci come possiamo aiutarti",
    },
  });

  return (
    <section className="border-[1.5px] border-card flex flex-col px-7 py-4 rounded-card bg-white w-full">
      <header className="mb-7">
        <h2 className="font-title-medium mb-1 text-2xl">{TITLE}</h2>
        <p className="text-gray-600 text-sm">{DESCRIPTION}</p>
      </header>

      <Form onSubmit={handleSubmit}>
        <FormSectionColumn>
          <FormSection required label={NAME}>
            <Input
              onChange={setName}
              value={name}
              placeholder={NAME_PLACEHOLDER}
            />
          </FormSection>

          <FormSection required label={LAST_NAME}>
            <Input
              onChange={setLastname}
              value={lastname}
              placeholder={LAST_NAME_PLACEHOLDER}
            />
          </FormSection>

          <FormSection required label="Email">
            <Input
              onChange={setEmail}
              value={email}
              placeholder={UserFormPlaceholders.email}
            />
          </FormSection>

          <FormSection required label={PHONE}>
            <PhoneInput
              onChange={setPhone}
              value={phone}
              placeholder={UserFormPlaceholders.phone}
            />
          </FormSection>
        </FormSectionColumn>

        <FormSection required label={MESSAGE}>
          <Textarea
            value={message}
            onChange={setMessage}
            placeholder={MESSAGE_PLACEHOLDER}
          />
        </FormSection>

        <Button loading={loading} type="submit" size="lg" icon={Send} full>
          {BUTTON}
        </Button>
      </Form>
    </section>
  );
}
