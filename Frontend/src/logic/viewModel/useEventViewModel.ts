import IEventL from "../interfaces/logic/IEventL.ts";
import useEventModel from "../model/useEventModel";

interface useEventViewModelProps {
  id: number;
}

const useEventViewModel = (props: useEventViewModelProps): IEventL => {
  const eventModel = useEventModel(props);

  const createEvent = () => {
    console.log("createEvent");
    eventModel.createEvent.createEvent(eventModel.event);
    eventModel.getEvents.execute();
  };

  const updateEvent = () => {
    console.log("updateEvent");
    eventModel.updateEvent.updateEvent(eventModel.event);
    eventModel.getEvents.execute();
    eventModel.getEvent.execute();
  };

  const deleteEvent = (id: number) => {
    console.log("deleteEvent");
    eventModel.deleteEvent.deleteEvent(id);
    eventModel.getEvents.execute();
  };

  const handleEventChange = (name: string, value: string) => {
    eventModel.setEvent({
      ...eventModel.event,
      [name]: value,
    });
  };

  return {
    events: eventModel.events,
    eventsLoading: eventModel.getEvents.loadings,

    event: eventModel.event,
    handleEventChange: handleEventChange,
    eventLoading: eventModel.getEvent.loadings,

    createEvent: createEvent,
    createEventLoading: eventModel.createEvent.loadings,

    updateEvent: updateEvent,
    updateEventLoading: eventModel.updateEvent.loadings,

    deleteEvent: deleteEvent,
    deleteEventLoading: eventModel.deleteEvent.loadings,
  };
};

export default useEventViewModel;
