import type { IconProps } from "../../../modules/app/modules/icon/domain/props";
import type { TranslationConfig } from "../../../modules/app/modules/language/domain/translation";

export enum BUY_STEP {
  USER,
  DETAILS,
  PAYMENT,
}

export interface BuyStep {
  title: TranslationConfig<string>;
  description: TranslationConfig<string>;
  type: BUY_STEP;
  icon: (props: IconProps) => React.ReactNode;
  passed: boolean;
}
