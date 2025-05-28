"use client";

import React from "react";
import usePackages from "./hooks/usePackages";
import Input from "@modules/app/modules/ui/components/Input/Input";
import DatePicker from "@modules/app/modules/ui/components/DatePicker/DatePicker";
import Form from "@modules/app/modules/form/components/Form/Form";
import Button from "@modules/app/modules/ui/components/Button/Button";
import FormSection from "@modules/app/modules/form/components/FormSection/FormSection";
import clsx from "clsx";

export default function Packages() {
  const {
    email,
    setEmail,
    arriveDate,
    country,
    handleSubmit,
    name,
    passport,
    setArriveDate,
    setCountry,
    setName,
    setPassport,
    loading,
  } = usePackages();

  return (
    <div className="flex justify-center w-full h-screen items-center px-5 py-3">
      <div className="flex flex-col rounded-xl w-full max-w-[500px] items-center sm:px-8 px-6 py-6 border border-gray-200 shadow-md">
        <h1
          className={clsx(
            "font-medium text-2xl sm:text-3xl text-center sm:mb-6 mb-5"
          )}
        >
          Crear paquete
        </h1>

        <Form onSubmit={handleSubmit}>
          <FormSection label="Nombre completo" required>
            <Input placeholder="Nombre" value={name} onChange={setName} />
          </FormSection>

          <FormSection label="Email" required>
            <Input placeholder="Email" value={email} onChange={setEmail} />
          </FormSection>

          <FormSection label="No. de pasaporte" required>
            <Input
              value={passport}
              onChange={setPassport}
              placeholder="Pasaporte"
            />
          </FormSection>

          <FormSection label="Nacionalidad" required>
            <Input placeholder="Cubano" value={country} onChange={setCountry} />
          </FormSection>

          <FormSection label="Fecha de llegada" required>
            <DatePicker value={arriveDate} onChange={setArriveDate} />
          </FormSection>

          <Button className="mt-2 uppercase" loading={loading}>
            Enviar
          </Button>
        </Form>
      </div>
    </div>
  );
}
