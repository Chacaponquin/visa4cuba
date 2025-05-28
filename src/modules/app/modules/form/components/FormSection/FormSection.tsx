import React from "react";

interface Props {
  children: React.ReactNode;
  label: string;
  required?: boolean;
}

export default function FormSection({ children, label, required }: Props) {
  return (
    <section className="flex flex-col w-full mb-3.5">
      <label htmlFor="" className="mb-1 text-sm text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {children}
    </section>
  );
}
