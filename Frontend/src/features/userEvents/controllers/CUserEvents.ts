import useGetEvents from "../../../logic/hooks/events/useGetEvents.ts";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../logic/contexts/userContext.tsx";

const CUserEvents = () => {
  const events = useGetEvents();
  const navigate = useNavigate();
  const user = useUser();
  // const leaveEvent = useLeaveEvent();

  const navigateToEventDetails = (id: number) => {
    navigate(`/user/event/${id}`);
  };

  const navigateToJoinEvent = (id: number) => {
    navigate(`/user/event/${id}/join`);
  };

  const navigateToLeaveEvent = (id: number) => {
    if (confirm("Czy jesteś pewien, że chcesz opuścić to wydarzenie?")) {
      // leaveEvent.mutate(id, user.user.userId);
    }
  };

  return {
    events,
    navigateToEventDetails,
    navigateToJoinEvent,
    navigateToLeaveEvent,
  };
};

export default CUserEvents;
