import repositoryContext from "../repositories/repositoryContext.ts";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

const useCreateEvent = () => {
  const navigate = useNavigate();
  const eventRepository = repositoryContext.injectEventRepository();
  const queryClient = useQueryClient();
  const createEventMutation = useMutation({
    mutationFn: eventRepository.addEvent,
    onSuccess: (data) => {
      queryClient.invalidateQueries("events");
      navigate("/platnosc/" + data.eventId + "/" + data.orderId);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const createEvent = (formData: FormData) => {
    createEventMutation.mutate(formData);
  };

  return { createEvent };
};

export default useCreateEvent;
