import { LANGUAGE } from "../../modules/language/domain/language";
import { TranslationRouteBuilder } from "./translation-route-builder";

export interface TranslationPageProps {
  language?: LANGUAGE;
}

interface Props {
  route: string;
  component: (props: TranslationPageProps) => React.ReactNode;
}

export class TranslationRoute {
  readonly route: string;
  readonly component: (props: TranslationPageProps) => React.ReactNode;

  constructor({ component, route }: Props) {
    this.route = route;
    this.component = component;
  }

  get builder() {
    return new TranslationRouteBuilder(this.route);
  }
}
