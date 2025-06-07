import type { IconProps } from "../../../../../../modules/app/modules/icon/domain/props";
import type { PassegerForm } from "../../../../domain/passeger-form";
import PassagerForm from "./components/PassagerForm/PassagerForm";

interface Props {
  icon: (props: IconProps) => React.ReactNode;
  title: string;
  passegers: PassegerForm[];
  onChangeName(i: number, v: string): void;
  onChangeLastname(i: number, v: string): void;
  onChangeArriveDate(i: number, v: Date): void;
  onChangeLeaveDate(i: number, v: Date): void;
  onChangePassport(i: number, v: string): void;
  onChangeBirthdate(i: number, v: Date): void;
  onChangeCountry(i: number, v: string): void;
}

export default function SectionForm({
  icon,
  title,
  passegers,
  onChangeName,
  onChangeLastname,
  onChangeArriveDate,
  onChangeBirthdate,
  onChangeLeaveDate,
  onChangePassport,
  onChangeCountry,
}: Props) {
  return (
    <article className="flex flex-col mb-12 w-full">
      <header className="flex items-center gap-x-3.5 mb-3">
        <i className="px-2.5 py-2 rounded-lg stroke-primary bg-primary/10">
          {icon({ size: 20 })}
        </i>

        <h2 className="text-left text-xl font-title-semibold">{title}</h2>
      </header>

      <div className="flex flex-col w-full gap-y-1">
        {passegers.map((p, index) => (
          <PassagerForm
            key={index}
            country={{
              onChange: (v) => onChangeCountry(index, v),
              value: p.country,
            }}
            lastname={{
              value: p.lastname,
              onChange: (v) => onChangeLastname(index, v),
            }}
            name={{ value: p.name, onChange: (v) => onChangeName(index, v) }}
            arriveDate={{
              onChange: (v) => onChangeArriveDate(index, v),
              value: p.start,
            }}
            birthdate={{
              onChange: (v) => onChangeBirthdate(index, v),
              value: p.birthdate,
            }}
            leaveDate={{
              onChange: (v) => onChangeLeaveDate(index, v),
              value: p.end,
            }}
            passport={{
              onChange: (v) => onChangePassport(index, v),
              value: p.passport,
            }}
          />
        ))}
      </div>
    </article>
  );
}
