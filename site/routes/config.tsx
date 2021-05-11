import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routeList from 'site/config/router.config';
import type { RouteItem } from 'site/config/router.config';
export { menuList } from 'site/config/router.config';

type RouteTransform = (list: RouteItem[], path?: string) => Promise<any[]>;

const routeTransform: RouteTransform = async (list) => {
  let routerList: JSX.Element[] = [];
  for (let i = 0; i < list.length; i++) {
    const route = list[i];
    if (route.redirect) {
      routerList.push(
        <Redirect exact from={route.path} to={route.redirect} key={route.path} />,
      );
      continue;
    }
    if (route.component) {
      const { default: Component } = await import('site/pages/' + route.component);
      let children = null;
      let exact = true;
      if (route.routes) {
        exact = false;
        children = await routeTransform(route.routes);
      }
      routerList.push(
        <Route
          exact={exact}
          sensitive
          component={() =>
            <Component>
              <Switch>
                {children}
              </Switch>
            </Component>
          }
          path={route.path}
          key={route.path}
        />,
      );
      continue;
    }
    if (route.render) {
      routerList.push(
        <Route
          exact
          sensitive
          render={route.render}
          path={route.path}
          key={route.path}
        />,
      );
      continue;
    }
    if (route.routes) {
      routerList = routerList.concat(await routeTransform(route.routes));
      continue;
    }
  }
  return routerList;
};

export default async () => {
  const children = await routeTransform(routeList);
  return children;
};
