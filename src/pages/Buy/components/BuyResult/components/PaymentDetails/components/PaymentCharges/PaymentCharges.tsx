import useTranslation from "../../../../../../../../modules/app/modules/language/hooks/useTranslation";
import { PriceTextBuilder } from "../../../../../../../../modules/shared/domain/helpers/price-text-builder";
import ChargeValue from "./components/ChargeValue/ChargeValue";

interface Props {
  total: number;
  subttoal: number;
  send: number;
}

export default function PaymentCharges({ total, send, subttoal }: Props) {
  const { TOTAL, HEADER, SUBTOTAL, SEND } = useTranslation({
    TOTAL: { en: "Total", es: "Total", it: "Totale" },
    HEADER: {
      es: "Detalles de transacción",
      en: "Transaction details",
      it: "Dettagli della transazione",
    },
    SUBTOTAL: { en: "Subtotal", es: "Subtotal", it: "Subtotale" },
    SEND: { es: "Envío", en: "Shipment", it: "Spedizione" },
  });

  return (
    <div className="flex flex-col w-full mt-4">
      <h3 className="uppercase text-sm text-gray-500 font-medium mb-2.5">
        {HEADER}
      </h3>

      <div className="flex flex-col gap-y-1.5">
        <ChargeValue label={SUBTOTAL}>
          {PriceTextBuilder.execute(subttoal)}
        </ChargeValue>

        <ChargeValue label={SEND}>{PriceTextBuilder.execute(send)}</ChargeValue>

        <ChargeValue label={TOTAL}>
          {PriceTextBuilder.execute(total)}
        </ChargeValue>
      </div>
    </div>
  );
}
