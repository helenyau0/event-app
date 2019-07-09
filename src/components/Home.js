import React from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

import './Home.css';

class Home extends React.Component {
  componentDidMount() {
    this.props.EventListStore.getAllEvents(1);
  }

  renderEvents = () => {
    const events = this.props.EventListStore.allEvents.slice(0, 6);
    return events.map(event => {
      return (
        <div className="card" key={event.id}>
          <div className="image">
            <img src={event.logo_uri} alt={event.name} />
          </div>
          <div className="extra">
            <Link to={`/events/${event.id}`}>{event.name}</Link>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="sectional-header">
          <h1>
            Featured Events{' '}
            <Link to="/events" className="event-item">
              View All
            </Link>
          </h1>
        </div>
        <div className="ui cards">{this.renderEvents()}</div>
      </div>
    );
  }
}

export default inject('EventListStore')(observer(Home));
