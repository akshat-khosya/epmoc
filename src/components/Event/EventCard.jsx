import React from 'react';
import './eventcard.css';
function EventCard({data}) {
    
  return (
  
    <div className="card">
      <div className="card-header">
        <img src={data.img} alt="rover" />
      </div>
      <div className="card-body">
        <span className="tag tag-teal">{data.category}</span>
        <h4>
          {data.title}
        </h4>
        <p>
          {data.desc}
        </p>
        
      </div>
    </div>

   
  );
}

export default EventCard;
