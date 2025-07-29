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
          es: `El nombre del pasajero no puede estar vacío`,
          en: `The passenger's name cannot be empty`,
          it: `Il nome del passeggero non può essere vuoto`,
        }),
      ],
    });
  }
}
