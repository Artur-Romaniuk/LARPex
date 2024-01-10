import React from "react";
import "./../../events/components/eventTile.scss";
import { BsCalendar, BsClock, BsPeople } from "react-icons/bs";
import { Container } from "react-bootstrap";
import { IMAGE_HOST } from "../../../config/config.ts";
import UserEventDto from "../../../entities/UserEventDto.ts";

interface EventTileProps {
  id: number;
  event: UserEventDto;
  navigateToEventDetails: (id: number) => void;
  navigateToJoinEvent: (id: number) => void;
  navigateToLeaveEvent: (id: number) => void;
}

const UserEventTile: React.FC<EventTileProps> = (props: EventTileProps) => {
  const event = props.event;
  return (
    event && (
      <>
        <Container className="event-tile-container d-md-none">
          <div className="event-title mb-2">{event.eventName}</div>
          <div className="event-details w-100 d-flex flex-row align-items-center justify-content-around mb-3">
            <div className="event-image ">
              <img src={IMAGE_HOST + event.icon} alt={""} />
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
                <BsPeople className="icon" />
                {event.participantsCount + "/" + event.maxParticipants}
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
            {!event.isEnrolled ? (
              <button
                className="btn btn-dark px-5 m-1"
                onClick={() => props.navigateToJoinEvent(props.id)}
              >
                Dołącz
              </button>
            ) : (
              <button
                className="btn btn-dark px-5 m-1"
                onClick={() => props.navigateToLeaveEvent(props.id)}
              >
                Opuść
              </button>
            )}
          </div>
        </Container>

        <Container className="event-tile-container event-tile-container-width d-none d-md-flex">
          <div className="event-details w-100 d-flex flex-row align-items-center justify-content-between">
            <div className="event-image ">
              <img src={IMAGE_HOST + event.icon} />
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
                  {event.participantsCount + "/" + event.maxParticipants}
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
              {!event.isEnrolled ? (
                <button
                  className="btn btn-dark px-5 m-1"
                  onClick={() => props.navigateToJoinEvent(props.id)}
                >
                  Dołącz
                </button>
              ) : (
                <button
                  className="btn btn-danger px-5 m-1"
                  onClick={() => props.navigateToLeaveEvent(props.id)}
                >
                  Opuść
                </button>
              )}
            </div>
          </div>
        </Container>
      </>
    )
  );
};

export default UserEventTile;
