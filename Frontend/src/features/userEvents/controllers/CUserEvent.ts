import useGetEvent from "../../../logic/hooks/events/useGetEvent.ts";
import useGetLocation from "../../../logic/hooks/locations/useGetLocation.ts";
import useGetGame from "../../../logic/hooks/game/useGetGame.ts";
import { useNavigate } from "react-router-dom";
import useCreateParticipant from "../../../logic/hooks/user/useCreateParticipant.ts";
import CreateParticipantDto from "../../../entities/CreateParticipantDto.ts";
import { useState } from "react";

const CUserEvent = (id: number) => {
  const { getEvent: event } = useGetEvent(id);
  const location = useGetLocation(event.data?.locationId || 0);
  const game = useGetGame(event.data?.gameId || 0);
  const createParticipant = useCreateParticipant();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const characters = ["Postać 1", "Postać 2", "Postać 3", "Postać 4"]; // HACK: Dowload character list for current event from repository

  const participant: CreateParticipantDto = {
    characterId: -1,
    eventId: event.data?.eventId || id,
    userId: 4,  // TODO: Get current user Id
  };

  const goBack = () => {
    navigate(-1);
  };

  const handleCharacterChange = (index: number) => {
    participant.characterId = index;
  }

  const joinGameExec = () => {

    if (participant.characterId == -1) {
      setError("Wybierz postać");
      return;
    }

    createParticipant.createParticipant(participant);
    navigate(-1);

  }

  return {
    event,
    location,
    game,
    characters,
    error,

    goBack,
    handleCharacterChange,
    joinGameExec
  };
};

export default CUserEvent;
