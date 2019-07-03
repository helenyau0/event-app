import React from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

class EventDetail extends React.Component {
  componentDidMount() {
    this.props.EventDetailStore.getEvent(this.props.match.params.id);
  }

  render() {
    const event = this.props.EventDetailStore.event;
    const startTime = new Date(event.start_time);
    return (
      <div>
        <img src={`${event.logo_uri}`} alt={`${event.name}`} />
        <br />
        {event.name}
        <br />
        {`Curated by ${event.organizer ? event.organizer.name : null}`}
        <br />
        {`Category: ${event.category ? event.category.name : null}`}
        <br />
        {`Max Ticket Price: ${event.max_ticket_price} ${
          event.ticket_price_currency
        }`}
        <br />
        {`Min Ticket Price: ${event.min_ticket_price} ${
          event.ticket_price_currency
        }`}
        <br />
        {`${startTime}`}
        <br />
        <a href={event.uri}>To Purchase click here!</a>
        <div>
          <Link to={`/events/edit/${event.id}`} className="ui button primary">
            Edit
          </Link>
        </div>
      </div>
    );
  }
}

export default inject('EventDetailStore')(observer(EventDetail));
