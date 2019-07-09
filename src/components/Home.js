import React from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

import './Home.css';
import Card from './Card';

class Home extends React.Component {
  componentDidMount() {
    this.props.EventListStore.getAllEvents(1);
  }

  renderEvents = () => {
    const events = this.props.EventListStore.allEvents.slice(0, 6);
    return <Card events={events} />;
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
