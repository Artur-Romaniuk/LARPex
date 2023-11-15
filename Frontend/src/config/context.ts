import IEventL from "../logic/interfaces/IEventL.ts";
import EventLogic from "../logic/implementation/EventLogic.ts";

const eventLogic: IEventL = new EventLogic();

export { eventLogic };
