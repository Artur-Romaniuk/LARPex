import useGetEvent from "../../../logic/hooks/events/useGetEvent.ts";
import useGetLocation from "../../../logic/hooks/locations/useGetLocation.ts";
import useGetGame from "../../../logic/hooks/game/useGetGame.ts";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import GameCharacterDto from "../../../entities/GameCharacterDto.ts";
import useSignToEvent from "../../../logic/hooks/user/useSignToEvent.ts";
import { useUser } from "../../../logic/contexts/userContext.tsx";

const CUserEvent = (id: number) => {
  const { getEvent: event } = useGetEvent(id);
  const user = useUser();
  const location = useGetLocation(event.data?.locationId || 0);
  const game = useGetGame(event.data?.gameId || 0);
  const navigate = useNavigate();
  const signToEvent = useSignToEvent();
  const characters = game.data?.characters;
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (game.data?.gameId) {
      setSelectedCharacter(game.data.characters[0]);
    }
  }, [game.data]);

  const handleJoinEvent = () => {
    if (selectedCharacter) {
      signToEvent.signToEvent.mutate(
        {
          eventId: id,
          userId: user.user.userId || 0,
          characterId: selectedCharacter.characterId,
        },
        {
          onSuccess: () => {
            // TODO - move to payment page
            navigate(-1);
          },
        },
      );
    } else {
      setError("Nie wybrano postaci");
    }
  };

  const [selectedCharacter, setSelectedCharacter] = useState<
    GameCharacterDto | undefined
  >(undefined);

  const goBack = () => {
    navigate(-1);
  };

  const handleCharacterChange = (index: number) => {
    const characters = game.data?.characters || [];
    setSelectedCharacter(characters[index]);
  };

  return {
    event,
    location,
    game,
    characters,
    selectedCharacter,
    error,

    goBack,
    handleCharacterChange,
    handleJoinEvent,
  };
};

export default CUserEvent;
