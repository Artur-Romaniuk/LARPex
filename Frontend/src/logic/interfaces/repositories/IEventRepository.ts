import EventDto from "../../../entities/EventDto.ts";

interface IEventRepository {
  getEvents(): Promise<EventDto[]>;
  getEventById(id: number): Promise<EventDto>;
  addEvent(event: EventDto): Promise<EventDto>;
  removeEvent(event: number): Promise<boolean>;
  updateEvent(event: EventDto): Promise<EventDto>;
}

export default IEventRepository;
