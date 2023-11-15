import { useContext, useEffect } from "react";
import { eventContext } from "../../store/EventStore.ts";

interface CEventHandlerProps {
  id?: number;
}

const CEventHandler = ({ id = -1 }: CEventHandlerProps) => {
  const {
    events,
    updatedEvent,
    setUpdatedEvent,
    newEvent,
    handleSetUpdateEvent,
    handleDescriptionChange,
  } = useContext(eventContext);

  useEffect(() => {
    if (id !== -1) {
      console.log("id", id);
      const event = events?.find((e) => e.id === id);
      if (event) {
        setUpdatedEvent(event);
      }
    }
  }, [id, updatedEvent]);

  const searchParticipants = () => {
    return ["participant1", "participant2", "participant3"];
  };

  const addParticipant = (participant: string) => {};

  const removeParticipant = (participant: string) => {};

  const update = () => {};

  const create = () => {};

  const setGame = () => {};

  const searchGame = () => {};

  return {
    events,
    updatedEvent,
    newEvent,

    handleSetUpdateEvent,
    handleDescriptionChange,

    searchParticipants,
    addParticipant,
    removeParticipant,
    update,
    create,
    setGame,
    searchGame,
  };
};

export default CEventHandler;
