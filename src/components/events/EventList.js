import React from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import ScrollUpButton from 'react-scroll-up-button';

import './EventList.css';
import Card from '../Card';

class EventList extends React.Component {
  componentDidMount() {
    const pageNumber = this.props.location.search.slice(-1);

    if (pageNumber <= 3 && pageNumber > 1) {
      this.props.EventListStore.getEventsByPage(pageNumber);
    } else {
      this.props.EventListStore.getEventsByPage(1);
    }
  }

  render() {
    const { EventListStore } = this.props;

    return (
      <div>
        <div className="right floated content">
          <ScrollUpButton
            style={{ width: '45px', height: '45px', backgroundColor: 'black' }}
          />
          <div className="pagination">
            {EventListStore.currentPage - 1 > 1 ? (
              <Link to={`/events?page=${EventListStore.currentPage - 1}`}>
                <span
                  onClick={() =>
                    EventListStore.getEventsByPage(
                      EventListStore.currentPage - 1
                    )
                  }
                >
                  &laquo;
                </span>
              </Link>
            ) : (
              <Link to="/events">
                <span onClick={() => EventListStore.getEventsByPage(1)}>
                  &laquo;
                </span>
              </Link>
            )}
            {EventListStore.pageCount.map(number => {
              let classes =
                EventListStore.currentPage === number ? 'active' : '';
              if (number <= EventListStore.pageCount.length && number > 1) {
                return (
                  <div key={number}>
                    <Link to={`/events?page=${number}`}>
                      <span
                        className={classes}
                        onClick={() => EventListStore.getEventsByPage(number)}
                      >
                        {number}
                      </span>
                    </Link>
                  </div>
                );
              } else {
                return (
                  <div key={number}>
                    <Link to="/events">
                      <span
                        className={classes}
                        onClick={() => EventListStore.getEventsByPage(number)}
                      >
                        {number}
                      </span>
                    </Link>
                  </div>
                );
              }
            })}
            {EventListStore.currentPage + 1 <=
            EventListStore.pageCount.length ? (
              <Link to={`/events?page=${EventListStore.currentPage + 1}`}>
                <span
                  onClick={() =>
                    EventListStore.getEventsByPage(
                      EventListStore.currentPage + 1
                    )
                  }
                >
                  &raquo;
                </span>
              </Link>
            ) : (
              <Link to={`/events?page=3`}>
                <span onClick={() => EventListStore.getEventsByPage(3)}>
                  &raquo;
                </span>
              </Link>
            )}
          </div>
        </div>
        <Card events={EventListStore.allEvents} />
      </div>
    );
  }
}

export default inject('EventListStore')(observer(EventList));
