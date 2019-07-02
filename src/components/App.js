import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import EventList from './events/EventList';
import EventDetail from './events/EventDetail';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Switch>
          <Route path="/events" exact component={EventList} />
          <Route path="/events/:id" exact component={EventDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
