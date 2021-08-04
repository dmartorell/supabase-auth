/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { supabase } from './supabaseClient';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('default'); // I need a string to avoid auto-send magic link when no password is typed.
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  const [session, setSession] = useState(null);

  const [loading, setLoading] = useState(true);
  console.log(loading);
  console.log(session);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    if (session) {
      setLoading(false);
    }
  }, [session]);

  return (
    <BrowserRouter>
      <Switch>
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
        {!loading
          ? (
            <Route exact path="/">
              { !session
                ? <Redirect to="/auth" />
                : <Dashboard session={session} />}
            </Route>
          )
          : (
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
          )}
      </Switch>
    </BrowserRouter>
  );
};
export default App;
