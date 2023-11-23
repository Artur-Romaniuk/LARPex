import IEventRepository from "../interfaces/repositories/IEventRepository.ts";
import EventDto from "../../entities/EventDto.ts";

const events = [
  {
    id: 1,
    eventName: "Star Wars",
    eventStatus: "good",
    eventDescription:
      "Wydarzenie typu strzelanka, osadzona w uniwersum Warhammera 40k. Wymagana znajomość zasad.",
    game: "Warhammer 40k",
    payment: "Free",
    location: "Zakopane",
    date: new Date(2021, 5, 20, 12, 10, 0),
    peopleCount: 4,
    img: "https://images6.alphacoders.com/857/thumb-1920-857790.jpg",
  },
  {
    id: 2,
    eventName: "Kanter Strajk",
    eventStatus: "unknown",
    eventDescription: "Warszawska, 34-500 Kraków",
    game: "CS",
    payment: "15.00",
    location: "Opole",
    date: new Date(2023, 4, 10, 22, 10, 0),
    peopleCount: 154,
    img: "https://www.vogue.pl/uploads/repository/strajk.jpg",
  },
  {
    id: 3,
    eventName: "Epic Fantasy Quest",
    eventStatus: "pending",
    eventDescription:
      "Epicka podróż fantasy w świecie magii i smoków. Zaproś swoich bohaterów i stwórz niezapomnianą opowieść!",
    game: "Dungeons & Dragons",
    payment: "Free",
    location: "Gdańsk",
    date: new Date(2023, 8, 15, 18, 30, 0),
    peopleCount: 8,
    img: "https://i.imgur.com/ABCDEF.jpg",
  },
  {
    id: 4,
    eventName: "Liga Rakiet",
    eventStatus: "good",
    eventDescription:
      "Turniej Rocket League dla fanów futbolu samochodowego. Doskonała okazja do rywalizacji i zdobycia tytułu mistrza!",
    game: "Rocket League",
    payment: "25.00",
    location: "Poznań",
    date: new Date(2023, 6, 5, 14, 45, 0),
    peopleCount: 32,
    img: "https://i.imgur.com/123456.jpg",
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
    event.id = events.length + 1;
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
