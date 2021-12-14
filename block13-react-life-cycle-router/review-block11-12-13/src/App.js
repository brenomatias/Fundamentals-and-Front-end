import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Details from './pages/Details';
import Main from './pages/Main';

function App() {
  return (

    <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route exact path="/details/:id" component={ Details } />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
