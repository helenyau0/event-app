import { extendObservable } from 'mobx';

class EventListStore {
  constructor() {
    extendObservable(this, {
      allEvents: []
    });
  }
}

export default new EventListStore();
