import { useState } from "react";
import useToast from "../../../../../../../modules/app/hooks/useToast";
import { UserContactValidator } from "../../../../../../../modules/user/domain/validator/user-contact/user-contact-validator";

export default function useContactForm() {
  const { errors } = useToast();

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit() {
    const validator = new UserContactValidator({
      email: email,
      lastname: lastname,
      message: message,
      name: name,
      phone: phone,
    });

    validator.execute({
      error: errors,
      success() {
        setLoading(true);
      },
    });
  }

  return {
    message,
    name,
    setName,
    setMessage,
    phone,
    setPhone,
    email,
    setEmail,
    lastname,
    setLastname,
    handleSubmit,
    loading,
  };
}
