import React from "react";

interface Props {
  onSubmit(): void;
  children: React.ReactNode;
}

export default function Form({ onSubmit, children }: Props) {
  return (
    <form
      className="flex flex-col w-full"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {children}
    </form>
  );
}
