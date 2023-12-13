import EventDto from "../../../entities/EventDto.ts";
import repositoryContext from "../../repositories/repositoryContext.ts";
import { useQuery } from "react-query";

const useGetTimeslot = (event: EventDto) => {
  const timeslotRepository = repositoryContext.injectTimeslotRepository();

  const getTimeslot = useQuery(["timeslots"], () =>
    timeslotRepository.getTimeSlotById(event.timeslotId),
  );

  return {
    getTimeslot,
  };
};

export default useGetTimeslot;
