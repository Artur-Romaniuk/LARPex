import { useNavigate } from "react-router-dom";
// import logicMgmt from "../../../logic/context/logicContext.ts";
import useGetEvents from "../../../logic/hooks/useGetEvents.ts";

const CEventList = () => {
  // const eventViewModel = logicMgmt.injectEvent()({ id: -1 });
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
