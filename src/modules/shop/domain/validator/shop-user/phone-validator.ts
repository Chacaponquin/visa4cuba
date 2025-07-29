import { FormException } from "../../../../app/domain/exceptions/form";
import type { IValidator } from "../../../../app/domain/validator/validator";
import { PhoneValidator as SharedPhoneValidator } from "../../../../shared/domain/validator/phone";

export class PhoneValidator implements IValidator {
  constructor(private readonly value: string) {}

  validate(): FormException[] {
    const validator = new SharedPhoneValidator(this.value);

    return validator.execute({
      empty: () => [
        new FormException({
          es: `El teléfono del receptor no puede estar vacío`,
          en: `The recipient's phone cannot be empty`,
          it: `Il telefono del destinatario non può essere vuoto`,
        }),
      ],
    });
  }
}
