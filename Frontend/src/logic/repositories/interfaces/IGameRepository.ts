import CreateGameDto from "../../../entities/CreateGameDto.ts";
import EditGameDto from "../../../entities/EditGameDto.ts";
import GameGetDto from "../../../entities/GameGetDto.ts";

interface IGameRepository {
  getGames(): Promise<GameGetDto[]>;
  getGameById(id: number): Promise<GameGetDto>;
  addGame(game: CreateGameDto): Promise<GameGetDto>;
  removeGame(id: number): Promise<boolean>;
  updateGame(game: EditGameDto): Promise<boolean>;
}

export default IGameRepository;
