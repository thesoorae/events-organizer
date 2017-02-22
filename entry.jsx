import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './js/calendar';
import Events from './js/events';


class Root extends React.Component {

  render() {
    return(
      <div className="calendar">

        <Calendar />

      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
