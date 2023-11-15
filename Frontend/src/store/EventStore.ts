import { ChangeEvent, createContext, useEffect, useState } from "react";
import IEventL from "../logic/interfaces/IEventL.ts";
import IEvent from "../logic/models/IEvent.ts";

interface EventStoreProps {
  eventLogic: IEventL;
}

const EventStore = (props: EventStoreProps) => {
  const { eventLogic } = props;
  const [events, setEvents] = useState<IEvent[]>();
  const [newEvent, setNewEvent] = useState<IEvent>({
    id: -1,
    title: "",
    game: "",
    payment: "",
    location: "",
    date: "",
    peopleCount: 0,
    img: "",
    description: "",
  });
  const [updatedEvent, setUpdatedEvent] = useState<IEvent>({
    id: -1,
    title: "",
    game: "",
    payment: "",
    location: "",
    date: "",
    peopleCount: 0,
    img: "",
    description: "",
  });

  useEffect(() => {
    setEvents(eventLogic.getEvents());
  }, []);

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setNewEvent({
      ...newEvent,
      description: e.target.value,
    });
  };

  const handleSetNewEvent = (e: ChangeEvent<HTMLInputElement>) => {
    setNewEvent({
      ...newEvent,
      [e.target.name]: e.target.value,
    });
  };

  const handleSetUpdateEvent = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    setUpdatedEvent({
      ...updatedEvent,
      [e.target.name]: e.target.value,
    });
  };

  const saveNewEvent = () => {
    eventLogic.addEvent(newEvent);
    setEvents(eventLogic.getEvents());
  };

  const updateEvent = () => {
    eventLogic.updateEvent(updatedEvent);
    setEvents(eventLogic.getEvents());
  };

  const removeEvent = (event: IEvent) => {
    eventLogic.removeEvent(event);
    setEvents(eventLogic.getEvents());
  };

  return {
    events,
    newEvent,
    updatedEvent,
    setUpdatedEvent,

    handleSetNewEvent,
    handleSetUpdateEvent,
    handleDescriptionChange,

    saveNewEvent,
    removeEvent,
    updateEvent,
  };
};

interface IEventContext {
  events: IEvent[] | undefined;
  newEvent: IEvent;
  updatedEvent: IEvent;
  setUpdatedEvent: (event: IEvent) => void;

  handleSetNewEvent: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSetUpdateEvent: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDescriptionChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;

  saveNewEvent: () => void;
  removeEvent: (event: IEvent) => void;
  updateEvent: () => void;
}
export const eventContext = createContext<IEventContext>({} as IEventContext);

export default EventStore;
