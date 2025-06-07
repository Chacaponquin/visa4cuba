import { useState } from "react";
import User from "../../../../../../../../modules/app/modules/icon/components/User";
import clsx from "clsx";
import ArrowRight from "../../../../../../../../modules/app/modules/icon/components/ArrowRight";
import FormSectionColumn from "../../../../../../../../modules/app/modules/form/components/FormSectionColumn/FormSectionColumn";
import Input from "../../../../../../../../modules/app/modules/ui/components/Input/Input";
import FormSection from "../../../../../../../../modules/app/modules/form/components/FormSection/FormSection";
import DatePicker from "../../../../../../../../modules/app/modules/ui/components/DatePicker/DatePicker";
import { COUNTRIES } from "../../../../../../../../modules/shared/domain/entities/country";
import Select from "../../../../../../../../modules/app/modules/ui/components/Select/Select";

interface Props {
  name: { value: string; onChange(v: string): void };
  lastname: { value: string; onChange(v: string): void };
  passport: { value: string; onChange(v: string): void };
  arriveDate: { value: Date | null; onChange(v: Date): void };
  leaveDate: { value: Date | null; onChange(v: Date): void };
  birthdate: { value: Date | null; onChange(v: Date): void };
  country: { value: string | null; onChange(v: string): void };
}

export default function PassagerForm({
  name,
  lastname,
  passport,
  arriveDate,
  birthdate,
  leaveDate,
  country,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-card rounded-card border px-3 py-1.5 flex flex-col">
      <header
        className={clsx(
          "flex items-center justify-between gap-x-4 cursor-pointer",
          {
            "mb-3": open,
          }
        )}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="flex items-center gap-x-2.5">
          <i className="px-2 py-1.5 rounded-md stroke-primary bg-primary/10">
            <User size={16} />
          </i>

          <h2 className="text-left text-base font-title-medium">
            {name.value ? name.value : "Sin nombre"}
          </h2>
        </div>

        <i
          className={clsx("stroke-gray-700", {
            "rotate-0": !open,
            "rotate-90": open,
          })}
        >
          <ArrowRight size={16} />
        </i>
      </header>

      {open && (
        <div className="w-full flex flex-col">
          <FormSectionColumn>
            <FormSection label="Nombre" required>
              <Input onChange={name.onChange} value={name.value} />
            </FormSection>

            <FormSection label="Apellidos" required>
              <Input onChange={lastname.onChange} value={lastname.value} />
            </FormSection>

            <FormSection label="Fecha de llegada" required>
              <DatePicker
                onChange={arriveDate.onChange}
                value={arriveDate.value}
              />
            </FormSection>

            <FormSection label="Fecha de salida" required>
              <DatePicker
                value={leaveDate.value}
                onChange={leaveDate.onChange}
              />
            </FormSection>

            <FormSection label="Pasaporte" required>
              <Input onChange={passport.onChange} value={passport.value} />
            </FormSection>

            <FormSection label="Nacionalidad" required>
              <Select
                options={COUNTRIES}
                label={(o) => o.name}
                onChange={country.onChange}
                ovalue={(o) => o.name}
                value={country.value}
              />
            </FormSection>

            <FormSection label="Fecha de nacimiento" required>
              <DatePicker
                onChange={birthdate.onChange}
                value={birthdate.value}
              />
            </FormSection>
          </FormSectionColumn>
        </div>
      )}
    </div>
  );
}
