import React from "react";
import "./EventTile.scss";
import { BsCalendar, BsClock, BsPeople } from "react-icons/bs";

interface EventTileProps {
  title: string;
  date: string;
  hour: string;
  peopleCount: string;
  img: string;
}

const EventTile: React.FC<EventTileProps> = ({
  title,
  date,
  hour,
  peopleCount,
  img,
}) => {
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
          <BsCalendar className="icon" /> {date}
        </div>
        <div className="event-hour">
          <BsClock className="icon" /> {hour}
        </div>
        <div className="event-peopleCount">
          <BsPeople className="icon" /> {peopleCount}
        </div>
      </div>
      <button className="edit-button">edytuj wydarzenie</button>
    </div>
  );
};

export default EventTile;
