import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';
import EventList from './events/EventList';
import EventDetail from './events/EventDetail';
import EventEdit from './events/EventEdit';
import Header from './Header';
import Home from './Home';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div className="ui container">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/events" exact component={EventList} />
            <Route path="/events/:id" exact component={EventDetail} />
            <Route path="/events/edit/:id" exact component={EventEdit} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
