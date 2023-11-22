import IParticipantRepository from "../../interfaces/repositories/IParticipantRepository.ts";
import { useMutation } from "react-query";

interface useDeleteParticipantProps {
  participantRepository: IParticipantRepository;
}

const useDeleteParticipant = (props: useDeleteParticipantProps) => {
  const { participantRepository } = props;

  const {
    mutate: deleteParticipant,
    isLoading,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: (id: number) => participantRepository.deleteParticipant(id),
  });

  return { deleteParticipant, loadings: { isLoading, isError, isSuccess } };
};

export default useDeleteParticipant;
