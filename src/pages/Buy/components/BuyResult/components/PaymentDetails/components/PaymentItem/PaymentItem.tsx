import clsx from "clsx";
import type { IconProps } from "../../../../../../../../modules/app/modules/icon/domain/props";
import { PriceTextBuilder } from "../../../../../../../../modules/shared/domain/helpers/price-text-builder";

interface Props {
  count: number;
  title: string;
  icon: (props: IconProps) => React.ReactNode;
  total: number;
  border: boolean;
}

export default function PaymentItem({
  title,
  total,
  count,
  border,
  icon,
}: Props) {
  return (
    <article
      className={clsx(
        "flex w-full items-center justify-between gap-x-5 text-sm py-2.5",
        {
          "border-dashed border-b-[1.5px] border-card": border,
        }
      )}
    >
      <div className="flex items-center gap-x-3">
        <i className="stroke-gray-700">{icon({ size: 18 })}</i>

        <p className="!font-medium text-gray-700">
          {title} ({count})
        </p>
      </div>

      <span className="text-gray-700">
        Total: {PriceTextBuilder.execute(total)}
      </span>
    </article>
  );
}
