import useToast from "../../../../modules/app/hooks/useToast";
import Form from "../../../../modules/app/modules/form/components/Form/Form";
import Airplane from "../../../../modules/app/modules/icon/components/Airplane";
import useTranslation from "../../../../modules/app/modules/language/hooks/useTranslation";
import Button from "../../../../modules/app/modules/ui/components/Button/Button";
import { ShopPassegersValidator } from "../../../../modules/shop/domain/validator/passegers/shop-passegers-validator";
import type { SectionPassegerForm } from "../../domain/passeger-form";
import BuyForm from "../../shared/components/BuyForm/BuyForm";
import SectionForm from "./components/SectionForm/SectionForm";

interface Props {
  title: string;
  description: string;
  passegers: SectionPassegerForm[];
  onChangeName(id: string, i: number, v: string): void;
  onChangeLastname(id: string, i: number, v: string): void;
  onChangeCountry(id: string, i: number, v: string): void;
  onChangeLeaveDate(id: string, i: number, v: Date): void;
  onChangeArriveDate(id: string, i: number, v: Date): void;
  onChangePassport(id: string, i: number, v: string): void;
  onChangeBirhtdate(id: string, i: number, v: Date): void;
  onSubmit(): void;
}

export default function PassegersForm({
  description,
  passegers,
  title,
  onChangeName,
  onChangeLastname,
  onChangeArriveDate,
  onChangeBirhtdate,
  onChangeLeaveDate,
  onChangePassport,
  onSubmit,
  onChangeCountry,
}: Props) {
  const { errors } = useToast();

  function handleSubmit() {
    const validator = new ShopPassegersValidator();

    validator.execute({ error: errors, success: onSubmit });
  }

  const { BUTTON } = useTranslation({
    BUTTON: { es: "Siguiente", en: "Next", it: "Seguente" },
  });

  return (
    <BuyForm title={title} description={description} icon={Airplane}>
      <Form onSubmit={handleSubmit}>
        {passegers.map((s) => (
          <SectionForm
            onChangeCountry={(i, v) => onChangeCountry(s.section.id, i, v)}
            onChangeBirthdate={(i, v) => onChangeBirhtdate(s.section.id, i, v)}
            onChangeLeaveDate={(i, v) => onChangeLeaveDate(s.section.id, i, v)}
            onChangePassport={(i, v) => onChangePassport(s.section.id, i, v)}
            passegers={s.passegers}
            key={s.section.id}
            icon={s.section.icon}
            onChangeLastname={(i, v) => onChangeLastname(s.section.id, i, v)}
            title={s.section.title}
            onChangeArriveDate={(i, v) =>
              onChangeArriveDate(s.section.id, i, v)
            }
            onChangeName={(i, v) => onChangeName(s.section.id, i, v)}
          />
        ))}

        <Button size="lg" className="" type="submit" full>
          {BUTTON}
        </Button>
      </Form>
    </BuyForm>
  );
}
