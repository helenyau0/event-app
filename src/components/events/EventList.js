import React from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

class EventList extends React.Component {
  componentDidMount() {
    this.props.EventListStore.getAllEvents();
  }

  render() {
    const { EventListStore } = this.props;
    return (
      <div>
        <div className="ui five cards">
          {EventListStore.allEvents.map(event => {
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
          })}
        </div>
        <div />
      </div>
    );
  }
}

export default inject('EventListStore')(observer(EventList));
