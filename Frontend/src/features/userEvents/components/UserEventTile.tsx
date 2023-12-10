import React from "react";
import "./../../events/components/eventTile.scss";
import { BsCalendar, BsClock, BsPeople } from "react-icons/bs";
import useEditEvent from "../../../logic/hooks/useEditEvent.ts";
import { Container } from "react-bootstrap";

interface EventTileProps {
  id: number;
  // title: string;
  // date: Date;
  // peopleCount: number;
  // img: string;
  navigateToEventDetails: (id: number) => void;
  navigateToJoinEvent: (id: number) => void;
}

const UserEventTile: React.FC<EventTileProps> = (props: EventTileProps) => {
  const { getEvent } = useEditEvent(props.id);

  if (getEvent.isLoading && getEvent.data === null) {
    return null;
  }

  const event = getEvent.data;
  return (
    event && (
      <>
        <Container className="event-tile-container d-md-none">
          <div className="event-title mb-2">{event.eventName}</div>
          <div className="event-details w-100 d-flex flex-row align-items-center justify-content-around mb-3">
            <div className="event-image ">
              <img src={event.icon} alt={event.icon} />
            </div>
            <div className="event-elems d-flex flex-column mt-2 justify-content-around">
              <div className="event-date d-flex flex-row align-items-center">
                <BsCalendar className="icon" />
                {event.timeslot.timeslotDatetime.split("T")[0]}
              </div>
              <div className="event-hour d-flex flex-row align-items-center">
                <BsClock className="icon" />
                {event.timeslot.timeslotDatetime.split("T")[1].slice(0, 5)}
              </div>
              <div className="event-peopleCount d-flex flex-row align-items-center">
                {/*// TODO change pepopleCount to event.peopleCount*/}
                <BsPeople className="icon" />
                {20}
              </div>
            </div>
          </div>
          <div className="d-flex flex-row">
            <button
              className="btn btn-dark px-4 me-2"
              onClick={() => props.navigateToEventDetails(props.id)}
            >
              Opis
            </button>
            <button
              className="btn btn-dark px-4"
              onClick={() => props.navigateToJoinEvent(props.id)}
            >
              Dołącz
            </button>
          </div>
        </Container>

        <Container className="event-tile-container event-tile-container-width d-none d-md-flex">
          <div className="event-details w-100 d-flex flex-row align-items-center justify-content-between">
            <div className="event-image ">
              <img src={event.icon} alt={event.icon} />
            </div>
            <div className="event-elems d-flex flex-column mt-2 justify-content-around">
              <div className="event-title mb-2">{event.eventName}</div>
              <div className="event-elems-min-width d-flex w-100 justify-content-around">
                <div className="event-date d-flex flex-row align-items-center">
                  <BsCalendar className="icon" />
                  {event.timeslot.timeslotDatetime.split("T")[0]}
                </div>
                <div className="event-hour d-flex flex-row align-items-center">
                  <BsClock className="icon" />
                  {event.timeslot.timeslotDatetime.split("T")[1].slice(0, 5)}
                </div>
                <div className="event-peopleCount d-flex flex-row align-items-center">
                  {/*// TODO change pepopleCount to event.peopleCount*/}
                  <BsPeople className="icon" />
                  {20}
                </div>
              </div>
            </div>

            <div className="d-flex flex-column">
              <button
                className="btn btn-dark px-5 m-1"
                onClick={() => props.navigateToEventDetails(props.id)}
              >
                Opis
              </button>
              <button
                className="btn btn-dark px-5 m-1"
                onClick={() => props.navigateToJoinEvent(props.id)}
              >
                Dołącz
              </button>
            </div>
          </div>
        </Container>
      </>
    )
  );
};

export default UserEventTile;
