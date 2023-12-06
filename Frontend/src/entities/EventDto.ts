interface EventDto {
  eventId: number;
  eventName: string;
  eventStatus: string;
  eventDescription: string;
  orderId: string;
  locationId: number;
  gameId: number;
  timeslotId: string;
  icon: string;
}

export interface EventDtoWithTime {
  eventId: number;
  eventName: string;
  eventStatus: string;
  eventDescription: string;
  orderId: string;
  locationId: number;
  gameId: number;
  timeslot: {
    timeslotDatetime: string;
    timeslotDuration: string;
  };
  icon: string;
}

export default EventDto;
