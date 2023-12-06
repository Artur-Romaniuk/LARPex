import IGameRepository from "../interfaces/IGameRepository.ts";
import CreateGameDto from "../../../entities/CreateGameDto.ts";
import EditGameDto from "../../../entities/EditGameDto.ts";
import GameGetDto from "../../../entities/GameGetDto.ts";

const games: GameGetDto[] = [
  {
    gameId: 1,
    gameName: "Game 1",
    gameDescription: "Game 1 description",
    gameAuthor: "Game 1 author",
    gameScript: "Game 1 script",
    gameDifficulty: 1,
    gameMaxNumberOfParticipants: 1,
  },
  {
    gameId: 2,
    gameName: "Game 2",
    gameDescription: "Game 2 description",
    gameAuthor: "Game 2 author",
    gameScript: "Game 2 script",
    gameDifficulty: 2,
    gameMaxNumberOfParticipants: 2,
  },
  {
    gameId: 3,
    gameName: "Game 3",
    gameDescription: "Game 3 description",
    gameAuthor: "Game 3 author",
    gameScript: "Game 3 script",
    gameDifficulty: 3,
    gameMaxNumberOfParticipants: 3,
  },
  {
    gameId: 4,
    gameName: "Game 4",
    gameDescription: "Game 4 description",
    gameAuthor: "Game 4 author",
    gameScript: "Game 4 script",
    gameDifficulty: 4,
    gameMaxNumberOfParticipants: 4,
  },
  {
    gameId: 5,
    gameName: "Game 5",
    gameDescription: "Game 5 description",
    gameAuthor: "Game 5 author",
    gameScript: "Game 5 script",
    gameDifficulty: 5,
    gameMaxNumberOfParticipants: 5,
  },
  {
    gameId: 6,
    gameName: "Game 6",
    gameDescription: "Game 6 description",
    gameAuthor: "Game 6 author",
    gameScript: "Game 6 script",
    gameDifficulty: 6,
    gameMaxNumberOfParticipants: 6,
  },
  {
    gameId: 7,
    gameName: "Game 7",
    gameDescription: "Game 7 description",
    gameAuthor: "Game 7 author",
    gameScript: "Game 7 script",
    gameDifficulty: 7,
    gameMaxNumberOfParticipants: 7,
  },
  {
    gameId: 8,
    gameName: "Game 8",
    gameDescription: "Game 8 description",
    gameAuthor: "Game 8 author",
    gameScript: "Game 8 script",
    gameDifficulty: 8,
    gameMaxNumberOfParticipants: 8,
  },
];

class GameRepositoryMock implements IGameRepository {
  addGame(game: CreateGameDto): Promise<GameGetDto> {
    return Promise.resolve({} as GameGetDto);
  }

  getGameById(id: number): Promise<GameGetDto> {
    return Promise.resolve({} as GameGetDto);
  }

  getGames(): Promise<GameGetDto[]> {
    return Promise.resolve(games);
  }

  removeGame(id: number): Promise<boolean> {
    games.splice(
      games.findIndex((game) => game.gameId === id),
      1,
    );
    return Promise.resolve(true);
  }

  updateGame(game: EditGameDto): Promise<boolean> {
    return Promise.resolve(true);
  }
}

export default GameRepositoryMock;
