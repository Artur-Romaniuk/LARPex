import IGameRepository from "../../repositories/interfaces/IGameRepository.ts";
import GameDto from "../../../entities/GameDto.ts";
import { useMutation } from "react-query";

interface useCreateGameProps {
  gameRepository: IGameRepository;
}

const useCreateGame = (props: useCreateGameProps) => {
  const { gameRepository } = props;

  const {
    mutate: createGame,
    isLoading,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: (game: GameDto) => gameRepository.addGame(game),
  });

  return { createGame, loadings: { isLoading, isError, isSuccess } };
};

export default useCreateGame;
