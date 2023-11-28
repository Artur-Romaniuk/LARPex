import IEventRepository from "../../interfaces/repositories/IEventRepository.ts";
import { useQuery } from "react-query";

interface useGetEventsProps {
  eventRepository: IEventRepository;
}

const useGetEvents = (props: useGetEventsProps) => {
  const { eventRepository } = props;

  const {
    data: events,
    refetch: execute,
    isLoading,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: "events",
    queryFn: () => eventRepository.getEvents(),
    enabled: false,
  });

  return { events, execute, loadings: { isLoading, isSuccess, isError } };
};

export default useGetEvents;
