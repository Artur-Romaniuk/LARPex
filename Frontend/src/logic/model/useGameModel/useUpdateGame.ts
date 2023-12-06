import IGameRepository from "../../repositories/interfaces/IGameRepository.ts";
import { useMutation } from "react-query";
import GameDto from "../../../entities/GameDto.ts";

interface useUpdateGameProps {
  gameRepository: IGameRepository;
}

const useUpdateGame = (props: useUpdateGameProps) => {
  const { gameRepository } = props;

  const {
    mutate: updateGame,
    isError,
    isLoading,
    isSuccess,
  } = useMutation({
    mutationFn: (game: GameDto) => gameRepository.updateGame(game),
  });

  return { updateGame, loadings: { isLoading, isError, isSuccess } };
};

export default useUpdateGame;
