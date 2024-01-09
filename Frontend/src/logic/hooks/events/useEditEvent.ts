import { useMutation, useQueryClient } from "react-query";
import { EventDtoWithTime } from "../../../entities/EventDto.ts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetEvent from "./useGetEvent.ts";
import repositoryContext from "../../repositories/repositoryContext.ts";
import { useUser } from "../../contexts/userContext.tsx";

const initialState: EventDtoWithTime = {
  eventId: 0,
  eventName: "",
  eventStatus: "",
  eventDescription: "",
  orderId: "",
  locationId: 0,
  gameId: 0,
  timeslot: {
    timeslotDatetime: "",
    timeslotDuration: "",
  },
  icon: "",
};

const useEditEvent = (id: number) => {
  const user = useUser();
  const navigate = useNavigate();
  const eventRepository = repositoryContext.injectEventRepository();
  const queryClient = useQueryClient();

  const { getEvent } = useGetEvent(id);

  const updateEventMutation = useMutation({
    mutationFn: eventRepository.updateEvent,
    onSuccess: () => {
      queryClient.invalidateQueries("events");
      setEvent(initialState);
      navigate("/events");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const [event, setEvent] = useState<EventDtoWithTime>(initialState);

  useEffect(() => {
    if (getEvent.data) {
      setEvent(getEvent.data);
    }
  }, [getEvent.data]);

  const updateEvent = () => {
    updateEventMutation.mutate({
      eventId: event.eventId,
      eventName: event.eventName,
      eventDescription: event.eventDescription,
      locationId: event.locationId,
      gameId: event.gameId,
      timeslotDatetime: event.timeslot.timeslotDatetime,
      timeslotDuration: event.timeslot.timeslotDuration,
      icon: event.icon,
      userId: user.user.userId || 0,
    });
  };

  return { event, setEvent, getEvent, updateEvent };
};

export default useEditEvent;
