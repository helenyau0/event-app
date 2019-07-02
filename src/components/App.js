import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import EventList from './events/EventList';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Switch>
          <Route path="/events" exact component={EventList} />
        </Switch>
      </BrowserRouter>
      <EventList />
    </div>
  );
};

export default App;
