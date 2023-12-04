import TimeSpan from "./TimeSpan.ts";

interface TimeSlotDto {
  timeslotDatetime: string;
  timeslotDuration: TimeSpan;
}

export default TimeSlotDto;