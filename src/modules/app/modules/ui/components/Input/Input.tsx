"use client";

import { Input as AntdInput } from "antd";

interface Props {
  value: string;
  onChange(v: string): void;
  placeholder: string;
  id?: string;
}

export default function Input({ value, placeholder,  onChange }: Props) {
  return (
    <AntdInput
      onChange={(e) => onChange(e.target.value)}
      value={value}
      placeholder={placeholder}
      type="text"
    />
  );
}
