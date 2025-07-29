import { FormException } from "../../../../app/domain/exceptions/form";
import type { IValidator } from "../../../../app/domain/validator/validator";
import { EmailValidator as SharedEmailValidator } from "../../../../shared/domain/validator/email";

export class EmailValidator implements IValidator {
  constructor(private readonly value: string) {}

  validate(): FormException[] {
    const validator = new SharedEmailValidator(this.value);

    return validator.execute({
      empty: () => [
        new FormException({
          es: `El email del receptor no puede estar vacío`,
          en: `The recipient's email cannot be empty`,
          it: `L'email del destinatario non può essere vuota`,
        }),
      ],
      notEmail: () => [
        new FormException({
          es: `El email del receptor no es válido`,
          en: `The recipient's email is not valid`,
          it: `L'email del destinatario non è valida`,
        }),
      ],
    });
  }
}
