import Safe from "../../../../../../modules/app/modules/icon/components/Safe";
import Time from "../../../../../../modules/app/modules/icon/components/Time";
import Button from "../../../../../../modules/app/modules/ui/components/Button/Button";
import Separator from "../../../../../../modules/app/modules/ui/components/Separator/Separator";
import AdventageValue from "./components/AdventageValue/AdventageValue";
import SummaryValue from "./components/SummaryValue/SummaryValue";

interface Props {
  subtotal: number;
  total: number;
  prosecution: number;
}

export default function ResultSummary({ prosecution, subtotal, total }: Props) {
  return (
    <div className="w-full lg:max-w-[370px] rounded-lg flex flex-col bg-white shadow-md">
      <header className="px-5 py-3 rounded-t-lg !font-semibold text-lg bg-blue-600 text-white">
        Resumen
      </header>

      <div className="px-5 py-4 rounded-b-lg flex flex-col w-full">
        <div className="flex flex-col w-full gap-y-2">
          <SummaryValue value={subtotal} label="Subtotal" />
          <SummaryValue value={prosecution} label="Procesamiento" />
          <SummaryValue value={0} label="Envío" />

          <Separator className="my-2" />

          <SummaryValue label="Total" value={total} bold />
        </div>

        <div className="w-full flex flex-col mt-8 gap-y-2 mb-4">
          <Button>Proceder al pago</Button>
          <Button color="light">Continuar comprando</Button>
        </div>

        <Separator className="" />

        <div className="flex flex-col gap-y-2 mt-5">
          <AdventageValue icon={Safe} color="green" value="Pago 100% seguro" />
          <AdventageValue
            icon={Time}
            color="blue"
            value="Procesamiento en 24-48h"
          />
        </div>
      </div>
    </div>
  );
}
