import { useContext } from "react";
import { eventContext } from "../../store/EventStore.ts";
import { useNavigate } from "react-router-dom";

const CEventList = () => {
  const { events } = useContext(eventContext);
  const navigate = useNavigate();

  const navigateToEvent = (id: number) => {
    navigate("/panel-wydarzen/" + id);
  };

  return {
    events,
    navigateToEvent,
  };
};

export default CEventList;
