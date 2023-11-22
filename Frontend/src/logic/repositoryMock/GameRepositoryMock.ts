import IGameRepository from "../interfaces/repositories/IGameRepository.ts";
import GameDto from "../../entities/GameDto.ts";

const games: GameDto[] = [];

class GameRepositoryMock implements IGameRepository {
  addGame(game: GameDto): Promise<GameDto> {
    games.push(game);
    return Promise.resolve(game);
  }

  getGameById(id: number): Promise<GameDto> {
    return Promise.resolve(games.filter((game) => game.id === id)[0]);
  }

  getGames(): Promise<GameDto[]> {
    return Promise.resolve(games);
  }

  removeGame(id: number): Promise<boolean> {
    games.splice(
      games.findIndex((game) => game.id === id),
      1,
    );
    return Promise.resolve(true);
  }

  updateGame(game: GameDto): Promise<GameDto> {
    const index = games.findIndex((g) => g.id === game.id);
    games[index] = game;
    return Promise.resolve(game);
  }
}

export default GameRepositoryMock;
