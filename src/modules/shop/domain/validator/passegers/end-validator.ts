import { FormException } from "../../../../app/domain/exceptions/form";
import type { IValidator } from "../../../../app/domain/validator/validator";

export class EndValidator implements IValidator {
  constructor(private readonly value: Date | null) {}

  validate(): FormException[] {
    if (this.value === null) {
      return [
        new FormException({
          es: `La fecha de salida del pasajero no puede estar vacía`,
          en: `The passenger's departure date cannot be empty`,
          it: `La data di partenza del passeggero non può essere vuota`,
        }),
      ];
    }

    return [];
  }
}
