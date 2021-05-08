import React from 'react';
import type { RouteProps } from 'react-router-dom';
import markDown from '../../_data/markdown.json';
import Component from '../pages/Component';

export interface RouteItem {
  path: string;
  name?: string;
  icon?: React.ReactNode;
  redirect?: string;
  component?: string;
  routes?: RouteItem[] | ComponentRouteItem[];
  hideInMenu?: boolean;
  hideChildrenInMenu?: boolean;
  render?: RouteProps['render'];
}

export interface ComponentRouteItem {
  path: string;
  order?: number;
  name?: string;
  redirect?: string;
  type?: string;
  render?: RouteProps['render'];
}

function getComponentRouteList(markDown) {
  // console.log(markDown, 999);
  const compopnentRouteList: ComponentRouteItem[] = [];
  markDown?.forEach(({ file, children }, index) => {
    const { md } = file[0];
    const { meta } = md;
    if (index === 0) {
      compopnentRouteList.push({
        path: '/Component',
        redirect: `/Component/${meta.title}`,
      });
    }
    compopnentRouteList.push({
      path: `/Component/${meta.title}`,
      name: `${meta.subtitle} ${meta.title}`,
      type: meta.type,
      order: meta.order,
      render: (routeProps) => (
        <Component {...routeProps} article={md} demos={children[0].file} />
      ),
    });
  });
  return compopnentRouteList;
}

const componentRouteList = getComponentRouteList(markDown);
const routeList: Array<RouteItem> = [
  {
    path: '/',
    redirect: '/Home',
  },
  {
    path: '/Home',
    component: 'Home/Home',
  },
  {
    path: '/Component',
    name: '组件',
    component: 'ComponentPage',
    routes: componentRouteList,
  },
];


export function getMenuList(list: RouteItem[]) {
  const menuList = [];
  list.forEach(item => {
    const { name, hideInMenu, redirect } = item;
    const newItem = { ...item };
    if (!name || hideInMenu || redirect) return;
    if (item.routes) {
      newItem.routes = getMenuList(item.routes);
    }
    menuList.push(newItem);
  });
  return menuList;
}

export const menuList = getMenuList(routeList);
// console.log(routeList,888)
export default routeList;
