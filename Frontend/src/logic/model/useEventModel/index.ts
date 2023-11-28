import useGetEvents from "./useGetEvents.ts";
import useGetEvent from "./useGetEvent.ts";
import useCreateEvent from "./useCreateEvent.ts";
import useUpdateEvent from "./useUpdateEvent.ts";
import useDeleteEvent from "./useDeleteEvent.ts";
import EventDto from "../../../entities/EventDto.ts";
import { useEffect, useState } from "react";
import repositoryContext from "../../context/repositoryContext.ts";

interface useEventModelProps {
  id: number;
}

const useEventModel = (props: useEventModelProps) => {
  const eventRepository = repositoryContext.injectEventRepository();
  const { id } = props;

  const getEvents = useGetEvents({ eventRepository });
  const getEvent = useGetEvent({ eventRepository, id });
  const createEvent = useCreateEvent({ eventRepository });
  const updateEvent = useUpdateEvent({ eventRepository });
  const deleteEvent = useDeleteEvent({ eventRepository });

  const events = getEvents.events ?? [];
  const [event, setEvent] = useState<EventDto>({
    id: 0,
    eventName: "",
    eventStatus: "",
    eventDescription: "",
  } as EventDto);

  useEffect(() => {
    getEvents.execute();
    getEvent.execute();
  }, []);

  useEffect(() => {
    if (getEvent.event) {
      setEvent(getEvent.event);
    }
  }, [id, getEvent.loadings.isSuccess, getEvent.event]);

  return {
    events,
    getEvents,

    event,
    setEvent,
    getEvent,

    createEvent,
    updateEvent,
    deleteEvent,
  };
};

export default useEventModel;
