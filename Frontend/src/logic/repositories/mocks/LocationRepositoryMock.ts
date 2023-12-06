import ILocationRepository from "../interfaces/ILocationRepository.ts";
import LocationDto from "../../../entities/LocationDto.ts";

const locations: LocationDto[] = [
  {
    locationId: 1,
    locationAddress: "Warszawa, ul. Polna 1",
    userHourPrice: "500",
  },
  {
    locationId: 2,
    locationAddress: "Warszawa, ul. Polna 2",
    userHourPrice: "600",
  },
  {
    locationId: 3,
    locationAddress: "Warszawa, ul. Polna 3",
    userHourPrice: "700",
  },
  {
    locationId: 4,
    locationAddress: "Warszawa, ul. Polna 4",
    userHourPrice: "800",
  },
  {
    locationId: 5,
    locationAddress: "Warszawa, ul. Polna 5",
    userHourPrice: "900",
  },
  {
    locationId: 6,
    locationAddress: "Warszawa, ul. Polna 6",
    userHourPrice: "1000",
  },
  {
    locationId: 7,
    locationAddress: "Warszawa, ul. Polna 7",
    userHourPrice: "1100",
  },
  {
    locationId: 8,
    locationAddress: "Warszawa, ul. Polna 8",
    userHourPrice: "1200",
  },
  {
    locationId: 9,
    locationAddress: "Warszawa, ul. Polna 9",
    userHourPrice: "1300",
  },
  {
    locationId: 10,
    locationAddress: "Warszawa, ul. Polna 10",
    userHourPrice: "1400",
  },
  {
    locationId: 11,
    locationAddress: "Warszawa, ul. Polna 11",
    userHourPrice: "1500",
  },
  {
    locationId: 12,
    locationAddress: "Warszawa, ul. Polna 12",
    userHourPrice: "1600",
  },
  {
    locationId: 13,
    locationAddress: "Warszawa, ul. Polna 13",
    userHourPrice: "1700",
  },
  {
    locationId: 14,
    locationAddress: "Warszawa, ul. Polna 14",
    userHourPrice: "1800",
  },
  {
    locationId: 15,
    locationAddress: "Warszawa, ul. Polna 15",
    userHourPrice: "1900"
  }
]

class LocationRepositoryMock implements ILocationRepository {
  getLocations(): Promise<LocationDto[]> {
    return Promise.resolve(locations);
  }
}

export default LocationRepositoryMock;