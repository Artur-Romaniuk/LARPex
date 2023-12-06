import repositoryContext from "../repositories/repositoryContext.ts";
import { useQuery } from "react-query";
import { ChangeEvent, useEffect, useState } from "react";

const useGetGames = (initialId?: number) => {
  const gameRepository = repositoryContext.injectGameRepository();
  const [currentGameId, setCurrentGameId] = useState<number>(0);
  const getGames = useQuery("games", gameRepository.getGames);
  const gamesNames = getGames.data?.map((game) => game.gameName) || [];
  const selectedGame = getGames.data?.find(
    (game) => game.gameId === currentGameId,
  );
  const selectedGameName = selectedGame?.gameName;
  console.log(selectedGame);
  console.log(selectedGameName);

  useEffect(() => {
    if (initialId) {
      setCurrentGameId(initialId);
    } else if (gamesNames.length > 0) {
      setCurrentGameId(getGames.data![0].gameId);
    }
  }, [gamesNames.length, getGames.data, initialId]);

  const handleGameChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const gameId = getGames.data!.find(
      (game) => game.gameName === e.target.value,
    )?.gameId;
    setCurrentGameId(gameId!);
    console.log(gameId);
  };

  return {
    getGames,
    selectedGameName,
    gamesNames,
    currentGameId,
    handleGameChange,
  };
};

export default useGetGames;
