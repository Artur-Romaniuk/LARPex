import repositoryContext from "../../repositories/repositoryContext.ts";
import { useMutation, useQueryClient } from "react-query";

const useSignOutFromEvent = () => {
  const userRepository = repositoryContext.injectUserRepository();
  const queryClient = useQueryClient();
  const signOutFromEvent = useMutation(
    "signOutFromEvent",
    userRepository.signOutFromEvent,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("events");
      },
    },
  );

  return { signOutFromEvent };
};

export type SignOutFromEvent = ReturnType<typeof useSignOutFromEvent>;

export default useSignOutFromEvent;
