import { useEffect, useState } from "react";
import { BUY_STEP, type BuyStep } from "../domain/buy-steps";
import User from "../../../modules/app/modules/icon/components/User";
import type { SectionPassegerForm } from "../domain/passeger-form";
import Safe from "../../../modules/app/modules/icon/components/Safe";
import { createDefaultPassegerForm } from "../domain/create-default-passeger-form";
import { Id } from "../../../modules/shared/domain/value-object/id";
import World from "../../../modules/app/modules/icon/components/World";

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

  const [passegers, setPassegers] = useState<SectionPassegerForm[]>([
    {
      section: { title: "Seguro de viaje", icon: Safe, id: Id.generate() },
      passegers: [createDefaultPassegerForm(), createDefaultPassegerForm()],
    },
    {
      section: { title: "Visa Turística", icon: World, id: Id.generate() },
      passegers: [createDefaultPassegerForm(), createDefaultPassegerForm()],
    },
  ]);

  useEffect(() => {
    const found = steps.find((s) => s.passed === false);

    if (found) {
      setSelected(found);
    }
  }, [steps]);

  function handleChangeArriveDate(id: string, i: number, v: Date) {
    setPassegers((prev) =>
      prev.map((s) => {
        if (s.section.id === id) {
          return {
            ...s,
            passegers: s.passegers.map((p, index) => {
              if (index === i) {
                return { ...p, start: v };
              }

              return p;
            }),
          };
        }

        return s;
      })
    );
  }

  function handleChangeLeaveDate(id: string, i: number, v: Date) {
    setPassegers((prev) =>
      prev.map((s) => {
        if (s.section.id === id) {
          return {
            ...s,
            passegers: s.passegers.map((p, index) => {
              if (index === i) {
                return { ...p, end: v };
              }

              return p;
            }),
          };
        }

        return s;
      })
    );
  }

  function handleChangeName(id: string, i: number, v: string) {
    setPassegers((prev) =>
      prev.map((s) => {
        if (s.section.id === id) {
          return {
            ...s,
            passegers: s.passegers.map((p, index) => {
              if (index === i) {
                return { ...p, name: v };
              }

              return p;
            }),
          };
        }

        return s;
      })
    );
  }

  function handleChangeLastname(id: string, i: number, v: string) {
    setPassegers((prev) =>
      prev.map((s) => {
        if (s.section.id === id) {
          return {
            ...s,
            passegers: s.passegers.map((p, index) => {
              if (index === i) {
                return { ...p, lastname: v };
              }

              return p;
            }),
          };
        }

        return s;
      })
    );
  }

  function handleChangeBirthdate(id: string, i: number, v: Date) {
    setPassegers((prev) =>
      prev.map((s) => {
        if (s.section.id === id) {
          return {
            ...s,
            passegers: s.passegers.map((p, index) => {
              if (index === i) {
                return { ...p, birthdate: v };
              }

              return p;
            }),
          };
        }

        return s;
      })
    );
  }

  function handleChangePassport(id: string, i: number, v: string) {
    setPassegers((prev) =>
      prev.map((s) => {
        if (s.section.id === id) {
          return {
            ...s,
            passegers: s.passegers.map((p, index) => {
              if (index === i) {
                return { ...p, passport: v };
              }

              return p;
            }),
          };
        }

        return s;
      })
    );
  }

  function handleChangeCountry(id: string, i: number, v: string) {
    setPassegers((prev) =>
      prev.map((s) => {
        if (s.section.id === id) {
          return {
            ...s,
            passegers: s.passegers.map((p, index) => {
              if (index === i) {
                return { ...p, country: v };
              }

              return p;
            }),
          };
        }

        return s;
      })
    );
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
    passegers,
    handleChangeArriveDate,
    handleChangeBirthdate,
    handleChangeLeaveDate,
    handleChangeLastname,
    handleChangeName,
    handleChangePassport,
    handleChangeCountry,
  };
}
