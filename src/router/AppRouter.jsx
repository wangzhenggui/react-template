import React, { Suspense } from 'react';
import { HashRouter, BrowserRouter, Switch, Route, Redirect, MemoryRouter, StaticRouter } from 'react-router-dom';
import PageWrapper from './PageWrapper';
import routes, { router } from '../routers';

const mapperRouterType = {
  hashRouter: HashRouter,
  browserRouter: BrowserRouter,
  memoryRouter: MemoryRouter,
  staticRouter: StaticRouter,
};

const LoadingPage = () => null;

const renderRoutes = (configs, lastPath = '') => {
  if (!Array.isArray(configs)) {
    return null;
  }

  return (
    <Switch>
      {configs.map((route = {}) => {
        const {
          redirect = '',
          path = '',
          title = '',
          exact = false,
          strict = false,
          component: Component,
          routes: children = [],
        } = route;
        const currentPath = `${lastPath}${path}`;
        if (redirect) {
          return (
            <Redirect from={currentPath} to={`${lastPath}${redirect}`} exact={exact} key={route.path} strict={strict} />
          );
        }
        return (
          <Route
            key={currentPath}
            path={currentPath}
            exact={exact}
            strict={strict}
            render={() => {
              const renderChildrenRoute = renderRoutes(children, currentPath);
              return (
                <Suspense fallback={<LoadingPage />}>
                  <PageWrapper title={title}>
                    <Component route={{ ...route, path: currentPath }}>{renderChildrenRoute}</Component>
                  </PageWrapper>
                </Suspense>
              );
            }}
          />
        );
      })}
    </Switch>
  );
};

const AppRouter = () => {
  const WrapRouter = mapperRouterType[router] || BrowserRouter;
  return <WrapRouter>{renderRoutes(routes, '')}</WrapRouter>;
};

export default AppRouter;
