import type { FormException } from "../exceptions/form";

export interface IValidator {
  validate(): FormException[];
}

interface Props {
  success(): void;
  error(errors: FormException[]): void;
}

export abstract class Validator {
  constructor(private readonly array: Array<IValidator | undefined>) {}

  errors(): FormException[] {
    const errors = [] as FormException[];

    for (const v of this.array) {
      if (v) {
        const valid = v.validate();

        errors.push(...valid);
      }
    }

    return errors;
  }

  execute({ error, success }: Props) {
    const errors = [] as FormException[];

    for (const v of this.array) {
      if (v) {
        const valid = v.validate();

        errors.push(...valid);
      }
    }

    if (errors.length === 0) {
      success();
    } else {
      error(errors);
    }
  }
}
