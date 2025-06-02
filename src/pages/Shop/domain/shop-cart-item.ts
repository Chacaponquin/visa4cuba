import type { IconProps } from "../../../modules/app/modules/icon/domain/props";

export interface ShopCartItem {
  icon: (props: IconProps) => React.ReactNode;
  title: string;
  description: string;
  count: number;
  subtotal: number;
  id: string;
}
