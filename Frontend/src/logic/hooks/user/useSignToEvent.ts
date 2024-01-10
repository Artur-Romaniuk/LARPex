import repositoryContext from "../../repositories/repositoryContext.ts";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const useSignToEvent = () => {
  const userRepository = repositoryContext.injectUserRepository();
  const navigate = useNavigate();
  const signToEvent = useMutation("signToEvent", userRepository.signInToEvent, {
    onSuccess: (data, variables) => {
      navigate("/platnosc/" + variables.eventId + "/" + data.orderId);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { signToEvent };
};

export type SignToEvent = ReturnType<typeof useSignToEvent>;
export default useSignToEvent;
