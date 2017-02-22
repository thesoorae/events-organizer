import React from 'react';
const monthNamesFull = ["January", "February", "March", "April", "May",
"June", "July", "August", "September", "October", "November", "December"];

class Event extends React.Component{

render(){
  event = this.props.event;
  let date = monthNamesFull[(event.month) % 12] + ' ' + event.day + ', ' + event.year;
  let cancelled = '';
  if(event.cancelled){
    cancelled = '-cancelled';
  }
  return(

    <div className="event">
    <div className ={`title ${cancelled}`}><h2>{event.occasion} {cancelled}</h2></div>
    <div className="date">{date}</div>
    <div className="invited"><h3>Number of Attendees</h3><span>{event.invited_count}</span></div>
    </div>
  );
}
}

module.exports = Event;
