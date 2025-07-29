import { FormException } from "../../../../app/domain/exceptions/form";
import type { IValidator } from "../../../../app/domain/validator/validator";

export class EndValidator implements IValidator {
  constructor(private readonly value: Date | null) {}

  validate(): FormException[] {
    if (this.value === null) {
      return [
        new FormException(
          `La fecha de salida del pasajero no puede estar vacía`
        ),
      ];
    }

    return [];
  }
}
