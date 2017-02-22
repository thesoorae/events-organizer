import React from 'react';
const monthNamesFull = ["January", "February", "March", "April", "May",
"June", "July", "August", "September", "October", "November", "December"];

class Event extends React.Component{

render(){
  event = this.props.event;
  let date = monthNamesFull[(event.month -1) % 12] + ' ' + event.day + ', ' + event.year;
  let cancelled = '';
  if(event.cancelled){
    cancelled = '-cancelled';
  }
  return(

    <div className={`event ${cancelled}`}>
      <div className="row">
        <div className="big-number">
          {event.day}
        </div>
        <div className="event-data">
          <div className="row title-and-date">
            <div className ='title'><h2>{event.occasion} {cancelled}</h2></div>
            <div className="date">{date}</div>
          </div>
          <div className="row">
            <div className="invited">Number of Attendees</div>
            <div className="attend">{event.invited_count}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

module.exports = Event;
