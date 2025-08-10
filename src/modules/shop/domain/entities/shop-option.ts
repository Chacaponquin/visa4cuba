import type { IconProps } from "../../../app/modules/icon/domain/props";
import type { TranslationConfig } from "../../../app/modules/language/domain/translation";

export interface ShopOption {
  title: TranslationConfig<string>;
  price: number;
  id: string;
  description: TranslationConfig<string>;
  includes: TranslationConfig<string>[];
  icon: (props: IconProps) => React.ReactNode;
  selected: boolean;
}
