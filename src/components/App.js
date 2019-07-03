import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import EventList from './events/EventList';
import EventDetail from './events/EventDetail';
import EventEdit from './events/EventEdit';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Switch>
          <Route path="/events" exact component={EventList} />
          <Route path="/events/:id" exact component={EventDetail} />
          <Route path="/events/edit/:id" exact component={EventEdit} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
