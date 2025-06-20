import clsx from "clsx";
import React from "react";

interface Props {
  onSubmit(): void;
  className?: string;
  children?: React.ReactNode;
}

export default function Form({ onSubmit, children, className }: Props) {
  return (
    <form
      className={clsx("flex flex-col w-full", className)}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {children}
    </form>
  );
}
