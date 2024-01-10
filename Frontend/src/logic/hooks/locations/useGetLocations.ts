import repositoryContext from "../../repositories/repositoryContext.ts";
import { useQuery } from "react-query";
import { ChangeEvent, useEffect, useState } from "react";

const useGetLocations = (initialId?: number) => {
  const locationRepository = repositoryContext.injectLocationRepository();
  const [currentLocationId, setCurrentLocationId] = useState<number>(0);
  const getLocations = useQuery("locations", locationRepository.getLocations);
  const locationsNames =
    getLocations.data?.map(
      (location) =>
        location.locationAddress + ": " + location.userHourPrice.split(".")[0],
    ) || [];

  const selectedLocation = getLocations.data?.find(
    (location) => location.locationId === currentLocationId,
  );
  const selectedLocationName =
    selectedLocation?.locationAddress +
    ": " +
    selectedLocation?.userHourPrice.split(".")[0];

  useEffect(() => {
    if (initialId) {
      setCurrentLocationId(initialId);
    } else if (locationsNames.length > 0) {
      setCurrentLocationId(getLocations.data![0].locationId);
    }
  }, [getLocations.data, initialId, locationsNames.length]);

  const handleLocationChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const locationId = getLocations.data!.find(
      (location) =>
        location.locationAddress +
          ": " +
          location.userHourPrice.split(".")[0] ===
        e.target.value,
    )?.locationId;
    setCurrentLocationId(locationId!);
  };

  return {
    getLocations,
    locationsNames,
    currentLocationId,
    selectedLocationName,
    handleLocationChange,
  };
};

export default useGetLocations;
