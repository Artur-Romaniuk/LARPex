import TimeSpan from "./TimeSpan.ts";

interface TimeSlotDto {
  timeslotDatetime: string;
  timeslotDuration: TimeSpan;
}

interface TimeSlotDto2 {
  timeslotDatetime: string;
  timeslotDuration: string;
}

export type {
  TimeSlotDto,
  TimeSlotDto2
}