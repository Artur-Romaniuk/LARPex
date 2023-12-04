import TimeSlotDto from "./TimeslotDto.ts";

interface DailyTimetableDto {
  startHour: string;
  availableTimeslots: TimeSlotDto[];
  endHour: string;
}

export default DailyTimetableDto;