import IEventRepository from "../../repositories/interfaces/IEventRepository.ts";
import { useMutation } from "react-query";
import EventDto from "../../../entities/EventDto.ts";

interface useUpdateEventProps {
  eventRepository: IEventRepository;
}

const useUpdateEvent = (props: useUpdateEventProps) => {
  const { eventRepository } = props;

  const {
    mutate: updateEvent,
    isLoading,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: (event: EventDto) => eventRepository.updateEvent(event),
  });

  return { updateEvent, loadings: { isLoading, isError, isSuccess } };
};

export default useUpdateEvent;
