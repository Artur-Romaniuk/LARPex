import useEditEvent from "../../../logic/hooks/useEditEvent.ts";
import useGetOrder from "../../../logic/hooks/useGetOrder.ts";

interface CPaymentProps {
  eventId: string;
  orderId: string;
}

const CPayment = (props: CPaymentProps) => {
  const { eventId, orderId } = props;
  const event = useEditEvent(Number.parseInt(eventId));
  const order = useGetOrder(Number.parseInt(orderId));

  return {
    event,
    order,
  };
};

export default CPayment;
