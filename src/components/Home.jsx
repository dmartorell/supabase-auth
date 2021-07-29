/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import WithAuth from './WithAuth';
import { supabase } from '../supabaseClient';

const Home = () => {
  const history = useHistory();
  const [userInfo] = useState(JSON.parse(localStorage.getItem('supabase.auth.token')));

  const logOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      history.push('/auth');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <h2>HOME PAGE</h2>
      <p>
        Hello,
        {' '}
        {userInfo.currentSession.user.email || 'Couldn\'t find user info'}
      </p>
      <br />
      <button type="button" onClick={logOut}>LOG OUT</button>
    </div>
  );
};
export default WithAuth(Home);
