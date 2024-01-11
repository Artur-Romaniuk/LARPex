import "../styles/eventList.scss";
import EventTile from "../components/EventTile.tsx";
import CEventList from "../controllers/CEventList.ts";
import PageTitle from "../../../components/ui/PageTitle.tsx";

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
            event={event}
            navigateToEvent={navigateToEvent}
          />
        ))}
      </div>
    </>
  );
};

export default VEventList;
