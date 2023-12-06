import ITimeslotRepository from "../interfaces/ITimeslotRepository.ts";
import DailyTimetableDto from "../../../entities/DailyTimetableDto.ts";
import axios from "axios";
import { API_HOST } from "../../../config/config.ts";
import { TimeSlotDto2 } from "../../../entities/TimeslotDto.ts";

class TimeslotRepository implements ITimeslotRepository {
  getTimeSlotsFromDay(day: string): Promise<DailyTimetableDto> {
    return axios
      .get(`${API_HOST}/Timeslot?date=${day}`)
      .then((res) => res.data);
  }

  getTimeSlotById(id: string): Promise<TimeSlotDto2> {
    return axios.get(`${API_HOST}/Timeslot/timeslot?id=${id}`).then((res) => {
      return res.data;
    });
  }
}

export default TimeslotRepository;
