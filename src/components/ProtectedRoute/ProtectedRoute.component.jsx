import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuthentication from '../../hooks/useAuthentication';

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const { isAuthenticated } = useAuthentication();
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default ProtectedRoute;
