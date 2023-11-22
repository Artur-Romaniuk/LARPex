import IEventRepository from "../interfaces/repositories/IEventRepository.ts";
import EventDto from "../../entities/EventDto.ts";

const events = [
  {
    id: 1,
    eventName: "Event 1",
    eventStatus: "Description 1",
    eventDescription: "Location 1",
  },
  {
    id: 2,
    eventName: "Event 2",
    eventStatus: "Description 2",
    eventDescription: "Location 2",
  },
  {
    id: 3,
    eventName: "Event 3",
    eventStatus: "Description 3",
    eventDescription: "Location 3",
  },
  {
    id: 4,
    eventName: "Event 4",
    eventStatus: "Description 4",
    eventDescription: "Location 4",
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
    return Promise.resolve(events.filter((event) => event.id === id)[0]);
  }

  addEvent(event: EventDto): Promise<EventDto> {
    events.push(event);
    console.log(events);
    return Promise.resolve(event);
  }

  updateEvent(event: EventDto): Promise<EventDto> {
    const index = events.findIndex((e) => e.id === event.id);
    events[index] = event;
    console.log(events);
    return Promise.resolve(event);
  }

  removeEvent(id: number): Promise<boolean> {
    const index = events.findIndex((e) => e.id === id);
    events.splice(index, 1);
    return Promise.resolve(true);
  }
}

export default EventRepositoryMock;
