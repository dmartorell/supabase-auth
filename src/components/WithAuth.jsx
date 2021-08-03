/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect } from 'react-router-dom';

const withAuth = (Component) => {
  const AuthRoute = (props) => {
    const isAuth = localStorage.getItem('supabase.auth.token');
    if (isAuth) {
      return <Component data={props.data} />;
    }
    return <Redirect to="/auth" />;
  };

  return AuthRoute;
};

export default withAuth;
