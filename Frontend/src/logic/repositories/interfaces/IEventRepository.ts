import EventDto, { EventDtoWithTime } from "../../../entities/EventDto.ts";
import EventTimeslotResponseDto from "../../../entities/EventTimeslotResponseDto.ts";

interface IEventRepository {
  getEvents(): Promise<EventTimeslotResponseDto[]>;
  getEventById(id: number): Promise<EventDtoWithTime>;
  addEvent(event: FormData): Promise<EventDto>;
  removeEvent(event: number): Promise<boolean>;
  updateEvent(event: FormData): Promise<EventDto>;
}

export default IEventRepository;
