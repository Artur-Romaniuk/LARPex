import useGetEvent from "../../../logic/hooks/useGetEvent.ts";
import useGetLocation from "../../../logic/hooks/useGetLocation.ts";
import useGetGame from "../../../logic/hooks/useGetGame.ts";
import { useNavigate } from "react-router-dom";

const CUserEvent = (id: number) => {
  const { getEvent: event } = useGetEvent(id);
  const location = useGetLocation(event.data?.locationId || 0);
  const game = useGetGame(event.data?.gameId || 0);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return { event, location, game, goBack };
};

export default CUserEvent;
