import React from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

import events from '../../apis/events';

class EventList extends React.Component {
  async componentDidMount() {
    try {
      const response = await events.get('/events/?limit=100&offset=0');
      const { EventListStore } = this.props;
      EventListStore.allEvents = response.data.results;
    } catch (e) {
      throw new Error(e);
    }
  }

  render() {
    const { EventListStore } = this.props;
    return (
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
    );
  }
}

export default inject('EventListStore')(observer(EventList));
