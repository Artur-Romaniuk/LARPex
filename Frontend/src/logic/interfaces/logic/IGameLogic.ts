import ILoading from "../../../entities/ILoading.ts";
import GameDto from "../../../entities/GameDto.ts";

interface IGameLogic {
  games: GameDto[];
  gamesLoading: ILoading;

  game: GameDto;
  handleGameChange: (name: string, value: string) => void;
  gameLoading: ILoading;

  createGame(): void;
  createGameLoading: ILoading;

  updateGame(): void;
  updateGameLoading: ILoading;

  deleteGame(id: number): void;
  deleteGameLoading: ILoading;
}

export default IGameLogic;
