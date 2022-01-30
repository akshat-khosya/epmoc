import React from 'react';
import EventCard from '../../components/Event/EventCard';
import './event.css';
import eventData from './EventData';
function Event() {
  return (
      <div className='event'>
          <div className="event-container">
            {eventData.map((e)=>(
                <EventCard data={e} />
            ))}
          </div>
          

      </div>
  );
}

export default Event;
