import clsx from "clsx";
import { PriceTextBuilder } from "../../../../../../../../modules/shared/domain/helpers/price-text-builder";

interface Props {
  value: number;
  label: string;
  bold?: boolean;
}

export default function SummaryValue({ label, value, bold }: Props) {
  return (
    <section className="flex justify-between items-center w-full gap-x-3">
      <p
        className={clsx({
          "text-base text-gray-600": !bold,
          "text-lg text-black font-medium": bold,
        })}
      >
        {label}
      </p>

      <span
        className={clsx({
          "font-medium text-base": !bold,
          "!font-title-semibold text-2xl text-secondary": bold,
        })}
      >
        {PriceTextBuilder.execute(value)}
      </span>
    </section>
  );
}
