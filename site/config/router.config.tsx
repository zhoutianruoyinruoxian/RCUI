import React from 'react';
import type { RouteProps } from 'react-router-dom';
import * as componentList from '../../components';
import Component from '../pages/Component';
import markdown from '../utils/markdown';

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
}


export default async function getRouteList() {
  const componentRouteList = await getComponentRouteList(componentList);
  const menuList: Array<RouteItem> = [
    {
      path: '/',
      redirect: '/Home',
    },
    {
      path: '/Component',
      name: '组件',
      routes: componentRouteList,
    },
  ];
  return menuList;
}



async function getComponentRouteList(all) {
  const componentList = Object.keys(all);
  // console.log(componentList, 22)
  const compopnentRouteList = [];
  for (let i = 0; i < componentList.length; i++) {

    const mdPath = `components/${componentList[i]}/index.zh-CN.md`;
    const { default: file } = await import(`../../${mdPath}`);
    const md = markdown(file, mdPath);
    console.log(md, 999)

    compopnentRouteList.push({
      path: `/Component/${md.title}`,
      name: `${md.subtitle} ${md.title}`,
      render: (routeProps) => (
        <Component {...routeProps} markdown={md.content} />
      ),
    });
  }
  return compopnentRouteList;
}
