import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useUserContext } from '../../screens/Login/UserContext';
import MainLayout from '../MainLayout';
import { BonusScreen, LeaveScreen, LoginScreen, TimesheetScreen, TodosScreen } from '../../screens';

export const ROUTE_BONUS = '/bonus';
export const ROUTE_LEAVE = '/leave';
export const ROUTE_LOGIN = '/login';
export const ROUTE_TIMESHEET = '/timesheet';
export const ROUTE_TODOS = '/todos';

export interface RouteConfig {
  path: string;
  name: string;
  component: React.FC;
}

export const AuthedRoutes: Array<RouteConfig> = [
  { path: ROUTE_BONUS, name: 'Bonus', component: BonusScreen },
  { path: ROUTE_LEAVE, name: 'Leave', component: LeaveScreen },
  { path: ROUTE_TIMESHEET, name: 'Timesheet', component: TimesheetScreen },
  { path: ROUTE_TODOS, name: 'Todos', component: TodosScreen },
];

const Router = () => {
  const { userState } = useUserContext();

  return (
    <BrowserRouter>
      {userState.user ? (
        <MainLayout>
          <Switch>
            {AuthedRoutes.map(({ path, component }: RouteConfig) => (
              <Route key={path} exact path={path} component={component} />
            ))}
            <Route path="*" render={() => <Redirect to={ROUTE_TIMESHEET} />} />
          </Switch>
        </MainLayout>
      ) : (
        <Switch>
          <Route path={ROUTE_TODOS} component={LoginScreen} />
          <Route path="*" render={() => <Redirect to={ROUTE_TODOS} />} />
        </Switch>
      )}
    </BrowserRouter>
  );
};

export default Router;
