import IGameRepository from "../../repositories/interfaces/IGameRepository.ts";
import { useQuery } from "react-query";

interface useGetGamesProps {
  gameRepository: IGameRepository;
}

const useGetGames = (props: useGetGamesProps) => {
  const { gameRepository } = props;

  const {
    data: games,
    refetch: execute,
    isError,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["games"],
    queryFn: () => gameRepository.getGames(),
    enabled: false,
  });

  return { games, execute, loadings: { isLoading, isSuccess, isError } };
};

export default useGetGames;
