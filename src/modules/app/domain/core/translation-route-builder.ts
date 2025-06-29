import { LANGUAGE } from "../../modules/language/domain/language";

export class TranslationRouteBuilder {
  constructor(private readonly route: string) {}

  build(lan: LANGUAGE): string {
    if (lan === LANGUAGE.ES) {
      return `/es/${this.route}`;
    } else {
      return `/en/${this.route}`;
    }
  }
}
