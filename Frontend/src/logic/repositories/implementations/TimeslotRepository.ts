import ITimeslotRepository from "../interfaces/ITimeslotRepository.ts";
import DailyTimetableDto from "../../../entities/DailyTimetableDto.ts";
import axios from "axios";
import {API_HOST} from "../../../config/config.ts";

class TimeslotRepository implements ITimeslotRepository {
  getTimeSlotsFromDay(day: string): Promise<DailyTimetableDto> {
    return axios.get(`${API_HOST}/Timeslot?date=${day}`).then((res) => res.data);
  }

}

export default TimeslotRepository;