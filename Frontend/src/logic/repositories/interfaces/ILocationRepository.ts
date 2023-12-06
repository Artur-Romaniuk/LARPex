import LocationDto from "../../../entities/LocationDto.ts";

interface ILocationRepository {
  getLocations(): Promise<LocationDto[]>;
}

export default ILocationRepository;