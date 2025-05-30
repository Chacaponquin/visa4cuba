import type { IconProps } from "../../../modules/app/modules/icon/domain/props";

export interface ShopCard {
  title: string;
  price: number;
  description: string;
  icon: React.FC<IconProps>;
  includes: string[];
}
