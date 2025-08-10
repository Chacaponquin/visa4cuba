import { useContext } from "react";
import useTranslation from "../../../../../../modules/app/modules/language/hooks/useTranslation";
import Button from "../../../../../../modules/app/modules/ui/components/Button/Button";
import { CalculateCartItemTotal } from "../../../../../../modules/shop/domain/helpers/calculate-cart-item-total";
import { CalculateCartSend } from "../../../../../../modules/shop/domain/helpers/calculate-cart-send";
import { CalculateCartSubTotal } from "../../../../../../modules/shop/domain/helpers/calculate-cart-subtotal";
import { CalculateCartTotal } from "../../../../../../modules/shop/domain/helpers/calculate-cart-total";
import PaymentCharges from "./components/PaymentCharges/PaymentCharges";
import PaymentItem from "./components/PaymentItem/PaymentItem";
import usePaymentDetails from "./hooks/usePaymentDetails";
import { LanguageContext } from "../../../../../../modules/app/modules/language/context/language-context";

interface Props {
  onSubmit(): void;
}

export default function PaymentDetails({ onSubmit }: Props) {
  const { cart } = usePaymentDetails();
  const { language } = useContext(LanguageContext);

  const { BUTTON, HEADER } = useTranslation({
    HEADER: {
      es: "Detalles del pago",
      en: "Payment details",
      it: "Dettagli di pagamento",
    },
    BUTTON: { en: "Pay", es: "Pagar", it: "Paga" },
  });

  return (
    <div className="w-full flex flex-col rounded-card border border-card">
      <header className="w-full py-1.5 px-4 border-b border-card">
        <h2 className="font-title-medium text-base">{HEADER}</h2>
      </header>

      <div className="w-full flex flex-col px-4 pt-1 pb-4">
        {cart.map((c, index) => (
          <PaymentItem
            border={index !== cart.length - 1}
            key={c.option.id}
            count={c.count}
            icon={c.option.icon}
            title={c.option.title[language]}
            total={CalculateCartItemTotal.execute(c)}
          />
        ))}

        <PaymentCharges
          total={CalculateCartTotal.execute(cart)}
          send={CalculateCartSend.execute(cart)}
          subttoal={CalculateCartSubTotal.execute(cart)}
        />

        <Button onClick={onSubmit} size="base" full className="mt-6">
          {BUTTON}
        </Button>
      </div>
    </div>
  );
}
