import { injectGameRepository } from "../../../config/context.ts";
import useGetGames from "./useGetGames.ts";
import useGetGame from "./useGetGame.ts";
import useCreateGame from "./useCreateGame.ts";
import useDeleteGame from "./useDeleteGame.ts";
import useUpdateGame from "./useUpdateGame.ts";
import { useEffect, useState } from "react";
import GameDto from "../../../entities/GameDto.ts";

interface useGameModelProps {
  id: number;
}

const useGameModel = (props: useGameModelProps) => {
  const { id } = props;
  const gameRepository = injectGameRepository();

  const getGames = useGetGames({ gameRepository });
  const getGame = useGetGame({ gameRepository, id });
  const createGame = useCreateGame({ gameRepository });
  const updateGame = useUpdateGame({ gameRepository });
  const deleteGame = useDeleteGame({ gameRepository });

  const games = getGames.games ?? [];
  const [game, setGame] = useState<GameDto>({
    id: 0,
    name: "",
    eventId: 0,
    participants: [],
  } as GameDto);

  useEffect(() => {
    getGames.execute();
    getGame.execute();
  }, []);

  useEffect(() => {
    if (getGame.game) {
      setGame(getGame.game);
    }
  }, [id, getGame.game]);

  return {
    games,
    getGames,

    game,
    setGame,
    getGame,

    createGame,
    updateGame,
    deleteGame,
  };
};

export default useGameModel;
