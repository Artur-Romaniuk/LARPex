import repositoryContext from "../../repositories/repositoryContext.ts";
import { useQuery } from "react-query";

const useGetEvents = () => {
  const eventsRepository = repositoryContext.injectEventRepository();
  const getEvents = useQuery("events", eventsRepository.getEvents);
  return getEvents;
};

export type GetEvents = ReturnType<typeof useGetEvents>;

export default useGetEvents;
