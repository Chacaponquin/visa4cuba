import { Link } from "react-router";
import Safe from "../../../../../../modules/app/modules/icon/components/Safe";
import Time from "../../../../../../modules/app/modules/icon/components/Time";
import Button from "../../../../../../modules/app/modules/ui/components/Button/Button";
import Separator from "../../../../../../modules/app/modules/ui/components/Separator/Separator";
import AdventageValue from "./components/AdventageValue/AdventageValue";
import SummaryValue from "./components/SummaryValue/SummaryValue";
import { APP_ROUTES } from "../../../../../../modules/app/domain/constants/app-routes";
import useTranslation from "../../../../../../modules/app/modules/language/hooks/useTranslation";
import { TranslationRouteBuilder } from "../../../../../../modules/app/domain/core/translation-route-builder";
import { useContext } from "react";
import { LanguageContext } from "../../../../../../modules/app/modules/language/context/language-context";

interface Props {
  subtotal: number;
  total: number;
  prosecution: number;
}

export default function ResultSummary({ prosecution, subtotal, total }: Props) {
  const { language } = useContext(LanguageContext);

  const {
    HEADER,
    SUBTOTAL,
    OPERATIONS,
    SEND,
    TOTAL,
    AD_1,
    AD_2,
    BUTTON_1,
    BUTTON_2,
  } = useTranslation({
    HEADER: { es: "Resumen", en: "Summary", it: "Riepilogo" },
    SUBTOTAL: { en: "Subtotal", es: "Subtotal", it: "Subtotale" },
    OPERATIONS: { es: "Procesamiento", en: "Prosecution", it: "Procura" },
    SEND: { es: "Envío", en: "Shipment", it: "Spedizione" },
    TOTAL: { en: "Total", es: "Total", it: "Totale" },
    AD_1: {
      es: "Pago 100% seguro",
      en: "100% secure payment",
      it: "Pagamento sicuro al 100%",
    },
    AD_2: {
      es: "Procesamiento en 24-48h",
      en: "Processing in 24-48 hours",
      it: "Elaborazione in 24-48 ore",
    },
    BUTTON_1: {
      es: "Proceder al pago",
      en: "Proceed to payment",
      it: "Procedi al pagamento",
    },
    BUTTON_2: {
      es: "Continuar comprando",
      en: "Continue shopping",
      it: "Continua a fare acquisti",
    },
  });

  return (
    <div className="w-full lg:max-w-[370px] rounded-lg flex flex-col bg-white shadow-md">
      <header className="px-5 py-3 rounded-t-lg !font-semibold text-lg bg-primary text-white">
        {HEADER}
      </header>

      <div className="px-5 py-4 rounded-b-lg flex flex-col w-full">
        <div className="flex flex-col w-full gap-y-2">
          <SummaryValue value={subtotal} label={SUBTOTAL} />
          <SummaryValue value={prosecution} label={OPERATIONS} />
          <SummaryValue value={0} label={SEND} />

          <Separator className="my-2" />

          <SummaryValue label={TOTAL} value={total} bold />
        </div>

        <div className="w-full flex flex-col mt-8 gap-y-2 mb-4">
          <Link
            to={new TranslationRouteBuilder(APP_ROUTES.BUY).build(language)}
          >
            <Button full>{BUTTON_1}</Button>
          </Link>

          <Button color="light" full>
            {BUTTON_2}
          </Button>
        </div>

        <Separator className="" />

        <div className="flex flex-col gap-y-2 mt-5">
          <AdventageValue icon={Safe} color="green" value={AD_1} />
          <AdventageValue icon={Time} color="blue" value={AD_2} />
        </div>
      </div>
    </div>
  );
}
