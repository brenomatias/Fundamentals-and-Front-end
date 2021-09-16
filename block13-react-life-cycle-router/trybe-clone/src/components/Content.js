import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Calendar from '../pages/Calendar';
import Home from '../pages/Home';
import LiveLecture from '../pages/LiveLecture';
import Solutions from '../pages/Solutions';
import TrybeTalks from '../pages/TrybeTalks';
import NotFound from '../pages/NotFound';

class Content extends React.Component {
  // rotaParaComparar: '/' => urlAual: http://localhost:3000/calendar/dia13.2

  render() {
    return (
      <main className="Content">
        <Switch>
          <Route path="/calendar/dia13.2">
            <TrybeTalks />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Route path="/live-lecture">
            <LiveLecture />
          </Route>
          <Route path="/solutions">
            <Solutions />
          </Route>
          <Route path="/trybe-talks">
            <TrybeTalks />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    );
  }
}

export default Content;