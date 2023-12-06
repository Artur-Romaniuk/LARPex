import repositoryContext from "../repositories/repositoryContext.ts";
import {useQuery} from "react-query";

const useGetTimeslots = (date: Date) => {
  const timeslotRepository = repositoryContext.injectTimeslotRepository();

  // TODO - adjust date format to backend
  const getTimeslots = useQuery(["timeslots", date], () => timeslotRepository.getTimeSlotsFromDay(date.toISOString()));

  return getTimeslots;
}

export default useGetTimeslots;