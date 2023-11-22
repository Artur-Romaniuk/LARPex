import IParticipantRepository from "../../interfaces/repositories/IParticipantRepository.ts";
import { useQuery } from "react-query";

interface useGetParticipantsProps {
  participantRepository: IParticipantRepository;
}

const useGetParticipants = (props: useGetParticipantsProps) => {
  const { participantRepository } = props;

  const {
    data: participants,
    refetch: execute,
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: "participants",
    queryFn: () => participantRepository.getParticipants(),
    enabled: false,
  });

  return { participants, execute, loadings: { isLoading, isError, isSuccess } };
};

export default useGetParticipants;
