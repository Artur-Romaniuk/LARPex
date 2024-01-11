import CharacterDto from "./CharacterDto.ts";

interface GameGetDto {
  gameId: number;
  gameName: string;
  gameAuthor: string;
  gameDescription: string;
  gameScript: string;
  gameDifficulty: number;
  gameMaxNumberOfParticipants: number;
  characters: CharacterDto[];
}

export default GameGetDto;
