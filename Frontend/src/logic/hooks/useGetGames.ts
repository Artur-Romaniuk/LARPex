import repositoryContext from "../repositories/repositoryContext.ts";
import {useQuery} from "react-query";
import {ChangeEvent, useEffect, useState} from "react";

const useGetGames = () => {
  const gameRepository = repositoryContext.injectGameRepository();
  const [currentGameId, setCurrentGameId] = useState<number>(0);
  const getGames = useQuery("games", gameRepository.getGames);
  const gamesNames = getGames.data?.map((game) => game.gameName) || [];

  useEffect(() => {
    if (gamesNames.length > 0) {
      setCurrentGameId(getGames.data![0].gameId);
    }
  }, [gamesNames.length, getGames.data]);

  const handleGameChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const gameId = getGames.data!.find((game) => game.gameName === e.target.value)?.gameId;
    setCurrentGameId(gameId!);
    console.log(gameId)
  }

  return {getGames, gamesNames, currentGameId, handleGameChange};
}

export default useGetGames;