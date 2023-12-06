import {ChangeEvent, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import useEditEvent from "../../../logic/hooks/useEditEvent.ts";
import useGetLocations from "../../../logic/hooks/useGetLocations.ts";
import useGetGames from "../../../logic/hooks/useGetGames.ts";
import LocationDto from "../../../entities/LocationDto.ts";
import GameGetDto from "../../../entities/GameGetDto.ts";
import useValidators from "../../hooks/useValidators.ts";

interface CEventHandlerProps {
  id?: number;
}

const CEditHandler = (props: CEventHandlerProps) => {
  const { id } = props;
  const navigate = useNavigate();
  const validators = useValidators();

  const editEvent = useEditEvent(id ?? -1);
  const locations = useGetLocations();
  const games = useGetGames();

  const [choosenLocation, setChoosenLocation] = useState<LocationDto>({} as LocationDto);
  const [choosenGame, setChoosenGame] = useState<GameGetDto>({} as GameGetDto);

  useEffect(() => {
    if (editEvent.event && locations.getLocations.data && games.getGames.data) {
      setChoosenLocation(
        locations.getLocations.data.find((location) => location.locationId === editEvent.event.locationId) ?? {} as LocationDto
      );
      setChoosenGame(
        games.getGames.data.find((game) => game.gameId === editEvent.event.gameId) ?? {} as GameGetDto
      );
    }
  }, [editEvent.event, games.getGames.data, locations.getLocations.data]);

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    editEvent.setEvent({ ...editEvent.event, eventDescription: e.target.value })
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    editEvent.setEvent({ ...editEvent.event, [e.target.name]: e.target.value })
  };

  const handleDateInputChange = (date: Date) => {
    console.log(date)
  };

  const updateEvent = () => {
    editEvent.updateEvent();
  };

  const goBack = () => {
    navigate(-1);
  };

  return {
    editEvent,
    locations,
    games,

    choosenLocation,
    choosenGame,

    validators,

    handleTextAreaChange,
    handleInputChange,
    handleDateInputChange,
    updateEvent,
    goBack,
  };
};

export default CEditHandler;
