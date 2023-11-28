import { ChangeEvent } from "react";
import logicMgmt from "../../../logic/context/logicContext.ts";
import { useNavigate } from "react-router-dom";

interface CEventHandlerProps {
  id?: number;
}

const CEventHandler = (props: CEventHandlerProps) => {
  const { id } = props;
  const gameViewModel = logicMgmt.injectGame()({ id: id ?? -1 });
  const options = ["Warszawa", "Kraków", "Wrocław", "Gdańsk"];
  const eventViewModel = logicMgmt.injectEvent()({ id: id ?? -1 });
  const navigate = useNavigate();

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    eventViewModel.handleEventChange("eventDescription", e.target.value);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    eventViewModel.handleEventChange(e.target.name, e.target.value);
  };

  const handleDateInputChange = (date: Date) => {
    eventViewModel.handleDateInputChange(date);
  };

  const saveNewEvent = () => {
    eventViewModel.createEvent();
  };

  const updateEvent = () => {
    eventViewModel.updateEvent();
  };

  const goBack = () => {
    navigate(-1);
  };

  return {
    events: eventViewModel.events,
    eventsLoading: eventViewModel.eventsLoading,

    event: eventViewModel.event,
    handleTextAreaChange,
    handleInputChange,
    handleDateInputChange,
    eventLoading: eventViewModel.eventLoading,

    saveNewEvent,
    createEventLoading: eventViewModel.createEventLoading,

    updateEvent,
    updateEventLoading: eventViewModel.updateEventLoading,

    games: gameViewModel.games,
    options,

    goBack,
  };
};

export default CEventHandler;
