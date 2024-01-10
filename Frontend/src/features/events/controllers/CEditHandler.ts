import { useNavigate } from "react-router-dom";
import useEditEvent from "../../../logic/hooks/events/useEditEvent.ts";
import useGetLocations from "../../../logic/hooks/locations/useGetLocations.ts";
import useGetGames from "../../../logic/hooks/game/useGetGames.ts";
import useTextInput from "../../../components/hooks/useTextInput.ts";
import useDateSelector from "../../../components/hooks/useDateSelector.ts";
import useNumberInput from "../../../components/hooks/useNumberInput.ts";
import useTextAreaInput from "../../../components/hooks/useTextAreaInput.ts";
import useTimeslotSelector from "../../../components/hooks/useTimeslotSelector.ts";
import useFileInput from "../../../components/hooks/useFileInput.ts";
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
    initialValue: editEvent.event.maxParticipants,
    min: 20,
    max: 100,
  });

  const description = useTextAreaInput({
    initialValue: editEvent.event.eventDescription,
    maxLength: 300,
    minLength: 10,
  });

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
    url: "",
  });

  const updateEventExec = () => {
    if (eventName.error) {
      setGlobalError(eventName.error);
      return;
    }

    const formData = new FormData();
    formData.append("eventId", editEvent.event.eventId.toString());
    formData.append("eventName", eventName.value);
    formData.append("eventDescription", description.value);
    formData.append("eventIconUrl", "");
    formData.append("locationId", editEvent.event.locationId.toString());
    formData.append("gameId", editEvent.event.gameId.toString());
    formData.append("timeslotId", "0");
    formData.append("changeTimeslot", false.toString());
    formData.append("startDate", dateSelector.date.toUTCString());
    formData.append("durationHour", "0");
    formData.append("durationMinute", "0");
    formData.append("numberOfPlayers", numberOfPlayers.value.toString());
    formData.append("userId", "0");
    if (icon.file) {
      formData.append("icon", (icon.file as File) ?? "");
    }
    editEvent.updateEventMutation.mutate(formData, {
      onSuccess: () => {
        icon.clearInput();
      },
    });
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
