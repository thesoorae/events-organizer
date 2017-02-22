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
componentWillReceiveProps(nextProps){
  this.storeEvents(nextProps);
}
display(type){

    if(type == 'day'){
        this.setState({displayedEvents: this.state.dayEvents});
        console.log("in display day");
    } else if(type == 'month'){
      this.setState({displayedEvents: this.state.monthEvents});}
    if(type == 'all'){
      this.setState({displayedEvents: this.state.allEvents});}
}

storeEvents(props = this.props){
  let monthEvents = [];
  let dayEvents = [];
  let allEvents = [];
  console.log("in store events");
  this.state['events'].forEach((event) => {
    allEvents.push(<Event event={event} />);
    if(event.month == (props.month + 1)  && event.year == this.props.year){
      monthEvents.push(<Event event={event} />);
    if(event.day == props.date){

      dayEvents.push(<Event event={event} />);
    }}
  });
  console.log("dayEvents", dayEvents);
  this.setState({
    monthEvents: monthEvents,
    dayEvents: dayEvents,
    allEvents: allEvents
  });
}

render(){

let date = `${this.props.monthName} ${this.props.date}, ${this.props.year}`;

console.log(this.state);
console.log(this.props.date);
console.log(this.props.month);
console.log(this.state.dayEvents);



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
