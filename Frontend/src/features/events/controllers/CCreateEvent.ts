import { useNavigate } from "react-router-dom";
import useGetLocations from "../../../logic/hooks/useGetLocations.ts";
import useGetGames from "../../../logic/hooks/useGetGames.ts";
import useCreateEvent from "../../../logic/hooks/useCreateEvent.ts";
import useTextInput from "../../hooks/useTextInput.ts";
import useDateSelector from "../../hooks/useDateSelector.ts";
import useNumberInput from "../../hooks/useNumberInput.ts";
import useTextAreaInput from "../../hooks/useTextAreaInput.ts";
import useTimeslotSelector from "../../hooks/useTimeslotSelector.ts";
import useFileInput from "../../hooks/useFileInput.ts";
import { useState } from "react";

const CEditHandler = () => {
  const navigate = useNavigate();

  const createEvent = useCreateEvent();
  const locations = useGetLocations();
  const games = useGetGames();
  const [globalError, setGlobalError] = useState("");

  const eventName = useTextInput({
    initialValue: "",
    maxLength: 30,
    minLength: 3,
    // text or null pattern with polish characters
    pattern: /^([a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+|\s)*$/,
  });

  const dateSelector = useDateSelector({
    initialDate: "",
  });

  const numberOfPlayers = useNumberInput({
    initialValue: 1,
    min: 20,
    max: 100,
  });

  const description = useTextAreaInput({
    initialValue: "",
    maxLength: 300,
    minLength: 10,
    // pattern for text numbers with polish character
    pattern: /^([a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ0-9]+|\s)*$/,
  });

  const timeslotSelector = useTimeslotSelector({
    day: dateSelector.date.toUTCString(),
  });

  const icon = useFileInput({
    url: "",
  });

  const createEventExec = () => {
    if (eventName.error || eventName.value.length === 0) {
      setGlobalError("Wprowadź poprawną nazwę wydarzenia");
      return;
    }

    if (description.error || description.value.length === 0) {
      setGlobalError("Wprowadź poprawny opis wydarzenia");
      return;
    }

    timeslotSelector.handleHourChangeValue(timeslotSelector.hour);
    timeslotSelector.handleMinutesChangeValue(timeslotSelector.minutes);
    if (timeslotSelector.error) {
      setGlobalError("Wybierz godzinę wydarzenia");
      return;
    }

    if (numberOfPlayers.error) {
      setGlobalError("Wybierz liczbę graczy");
      return;
    }

    timeslotSelector.handleDurationMinutesChangeValue(
      timeslotSelector.durationMinutes,
    );
    if (
      timeslotSelector.durationError ||
      timeslotSelector.durationMinutes === 0
    ) {
      setGlobalError("Wybierz długość wydarzenia");
      return;
    }

    if (!icon.file) {
      setGlobalError("Wybierz ikonę wydarzenia");
      return;
    }

    setGlobalError("");
    const formData = new FormData();
    formData.append("EventName", eventName.value);
    formData.append("EventDescription", description.value);
    formData.append("LocationId", locations.currentLocationId.toString());
    formData.append("GameId", games.currentGameId.toString());
    formData.append("StartDate", dateSelector.date.toISOString());
    formData.append(
      "DurationHour",
      (~~(timeslotSelector.durationMinutes / 60)).toString(),
    );
    formData.append(
      "DurationMinute",
      (timeslotSelector.durationMinutes % 60).toString(),
    );
    formData.append("AttendeesCount", numberOfPlayers.value.toString());
    formData.append("Icon", icon.file as File);
    formData.append("UserId", "4");

    createEvent.createEvent(formData);
  };

  const goBack = () => {
    navigate(-1);
  };

  return {
    createEvent,
    locations,
    games,
    globalError,

    gameName: eventName,
    dateSelector,
    numberOfPlayers,
    description,
    timeslotSelector,
    icon,

    createEventExec,
    goBack,
  };
};

export default CEditHandler;
