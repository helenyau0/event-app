import { extendObservable } from 'mobx';

import events from '../apis/events';

class EventListStore {
  constructor() {
    extendObservable(this, {
      allEvents: [],
      pageCount: [],
      currentPage: 1
    });
  }

  getEventsByPage = async page => {
    try {
      const response = await events.get(
        `/events/?limit=100&offset=${(page - 1) * 100}`
      );

      this.allEvents = response.data.results;
      const pageNumbers = [];

      for (let i = 1; i <= Math.ceil(response.data.count / 100); i++) {
        pageNumbers.push(i);
      }

      this.currentPage = page;
      this.pageCount = pageNumbers;
    } catch (error) {
      console.error(error);
    }
  };
}

export default new EventListStore();
