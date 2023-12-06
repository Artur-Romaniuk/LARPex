import { useMutation, useQueryClient } from "react-query";
import IEventRepository from "../../repositories/interfaces/IEventRepository.ts";
import EventDto from "../../../entities/EventDto.ts";

interface useCreateEventProps {
  eventRepository: IEventRepository;
}

const useCreateEvent = (props: useCreateEventProps) => {
  const { eventRepository } = props;
  const queryClient = useQueryClient();

  const {
    mutate: createEvent,
    isLoading,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: (event: EventDto) => eventRepository.addEvent(event),
    onSuccess: () => {
      queryClient.invalidateQueries("events");
    },
  });

  return { createEvent, loadings: { isLoading, isError, isSuccess } };
};

export default useCreateEvent;
