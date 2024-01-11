import { useParams, Link } from "react-router-dom";
import CPayment from "../controllers/CPayment.ts";
import PageTitle from "../../../components/ui/PageTitle.tsx";
import { Container } from "react-bootstrap";
import React from "react";
import DisabledInput from "../../../components/forms/DisabledInput.tsx";
import DisabledTextArea from "../../../components/forms/DisabledTextArea.tsx";
import ButtonComp from "../../../components/ui/ButtonComp.tsx";
import { API_HOST, IMAGE_HOST } from "../../../config/config.ts";

const VPaymentAccepted = () => {
  const { eventId, orderId } = useParams();
  const controller = CPayment({
    eventId: eventId ?? "",
    orderId: orderId ?? "",
  });

  const { goBack } = CPayment({
    eventId: eventId ?? "",
    orderId: orderId ?? "",
  });

  return (
    <>
      <Container
        className="w-100 m-auto my-3 text-center"
        style={{ paddingTop: "33vh" }}
      >
        <h1 style={{ color: "green", fontSize: "3em" }}>
          Płatność zaakceptowana!
        </h1>

      </Container>

      <Container
        className="w-100 m-auto my-3 d-flex justify-content-center"
        style={{ paddingTop: "10vh" }}
      >
        <ButtonComp
          text={"Powrót"}
          onClick={goBack}
          classElem="confirm"
          style={{ fontSize: "1.5em" }}
          width="15vw"
          height="8vh"
        />
      </Container>
    </>
  );
};

export default VPaymentAccepted;
