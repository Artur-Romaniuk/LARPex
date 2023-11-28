import { useNavigate } from "react-router-dom";
import logicMgmt from "../../../logic/context/logicContext.ts";

const CEventList = () => {
  const eventViewModel = logicMgmt.injectEvent()({ id: -1 });
  const navigate = useNavigate();

  const navigateToEvent = (id: number) => {
    navigate("/panel-wydarzen/" + id);
  };

  return {
    events: eventViewModel.events,
    navigateToEvent,
  };
};

export default CEventList;
