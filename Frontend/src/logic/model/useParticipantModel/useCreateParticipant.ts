import IParticipantRepository from "../../interfaces/repositories/IParticipantRepository.ts";
import ParticipantDto from "../../../entities/ParticipantDto.ts";
import { useMutation } from "react-query";

interface useCreateParticipantProps {
  participantRepository: IParticipantRepository;
}

const useCreateParticipant = (props: useCreateParticipantProps) => {
  const { participantRepository } = props;

  const {
    mutate: createParticipant,
    isLoading,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: (participant: ParticipantDto) =>
      participantRepository.createParticipant(participant),
  });

  return { createParticipant, loadings: { isLoading, isError, isSuccess } };
};

export default useCreateParticipant;
