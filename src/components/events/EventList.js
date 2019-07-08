import React from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

import styles from './EventList.module.css';

class EventList extends React.Component {
  componentDidMount() {
    this.props.EventListStore.getAllEvents(1);
  }

  render() {
    const { EventListStore } = this.props;
    return (
      <div>
        <div className="right floated content">
          <div className={styles.pagination}>
            <span
              onClick={() => EventListStore.getAllEvents(EventListStore.next)}
            >
              &laquo;
            </span>
            {EventListStore.pageCount.map(number => {
              let classes =
                EventListStore.currentPage === number ? styles.active : '';
              return (
                <span
                  key={number}
                  className={classes}
                  onClick={() => EventListStore.getAllEvents(number)}
                >
                  {number}
                </span>
              );
            })}
            <span
              onClick={() =>
                EventListStore.getAllEvents(EventListStore.previous)
              }
            >
              &raquo;
            </span>
          </div>
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
        </div>
      </div>
    );
  }
}

export default inject('EventListStore')(observer(EventList));
