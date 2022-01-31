import React from 'react';
import EventCard from '../../components/Event/EventCard';
import './event.css';
import eventData from './EventDataUp';
import eventDataLast from './EventDataLast';
function Event() {
  return (
      <div className='event'>
        <div className='event-heading'>
        <h1 className=''>
          Events
        </h1>
        </div>
        <div className='event-upcoming'>
        <div className='event-heading'>
        <h1 className=''>
         Upcoming Events
        </h1>
        </div>
        <div className="event-container">
            {eventData.map((e)=>(
                <EventCard data={e} />
            ))}
          </div>
        </div>
        <div className='event-past'>
        <div className='event-heading'>
        <h1 className=''>
          Past Events
        </h1>
        </div>
        <div className="event-container">
            {eventDataLast.map((e)=>(
                <EventCard data={e} />
            ))}
          </div>
          </div>
         
          

      </div>
  );
}

export default Event;
