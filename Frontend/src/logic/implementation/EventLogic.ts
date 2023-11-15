import IEventL from "../interfaces/IEventL.ts";
import IEvent from "../models/IEvent.ts";

class EventLogic implements IEventL {
  addEvent(event: IEvent): void {}

  changeParticipant(event: IEvent): void {}

  getEvent(name: string): IEvent | undefined {
    return undefined;
  }

  getEvents(): IEvent[] {
    return [
      {
        id: 1,
        title: "Event 1",
        game: "Game 1",
        payment: "250",
        location: "Location 1",
        date: "2023-07-07T10:40",
        peopleCount: 10,
        img: "https://via.placeholder.com/150",
        description: "Description 1",
      },
      {
        id: 2,
        title: "Event 2",
        game: "Game 2",
        payment: "250",
        location: "Location 2",
        date: "2023-07-07T10:40",
        peopleCount: 10,
        img: "https://via.placeholder.com/150",
        description: "Description 2",
      },
      {
        id: 3,
        title: "Event 3",
        game: "Game 3",
        payment: "250",
        location: "Location 3",
        date: "2023-07-07T10:40",
        peopleCount: 20,
        img: "https://via.placeholder.com/150",
        description: "Description 3",
      },
      {
        id: 4,
        title: "Event 4",
        game: "Game 4",
        payment: "250",
        location: "Location 4",
        date: "2023-07-07T10:40",
        peopleCount: 20,
        img: "https://via.placeholder.com/150",
        description: "Description 4",
      },
      {
        id: 5,
        title: "Event 5",
        game: "Game 5",
        payment: "250",
        location: "Location 5",
        date: "2023-07-07T10:40",
        peopleCount: 30,
        img: "https://via.placeholder.com/150",
        description: "Description 5",
      },
      {
        id: 6,
        title: "Event 6",
        game: "Game 6",
        payment: "250",
        location: "Location 6",
        date: "2023-07-07T10:40",
        peopleCount: 30,
        img: "https://via.placeholder.com/150",
        description: "Description 6",
      },
      {
        id: 7,
        title: "Event 7",
        game: "Game 7",
        payment: "250",
        location: "Location 7",
        date: "2023-07-07T10:40",
        peopleCount: 25,
        img: "https://via.placeholder.com/150",
        description: "Description 7",
      },
      {
        id: 8,
        title: "Event 8",
        game: "Game 8",
        payment: "250",
        location: "Location 8",
        date: "2023-07-07T10:40",
        peopleCount: 25,
        img: "https://via.placeholder.com/150",
        description: "Description 8",
      },
    ];
  }

  removeEvent(event: IEvent): void {}

  updateEvent(event: IEvent): void {}
}

export default EventLogic;
