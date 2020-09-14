import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = props =>
  props.isAuthorized ? (
    <Route {...props} />
  ) : (
    <Redirect to={props.redirectTo} />
  );

export default PrivateRoute;
