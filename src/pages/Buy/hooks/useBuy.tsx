import { useContext, useEffect, useState } from "react";
import { BUY_STEP, type BuyStep } from "../domain/buy-steps";
import User from "../../../modules/app/modules/icon/components/User";
import type { SectionPassegerForm } from "../domain/passeger-form";
import { createDefaultPassegerForm } from "../domain/create-default-passeger-form";
import { ShopContext } from "../../../modules/shop/context/ShopContext";

export default function useBuy() {
  const { cart } = useContext(ShopContext);

  const [steps, setSteps] = useState<BuyStep[]>([
    {
      title: {
        es: "Datos de envío",
        en: "Shipping data",
        it: "Dati di spedizione",
      },
      description: {
        es: "Proporcione la información de contacto y la dirección de correo donde desea recibir el visado o documentación correspondiente.",
        en: "Provide the contact information and mailing address where you wish to receive the visa or corresponding documentation.",
        it: "Fornire le informazioni di contatto e l'indirizzo postale al quale si desidera ricevere il visto o la documentazione corrispondente.",
      },
      type: BUY_STEP.USER,
      icon: User,
      passed: false,
    },
    {
      title: { es: "Pasajeros", en: "Passengers", it: "Passeggeri" },
      description: {
        es: "Ingrese los datos personales de los viajeros que requieren el visado, asegurándose de que toda la información sea precisa.",
        en: "Enter the personal details of travelers who require a visa, ensuring that all information is accurate.",
        it: "Inserire i dati personali dei viaggiatori che necessitano di un visto, assicurandosi che tutte le informazioni siano accurate.",
      },
      type: BUY_STEP.DETAILS,
      icon: User,
      passed: false,
    },
    {
      title: {
        es: "Pago en línea",
        en: "Online payment",
        it: "Pagamento online",
      },
      description: {
        es: "Seleccione su método de pago preferido y complete la transacción de forma segura para finalizar el proceso de solicitud.",
        en: "Select your preferred payment method and complete the transaction securely to finalize the application process.",
        it: "Seleziona il metodo di pagamento che preferisci e completa la transazione in modo sicuro per finalizzare la procedura di richiesta.",
      },
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

  const [passegers, setPassegers] = useState<SectionPassegerForm[]>(
    cart.map((c) => {
      return {
        section: c.option,
        passegers: Array.from({ length: c.count }).map(() =>
          createDefaultPassegerForm()
        ),
      };
    })
  );

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
