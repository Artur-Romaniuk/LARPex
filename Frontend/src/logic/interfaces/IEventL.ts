import IEvent from "../models/IEvent.ts";

interface IEventL {
  addEvent: (event: IEvent) => void;
  removeEvent: (event: IEvent) => void;
  getEvents: () => IEvent[];
  getEvent: (name: string) => IEvent | undefined;
  updateEvent: (event: IEvent) => void;
  changeParticipant: (event: IEvent) => void;
}

export default IEventL;
