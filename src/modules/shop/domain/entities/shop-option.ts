import type { IconProps } from "../../../app/modules/icon/domain/props";

export interface ShopOption {
  title: string;
  price: number;
  id: string;
  description: string;
  includes: string[];
  icon: (props: IconProps) => React.ReactNode;
  selected: boolean;
}
