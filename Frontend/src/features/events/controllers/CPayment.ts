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
    let amount = order.data?.orderAmount ?? 0;
    if (amount <= 2) {
      amount = 6;
    }
    createPayment.mutate(
      {
        orderId: (order.data?.orderId ?? "").toString(),
        eventId: event.getEvent.data?.eventId ?? 0,
        orderAmount: amount,
      },
      {
        onSuccess: (data) => {
          // window.open(data.stripeSessionUrl, "_blank");
          window.location.href = data.stripeSessionUrl;
        },
      },
    );
  };

  const goBack = () => {
    navigate(localStorage.getItem("paymentFrom") || "/");
  };

  const tryAgain = () => {
    navigate("/platnosc/" + eventId + "/" + orderId);
  };

  return {
    event,
    order,

    game,
    location,

    pay,
    goBack,
    tryAgain,
  };
};

export default CPayment;
