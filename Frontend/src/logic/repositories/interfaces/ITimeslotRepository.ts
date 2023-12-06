import { TimeSlotDto2 } from "../../../entities/TimeslotDto.ts";
import DailyTimetableDto from "../../../entities/DailyTimetableDto.ts";

interface ITimeslotRepository {
  getTimeSlotsFromDay(day: string): Promise<DailyTimetableDto>;
  getTimeSlotById(id: string): Promise<TimeSlotDto2>;
}

export default ITimeslotRepository;
