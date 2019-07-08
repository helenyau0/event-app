import { extendObservable } from 'mobx';

import events from '../apis/events';
import history from '../history';

class EventDetailStore {
  constructor() {
    extendObservable(this, {
      event: []
    });
  }

  getEvent = async id => {
    try {
      const response = await events.get(`/events/${id}`);
      this.event = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  editEvent = async (id, formValues) => {
    try {
      await events.patch(`/events/${id}`, formValues);
      history.push(`/events/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
}

export default new EventDetailStore();
