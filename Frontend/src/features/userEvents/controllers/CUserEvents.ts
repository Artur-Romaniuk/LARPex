import { useNavigate } from "react-router-dom";
import { useUser } from "../../../logic/contexts/userContext.tsx";
import useSignOutFromEvent from "../../../logic/hooks/user/useSignOutFromEvent.ts";
import useGetUserEvents from "../../../logic/hooks/user/useGetUserEvents.ts";

const CUserEvents = () => {
  const user = useUser();
  const events = useGetUserEvents(user.user.userId);
  const navigate = useNavigate();
  const leaveEvent = useSignOutFromEvent();

  const navigateToEventDetails = (id: number) => {
    navigate(`/user/event/${id}`);
  };

  const navigateToJoinEvent = (id: number) => {
    navigate(`/user/event/${id}/join`);
  };

  const navigateToLeaveEvent = (id: number) => {
    if (confirm("Czy jesteś pewien, że chcesz opuścić to wydarzenie?")) {
      leaveEvent.signOutFromEvent.mutate({
        eventId: id,
        userId: user.user.userId || 0,
      });
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
