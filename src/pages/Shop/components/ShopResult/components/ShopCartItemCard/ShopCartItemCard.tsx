import Delete from "../../../../../../modules/app/modules/icon/components/Delete";
import IconButton from "../../../../../../modules/app/modules/icon/components/IconButton";
import type { IconProps } from "../../../../../../modules/app/modules/icon/domain/props";
import Counter from "../../../../../../modules/shared/components/Counter/Counter";
import { PriceTextBuilder } from "../../../../../../modules/shared/domain/helpers/price-text-builder";

interface Props {
  icon: (props: IconProps) => React.ReactNode;
  title: string;
  description: string;
  onDelete(): void;
  onIncrease(): void;
  onDecrease(): void;
  count: number;
  subtotal: number;
}

export default function ShopCartItemCard({
  icon,
  title,
  description,
  onDecrease,
  onIncrease,
  count,
  subtotal,
  onDelete,
}: Props) {
  return (
    <li className="bg-white rounded-lg w-full flex sm:flex-row flex-col items-center justify-between shadow-md px-4 py-3 gap-x-5 gap-y-3 border border-card">
      <div className="flex sm:w-max w-full items-center gap-x-3">
        <i className="px-3.5 py-2 rounded-md bg-primary/10 stroke-primary">
          {icon({ size: 25 })}
        </i>

        <div className="flex flex-col">
          <h2 className="font-medium text-base mb-0.5">{title}</h2>

          <span className="text-gray-600 text-sm">{description}</span>
        </div>
      </div>

      <div className="flex sm:w-max w-full justify-end items-center gap-x-5">
        <Counter
          onDecrease={onDecrease}
          onIncrease={onIncrease}
          value={count}
        />

        <span className="!font-semibold text-base text-secondary">
          {PriceTextBuilder.execute(subtotal)}
        </span>

        <IconButton onClick={onDelete} icon={Delete} color="red" />
      </div>
    </li>
  );
}
