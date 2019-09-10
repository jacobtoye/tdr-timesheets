import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useUserContext } from 'contexts/UserContext';
import MainLayout from '../MainLayout';
import { ANIMATION_FADE_CLASSNAME, Fade } from '../Fade';
import { BonusScreen, LeaveScreen, LoginScreen, TimesheetScreen, TodosScreen } from 'screens';

export const ROUTE_BONUS = '/bonus';
export const ROUTE_LEAVE = '/leave';
export const ROUTE_LOGIN = '/login';
export const ROUTE_TIMESHEET = '/timesheet';
export const ROUTE_TODOS = '/todos';

export interface RouteConfig {
  path: string;
  name: string;
  Component: React.FC;
}

export const AuthedRoutes: Array<RouteConfig> = [
  { path: ROUTE_BONUS, name: 'Bonus', Component: BonusScreen },
  { path: ROUTE_LEAVE, name: 'Leave', Component: LeaveScreen },
  { path: ROUTE_TIMESHEET, name: 'Timesheet', Component: TimesheetScreen },
  { path: ROUTE_TODOS, name: 'Todos', Component: TodosScreen },
];

const Router = () => {
  const { userState } = useUserContext();

  return (
    <BrowserRouter>
      {userState.user ? (
        <MainLayout>
          {AuthedRoutes.map(({ path, Component }: RouteConfig) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition in={match != null} timeout={300} classNames={ANIMATION_FADE_CLASSNAME} unmountOnExit>
                  <Fade>
                    <Component />
                  </Fade>
                </CSSTransition>
              )}
            </Route>
          ))}
          <Route path="*" render={() => <Redirect to={ROUTE_TIMESHEET} />} />
        </MainLayout>
      ) : (
        <Switch>
          <Route path={ROUTE_LOGIN} component={LoginScreen} />
          <Route path="*" render={() => <Redirect to={ROUTE_LOGIN} />} />
        </Switch>
      )}
    </BrowserRouter>
  );
};

export default Router;
