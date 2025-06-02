import type { IconProps } from "../../../../../modules/app/modules/icon/domain/props";

export interface ShopHeaderCard {
  title: string;
  icon: (props: IconProps) => React.ReactNode;
  color: "primary" | "secondary";
  description: string;
}
