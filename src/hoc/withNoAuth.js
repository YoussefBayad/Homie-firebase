import React from 'react';
import { useSelector } from 'react-redux';
import { Route, useHistory, useLocation } from 'react-router-dom';

function WithNoAuth({ children, ...rest }) {
  const user = useSelector((state) => state.auth.user);
  const location = useLocation();
  const history = useHistory();
  let { from } = location.state || { from: { pathname: '/' } };

  return (
    <Route {...rest} render={() => (user ? history.replace(from) : children)} />
  );
}

export default WithNoAuth;
