import { useParams } from "react-router-dom";
import CPayment from "../controllers/CPayment.ts";
import PageTitle from "../../../components/ui/PageTitle.tsx";
import { Container } from "react-bootstrap";
import React from "react";
import DisabledInput from "../../../components/forms/DisabledInput.tsx";
import DisabledTextArea from "../../../components/forms/DisabledTextArea.tsx";
import ButtonComp from "../../../components/ui/ButtonComp.tsx";
import { API_HOST, IMAGE_HOST } from "../../../config/config.ts";

const VPayment = () => {
  const { eventId, orderId } = useParams();
  const controller = CPayment({
    eventId: eventId ?? "",
    orderId: orderId ?? "",
  });

  return (
    <>
      <PageTitle title={"Płatność"} />
      <Container className="d-flex flex-wrap justify-content-around mt-3">
        <div className="d-flex flex-column align-items-center my-2">
          <div className="event-image mb-3">
            <img src={IMAGE_HOST + controller.event.event.icon} />
          </div>
          <DisabledInput
            label={"Nazwa wydarzenia"}
            value={controller.event.event.eventName}
          />
          <DisabledInput
            label={"Wybrana gra"}
            value={controller.game.data?.gameName ?? ""}
          />
          <DisabledInput
            label={"Wybrana lokalizacja"}
            value={controller.location?.locationAddress ?? ""}
          />
          <DisabledInput
            label={"Liczba graczy"}
            // TODO change pepopleCount to event.peopleCount
            value={"Not implemented"}
          />
        </div>
        <div className="d-flex flex-column align-items-center my-2">
          <DisabledInput
            label={"Wybrany dzień"}
            value={controller.event.event.timeslot.timeslotDatetime.slice(
              0,
              10,
            )}
          />
          <DisabledInput
            label={"Wybrana godzina"}
            value={controller.event.event.timeslot.timeslotDatetime.slice(
              11,
              16,
            )}
          />
          <DisabledInput
            label={"Cena"}
            value={controller.order.data?.orderAmount + " zł"}
          />
          <DisabledTextArea
            label={"Opis"}
            value={controller.event.event.eventDescription}
          />
        </div>
      </Container>
      <Container className="w-100 m-auto my-3 d-flex  justify-content-between">
        <ButtonComp
          text={"Anuluj"}
          onClick={() => controller.goBack()}
          classElem="cancel"
        />
        <ButtonComp
          text={"Zapłać"}
          onClick={() => controller.pay()}
          classElem="confirm"
        />
      </Container>
    </>
  );
};

export default VPayment;
