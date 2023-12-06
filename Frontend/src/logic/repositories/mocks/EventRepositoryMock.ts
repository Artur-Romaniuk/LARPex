import IEventRepository from "../interfaces/IEventRepository.ts";
import EventDto from "../../../entities/EventDto.ts";
import EventWithTimeslotDto from "../../../entities/EventWithTimeslotDto.ts";

const events: EventDto[] = [
  {
    eventId: 1,
    eventName: "Star Wars",
    eventStatus: "good",
    eventDescription:
      "Wydarzenie typu strzelanka, osadzona w uniwersum Warhammera 40k. Wymagana znajomość zasad.",
    orderId: "1",
    locationId: 1,
    gameId: 1,
    timeslotId: "1",
    icon: "https://i.pinimg.com/originals/0e/0e/9e/0e0e9e0b9b5b6b6b6b6b6b6b6b6b6b6b.jpg",
  },
  {
    eventId: 2,
    eventName: "Star Wars",
    eventStatus: "good",
    eventDescription:
      "Wydarzenie typu strzelanka, osadzona w uniwersum Warhammera 40k. Wymagana znajomość zasad.",
    orderId: "2",
    locationId: 1,
    gameId: 1,
    timeslotId: "2",
    icon: "https://i.pinimg.com/originals/0e/0e/9e/0e0e9e0b9b5b6b6b6b6b6b6b6b6b6b6b.jpg",
  },
  {
    eventId: 3,
    eventName: "Star Wars",
    eventStatus: "good",
    eventDescription:
      "Wydarzenie typu strzelanka, osadzona w uniwersum Warhammera 40k. Wymagana znajomość zasad.",
    orderId: "3",
    locationId: 1,
    gameId: 1,
    timeslotId: "3",
    icon: "https://i.pinimg.com/originals/0e/0e/9e/0e0e9e0b9b5b6b6b6b6b6b6b6b6b6b6b.jpg",
  },
  {
    eventId: 4,
    eventName: "Star Wars",
    eventStatus: "good",
    eventDescription:
      "Wydarzenie typu strzelanka, osadzona w uniwersum Warhammera 40k. Wymagana znajomość zasad.",
    orderId: "4",
    locationId: 1,
    gameId: 1,
    timeslotId: "4",
    icon: "https://i.pinimg.com/originals/0e/0e/9e/0e0e9e0b9b5b6b6b6b6b6b6b6b6b6b6b.jpg",
  },
  {
    eventId: 5,
    eventName: "Star Wars",
    eventStatus: "good",
    eventDescription:
      "Wydarzenie typu strzelanka, osadzona w uniwersum Warhammera 40k. Wymagana znajomość zasad.",
    orderId: "5",
    locationId: 1,
    gameId: 1,
    timeslotId: "5",
    icon: "https://i.pinimg.com/originals/0e/0e/9e/0e0e9e0b9b5b6b6b6b6b6b6b6b6b6b6b.jpg",
  },
  {
    eventId: 6,
    eventName: "Star Wars",
    eventStatus: "good",
    eventDescription:
      "Wydarzenie typu strzelanka, osadzona w uniwersum Warhammera 40k. Wymagana znajomość zasad.",
    orderId: "6",
    locationId: 1,
    gameId: 1,
    timeslotId: "6",
    icon: "https://i.pinimg.com/originals/0e/0e/9e/0e0e9e0b9b5b6b6b6b6b6b6b6b6b6b6b.jpg",
  },
];

class EventRepositoryMock implements IEventRepository {
  getEvents(): Promise<EventDto[]> {
    return Promise.resolve(events);
  }

  getEventById(id: number): Promise<EventDto> {
    console.log("getEventById");
    console.log(events);
    if (id <= 0) return Promise.resolve({} as EventDto);
    return Promise.resolve(events.filter((event) => event.eventId === id)[0]);
  }

  addEvent(event: EventWithTimeslotDto): Promise<EventDto> {
    const eventDto: EventDto = {
      eventId: events.length + 1,
      eventName: event.eventName,
      eventStatus: "awaiting",
      eventDescription: event.eventDescription,
      orderId: "0",
      locationId: event.locationId,
      gameId: event.gameId,
      timeslotId: "0",
      icon: event.icon,
    }
    events.push(eventDto);
    return Promise.resolve(eventDto);
  }

  updateEvent(event: EventDto): Promise<EventDto> {
    const index = events.findIndex((e) => e.eventId === event.eventId);
    events[index] = event;
    console.log(events);
    return Promise.resolve(event);
  }

  removeEvent(id: number): Promise<boolean> {
    const index = events.findIndex((e) => e.eventId === id);
    events.splice(index, 1);
    return Promise.resolve(true);
  }
}

export default EventRepositoryMock;
