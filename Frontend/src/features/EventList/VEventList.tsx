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
        {/* {events.map((event, index) => (
          <EventTile
            key={index}
            id={event.id}
            title={event.eventName}
            date={event.eventStatus}
            peopleCount={10}
            img={event.eventDescription}
            navigateToEvent={navigateToEvent}
          />
        ))} */}
        <EventTile
          key={1}
          id={1}
          title={"Sarnie żniwo"}
          date={"2023-12-12 12:12"}
          peopleCount={10}
          img={"https://picsum.photos/200/300"}
          navigateToEvent={navigateToEvent}
        />
        <EventTile
          key={2}
          id={2}
          title={"Gra o Tron"}
          date={"2024-02-22 21:37"}
          peopleCount={15}
          img={"https://picsum.photos/200/300"}
          navigateToEvent={navigateToEvent}
        />
        <EventTile
          key={3}
          id={3}
          title={"Wojna światów"}
          date={"2024-04-02 00:11"}
          peopleCount={25}
          img={"https://picsum.photos/200/300"}
          navigateToEvent={navigateToEvent}
        />
        <EventTile
          key={4}
          id={4}
          title={"Berserker"}
          date={"2024-05-05 13:13"}
          peopleCount={25}
          img={"https://picsum.photos/200/300"}
          navigateToEvent={navigateToEvent}
        />
      </div>
    </>
  );
};

export default VEventList;
