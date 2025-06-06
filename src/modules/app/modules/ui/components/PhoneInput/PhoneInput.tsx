import Input from "../Input/Input";

interface Props {
  value: string;
  onChange(v: string): void;
}

export default function PhoneInput({ onChange, value }: Props) {
  return <Input onChange={onChange} value={value} />;
}
