import GameDto from "../../../entities/GameDto.ts";

interface IGameRepository {
  getGameById(id: number): Promise<GameDto>;
  getGames(): Promise<GameDto[]>;
  addGame(game: GameDto): Promise<GameDto>;
  removeGame(id: number): Promise<boolean>;
  updateGame(game: GameDto): Promise<GameDto>;
}

export default IGameRepository;
