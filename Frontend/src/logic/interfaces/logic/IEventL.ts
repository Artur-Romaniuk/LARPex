import ILoading from "../../../entities/ILoading.ts";
import EventDto from "../../../entities/EventDto.ts";

interface IEventL {
  events: Array<EventDto>;
  eventsLoading: ILoading;

  event: EventDto;
  handleEventChange: (name: string, value: string) => void;
  eventLoading: ILoading;

  createEvent(): void;
  createEventLoading: ILoading;

  updateEvent(): void;
  updateEventLoading: ILoading;

  deleteEvent(id: number): void;
  deleteEventLoading: ILoading;
}

export default IEventL;
