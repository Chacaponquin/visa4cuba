import type { IconProps } from "../../../modules/app/modules/icon/domain/props";

export interface ShopCard {
  title: string;
  price: number;
  description: string;
  icon: (props: IconProps) => React.ReactNode;
  includes: string[];
}
