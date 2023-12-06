interface EventWithTimeslotDto {
  eventName: string;
  eventDescription: string;
  locationId: number;
  gameId: number;
  startDate: string;
  durationHour: number;
  durationMinute: number;
  attendeesCount: number;
  icon: string;
}

export default EventWithTimeslotDto;