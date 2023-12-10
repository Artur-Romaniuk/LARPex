import { Container } from "react-bootstrap";
import PageTitle from "../../../components/ui/pageTItle/PageTitle.tsx";
import React from "react";
import { BsCalendar, BsClock, BsPeople } from "react-icons/bs";

import "./../styles/index.scss";
import { useParams } from "react-router-dom";
import CUserEvent from "../controllers/CUserEvent.ts";

const VEventDetails = () => {
  const { id } = useParams();
  const controller = CUserEvent(Number.parseInt(id || "0"));

  if (
    controller.event.isLoading &&
    controller.event.data === null &&
    controller.game.isLoading &&
    controller.location
  ) {
    return null;
  }

  const event = controller.event.data;
  const game = controller.game.data;
  return (
    <>
      <PageTitle title={event?.eventName ?? ""} />
      <Container className="user-event-details flex-grow-1 d-flex flex-row flex-wrap flex-lg-nowrap">
        {/*Event section*/}
        <div className="w-100 me-4">
          <div className="d-flex flex-row flex-wrap align-items-center justify-content-center my-3">
            <div className="img-container me-4 border-5">
              <img src={event?.icon} alt={""} />
            </div>
            <div className="d-flex flex-column mt-2 justify-content-around">
              <div className="icon d-flex flex-row align-items-center mb-2">
                <BsCalendar />
                {event?.timeslot.timeslotDatetime.split("T")[0]}
              </div>
              <div className="icon d-flex flex-row align-items-center mb-2">
                <BsClock />
                {event?.timeslot.timeslotDatetime.split("T")[1].slice(0, 5)}
              </div>
              <div className="icon d-flex flex-row align-items-center">
                {/*// TODO change pepopleCount to event.peopleCount*/}
                <BsPeople />
                {20}
              </div>
            </div>
          </div>

          <p>
            Czas trwania: <b>{event?.timeslot.timeslotDuration.slice(0, 5)}</b>
          </p>
          <p className="">
            Lokalizacja:{" "}
            <b>{controller.location && controller.location.locationAddress}</b>
          </p>
          <p>{event?.eventDescription}</p>
        </div>

        <div className="border w-100 d-lg-none my-3"></div>

        {/*Game section*/}
        <div className="w-100">
          <h3 className="my-3">Gra: {game?.gameName}</h3>
          <h4 className="my-2">Autor: {game?.gameAuthor}</h4>
          <h4 className="my-2 mb-3">
            Poziom trudności: {game?.gameDifficulty}
          </h4>
          <p>
            <b>Opis gry:</b> {game?.gameDescription}
          </p>
          <p>
            <b>Skrypt gry:</b> {game?.gameScript}
          </p>
          {"Characters list"}
        </div>
      </Container>
      <Container className="my-5 d-flex justify-content-between">
        <button
          className="btn btn-danger px-4 py-2"
          onClick={controller.goBack}
        >
          Wróć
        </button>
      </Container>
    </>
  );
};

export default VEventDetails;
