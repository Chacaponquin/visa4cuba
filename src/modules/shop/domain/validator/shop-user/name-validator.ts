import { FormException } from "../../../../app/domain/exceptions/form";
import type { IValidator } from "../../../../app/domain/validator/validator";
import { EmptyStringValidator } from "../../../../shared/domain/validator/empty-string";

export class NameValidator implements IValidator {
  constructor(private readonly value: string) {}

  validate(): FormException[] {
    const validator = new EmptyStringValidator(this.value);

    return validator.execute({
      empty: () => [
        new FormException(`El nombre del receptor no puede estar vacío`),
      ],
    });
  }
}
