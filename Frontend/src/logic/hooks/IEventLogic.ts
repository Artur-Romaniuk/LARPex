import useGetEvents from "./events/useGetEvents.ts";
import useCreateEvent from "./events/useCreateEvent.ts";
import useEditEvent from "./events/useEditEvent.ts";
import useGetEvent from "./events/useGetEvent.ts";
import useGetGame from "./game/useGetGame.ts";
import useGetGames from "./game/useGetGames.ts";
import useGetLocation from "./locations/useGetLocation.ts";
import useGetLocations from "./locations/useGetLocations.ts";
import useGetOrder from "./order/useGetOrder.ts";
import useCreatePayment from "./paymetns/useCreatePayment.ts";
import useGetUsers from "./user/useGetUsers.ts";

const EventLogic = {
  useCreateEvent,
  useEditEvent,
  useGetEvents,
  useGetEvent,

  useGetGame,
  useGetGames,

  useGetLocation,
  useGetLocations,

  useGetOrder,

  useCreatePayment,

  useGetUsers,
};

export default EventLogic;
