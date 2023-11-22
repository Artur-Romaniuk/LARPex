import IParticipantRepository from "../../interfaces/repositories/IParticipantRepository.ts";
import { useQuery } from "react-query";

interface useGetParticipantProps {
  participantRepository: IParticipantRepository;
  id: number;
}

const useGetParticipant = (props: useGetParticipantProps) => {
  const { participantRepository, id } = props;

  const {
    data: participant,
    refetch: execute,
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["participant", id],
    queryFn: () => participantRepository.getParticipant(id),
    enabled: false,
  });

  return { participant, execute, loadings: { isLoading, isError, isSuccess } };
};

export default useGetParticipant;
