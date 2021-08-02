/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect } from 'react-router-dom';

const withAuth = (Component) => {
  const AuthRoute = () => {
    const isAuth = localStorage.getItem('supabase.auth.token');
    if (isAuth) {
      return <Component />;
    }
    return <Redirect to="/auth" />;
  };

  return AuthRoute;
};

export default withAuth;
