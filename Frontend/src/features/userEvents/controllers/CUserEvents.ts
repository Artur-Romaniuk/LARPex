import useGetEvents from "../../../logic/hooks/useGetEvents.ts";
import { useNavigate } from "react-router-dom";

const CUserEvents = () => {
  const events = useGetEvents();
  const navigate = useNavigate();

  const navigateToEventDetails = (id: number) => {
    navigate(`/user/event/${id}`);
  };

  const navigateToJoinEvent = (id: number) => {
    navigate(`/user/event/${id}/join`);
  };

  return { events, navigateToEventDetails, navigateToJoinEvent };
};

export default CUserEvents;
