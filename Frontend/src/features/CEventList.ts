import { useNavigate } from "react-router-dom";
import { injectEventViewModel } from "../config/context.ts";

const CEventList = () => {
  const eventViewModel = injectEventViewModel()({ id: -1 });
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
