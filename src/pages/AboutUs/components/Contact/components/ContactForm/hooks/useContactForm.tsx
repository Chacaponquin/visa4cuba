import { useState } from "react";

export default function useContactForm() {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit() {
    setLoading(true);
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
