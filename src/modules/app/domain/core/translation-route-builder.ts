import { LANGUAGE } from "../../modules/language/domain/language";

export class TranslationRouteBuilder {
  constructor(private readonly route: string) {}

  build(lan: LANGUAGE): string {
    if (lan === LANGUAGE.ES) {
      return `/es${this.route}`;
    }

    if (lan === LANGUAGE.IT) {
      return `/it${this.route}`;
    }

    return `/en${this.route}`;
  }
}
