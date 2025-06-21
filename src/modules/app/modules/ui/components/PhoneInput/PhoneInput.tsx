import Input from "../Input/Input";

interface Props {
  value: string;
  placeholder?: string;
  onChange(v: string): void;
}

export default function PhoneInput({ onChange, value, placeholder }: Props) {
  return <Input onChange={onChange} value={value} placeholder={placeholder} />;
}
