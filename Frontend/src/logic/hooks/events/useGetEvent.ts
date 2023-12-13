import repositoryContext from "../../repositories/repositoryContext.ts";
import { useQuery } from "react-query";

const useGetEvent = (id: number) => {
  const eventRepository = repositoryContext.injectEventRepository();
  const getEvent = useQuery(["events", id], () =>
    eventRepository.getEventById(id),
  );

  return { getEvent };
};

export type GetEvent = ReturnType<typeof useGetEvent>;

export default useGetEvent;
