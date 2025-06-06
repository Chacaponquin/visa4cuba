import type { IconProps } from "../../../modules/app/modules/icon/domain/props";

export enum BUY_STEP {
  USER,
  DETAILS,
  PAYMENT,
}

export interface BuyStep {
  title: string;
  description: string;
  type: BUY_STEP;
  icon: (props: IconProps) => React.ReactNode;
  passed: boolean;
}
