import repositoryContext from "../../repositories/repositoryContext.ts";
import { useMutation } from "react-query";

const useGetEvents = () => {
  const eventsRepository = repositoryContext.injectEventRepository();
  const getEvents = useMutation("events", eventsRepository.getEvents);
  return getEvents;
};

export type GetEvents = ReturnType<typeof useGetEvents>;

export default useGetEvents;
