import { FormException } from "../../../app/domain/exceptions/form";

interface Props {
  empty(): FormException[];
}

export class EmptyStringValidator {
  constructor(private readonly value: string | null) {}

  execute({ empty }: Props) {
    if (this.value === null) {
      return empty();
    }

    if (this.value.trim().length === 0) {
      return empty();
    }

    return [];
  }
}
