interface GameGetDto {
  gameId: number;
  gameName: string;
  gameAuthor: string;
  gameDescription: string;
  gameScript: string;
  gameDifficulty: number;
  gameMaxNumberOfParticipants: number;
}

export default GameGetDto;