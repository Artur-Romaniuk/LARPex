import CUserEvents from "../controllers/CUserEvents.ts";
import PageTitle from "../../../components/ui/pageTItle/PageTitle.tsx";
import { Container } from "react-bootstrap";
import UserEventTile from "../components/UserEventTile.tsx";

const VUserEventsList = () => {
  const controller = CUserEvents();

  const mapEvents = controller.events.data?.map((event, idx) => (
    <UserEventTile
      key={idx}
      id={event.eventId}
      navigateToEventDetails={controller.navigateToEventDetails}
      navigateToJoinEvent={controller.navigateToJoinEvent}
    />
  ));

  if (controller.events.isLoading) {
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
