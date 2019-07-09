import React from 'react';
import { Link } from 'react-router-dom';

const Card = props => {
  return (
    <div className="ui cards">
      {props.events.map(event => {
        const startTime = new Date(event.start_time);
        return (
          <div className="card" key={event.id}>
            <div className="image">
              <img src={event.logo_uri} alt={event.name} />
            </div>
            <div className="extra">
              <p>
                <Link to={`/events/${event.id}`}>{event.name}</Link>
              </p>
              <p>
                <Link to={`/events/${event.id}`}>
                  {`${startTime.toLocaleString('en-us', {
                    weekday: 'short'
                  })} ${startTime.toLocaleDateString()}`}
                </Link>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
