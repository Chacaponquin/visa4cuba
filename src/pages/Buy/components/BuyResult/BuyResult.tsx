import Card from "../../../../modules/app/modules/icon/components/Card";
import BuyForm from "../../shared/components/BuyForm/BuyForm";
import PaymentDetails from "./components/PaymentDetails/PaymentDetails";
import useBuyResult from "./hooks/useBuyResult";

interface Props {
  description: string;
  title: string;
}

export default function BuyResult({ description, title }: Props) {
  const { handlePay } = useBuyResult();

  return (
    <BuyForm description={description} title={title} icon={Card}>
      <PaymentDetails onSubmit={handlePay} />
    </BuyForm>
  );
}
