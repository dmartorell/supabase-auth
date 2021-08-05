/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router';
import { supabase } from '../supabaseClient';
import LoginButton from './LoginButton';
import LogOutButton from './LogOutButton';
import Profile from './Profile';

const Dashboard = ({ session }) => {
  const history = useHistory();

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
      <h2>DASHBOARD</h2>
      <p>
        Hello,
        {' '}
        {session.user.email || 'Couldn\'t find user info'}
      </p>
      <br />
      <button type="button" onClick={logOut}>LOG OUT</button>
      <br />
      <LoginButton />
      <Profile />
      <LogOutButton />

    </div>
  );
};
export default Dashboard;
