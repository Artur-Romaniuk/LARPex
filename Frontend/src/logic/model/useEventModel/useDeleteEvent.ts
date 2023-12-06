import IEventRepository from "../../repositories/interfaces/IEventRepository.ts";
import { useMutation, useQueryClient } from "react-query";

interface useDeleteEventProps {
  eventRepository: IEventRepository;
}

const useDeleteEvent = (props: useDeleteEventProps) => {
  const { eventRepository } = props;
  const queryClient = useQueryClient();

  const {
    mutate: deleteEvent,
    isError,
    isSuccess,
    isLoading,
  } = useMutation({
    mutationFn: (id: number) => eventRepository.removeEvent(id),
    onSuccess: () => {
      queryClient.invalidateQueries("events");
    },
  });

  return { deleteEvent, loadings: { isError, isSuccess, isLoading } };
};

export default useDeleteEvent;
