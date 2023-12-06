import IEventRepository from "../interfaces/IEventRepository.ts";
import EventDto from "../../../entities/EventDto.ts";
import axios from "axios";
import { API_HOST } from "../../../config/config.ts";
import EventWithTimeslotDto from "../../../entities/EventWithTimeslotDto.ts";

class EventRepository implements IEventRepository {
  getEvents(): Promise<EventDto[]> {
    return axios.get(`${API_HOST}/Events/getEvents`).then((res) => res.data);
  }

  getEventById(id: number): Promise<EventDto> {
    return axios
      .get(`${API_HOST}/Events/getEvent/${id}`)
      .then((res) => res.data);
  }

  addEvent(event: EventWithTimeslotDto): Promise<EventDto> {
    return axios.post(`${API_HOST}/Events`, event).then((res) => res.data);
  }

  updateEvent(event: EventDto): Promise<EventDto> {
    return axios
      .put(`${API_HOST}/Events?id=${event.eventId}`, event)
      .then((res) => res.data);
  }

  removeEvent(id: number): Promise<boolean> {
    return axios.delete(`${API_HOST}/Events?id=${id}`).then((res) => res.data);
  }
}

export default EventRepository;
