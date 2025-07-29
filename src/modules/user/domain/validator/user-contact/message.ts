import { FormException } from "../../../../app/domain/exceptions/form";
import type { IValidator } from "../../../../app/domain/validator/validator";
import { EmptyStringValidator } from "../../../../shared/domain/validator/empty-string";

export class UserContactMessageValidator implements IValidator {
  constructor(private readonly value: string) {}

  validate(): FormException[] {
    const validator = new EmptyStringValidator(this.value);

    return validator.execute({
      empty() {
        return [
          new FormException({
            es: `El mensaje no puede estar vacío`,
            en: `The message cannot be empty`,
            it: `Il messaggio non può essere vuoto`,
          }),
        ];
      },
    });
  }
}
