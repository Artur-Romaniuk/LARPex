interface EventDto {
  id: number;
  eventName: string;
  eventStatus: string;
  eventDescription: string;
  game: string;
  payment: string;
  location: string;
  date: string;
  peopleCount: number;
  img: string;
}

export default EventDto;
