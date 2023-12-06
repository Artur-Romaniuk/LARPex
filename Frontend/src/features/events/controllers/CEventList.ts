import { useNavigate } from "react-router-dom";
import useGetEvents from "../../../logic/hooks/useGetEvents.ts";

const CEventList = () => {
  const events = useGetEvents();
  const navigate = useNavigate();

  const navigateToEvent = (id: number) => {
    navigate("/panel-wydarzen/" + id);
  };

  return {
    events: events.data,
    navigateToEvent,
  };
};

export default CEventList;
