import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useUserContext } from '../../screens/Login/UserContext';
import MainLayout from '../MainLayout';
import { BonusScreen, LeaveScreen, LoginScreen, TimesheetScreen, TodosScreen } from '../../screens';

const Router = () => {
  const { userState } = useUserContext();

  return (
    <BrowserRouter>
      {userState.user ? (
        <MainLayout>
          <Switch>
            <Route path="/bonus" component={BonusScreen} />
            <Route path="/leave" component={LeaveScreen} />
            <Route path="/timesheet" component={TimesheetScreen} />
            <Route path="/todos" component={TodosScreen} />
            <Route path="*" render={() => <Redirect to="/timesheet" />} />
          </Switch>
        </MainLayout>
      ) : (
        <Switch>
          <Route path="/login" component={LoginScreen} />
          <Route path="*" render={() => <Redirect to="/login" />} />
        </Switch>
      )}
    </BrowserRouter>
  );
};

export default Router;
