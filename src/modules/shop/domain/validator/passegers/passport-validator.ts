import { FormException } from "../../../../app/domain/exceptions/form";
import type { IValidator } from "../../../../app/domain/validator/validator";
import { EmptyStringValidator } from "../../../../shared/domain/validator/empty-string";

export class PassportValidator implements IValidator {
  constructor(private readonly value: string) {}

  validate(): FormException[] {
    const validator = new EmptyStringValidator(this.value);

    return validator.execute({
      empty: () => [
        new FormException({
          es: `El número de pasaporte del pasajero no puede estar vacío`,
          en: `The passenger's passport number cannot be empty`,
          it: `Il numero di passaporto del passeggero non può essere vuoto`,
        }),
      ],
    });
  }
}
