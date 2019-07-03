import { extendObservable } from 'mobx';
import events from '../apis/events';

class EventDetailStore {
  constructor() {
    extendObservable(this, {
      event: []
    });
  }

  getEvent = id => {
    return events.get(`/events/${id}`).then(res => {
      this.event = res.data;
    });
  };
}

export default new EventDetailStore();
