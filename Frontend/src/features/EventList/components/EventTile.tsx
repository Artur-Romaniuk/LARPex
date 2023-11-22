import React from "react";
import "./eventTile.scss";
import { BsCalendar, BsClock, BsPeople } from "react-icons/bs";

interface EventTileProps {
  id: number;
  title: string;
  date: Date;
  peopleCount: number;
  img: string;
  navigateToEvent: (id: number) => void;
}

const EventTile: React.FC<EventTileProps> = ({
  id,
  title,
  date,
  peopleCount,
  img,
  navigateToEvent,
}) => {
  const yyyyMMdd = () => {
    const dateObj = new Date(date);
    return `${dateObj.getFullYear()}-${dateObj
      .getMonth()
      .toString()
      .padStart(2, "0")}-${dateObj.getDate().toString().padStart(2, "0")}`;
  };
  const hhmm = () => {
    const dateObj = new Date(date);
    return `${dateObj.getHours()}:${dateObj.getMinutes()}`;
  };

  return (
    <div className="event-tile-container">
      <div
        className="event-image"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="event-details">
        <div className="event-title">
          <BsCalendar className="icon" /> {title}
        </div>
        <div className="event-date">
          <BsCalendar className="icon" /> {yyyyMMdd()}
        </div>
        <div className="event-hour">
          <BsClock className="icon" /> {hhmm()}
        </div>
        <div className="event-peopleCount">
          <BsPeople className="icon" /> {peopleCount}
        </div>
      </div>
      <button className="edit-button" onClick={() => navigateToEvent(id)}>
        edytuj wydarzenie
      </button>
    </div>
  );
};

export default EventTile;
