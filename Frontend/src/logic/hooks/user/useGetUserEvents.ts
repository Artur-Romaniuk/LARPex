import repositoryContext from "../../repositories/repositoryContext.ts";
import { useQuery } from "react-query";

const useGetUserEvents = (userId: number) => {
  const userRepo = repositoryContext.injectUserRepository();
  const getUserEvents = useQuery({
    queryKey: ["events", userId],
    queryFn: () => userRepo.getUserEvents(userId),
  });

  return { getUserEvents };
};

export default useGetUserEvents;
