import repositoryContext from "../repositories/repositoryContext.ts";
import {useMutation, useQuery, useQueryClient} from "react-query";
import EventDto from "../../entities/EventDto.ts";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const initialState: EventDto = {
  eventId: 0,
  eventName: "",
  eventStatus: "",
  eventDescription: "",
  orderId: "",
  locationId: 0,
  gameId: 0,
  timeslotId: "",
  icon: "",
};

const useEditEvent = (id: number) => {
  const navigate = useNavigate();
  const eventRepository = repositoryContext.injectEventRepository();
  const queryClient = useQueryClient();

  const getEvent = useQuery(["events", id], () => eventRepository.getEventById(id));
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

  const [event, setEvent] = useState<EventDto>(initialState);

  useEffect(() => {
    if (getEvent.data) {
      setEvent(getEvent.data);
    }
  }, [getEvent.data]);

  const updateEvent = () => {
    updateEventMutation.mutate(event);
  }

  return {event, setEvent, getEvent, updateEvent};
}

export default useEditEvent;