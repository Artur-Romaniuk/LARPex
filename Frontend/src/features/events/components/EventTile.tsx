import React from "react";
import "./eventTile.scss";
import { BsCalendar, BsClock, BsPeople } from "react-icons/bs";
import { Container } from "react-bootstrap";
import { IMAGE_HOST } from "../../../config/config.ts";
import EventTimeslotResponseDto from "../../../entities/EventTimeslotResponseDto.ts";

interface EventTileProps {
  event: EventTimeslotResponseDto;
  navigateToEvent: (id: number) => void;
}

const EventTile: React.FC<EventTileProps> = (props: EventTileProps) => {
  const event = props.event;
  return (
    event && (
      <>
        <Container className="event-tile-container d-md-none">
          <div className="event-title mb-2">{event.eventName}</div>
          <div className="event-details w-100 d-flex flex-row align-items-center justify-content-around mb-3">
            <div className="event-image ">
              <img src={IMAGE_HOST + event.icon} />
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
                {event.participantsCount + "/" + event.maxParticipants}
              </div>
            </div>
          </div>
          <button
            className="btn btn-dark"
            onClick={() => props.navigateToEvent(event.eventId)}
          >
            Edytuj wydarzenie
          </button>
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

            <button
              className="btn btn-dark"
              onClick={() => props.navigateToEvent(event.eventId)}
            >
              Edytuj wydarzenie
            </button>
          </div>
        </Container>
      </>
    )
  );
};

export default EventTile;
