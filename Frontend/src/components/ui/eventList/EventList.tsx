import React from 'react';
import "./eventList.scss";
import EventTile from '../eventTile/EventTile.tsx';
import { Container } from 'react-bootstrap';

const EventList = () => {
    const events = [
        {
            title: 'Event 1',
            date: '2022-01-01',
            hour: '12:00',
            peopleCount: '10',
            img: 'https://via.placeholder.com/150'
        },
        {
            title: 'Event 2',
            date: '2022-01-02',
            hour: '13:00',
            peopleCount: '20',
            img: 'https://via.placeholder.com/150'
        },
        {
            title: 'Event 3',
            date: '2022-01-03',
            hour: '14:00',
            peopleCount: '30',
            img: 'https://via.placeholder.com/150'
        },
        {
            title: 'Event 4',
            date: '2022-01-04',
            hour: '15:00',
            peopleCount: '40',
            img: 'https://via.placeholder.com/150'
        },
        {
            title: 'Event 5',
            date: '2022-01-05',
            hour: '16:00',
            peopleCount: '50',
            img: 'https://via.placeholder.com/150'
        }
    ];

    return (
      <div>
        <h1 className="page-name">
          <i>{"Wydarzenia"}</i>
        </h1>

        <div>
          {events.map((event, index) => (
            <EventTile
              key={index}
              title={event.title}
              date={event.date}
              hour={event.hour}
              peopleCount={event.peopleCount}
              img={event.img}
            />
          ))}
        </div>
      </div>
    );
};

export default EventList;
