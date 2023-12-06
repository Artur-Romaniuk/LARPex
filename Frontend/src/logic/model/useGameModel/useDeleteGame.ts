import IGameRepository from "../../repositories/interfaces/IGameRepository.ts";
import { useMutation } from "react-query";

interface useDeleteGameProps {
  gameRepository: IGameRepository;
}

const useDeleteGame = (props: useDeleteGameProps) => {
  const { gameRepository } = props;

  const {
    mutate: deleteGame,
    isLoading,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: (id: number) => gameRepository.removeGame(id),
  });

  return { deleteGame, loadings: { isLoading, isError, isSuccess } };
};

export default useDeleteGame;
