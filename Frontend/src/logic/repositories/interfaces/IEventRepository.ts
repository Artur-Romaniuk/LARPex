import EventDto from "../../../entities/EventDto.ts";
import EventWithTimeslotDto from "../../../entities/EventWithTimeslotDto.ts";

interface IEventRepository {
  getEvents(): Promise<EventDto[]>;
  getEventById(id: number): Promise<EventDto>;
  addEvent(event: FormData): Promise<EventDto>;
  removeEvent(event: number): Promise<boolean>;
  updateEvent(event: EventDto): Promise<EventDto>;
}

export default IEventRepository;