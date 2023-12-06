import ILocationRepository from "../interfaces/ILocationRepository.ts";
import LocationDto from "../../../entities/LocationDto.ts";
import axios from "axios";
import {API_HOST} from "../../../config/config.ts";

class LocationRepository implements ILocationRepository {
  getLocations(): Promise<LocationDto[]> {
    return axios.get(`${API_HOST}/Location/getLocations`).then((res) => res.data);
  }

}

export default LocationRepository;