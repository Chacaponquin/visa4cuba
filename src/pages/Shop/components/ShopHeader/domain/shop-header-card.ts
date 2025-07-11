import type { IconProps } from "../../../../../modules/app/modules/icon/domain/props";
import type { TranslationConfig } from "../../../../../modules/app/modules/language/domain/translation";

export interface ShopHeaderCard {
  title: TranslationConfig<string>;
  icon: (props: IconProps) => React.ReactNode;
  color: "primary" | "secondary";
  description: TranslationConfig<string>;
}
