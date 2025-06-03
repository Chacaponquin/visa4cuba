import type { IconProps } from "../../../modules/app/modules/icon/domain/props";

export interface ShopCard {
  title: string;
  price: number;
  description: string;

  includes: string[];
}

export interface ShopCardSection {
  cards: ShopCard[];
  title: string;
  icon: (props: IconProps) => React.ReactNode;
}
