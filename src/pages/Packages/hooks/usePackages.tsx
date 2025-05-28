"use client";

import { useState } from "react";

export default function usePackages() {
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [passport, setPassport] = useState("");
  const [name, setName] = useState("");
  const [arriveDate, setArriveDate] = useState(new Date());
  const [country, setCountry] = useState("");

  function handleSubmit() {
    setLoading(true);
  }

  return {
    email,
    setEmail,
    passport,
    setPassport,
    name,
    setName,
    arriveDate,
    setArriveDate,
    country,
    setCountry,
    handleSubmit,
    loading,
  };
}
