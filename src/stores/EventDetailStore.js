import { extendObservable } from 'mobx';
import events from '../apis/events';

class EventDetailStore {
  constructor() {
    extendObservable(this, {
      event: []
    });
  }

  getEvent = async id => {
    const response = await events.get(`/events/${id}`);
    this.event = response.data;
  };

  editEvent = async (id, formValues) => {
    await events.patch(`/events/${id}`, formValues);
  };
}

export default new EventDetailStore();
