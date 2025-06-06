import { useState } from "react";
import { BUY_STEP, type BuyStep } from "../domain/buy-steps";
import User from "../../../modules/app/modules/icon/components/User";

export default function useBuy() {
  const [steps, setSteps] = useState<BuyStep[]>([
    {
      title: "Datos de envío",
      description:
        "Proporcione la información de contacto y la dirección de correo donde desea recibir el visado o documentación correspondiente.",
      type: BUY_STEP.USER,
      icon: User,
      passed: false,
    },
    {
      title: "Pasajeros",
      description:
        "Ingrese los datos personales de los viajeros que requieren el visado, asegurándose de que toda la información sea precisa.",
      type: BUY_STEP.DETAILS,
      icon: User,
      passed: false,
    },
    {
      title: "Pago en línea",
      description:
        "Seleccione su método de pago preferido y complete la transacción de forma segura para finalizar el proceso de solicitud.",
      type: BUY_STEP.PAYMENT,
      icon: User,
      passed: false,
    },
  ]);

  const [selected, setSelected] = useState<BuyStep>(steps[0]);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState<Date | null>(null);
  const [country, setCountry] = useState<string | null>(null);

  function passNextSection() {
    const found = steps.find((s) => s.passed === false);

    if (found) {
      setSelected(found);
    }
  }

  function handlePass(b: BUY_STEP) {
    setSteps((prev) =>
      prev.map((s) => {
        if (s.type === b) {
          return { ...s, passed: true };
        }

        return s;
      })
    );

    passNextSection();
  }

  function handleSelectSection(b: BuyStep) {
    setSelected(b);
  }

  return {
    selected,
    handleSelectSection,
    steps,
    handlePass,
    email,
    setEmail,
    lastname,
    setLastname,
    name,
    setName,
    phone,
    setPhone,
    country,
    setCountry,
    birthdate,
    setBirthdate,
  };
}
