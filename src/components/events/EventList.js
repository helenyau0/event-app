import React from 'react';
import { Link } from 'react-router-dom';

import events from '../../apis/events';

class EventList extends React.Component {
  state = { allEvents: [] };

  async componentDidMount() {
    try {
      const response = await events.get('/events/?limit=100&offset=0');
      this.setState({ allEvents: response.data.results });
    } catch (e) {
      throw new Error(e);
    }
  }
  render() {
    const { allEvents } = this.state;

    return (
      <div className="ui five cards">
        {allEvents.map(event => {
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

export default EventList;
