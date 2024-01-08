import useGetEvent from "../../../logic/hooks/events/useGetEvent.ts";
import useGetLocation from "../../../logic/hooks/locations/useGetLocation.ts";
import useGetGame from "../../../logic/hooks/game/useGetGame.ts";
import { useNavigate } from "react-router-dom";
import useCreateParticipant from "../../../logic/hooks/user/useCreateParticipant.ts";
import { useState } from "react";
import GameCharacterDto from "../../../entities/GameCharacterDto.ts";
import { ChangeEvent, useEffect, useState } from "react";
import useSignToEvent from "../../../logic/hooks/user/useSignToEvent.ts";
import { useUser } from "../../../logic/contexts/userContext.tsx";
import CharacterDto from "../../../entities/CharacterDto.ts";

const CUserEvent = (id: number) => {
  const { getEvent: event } = useGetEvent(id);
  const user = useUser();
  const location = useGetLocation(event.data?.locationId || 0);
  const game = useGetGame(event.data?.gameId || 0);
  const createParticipant = useCreateParticipant();
  const navigate = useNavigate();
  const signToEvent = useSignToEvent();

  const [selectedCharacter, setSelectedCharacter] = useState<number>();
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCharacter(parseInt(e.target.value));
  };

  const charactersMock: CharacterDto[] = [
    {
      characterId: 1,
      characterName: "Kowalski",
      characterClass: "Klasa Kowalskiego",
      characterRace: "Rasa Kowalskiego",
      characterLore: "Lory Kowalskiego",
    },
    {
      characterId: 2,
      characterName: "Nowak",
      characterClass: "Klasa Nowaka",
      characterRace: "Rasa Nowaka",
      characterLore: "Lory Nowaka",
    },
    {
      characterId: 3,
      characterName: "Kowal",
      characterClass: "Klasa Kowala",
      characterRace: "Rasa Kowala",
      characterLore: "Lory Kowala",
    },
  ];

  useEffect(() => {
    if (game.data?.gameId) {
      setSelectedCharacter(game.data.characters[0].characterId);
    }
  }, [game.data]);

  const handleJoinEvent = () => {
    console.log(selectedCharacter);
    console.log(user.user);
    if (selectedCharacter) {
      signToEvent.signToEvent.mutate({
        eventId: id,
        userId: user.user.userId || 0,
        characterId: selectedCharacter,
      });
    }
  };

  const [error, setError] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState<GameCharacterDto | undefined>(undefined);

  const characters: GameCharacterDto[] = [// TODO: Download character list for current event from repository
    {
      characterClass: 'Warrior',
      characterId: 1,
      characterLore: 'Warrior lore',
      characterName: 'John Doe',
      characterRace: 'Human',
    },
    {
      characterClass: 'Mage',
      characterId: 2,
      characterLore: 'Mage lore',
      characterName: 'Jane Doe',
      characterRace: 'Elf',
    },
    {
      characterClass: 'Rogue',
      characterId: 3,
      characterLore: 'Rogue lore',
      characterName: 'Bob Smith',
      characterRace: 'Dwarf',
    },
    {
      characterClass: 'Paladin',
      characterId: 4,
      characterLore: 'Paladin lore',
      characterName: 'Alice Johnson',
      characterRace: 'Half-elf',
    },
  ];

  const goBack = () => {
    navigate(-1);
  };

  const handleCharacterChange = (index: number) => {
    setSelectedCharacter(characters[index]);
  }

  const joinGameExec = () => {

    if (selectedCharacter == undefined) {
      setError("Wybierz postać");
      return;
    }

    createParticipant.createParticipant({
      characterId: selectedCharacter.characterId,
      eventId: event.data?.eventId || id,
      userId: 4,  // TODO: Get current user Id
    });
    navigate(-1);

  }

  return {
    event,
    location,
    game,
    characters,
    selectedCharacter,
    error,

    goBack,
    handleCharacterChange,
    joinGameExec
  };
  return {
    event,
    location,

    charactersMock,
    handleSelectChange,

    game,
    goBack,
    handleJoinEvent,
    selectedCharacter,
  };
};

export default CUserEvent;
