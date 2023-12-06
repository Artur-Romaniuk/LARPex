import CreateGameDto from "../../../entities/CreateGameDto.ts";
import EditGameDto from "../../../entities/EditGameDto.ts";

interface IGameRepository {
  getGameById(id: number): Promise<GameGetDto>;
  getGames(): Promise<GameGetDto[]>;
  addGame(game: CreateGameDto): Promise<GameGetDto>;
  removeGame(id: number): Promise<boolean>;
  updateGame(game: EditGameDto): Promise<boolean>;
}

export default IGameRepository;
