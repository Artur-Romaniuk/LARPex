import useEditEvent from "../../../logic/hooks/events/useEditEvent.ts";
import useGetOrder from "../../../logic/hooks/order/useGetOrder.ts";
import useGetGame from "../../../logic/hooks/game/useGetGame.ts";
import useGetLocation from "../../../logic/hooks/locations/useGetLocation.ts";
import useCreatePayment from "../../../logic/hooks/paymetns/useCreatePayment.ts";
import { useNavigate } from "react-router-dom";

interface CPaymentProps {
  eventId: string;
  orderId: string;
}

const CPayment = (props: CPaymentProps) => {
  const { eventId, orderId } = props;
  const navigate = useNavigate();
  const event = useEditEvent(Number.parseInt(eventId));
  const order = useGetOrder(orderId);

  const game = useGetGame(event.event.gameId ?? 0);
  const location = useGetLocation(event.event.locationId ?? 0);

  const createPayment = useCreatePayment();

  const pay = () => {
    createPayment.mutate(
      {
        orderId: (order.data?.orderId ?? "").toString(),
        paymentId: "",
        orderAmount: order.data?.orderAmount ?? 0,
      },
      {
        onSuccess: (data) => {
          window.open(data.stripeSessionUrl);
        },
      },
    );
  };

  const goBack = () => {
    navigate("/panel-wydarzen");
  };

  return {
    event,
    order,

    game,
    location,

    pay,
    goBack,
  };
};

export default CPayment;
