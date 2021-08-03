import React, { useState } from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('default'); // I need a string to avoid auto-send magic link when no password is typed.
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/dashboard">
          <Dashboard setPassword={setPassword} setEmail={setEmail} />
        </Route>
        <Route
          exact
          path="/auth"
        >
          <SignIn
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            message={message}
            setMessage={setMessage}
            open={open}
            setOpen={setOpen}
          />
        </Route>
        <Route
          exact
          path="/signup"
        >
          <SignUp
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            message={message}
            setMessage={setMessage}
            open={open}
            setOpen={setOpen}
          />
        </Route>
        <Redirect path="/" to="/dashboard" />
      </Switch>
    </BrowserRouter>

  );
};
export default App;
