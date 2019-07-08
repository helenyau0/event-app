import { extendObservable } from 'mobx';

import events from '../apis/events';

class EventListStore {
  constructor() {
    extendObservable(this, {
      allEvents: []
    });
  }

  async getAllEvents() {
    try {
      const response = await events.get('/events/?limit=100&offset=0');
      this.allEvents = response.data.results;
      console.log('events', response.data);
    } catch (error) {
      console.error(error);
    }
  }
}

export default new EventListStore();
