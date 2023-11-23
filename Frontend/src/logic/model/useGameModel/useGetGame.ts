import IGameRepository from "../../interfaces/repositories/IGameRepository.ts";
import { useQuery } from "react-query";

interface useGetGameProps {
  gameRepository: IGameRepository;
  id: number;
}

const useGetGame = (props: useGetGameProps) => {
  const { gameRepository, id } = props;

  const {
    data: game,
    refetch: execute,
    isError,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["games", id],
    queryFn: () => gameRepository.getGameById(id),
    enabled: false,
  });

  return { game, execute, loadings: { isLoading, isSuccess, isError } };
};

export default useGetGame;
