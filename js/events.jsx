import React from 'react';
import Event from './event';

class Events extends React.Component{
constructor(props){
  super(props);
  this.state = {
      dayEvents: [],
      monthEvents: [],
      allEvents: [],
      displayedEvents: 'No events to display',
      "events": [
        {
          "occasion": "Birthday party",
          "invited_count": 120,
          "year": 2016,
          "month": 2,
          "day": 14
        },
        {
          "occasion": "Technical discussion",
          "invited_count": 23,
          "year": 2016,
          "month": 11,
          "day": 24
        },
        {
          "occasion": "Press release",
          "invited_count": 64,
          "year": 2015,
          "month": 12,
          "day": 17,
          "cancelled": true
        },
        {
          "occasion": "New year party",
          "invited_count": 55,
          "year": 2016,
          "month": 1,
          "day": 1
        }
      ]
    };
    this.storeEvents = this.storeEvents.bind(this);
    this.display = this.display.bind(this);
  }
componentDidMount(){
  this.storeEvents();
}
componentDidUpdate(){
  this.storeEvents();
}
  display(type){
    if(type == 'day'){

        this.setState({displayedEvents: this.state.dayEvents});

    } else if(type == 'month'){
      this.setState({displayedEvents: this.state.monthEvents});}
    if(type == 'all'){
      this.setState({displayedEvents: this.state.allEvents});}
}

storeEvents(){
  let monthEvents = [];
  let dayEvents = [];
  let allEvents = [];
  this.state['events'].forEach((event) => {
    allEvents.push(<Event event={event} />);
    if(event.month == (this.props.month + 1)  && event.year == this.props.year){
      monthEvents.push(<Event event={event} />);
    if(event.day == this.props.date){
      dayEvents.push(<Event event={event} />);
    }}
  });
  this.setState({
    monthEvents: monthEvents,
    dayEvents: dayEvents,
    allEvents: allEvents
  });
}

render(){

let date = `${this.props.monthName} ${this.props.date}, ${this.props.year}`;

console.log(this.props.monthName);
console.log(this.props.date);
console.log(this.props.month);



  return(
    <div className="events" >
    <div className="tabs">
      <div className="day-events clickable" onClick={()=>{this.display('day');}}>
        <h2>{date} Events</h2>
    </div>
    <div className="month-events clickable" onClick={()=>{this.display('month');}}>
      <h2>{this.props.monthName} Events</h2>
    </div>
    <div className="all-events clickable" onClick={()=>{this.display('all');}}>
      <h2>All Events</h2>
    </div>
    </div>
    <div className="displayed-events">
    {this.state.displayedEvents}
</div>
</div>
  );
}
}

module.exports = Events;
