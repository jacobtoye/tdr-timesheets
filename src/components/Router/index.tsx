import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import Login from '../../screens/Login';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="*" render={() => <Redirect to="/login" />} />
      </Switch>
    </BrowserRouter>
  );
}
