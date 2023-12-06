import { TimeSlotDto2 } from "./TimeslotDto.ts";

interface DailyTimetableDto {
  startHour: string;
  availableTimeslots: TimeSlotDto2[];
  endHour: string;
}

export default DailyTimetableDto;
