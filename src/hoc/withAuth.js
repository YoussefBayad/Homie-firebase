import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
// import useAuth from '../hooks/useAuth';

// const WithAuth = ({ children }) => useAuth() && children;

function WithAuth({ children, ...rest }) {
  const user = useSelector((state) => state.auth.user);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default WithAuth;
