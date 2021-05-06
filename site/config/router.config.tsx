import React from 'react';
import type { RouteProps } from 'react-router-dom';
import markDown from '../../_data/markdown.json';
import Component from '../pages/Components';

export interface RouteItem {
  path: string;
  name?: string;
  icon?: React.ReactNode;
  redirect?: string;
  component?: string;
  routes?: Array<RouteItem>;
  hideInMenu?: boolean;
  hideChildrenInMenu?: boolean;
  render?: RouteProps['render'];
  type?: string;
}

export default function getRouteList() {
  const componentRouteList = getComponentRouteList(markDown);
  const menuList: Array<RouteItem> = [
    {
      path: '/',
      redirect: '/Home',
    },
    {
      path:'/Home',
      name: '首页',
      component:'Home/Home',
    },
    {
      path: '/Component',
      name: '组件',
      routes: componentRouteList,
    },
  ];
  return menuList;
}

function getComponentRouteList(markDown) {
  console.log(markDown, 999)
  const compopnentRouteList = [];
  markDown?.children?.forEach(({ folder, file, children }) => {
    if (file.length <= 0) return;
    const { md } = file[0];
    const { meta } = md;
    compopnentRouteList.push({
      path: `/Component/${meta.title}`,
      name: `${meta.subtitle} ${meta.title}`,
      type: meta.type,
      render: (routeProps) => (
        <Component {...routeProps} article={md} demos={children[0].file} />
      ),
    });
  })
  return compopnentRouteList;
}
