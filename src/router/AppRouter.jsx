import React, { Suspense } from 'react';
import { HashRouter, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import routes, { router } from '../routers';

const mapperRouterType = {
  hashRouter: HashRouter,
  browserRouter: BrowserRouter,
};

const LoadingPage = () => `Loading!!!`;

const renderRoutes = (configs) => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Switch>
        {configs.map((route = {}) => {
          const { redirect = '', path = '', exact = true } = route;
          return redirect ? (
            <Redirect from={path} to={redirect} exact={exact} key={route.path} />
          ) : (
            <Route {...route} key={route.path} />
          );
        })}
      </Switch>
    </Suspense>
  );
};

const AppRouter = () => {
  const WrapRouter = mapperRouterType[router] || BrowserRouter;
  return <WrapRouter>{renderRoutes(routes)}</WrapRouter>;
};

export default AppRouter;
