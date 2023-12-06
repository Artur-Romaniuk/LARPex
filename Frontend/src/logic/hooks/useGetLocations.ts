import repositoryContext from "../repositories/repositoryContext.ts";
import {useQuery} from "react-query";
import {ChangeEvent, useEffect, useState} from "react";

const useGetLocations = () => {
  const locationRepository = repositoryContext.injectLocationRepository();
  const [currentLocationId, setCurrentLocationId] = useState<number>(0);
  const getLocations = useQuery("locations", locationRepository.getLocations);
  const locationsNames = getLocations.data?.map((location) => location.locationAddress + ": " + location.userHourPrice.split('.')[0]) || [];

  useEffect(() => {
    if (locationsNames.length > 0) {
      setCurrentLocationId(getLocations.data![0].locationId);
    }
  }, [getLocations.data, locationsNames.length]);

  const handleLocationChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const locationId = getLocations.data!.find((location) => location.locationAddress + ": " + location.userHourPrice.split('.')[0] === e.target.value)?.locationId;
    setCurrentLocationId(locationId!);
    console.log(locationId)
  }

  return {getLocations, locationsNames, currentLocationId, handleLocationChange};
}

export default useGetLocations;