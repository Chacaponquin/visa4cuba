import { FormException } from "../../../../app/domain/exceptions/form";
import type { IValidator } from "../../../../app/domain/validator/validator";

export class BirthdateValidator implements IValidator {
  constructor(private readonly value: Date | null) {}

  validate(): FormException[] {
    if (this.value === null) {
      return [
        new FormException(`El pasajero debe tener una fecha de nacimiento`),
      ];
    }

    return [];
  }
}
