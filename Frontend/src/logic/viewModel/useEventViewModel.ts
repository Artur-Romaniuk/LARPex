import useEventModel from "../model/useEventModel";
import { useNavigate } from "react-router-dom";

interface useEventViewModelProps {
  id: number;
}

const useEventViewModel = (props: useEventViewModelProps) => {
  const eventModel = useEventModel(props);
  const navigate = useNavigate();

  const createEvent = () => {
    console.log("createEvent");
    eventModel.createEvent.createEvent(eventModel.event, {
      onSuccess: () => {
        eventModel.getEvents.execute();
        navigate("/panel-wydarzen");
      },
    });
  };

  const updateEvent = () => {
    console.log("updateEvent");
    eventModel.updateEvent.updateEvent(eventModel.event, {
      onSuccess: () => {
        eventModel.getEvents.execute();
        eventModel.getEvent.execute();
      },
    });
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

  const handleDateInputChange = (date: Date) => {
    eventModel.setEvent({
      ...eventModel.event,
      date: date,
    });
  };

  return {
    events: eventModel.events,
    eventsLoading: eventModel.getEvents.loadings,

    event: eventModel.event,
    handleEventChange: handleEventChange,
    handleDateInputChange,
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
