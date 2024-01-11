import CUserEvents from "../controllers/CUserEvents.ts";
import PageTitle from "../../../components/ui/PageTitle.tsx";
import { Container } from "react-bootstrap";
import UserEventTile from "../components/UserEventTile.tsx";

const VUserEventsList = () => {
  const controller = CUserEvents();

  const mapEvents = controller.events.getUserEvents.data?.map((event, idx) => (
    <UserEventTile
      key={idx}
      id={event.eventId}
      event={event}
      navigateToEventDetails={controller.navigateToEventDetails}
      navigateToJoinEvent={controller.navigateToJoinEvent}
      navigateToLeaveEvent={controller.navigateToLeaveEvent}
    />
  ));

  if (controller.events.getUserEvents.isLoading) {
    return <div>Ładowanie...</div>;
  }

  return (
    <div>
      <PageTitle title={"Wydarzenia"} />
      <Container>{mapEvents}</Container>
    </div>
  );
};

export default VUserEventsList;
