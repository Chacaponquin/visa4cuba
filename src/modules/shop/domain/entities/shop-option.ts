import type { IconProps } from "../../../app/modules/icon/domain/props";

export interface ShopOption {
  title: string;
  price: number;
  id: string;
  description: string;
  includes: string[];
  icon: (props: IconProps) => React.ReactNode;
}

export interface ShopSection {
  options: ShopOption[];
  title: string;
  icon: (props: IconProps) => React.ReactNode;
}
