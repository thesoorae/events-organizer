import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './js/calendar';
import Events from './js/events';


class Root extends React.Component {

  render() {
    return(

      <div className="calendar">
        <h1>OrganisR</h1>
        <div className="subtitle">
          Click on the calendar and tabs below to see special occasions for a particular
           day or month. <br />'All Events' shows all your saved events.
        </div>
        <Calendar />
        <div className="footer">
          me@thesoorae.com
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
