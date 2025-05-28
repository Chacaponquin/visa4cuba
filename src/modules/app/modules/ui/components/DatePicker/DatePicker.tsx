import { DatePicker as AntdDatePicker } from "antd";
import dayjs from "dayjs";

interface Props {
  value: Date | null;
  onChange(date: Date): void;
}

export default function DatePicker({ onChange, value }: Props) {
  return (
    <AntdDatePicker
      className="w-full"
      allowClear={false}
      value={dayjs(value)}
      minDate={dayjs()}
      onChange={(e) => onChange(e.toDate())}
    />
  );
}
