/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { supabase } from '../supabaseClient';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const login = async (email, password) => {
    try {
      const { error } = await supabase.auth.signIn({
        email,
        password,
      });
      if (error) throw error;
      history.push('/home');
    } catch (err) {
      alert(err.message);
    }
  };
  const signup = async (email, password) => {
    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      alert('You Signed up!');
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div>
      <h2>AUTH PAGE</h2>
      <form>
        <label htmlFor="email">
          user name:
          <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label htmlFor="password">
          password:
          <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="button" onClick={() => login(email, password)}>Login</button>
        <button type="button" onClick={() => signup(email, password)}>sign up</button>
      </form>
    </div>
  );
};

export default Auth;
