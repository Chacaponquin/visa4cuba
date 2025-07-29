import { FormException } from "../../../../app/domain/exceptions/form";
import type { IValidator } from "../../../../app/domain/validator/validator";

export class BirthdateValidator implements IValidator {
  constructor(private readonly value: Date | null) {}

  validate(): FormException[] {
    if (this.value === null) {
      return [
        new FormException({
          es: `El receptor debe tener una fecha de nacimiento`,
          en: `The receiver must have a birthdate`,
          it: `Il destinatario deve avere una data di nascita`,
        }),
      ];
    }

    return [];
  }
}
