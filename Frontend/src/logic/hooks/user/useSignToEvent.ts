import repositoryContext from "../../repositories/repositoryContext.ts";
import { useMutation } from "react-query";

const useSignToEvent = () => {
  const userRepository = repositoryContext.injectUserRepository();
  const signToEvent = useMutation("signToEvent", userRepository.signInToEvent);

  return { signToEvent };
};

export type SignToEvent = ReturnType<typeof useSignToEvent>;
export default useSignToEvent;
