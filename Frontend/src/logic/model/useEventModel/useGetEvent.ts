import IEventRepository from "../../repositories/interfaces/IEventRepository.ts";
import { useQuery } from "react-query";

interface useGetEventProps {
  eventRepository: IEventRepository;
  id: number;
}

const useGetEvent = (props: useGetEventProps) => {
  const { eventRepository, id } = props;

  const {
    data: event,
    refetch: execute,
    isLoading,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ["events", id],
    queryFn: () => eventRepository.getEventById(id),
    enabled: false,
  });

  return { event, execute, loadings: { isLoading, isSuccess, isError } };
};

export default useGetEvent;
