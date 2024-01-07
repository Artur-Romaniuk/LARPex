import repositoryContext from "../../repositories/repositoryContext.ts";
import { useQuery } from "react-query";

const useSignOutFromEvent = (eventId: number, userId: number) => {
  const userRepository = repositoryContext.injectUserRepository();
  const signOutFromEvent = useQuery(
    ["signOutFromEvent", eventId, userId],
    () => userRepository.signOutFromEvent(eventId, userId),
  );

  return { signOutFromEvent };
};

export type SignOutFromEvent = ReturnType<typeof useSignOutFromEvent>;

export default useSignOutFromEvent;