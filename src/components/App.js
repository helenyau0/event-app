import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';
import EventList from './events/EventList';
import EventDetail from './events/EventDetail';
import EventEdit from './events/EventEdit';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Switch>
          <Route path="/events" exact component={EventList} />
          <Route path="/events/:id" exact component={EventDetail} />
          <Route path="/events/edit/:id" exact component={EventEdit} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
