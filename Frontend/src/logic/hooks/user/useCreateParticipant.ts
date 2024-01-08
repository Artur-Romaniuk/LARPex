import repositoryContext from "../../repositories/repositoryContext.ts";
import { useMutation } from "react-query";
import CreateParticipantDto from "../../../entities/CreateParticipantDto.ts";

const useCreateParticipant = () => {
  const participantRepository = repositoryContext.injectParticipantRepository();
  const createParticipantMutation = useMutation({
    mutationFn: participantRepository.createParticipant,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const createParticipant = (participantDto: CreateParticipantDto) => {
    createParticipantMutation.mutate(participantDto);
  };

  return { createParticipant };
};

export default useCreateParticipant;
