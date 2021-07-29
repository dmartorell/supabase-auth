import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import Home from './components/Home';
import Auth from './components/Auth';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/auth" component={Auth} />
      <Redirect path="/" to="/home" />
    </Switch>
  </BrowserRouter>

);
export default App;
