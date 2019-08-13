import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import Login from '../../screens/Login';
import { useUserContext } from '../../screens/Login/UserContext';
import MainLayout from '../MainLayout/MainLayout';

export default () => {
  const { userState } = useUserContext()

  return (
    <BrowserRouter>
      {userState.user ? (
        <Route path="/" component={MainLayout} />
      ) : (
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="*" render={() => <Redirect to="/login" />} />
        </Switch>
      )}
    </BrowserRouter>
  );
}
