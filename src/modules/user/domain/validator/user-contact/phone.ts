import { FormException } from "../../../../app/domain/exceptions/form";
import type { IValidator } from "../../../../app/domain/validator/validator";
import { PhoneValidator } from "../../../../shared/domain/validator/phone";

export class UserContactPhoneValidator implements IValidator {
  constructor(private readonly value: string) {}

  validate(): FormException[] {
    const validator = new PhoneValidator(this.value);

    return validator.execute({
      empty() {
        return [
          new FormException(
            `Se debe definir un teléfono para el autor del mensaje`
          ),
        ];
      },
    });
  }
}
