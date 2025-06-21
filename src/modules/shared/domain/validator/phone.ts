import type { FormException } from "../../../app/domain/exceptions/form";
import { EmptyStringValidator } from "./empty-string";

interface Props {
  empty(): FormException[];
}

export class PhoneValidator {
  constructor(private readonly value: string) {}

  execute({ empty }: Props): FormException[] {
    const validator = new EmptyStringValidator(this.value);

    return validator.execute({ empty: empty });
  }
}
