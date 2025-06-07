import { PriceTextBuilder } from "../../../../../../../../modules/shared/domain/helpers/price-text-builder";
import ChargeValue from "./components/ChargeValue/ChargeValue";

interface Props {
  total: number;
  subttoal: number;
  send: number;
}

export default function PaymentCharges({ total, send, subttoal }: Props) {
  return (
    <div className="flex flex-col w-full mt-4">
      <h3 className="uppercase text-sm text-gray-500 font-medium mb-2.5">
        Detalles de transacción
      </h3>

      <div className="flex flex-col gap-y-1.5">
        <ChargeValue label="Subtotal">
          {PriceTextBuilder.execute(subttoal)}
        </ChargeValue>

        <ChargeValue label="Envío">
          {PriceTextBuilder.execute(send)}
        </ChargeValue>

        <ChargeValue label="Total">
          {PriceTextBuilder.execute(total)}
        </ChargeValue>
      </div>
    </div>
  );
}
