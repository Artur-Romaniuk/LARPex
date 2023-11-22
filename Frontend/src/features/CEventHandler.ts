import { ChangeEvent } from "react";
import {
  injectEventViewModel,
  injectGameViewModel,
} from "../config/context.ts";

interface CEventHandlerProps {
  id?: number;
}

const CEventHandler = (props: CEventHandlerProps) => {
  const { id } = props;
  const eventViewModel = injectEventViewModel()({ id: id ?? -1 });
  const gameViewModel = injectGameViewModel()({ id: id ?? -1 });
  gameViewModel.games;

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    eventViewModel.handleEventChange(e.target.name, e.target.value);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    eventViewModel.handleEventChange(e.target.name, e.target.value);
  };

  const saveNewEvent = () => {
    eventViewModel.createEvent();
  };

  const updateEvent = () => {
    eventViewModel.updateEvent();
  };

  return {
    events: eventViewModel.events,
    eventsLoading: eventViewModel.eventsLoading,

    event: eventViewModel.event,
    handleTextAreaChange,
    handleInputChange,
    eventLoading: eventViewModel.eventLoading,

    saveNewEvent,
    createEventLoading: eventViewModel.createEventLoading,

    updateEvent,
    updateEventLoading: eventViewModel.updateEventLoading,
  };
};

export default CEventHandler;
