import { DatePicker as AntdDatePicker } from "antd";
import dayjs from "dayjs";

interface Props {
  value: Date | null;
  onChange(date: Date): void;
  min?: Date;
  max?: Date;
}

export default function DatePicker({ onChange, value, max, min }: Props) {
  return (
    <AntdDatePicker
      className="w-full"
      allowClear={false}
      maxDate={max ? dayjs(max) : undefined}
      classNames={{ root: "text-sm" }}
      value={value ? dayjs(value) : null}
      placeholder="Selecciona una fecha"
      minDate={min ? dayjs(min) : undefined}
      onChange={(e) => onChange(e.toDate())}
    />
  );
}
