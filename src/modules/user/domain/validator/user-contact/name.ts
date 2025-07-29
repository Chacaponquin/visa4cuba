import { FormException } from "../../../../app/domain/exceptions/form";
import type { IValidator } from "../../../../app/domain/validator/validator";
import { EmptyStringValidator } from "../../../../shared/domain/validator/empty-string";

export class UserContactNameValidator implements IValidator {
  constructor(private readonly value: string) {}

  validate(): FormException[] {
    const validator = new EmptyStringValidator(this.value);

    return validator.execute({
      empty() {
        return [
          new FormException({
            es: `Se debe definir un nombre para el autor del mensaje`,
            en: `A name must be defined for the message author`,
            it: `Deve essere definito un nome per l'autore del messaggio`,
          }),
        ];
      },
    });
  }
}
