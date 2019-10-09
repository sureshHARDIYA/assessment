import React from 'react';
import Login from 'pages/Login';
import Callback from 'pages/Callback';
import Dashboard from 'pages/Dashboard';
import { Route, Switch } from 'react-router-dom';

export const Authenticated = () => (
  <Switch>
    <Route path="/" component={Dashboard} />
  </Switch>
);

export const Unauthenticated = () => (
  <Switch>
    <Route path="/callback" component={Callback} />
    <Route path="/" component={Login} />
  </Switch>
);
