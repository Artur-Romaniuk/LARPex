import { useNavigate } from "react-router-dom";
import useEditEvent from "../../../logic/hooks/useEditEvent.ts";
import useGetLocations from "../../../logic/hooks/useGetLocations.ts";
import useGetGames from "../../../logic/hooks/useGetGames.ts";
import useTextInput from "../../hooks/useTextInput.ts";
import useDateSelector from "../../hooks/useDateSelector.ts";
import useNumberInput from "../../hooks/useNumberInput.ts";
import useTextAreaInput from "../../hooks/useTextAreaInput.ts";
import useTimeslotSelector from "../../hooks/useTimeslotSelector.ts";
import useFileInput from "../../hooks/useFileInput.ts";
import { useState } from "react";

interface CEventHandlerProps {
  id?: number;
}

function calculateDuration(timeslotDuration: string) {
  const [hours, minutes] = timeslotDuration.split(":");
  return Number.parseInt(hours) * 60 + Number.parseInt(minutes);
}

const CEditHandler = (props: CEventHandlerProps) => {
  const { id } = props;
  const navigate = useNavigate();

  const editEvent = useEditEvent(id ?? -1);
  const locations = useGetLocations(editEvent.event.locationId);
  const games = useGetGames(editEvent.event.gameId);
  const [globalError, setGlobalError] = useState("");

  const eventName = useTextInput({
    initialValue: editEvent.event.eventName,
    maxLength: 30,
    minLength: 3,
    // text or null pattern with polish characters
    pattern: /^([a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+|\s)*$/,
  });

  const dateSelector = useDateSelector({
    initialDate: editEvent.event.timeslot.timeslotDatetime,
  });

  const numberOfPlayers = useNumberInput({
    // TODO change to event number of players
    initialValue: 20,
    min: 20,
    max: 100,
  });

  const description = useTextAreaInput({
    initialValue: editEvent.event.eventDescription,
    maxLength: 300,
    minLength: 10,
    // pattern for text numbers with polish character
    pattern: /^([a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ0-9]+|\s)*$/,
  });

  console.log(editEvent.event.timeslot.timeslotDatetime);
  const timeslotSelector = useTimeslotSelector({
    day: dateSelector.date.toUTCString(),
    hours: Number.parseInt(
      editEvent.event.timeslot.timeslotDatetime
        ? editEvent.event.timeslot.timeslotDatetime.split("T")[1].split(":")[0]
        : "0",
    ),
    minutes: Number.parseInt(
      editEvent.event.timeslot.timeslotDatetime
        ? editEvent.event.timeslot.timeslotDatetime.split("T")[1].split(":")[1]
        : "0",
    ),
    durationMinutes: calculateDuration(
      editEvent.event.timeslot.timeslotDuration ?? "00:00",
    ),
  });

  const icon = useFileInput({
    // TODO: change to event icon
    url: "",
  });

  const updateEventExec = () => {
    // TODO: make update event with form data
    setGlobalError("Not implemented yet");
    editEvent.updateEvent();
  };

  const goBack = () => {
    navigate(-1);
  };

  return {
    editEvent,
    locations,
    games,

    gameName: eventName,
    dateSelector,
    numberOfPlayers,
    description,
    timeslotSelector,
    icon,
    globalError,

    updateEventExec,
    goBack,
  };
};

export default CEditHandler;
