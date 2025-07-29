import { FormException } from "../../../../app/domain/exceptions/form";
import type { IValidator } from "../../../../app/domain/validator/validator";
import { EmailValidator } from "../../../../shared/domain/validator/email";

export class UserContactEmailValidator implements IValidator {
  constructor(private readonly value: string) {}

  validate(): FormException[] {
    const validator = new EmailValidator(this.value);

    return validator.execute({
      empty() {
        return [
          new FormException({
            es: `Se debe definir un email para el auto del mensaje`,
            en: `An email must be defined for the message author`,
            it: `Deve essere definito un email per l'autore del messaggio`,
          }),
        ];
      },
      notEmail() {
        return [
          new FormException({
            es: `El email del autor debe ser un email válido`,
            en: `The author's email must be a valid email`,
            it: `L'email dell'autore deve essere un'email valida`,
          }),
        ];
      },
    });
  }
}
