import { FormException } from "../../../../app/domain/exceptions/form";
import type { IValidator } from "../../../../app/domain/validator/validator";
import { EmptyStringValidator } from "../../../../shared/domain/validator/empty-string";

export class LastnameValidator implements IValidator {
  constructor(private readonly value: string) {}

  validate(): FormException[] {
    const validator = new EmptyStringValidator(this.value);

    return validator.execute({
      empty: () => [
        new FormException({
          es: `Los apellidos del receptor no pueden estar vacíos`,
          en: `The recipient's last names cannot be empty`,
          it: `I cognomi del destinatario non possono essere vuoti`,
        }),
      ],
    });
  }
}
