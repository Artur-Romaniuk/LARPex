import IParticipantRepository from "../../interfaces/repositories/IParticipantRepository.ts";
import ParticipantDto from "../../../entities/ParticipantDto.ts";
import { useMutation } from "react-query";

interface useUpdateParticipantProps {
  participantRepository: IParticipantRepository;
}

const useUpdateParticipant = (props: useUpdateParticipantProps) => {
  const { participantRepository } = props;

  const {
    mutate: updateParticipant,
    isLoading,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: (participant: ParticipantDto) =>
      participantRepository.updateParticipant(participant),
  });

  return { updateParticipant, loadings: { isLoading, isError, isSuccess } };
};

export default useUpdateParticipant;
