import { useState } from "react";

export default function useSuscribeSection() {
  const [email, setEmail] = useState("");

  function handleSubmit() {}

  return { email, setEmail, handleSubmit };
}
