import { injectGameModel } from "../../config/context.ts";
import IGameLogic from "../interfaces/logic/IGameLogic.ts";

interface useGameViewModelProps {
  id: number;
}

const useGameViewModel = (props: useGameViewModelProps): IGameLogic => {
  const gameModel = injectGameModel()(props);

  const handleGameChange = (name: string, value: string) => {
    gameModel.setGame((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const createGame = () => {
    console.log("createGame");
    gameModel.createGame.createGame(gameModel.game);
    gameModel.getGames.execute();
  };

  const updateGame = () => {
    console.log("updateGame");
    gameModel.updateGame.updateGame(gameModel.game);
    gameModel.getGames.execute();
    gameModel.getGame.execute();
  };

  const deleteGame = (id: number) => {
    console.log("deleteGame");
    gameModel.deleteGame.deleteGame(id);
    gameModel.getGames.execute();
  };

  return {
    games: gameModel.games,
    gamesLoading: gameModel.getGames.loadings,

    game: gameModel.game,
    handleGameChange,
    gameLoading: gameModel.getGame.loadings,

    createGame: createGame,
    createGameLoading: gameModel.createGame.loadings,

    updateGame: updateGame,
    updateGameLoading: gameModel.updateGame.loadings,

    deleteGame: deleteGame,
    deleteGameLoading: gameModel.deleteGame.loadings,
  };
};

export default useGameViewModel;
