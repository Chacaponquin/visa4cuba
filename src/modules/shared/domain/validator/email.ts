import { isEmail } from "class-validator";
import type { FormException } from "../../../app/domain/exceptions/form";

interface Props {
  empty(): FormException[];
  notEmail(): FormException[];
}

export class EmailValidator {
  constructor(private readonly value: string) {}

  execute({ empty, notEmail }: Props): FormException[] {
    if (this.value.trim().length === 0) {
      return empty();
    }

    if (!isEmail(this.value)) {
      return notEmail();
    }

    return [];
  }
}
