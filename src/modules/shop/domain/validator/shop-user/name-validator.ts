import { FormException } from "../../../../app/domain/exceptions/form";
import type { IValidator } from "../../../../app/domain/validator/validator";
import { EmptyStringValidator } from "../../../../shared/domain/validator/empty-string";

export class NameValidator implements IValidator {
  constructor(private readonly value: string) {}

  validate(): FormException[] {
    const validator = new EmptyStringValidator(this.value);

    return validator.execute({
      empty: () => [
        new FormException({
          es: `El nombre del receptor no puede estar vacío`,
          en: `The recipient's name cannot be empty`,
          it: `Il nome del destinatario non può essere vuoto`,
        }),
      ],
    });
  }
}
