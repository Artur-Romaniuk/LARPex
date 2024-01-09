import { TimeSlotDto2 } from "./TimeslotDto.ts";

interface EventTimeslotResponseDto {
  eventId: number;
  eventName: string;
  eventStatus: number;
  gamaName: string;
  eventDescription: string;
  participantsCount: number;
  orderId: number;
  locationId: number;
  gameId: number;
  timeslot: TimeSlotDto2;
  icon: string;
}

export default EventTimeslotResponseDto;
