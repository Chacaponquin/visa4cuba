import { FormException } from "../../../../app/domain/exceptions/form";
import type { IValidator } from "../../../../app/domain/validator/validator";
import { EmailValidator as SharedEmailValidator } from "../../../../shared/domain/validator/email";

export class EmailValidator implements IValidator {
  constructor(private readonly value: string) {}

  validate(): FormException[] {
    const validator = new SharedEmailValidator(this.value);

    return validator.execute({
      empty: () => [
        new FormException(`El email del receptor no puede estar vacío`),
      ],
      notEmail: () => [new FormException(`El email del receptor no es válido`)],
    });
  }
}
