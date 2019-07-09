import React from 'react';
import { observer, inject } from 'mobx-react';
import _ from 'lodash';

class EventEdit extends React.Component {
  componentDidMount() {
    this.props.EventDetailStore.getEvent(this.props.match.params.id);
  }

  handleChange = event => {
    const { title, value } = event.target;
    this.props.EventDetailStore.event[`${title}`] = value;
  };

  handleSubmit = event => {
    event.preventDefault();
    const formValues = this.props.EventDetailStore.event;
    this.props.EventDetailStore.editEvent(
      this.props.EventDetailStore.event.id,
      _.pick(
        formValues,
        'name',
        'uri',
        'logo_uri',
        'ticket_price_currency',
        'min_ticket_price',
        'max_ticket_price'
      )
    );
  };

  render() {
    const event = this.props.EventDetailStore.event;

    return (
      <div>
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              title="name"
              defaultValue={event.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label>Uri</label>
            <input
              type="text"
              title="uri"
              defaultValue={event.uri}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label>Logo Uri</label>
            <input
              type="text"
              title="logo_uri"
              defaultValue={event.logo_uri}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label>Ticket Price Currency</label>
            <input
              type="text"
              title="ticket_price_currency"
              defaultValue={event.ticket_price_currency}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label>Min Ticket Price</label>
            <input
              type="text"
              title="min_ticket_price"
              defaultValue={event.min_ticket_price}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label>Max Ticket Price</label>
            <input
              type="text"
              title="max_ticket_price"
              defaultValue={event.max_ticket_price}
              onChange={this.handleChange}
            />
          </div>
          <button className="ui primary button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default inject('EventDetailStore')(observer(EventEdit));
