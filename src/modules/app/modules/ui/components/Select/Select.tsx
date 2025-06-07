import { Select as AntdSelect } from "antd";

interface Props<T> {
  options: T[];
  label: (v: T) => string;
  ovalue: (v: T) => string;
  onChange(v: string): void;
  value: string | null;
}

export default function Select<T>({
  options,
  label,
  ovalue,
  onChange,
  value,
}: Props<T>) {
  return (
    <AntdSelect
      value={value}
      onChange={onChange}
      options={options.map((o) => ({
        value: ovalue(o),
        label: <span>{label(o)}</span>,
      }))}
    ></AntdSelect>
  );
}
