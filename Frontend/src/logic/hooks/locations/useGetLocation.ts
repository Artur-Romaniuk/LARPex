import repositoryContext from "../../repositories/repositoryContext.ts";
import { useQuery } from "react-query";

const useGetLocation = (id: number) => {
  const locationRepository = repositoryContext.injectLocationRepository();
  const locations = useQuery(
    ["location", id],
    () => locationRepository.getLocations(),
    {
      enabled: id !== 0,
    },
  );

  const location = locations.data?.find(
    (location) => location.locationId === id,
  );

  return location;
};

export default useGetLocation;
