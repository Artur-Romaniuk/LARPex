import { useQuery } from "react-query";
import repositoryContext from "../../repositories/repositoryContext.ts";

const useGetGame = (id: number) => {
  const gameRepository = repositoryContext.injectGameRepository();
  const game = useQuery(["game", id], () => gameRepository.getGameById(id), {
    enabled: id !== 0,
  });

  return game;
};

export default useGetGame;
