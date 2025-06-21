import { FormException } from "../../../../app/domain/exceptions/form";
import type { IValidator } from "../../../../app/domain/validator/validator";
import { EmailValidator } from "../../../../shared/domain/validator/email";

export class UserContactEmailValidator implements IValidator {
  constructor(private readonly value: string) {}

  validate(): FormException[] {
    const validator = new EmailValidator(this.value);

    return validator.execute({
      empty() {
        return [
          new FormException(
            `Se debe definir un email para el auto del mensaje`
          ),
        ];
      },
      notEmail() {
        return [
          new FormException(`El email del autor debe ser un email válido`),
        ];
      },
    });
  }
}
