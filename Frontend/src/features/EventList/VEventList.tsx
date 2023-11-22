import "./eventList.scss";
import EventTile from "./components/EventTile.tsx";
import CEventList from "../CEventList.ts";
import PageTitle from "../../components/ui/pageTItle/PageTitle.tsx";

const VEventList = () => {
  const { events, navigateToEvent } = CEventList();

  if (!events) {
    return null;
  }
  return (
    <>
      <PageTitle title={"Wydarzenia"} />
      <div>
        {events.map((event, index) => (
          <EventTile
            key={index}
            id={event.id}
            title={event.eventName}
            date={event.eventStatus}
            peopleCount={10}
            img={event.eventDescription}
            navigateToEvent={navigateToEvent}
          />
        ))}
      </div>
    </>
  );
};

export default VEventList;
