import type { LANGUAGE } from "../../modules/language/domain/language";
import type { TranslationConfig } from "../../modules/language/domain/translation";

export class FormException {
  constructor(private readonly message: TranslationConfig<string>) {}

  getMessage(lan: LANGUAGE): string {
    return this.message[lan];
  }
}
